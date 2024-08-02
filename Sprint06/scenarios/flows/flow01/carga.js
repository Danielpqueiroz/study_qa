import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryCarga.html": htmlReport(data),
  };
}


// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginTrend = new Trend('login_duration');
const getProductTrend = new Trend('get_product_duration');
const createProductTrend = new Trend('create_product_duration');

// Opções do teste
export let options = {
    
    Timeout: '600s',
    stages: [
        { duration: '15s', target: 0 }, // 400 users over 1 minute
        { duration: '2m', target: 250 },
        
      ],
    thresholds: {
        create_user_duration: ['p(95)<5000'], // 95% das requisições de criação de usuário devem ser menores que 2s
        login_duration: ['p(95)<5000'], // 95% das requisições de login devem ser menores que 2s
        get_product_duration: ['p(95)<5000'], // 95% das requisições de buscar produtos devem ser menores que 2s
        create_product_duration: ['p(95)<5000'], // 95% das requisições de criação de produto devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Função principal do teste
export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Criação de usuário
    const email = `user_${Math.random().toString(36)}@qa.com.br`;
    const userPayload = JSON.stringify({
        nome: 'Test User',
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let createUserRes = http.post(`${BASE_URL}/usuarios`, userPayload, params);
    check(createUserRes, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(createUserRes.timings.duration);

    // Login
    const loginPayload = JSON.stringify({
        email: email,
        password: 'teste',
    });

    let loginRes = http.post(`${BASE_URL}/login`, loginPayload, params);
    check(loginRes, {
        'is status 200': (r) => r.status === 200,
        'is token present': (r) => r.json('authorization') !== '',
    });
    loginTrend.add(loginRes.timings.duration);

    const authToken = loginRes.json('authorization');

    // Criar produto
    const parametro = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${authToken}`,
        },
    };
    const productPayload = JSON.stringify({
        nome: `Produto_${Math.random().toString(36)}`,
        preco: Math.floor(Math.random() * 1000) + 1, // Gera números entre 1 e 1000
        descricao: 'Descrição do produto',
        quantidade: Math.floor(Math.random() * 1000)
    });

    let createProductRes = http.post(`${BASE_URL}/produtos`, productPayload, parametro);
    check(createProductRes, { 'is status 201': (r) => r.status === 201 });
    createProductTrend.add(createProductRes.timings.duration);

    

    
}


