import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryGetId.html": htmlReport(data),
  };
}



const getUserTrend = new Trend('get_user_duration');
const getUserFailRate = new Rate('get_user_fail_rate');
const getUserSuccessRate = new Rate('get_user_success_rate');
const getUserReqs = new Counter('get_user_reqs');




export let options = {
    setupTimeout: '600s',
    stages: [
        { duration: '15s', target: 40 }, 
        { duration: '3m', target: 600 },
        { duration: '15s', target: 40 },
    ],
    thresholds: {
        get_user_duration: ['p(95)<2000'], 
        get_user_fail_rate: ['rate<0.05'], 
        get_user_success_rate: ['rate>0.95'], 
    
    },
};


const BASE_URL = 'http://localhost:3000';

let userIds = [];

export function setup() {
    // Criação de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (let i = 0; i < 4000; i++) {
        const payload = JSON.stringify({
            nome: `Fulano da Silva ${i}`,
            email: `beltrano_${i}_${Math.random().toString(36)}@qa.com.br`,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.post(`${BASE_URL}/usuarios`, payload, params);
        check(res, { 'user created successfully': (r) => r.status === 201 });
        

        if (res.status === 201) {
            userIds.push(res.json()._id); 
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { userIds }; 
}

export default function (data) {
    // Busca de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (const userId of data.userIds) {
        let res = http.get(`${BASE_URL}/usuarios/${userId}`, params);
        getUserTrend.add(res.timings.duration);
        getUserReqs.add(1);
        getUserFailRate.add(res.status !== 200);
        getUserSuccessRate.add(res.status === 200);
        check(res, { 'user retrieved successfully': (r) => r.status === 200 });
        

        if (res.status !== 200) {
            console.error(`Erro na recuperação do usuário: ${res.status} ${res.body}`);
        }
    }
}

export function teardown(data) {
    // Deleção de usuários
    for (const userId of data.userIds) {
        const res = http.del(`${BASE_URL}/usuarios/${userId}`);
        if (!res || res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${userId} ${res.status} ${res.body}`);
            continue;
        }

        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        
    }
}
