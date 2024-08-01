import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryDelete.html": htmlReport(data),
  };
}

// Métricas para deleção de usuários
const deleteUserTrend = new Trend('delete_user_duration');
const deleteUserFailRate = new Rate('delete_user_fail_rate');
const deleteUserSuccessRate = new Rate('delete_user_success_rate');
const deleteUserReqs = new Counter('delete_user_reqs');

const BASE_URL = 'http://localhost:3000';
let userIds = [];


export let options = {
    setupTimeout: '600s',
    stages: [
      { duration: '2s', target: 40 }, // 400 users over 1 minute
      { duration: '3m', target: 450 },
      { duration: '2s', target: 40 },
    ],
    thresholds: {
        delete_user_duration: ['p(95)<2000'], // 95% das requisições de deleção devem ser menores que 2s
        delete_user_fail_rate: ['rate<0.05'], // Taxa de falhas na deleção deve ser < 5%
        delete_user_success_rate: ['rate>0.95'], // Taxa de sucesso na deleção deve ser > 95%
    
    },
};



export function setup() {
    // Criação de usuários antes do teste
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
            userIds.push(res.json()._id); // Armazena o ID do usuário criado na variável global
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { userIds }; // Retorna os IDs dos usuários criados
}

export default function (data) {
    // Deleção de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (const userId of data.userIds) {
        let res = http.del(`${BASE_URL}/usuarios/${userId}`, null, params);
        deleteUserTrend.add(res.timings.duration);
        deleteUserReqs.add(1);
        deleteUserFailRate.add(res.status !== 200);
        deleteUserSuccessRate.add(res.status === 200);
        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        

        if (res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${res.status} ${res.body}`);
        }
    }
}


