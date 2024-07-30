import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginUserTrend = new Trend('login_user_duration');
const createProductTrend = new Trend('create_product_duration');
const updateProductTrend = new Trend('update_product_duration');
const deleteProductTrend = new Trend('delete_product_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        create_product_duration: ['p(95)<2000'], // 95% das requisições de POST devem ser menores que 2s
        update_product_duration: ['p(95)<2000'], // 95% das requisições de PUT devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar o token do usuário administrador
let userToken = '';

// Variável global para armazenar IDs dos produtos criados
let productIds = [];

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

            // Criação de 10 produtos
            for (let i = 0; i < 10; i++) {
                const productName = `Produto_${Math.random().toString(36).substr(2, 9)}`;
                const preco = Math.floor(Math.random() * 1000) + 1; // Gera números entre 1 e 1000
                const payload = JSON.stringify({
                    nome: productName,
                    preco: preco,
                    descricao: "Descrição do produto",
                    quantidade: Math.floor(Math.random() * 1000)
                });

                let productRes = http.post(`${BASE_URL}/produtos`, payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${userToken}`,
                    },
                });

                check(productRes, { 'product created successfully': (r) => r.status === 201 });
                createProductTrend.add(productRes.timings.duration);

                if (productRes.status === 201) {
                    productIds.push(productRes.json()._id); // Armazena o ID do produto criado
                    console.log(`Produto criado com ID: ${productRes.json()._id}`);
                } else {
                    console.error(`Erro na criação do produto: ${productRes.status} ${productRes.body}`);
                }
            }
        } else {
            console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
        }
    } else {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
    }
    return { userToken, productIds }; // Retorna o token do usuário criado e os IDs dos produtos
}

export default function (data) {
    // Atualização de produtos
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        const updatedPayload = JSON.stringify({
            nome: `Produto_Atualizado_${Math.random().toString(36).substr(2, 9)}`,
            preco: Math.floor(Math.random() * 1000) + 1, // Gera números entre 1 e 1000
            descricao: "Descrição do produto atualizada",
            quantidade: Math.floor(Math.random() * 1000) + 1 // Atualiza a quantidade
        });

        let updateRes = http.put(`${BASE_URL}/produtos/${productId}`, updatedPayload, params);
        check(updateRes, { 'product updated successfully': (r) => r.status === 200 });
        updateProductTrend.add(updateRes.timings.duration);

        if (updateRes.status !== 200) {
            console.error(`Erro na atualização do produto: ${updateRes.status} ${updateRes.body}`);
        }
    }

    sleep(1); // Aguarde 1 segundo antes de continuar
}

export function teardown(data) {
    // Deleção de produtos após o teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        let res = http.del(`${BASE_URL}/produtos/${productId}`, null, params);
        check(res, { 'product deleted successfully': (r) => r.status === 200 });
        deleteProductTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na deleção do produto: ${res.status} ${res.body}`);
        }
    }
}
