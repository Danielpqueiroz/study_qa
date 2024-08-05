import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryGetId.html": htmlReport(data),
  };
}



const getProductTrend = new Trend('get_product_duration');
const getProductFailRate = new Rate('get_product_fail_rate');
const getProductSuccessRate = new Rate('get_product_success_rate');
const getProductReqs = new Counter('get_product_reqs');


export let options = {
    setupTimeout: '600s',
    stages: [
        { duration: '15s', target: 40 }, 
        { duration: '3m', target: 600 },
        { duration: '15s', target: 40 },
    ],
    thresholds: {
        get_product_duration: ['p(95)<2000'], 
        get_product_fail_rate: ['rate<0.05'], 
        get_product_success_rate: ['rate>0.95'], 
        
    },
};


const BASE_URL = 'http://localhost:3000';

let users = [];

export function setup() {
    // Criação de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (let i = 0; i < 4000; i++) {
        const email = `beltrano_${i}_${Math.random().toString(36)}@qa.com.br`;
        const payload = JSON.stringify({
            nome: `Fulano da Silva ${i}`,
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
                users.push({ id: res.json()._id, token: loginRes.json().authorization });
            } else {
                console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
            }
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { users };
}

export default function (data) {
    // Busca de produtos
    for (const user of data.users) {
        const params = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${user.token}`,
            },
        };

        let res = http.get(`${BASE_URL}/produtos`, params);
        getProductTrend.add(res.timings.duration);
        getProductReqs.add(1);
        getProductFailRate.add(res.status !== 200);
        getProductSuccessRate.add(res.status === 200);
        check(res, { 'products retrieved successfully': (r) => r.status === 200 });
        getProductTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na busca de produtos: ${res.status} ${res.body}`);
        }
    }
}

export function teardown(data) {
    // Deleção de usuários
    for (const user of data.users) {
        const res = http.del(`${BASE_URL}/usuarios/${user.id}`);
        if (!res || res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${user.id} ${res.status} ${res.body}`);
            continue;
        }

        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        
    }
}
