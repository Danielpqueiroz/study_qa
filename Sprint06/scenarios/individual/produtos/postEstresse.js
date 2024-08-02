import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryPost.html": htmlReport(data),
  };
}



const createProductTrend = new Trend('create_product_duration');
const createProductFailRate = new Rate('create_product_fail_rate');
const createProductSuccessRate = new Rate('create_product_success_rate');
const createProductReqs = new Counter('create_product_reqs');


export let options = {
    stages: [
        { duration: '15s', target: 40 }, 
        { duration: '3m', target: 400 },
        { duration: '15s', target: 40 },
      ],
    thresholds: {
        create_product_duration: ['p(95)<2000'], 
        create_product_fail_rate: ['rate<0.05'], 
        create_product_success_rate: ['rate>0.95'], 
        
    },
};


const BASE_URL = 'http://localhost:3000';

let userToken = '';

let productIds = [];

export function setup() {
    // Criação de usuário
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const email = `admin_${Math.random().toString(36)}@qa.com.br`;
    const payload = JSON.stringify({
        nome: `Administrador`,
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });
    

    if (res.status === 201) {
        let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
        check(loginRes, { 'user logged in successfully': (r) => r.status === 200 });
        

        if (loginRes.status === 200) {
            userToken = loginRes.json().authorization; 
            console.log(`Usuário logado com token: ${userToken}`);
        } else {
            console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
        }
    } else {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
    }
    return { userToken }; 
}

export default function (data) {
    
    // Criação de produtos
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    const productName = `Produto_${Math.random().toString(36)}`;
    const payload = JSON.stringify({
        nome: productName,
        preco: Math.floor(Math.random() * 1000) + 1,
        descricao: "Descrição do produto",
        quantidade: Math.floor(Math.random() * 1000) + 1
    });

    let res = http.post(`${BASE_URL}/produtos`, payload, params);
    createProductTrend.add(res.timings.duration);
    createProductReqs.add(1);
    createProductFailRate.add(res.status !== 201);
    createProductSuccessRate.add(res.status === 201);
    check(res, { 'product created successfully': (r) => r.status === 201 });
    createProductTrend.add(res.timings.duration);

    if (res.status === 201) {
        productIds.push(res.json()._id);
        
    } else {
        console.error(`Erro na criação do produto: ${res.status} ${res.body}`);
    }
    sleep(2);
}

export function teardown(data) {
    // Deleção de produtos
    const params = {
        headers: {'Content-Type': 'application/json',
                 'Authorization': `${data.userToken}`,},
    };

    const res = http.get(`${BASE_URL}/produtos`, params);
    
    for (let i = 0; i < res.json().produtos.length; i++) {
        const produtos = res.json().produtos[i];

        const resDelete = http.del(`${BASE_URL}/produtos/${produtos._id}`, {}, params);
        console.log(`Produto ${produtos._id} excluído: ${resDelete.json().message}`);
    }

    
}
