import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginUserTrend = new Trend('login_user_duration');
const createProductTrend = new Trend('create_product_duration');
const deleteProductTrend = new Trend('delete_product_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        create_product_duration: ['p(95)<2000'], // 95% das requisições de POST devem ser menores que 2s
        delete_product_duration: ['p(95)<2000'], // 95% das requisições de DELETE devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar o token do usuário administrador
let userToken = '';

export function setup() {
    // Criação de usuário administrador antes do teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const email = `admin_${Math.random().toString(36).substr(2, 9)}@qa.com.br`;
    const payload = JSON.stringify({
        nome: `Administrador`,
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(res.timings.duration);

    if (res.status === 201) {
        let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
        check(loginRes, { 'user logged in successfully': (r) => r.status === 200 });
        loginUserTrend.add(loginRes.timings.duration);

        if (loginRes.status === 200) {
            userToken = loginRes.json().authorization; // Armazena o token do usuário
            console.log(`Usuário logado com token: ${userToken}`);
        } else {
            console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
        }
    } else {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
    }
    return { userToken }; // Retorna o token do usuário criado
}

export default function (data) {
    console.log(`Token de autenticação: ${data.userToken}`);
    // Criação e deleção de produto
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    const productName = `Produto_${Math.random().toString(36)}`;
    //const preco = ; // Gera números entre 1 e 1000
    const payload = JSON.stringify({
        nome: productName,
        preco: Math.floor(Math.random() * 1000) + 1,
        descricao: "Descrição do produto",
        quantidade: Math.floor(Math.random() * 1000)
    });

    let res = http.post(`${BASE_URL}/produtos`, payload, params);
    if (res.status !== 201) {
        console.error(`Erro na criação do produto: ${res.status} ${res.body}`);
    } else {
        check(res, { 'product created successfully': (r) => r.status === 201 });
        createProductTrend.add(res.timings.duration);
        const productId = res.json()._id;
        console.log(`Produto criado com ID: ${productId}`);

        // Deleção do produto criado
        let delRes = http.del(`${BASE_URL}/produtos/${productId}`, null, params);
        if (delRes.status !== 200) {
            console.error(`Erro na deleção do produto: ${delRes.status} ${delRes.body}`);
        } else {
            check(delRes, { 'product deleted successfully': (r) => r.status === 200 });
            deleteProductTrend.add(delRes.timings.duration);
        }
    }

    sleep(1); // Aguarde 1 segundo antes de continuar
}

export function teardown(data) {
    // Verificação de produtos após o teste (para garantir que todos foram deletados)
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        let res = http.get(`${BASE_URL}/produtos/${productId}`, params);
        check(res, { 'product should not exist': (r) => r.status === 404 });

        if (res.status !== 404) {
            console.error(`Produto com ID ${productId} ainda existe: ${res.status} ${res.body}`);
        }
    }
}
