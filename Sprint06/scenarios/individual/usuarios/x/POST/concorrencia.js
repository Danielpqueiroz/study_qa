import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        create_user_duration: ['p(95)<2000'], // 95% das requisições de criação devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// 1. init code
export function setup() {
    const payload = JSON.stringify({
        nome: `Fulano da Silva`,
        email: `beltrano_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
        password: 'teste',
        administrador: 'true'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    if (!res || res.status !== 201) {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        return null;
    }

    check(res, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(res.timings.duration);

    return { userId: res.json()._id }; // Retorna o ID do usuário criado
}

export default function (data) {
    // 3. VU code
    const payload = JSON.stringify({
        nome: `Fulano da Silva`,
        email: `beltrano_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
        password: 'teste',
        administrador: 'true'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(res.timings.duration);
}

export function teardown(data) {
    // 4. teardown code
    const res = http.del(`${BASE_URL}/usuarios/${data.userId}`);
    if (!res || res.status !== 200) {
        console.error(`Erro na deleção do usuário: ${res.status} ${res.body}`);
        return;
    }

    check(res, { 'user deleted successfully': (r) => r.status === 200 });
    deleteUserTrend.add(res.timings.duration);
}
