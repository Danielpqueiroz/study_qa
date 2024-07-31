import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryDelete.html": htmlReport(data),
  };
}


const createUserTrend = new Trend('create_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

const BASE_URL = 'http://localhost:3000';
let userIds = [];


export let options = {
    stages: [
      { duration: '2s', target: 40 }, // 400 users over 1 minute
      { duration: '20s', target: 400 },
      { duration: '2s', target: 40 },
    ],
    thresholds: {
        delete_user_duration: ['p(95)<2000'], // 95% das requisições de deleção devem ser menores que 2s
        http_req_failed: ['rate<0.01'],
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
        createUserTrend.add(res.timings.duration);

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
        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        deleteUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${res.status} ${res.body}`);
        }
    }
}


