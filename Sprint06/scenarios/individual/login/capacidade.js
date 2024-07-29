import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginUserTrend = new Trend('login_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        login_user_duration: ['p(95)<2000'], // 95% das requisições de login devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar usuários criados
let users = [];

export function setup() {
    // Criação de usuários antes do teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (let i = 0; i < 10; i++) {
        const email = `beltrano_${i}_${Math.random().toString(36).substr(2, 9)}@qa.com.br`;
        const payload = JSON.stringify({
            nome: `Fulano da Silva ${i}`,
            email: email,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.post(`${BASE_URL}/usuarios`, payload, params);
        check(res, { 'user created successfully': (r) => r.status === 201 });
        createUserTrend.add(res.timings.duration);

        if (res.status === 201) {
            users.push({ id: res.json()._id, email: email, password: 'teste' }); // Armazena o usuário criado
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { users }; // Retorna os usuários criados
}

export default function (data) {
    // Login de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (const user of data.users) {
        const payload = JSON.stringify({
            email: user.email,
            password: user.password
        });

        let res = http.post(`${BASE_URL}/login`, payload, params);
        check(res, { 'user logged in successfully': (r) => r.status === 200 });
        loginUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro no login do usuário: ${res.status} ${res.body}`);
        }
    }
}

export function teardown(data) {
    // Deleção de usuários após o teste
    for (const user of data.users) {
        const res = http.del(`${BASE_URL}/usuarios/${user.id}`);
        if (!res || res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${user.id} ${res.status} ${res.body}`);
            continue;
        }

        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        deleteUserTrend.add(res.timings.duration);
    }
}
