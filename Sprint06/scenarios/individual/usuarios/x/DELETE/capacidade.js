import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        delete_user_duration: ['p(95)<2000'], // 95% das requisições de deleção devem ser menores que 2s
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

export function teardown(data) {
    // Verificação para garantir que todos os usuários foram deletados
    for (const userId of data.userIds) {
        const res = http.get(`${BASE_URL}/usuarios/${userId}`);
        check(res, { 'user should not exist': (r) => r.status === 404 });
        if (res.status !== 404) {
            console.error(`Usuário com ID ${userId} ainda existe: ${res.status} ${res.body}`);
        }
    }
}
