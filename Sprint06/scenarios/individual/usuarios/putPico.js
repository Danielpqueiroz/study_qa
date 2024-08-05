import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryPut.html": htmlReport(data),
  };
}



const updateUserTrend = new Trend('update_user_duration');
const updateUserFailRate = new Rate('update_user_fail_rate');
const updateUserSuccessRate = new Rate('update_user_success_rate');
const updateUserReqs = new Counter('update_user_reqs');

export let options = {
  stages: [
    { duration: '5s', target: 40 }, 
    { duration: '20s', target: 500 },
    { duration: '5s', target: 40 },
    { duration: '5s', target: 500 },
  ],
    thresholds: {
        update_user_duration: ['p(95)<2000'], 
        update_user_fail_rate: ['rate<0.05'], 
        update_user_success_rate: ['rate>0.95'], 
    
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

    for (let i = 0; i < 10; i++) {
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
    // Atualização de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (const userId of data.userIds) {
        const payload = JSON.stringify({
            nome: `Fulano da Silva Atualizado`,
            email: `atualizado_${Math.random().toString(36)}@qa.com.br`,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.put(`${BASE_URL}/usuarios/${userId}`, payload, params);
        updateUserTrend.add(res.timings.duration);
        updateUserReqs.add(1);
        updateUserFailRate.add(res.status !== 200);
        updateUserSuccessRate.add(res.status === 200);
        check(res, { 'user updated successfully': (r) => r.status === 200 });
        updateUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na atualização do usuário: ${res.status} ${res.body}`);
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
