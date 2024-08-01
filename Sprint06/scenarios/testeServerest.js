import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
    return {
        "summaryPost.html": htmlReport(data),
    };
}

// Métricas customizadas para o login
export const loginTrend = new Trend('login_duration');
export const loginFailRate = new Rate('login_fail_rate');
export const loginSuccessRate = new Rate('login_success_rate');
export const loginReqs = new Counter('login_reqs');

// Opções do teste
export const options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        login_duration: ['p(95)<2000'], // 95% das requisições de login devem ser menores que 2s
        login_fail_rate: ['rate<0.05'], // Taxa de falhas de login deve ser < 5%
        login_success_rate: ['rate>0.95'], // Taxa de sucesso de login deve ser > 95%
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar o token do usuário administrador
let userToken = '';

// Função de configuração para criar um usuário administrador e fazer login
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
    if (res.status === 201) {
        let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
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

// Função principal para criar produtos e logins
export default function (data) {
    // Teste de login
    const loginParams = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const loginPayload = JSON.stringify({
        email: `admin_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
        password: 'teste',
    });

    let loginRes = http.post(`${BASE_URL}/login`, loginPayload, loginParams);
    loginTrend.add(loginRes.timings.duration);
    loginReqs.add(1);
    loginFailRate.add(loginRes.status !== 200);
    loginSuccessRate.add(loginRes.status === 200);

    check(loginRes, {
        'login bem-sucedido': (r) => r.status === 200,
    });

    if (loginRes.status !== 200) {
        console.error(`Erro no login: ${loginRes.status} ${loginRes.body}`);
    }

    // Criação de produtos
    const productParams = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.userToken}`,
        },
    };

    const productName = `Produto_${Math.random().toString(36).substr(2, 9)}`;
    const productPayload = JSON.stringify({
        nome: productName,
        preco: Math.floor(Math.random() * 1000) + 1,
        descricao: "Descrição do produto",
        quantidade: Math.floor(Math.random() * 1000)
    });

    let productRes = http.post(`${BASE_URL}/produtos`, productPayload, productParams);
    check(productRes, {
        'product created successfully': (r) => r.status === 201,
    });

    if (productRes.status !== 201) {
        console.error(`Erro na criação do produto: ${productRes.status} ${productRes.body}`);
    }

    sleep(1);
}

// Função de limpeza para deletar os produtos criados após o teste
export function teardown(data) {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.userToken}`,
        },
    };

    const res = http.get(`${BASE_URL}/produtos`, params);

    for (let i = 0; i < res.json().produtos.length; i++) {
        const produto = res.json().produtos[i];

        const resDelete = http.del(`${BASE_URL}/produtos/${produto._id}`, {}, params);
        console.log(`Produto ${produto._id} excluído: ${resDelete.json().message}`);
    }
}
