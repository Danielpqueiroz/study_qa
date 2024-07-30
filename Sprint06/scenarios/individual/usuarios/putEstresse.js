import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryPut.html": htmlReport(data),
  };
}


// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const updateUserTrend = new Trend('update_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
  stages: [
    { duration: '2s', target: 40 }, // 400 users over 1 minute
    { duration: '20s', target: 400 },
    { duration: '2s', target: 40 },
  ],
    thresholds: {
        update_user_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01']
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar IDs dos usuários criados
let userIds = [];

export function setup() {
    // Criação de usuários antes do teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (let i = 0; i < 10; i++) {
        const payload = JSON.stringify({
            nome: `Fulano da Silva ${i}`,
            email: `beltrano_${i}_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
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
    // Atualização de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (const userId of data.userIds) {
        const payload = JSON.stringify({
            nome: `Fulano da Silva Atualizado`,
            email: `atualizado_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.put(`${BASE_URL}/usuarios/${userId}`, payload, params);
        check(res, { 'user updated successfully': (r) => r.status === 200 });
        updateUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na atualização do usuário: ${res.status} ${res.body}`);
        }
    }
}

export function teardown(data) {
    // Deleção de usuários após o teste
    for (const userId of data.userIds) {
        const res = http.del(`${BASE_URL}/usuarios/${userId}`);
        if (!res || res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${userId} ${res.status} ${res.body}`);
            continue;
        }

        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        deleteUserTrend.add(res.timings.duration);
    }
}
