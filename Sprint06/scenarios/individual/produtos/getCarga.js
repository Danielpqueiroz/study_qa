import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryGet.html": htmlReport(data),
  };
}


// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginUserTrend = new Trend('login_user_duration');
const getProductTrend = new Trend('get_product_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        get_product_duration: ['p(95)<2000'], // 95% das requisições de GET devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar usuários criados e tokens
let users = [];

export function setup() {
    // Criação de usuários antes do teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    for (let i = 0; i < 10; i++) {
        const email = `beltrano_${i}_${Math.random().toString(36)}@qa.com.br`;
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
            let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
            check(loginRes, { 'user logged in successfully': (r) => r.status === 200 });
            loginUserTrend.add(loginRes.timings.duration);

            if (loginRes.status === 200) {
                users.push({ id: res.json()._id, token: loginRes.json().authorization }); // Armazena o usuário e token
            } else {
                console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
            }
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { users }; // Retorna os usuários criados e tokens
}

export default function (data) {
    // Busca de produtos
    for (const user of data.users) {
        const params = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
        };

        let res = http.get(`${BASE_URL}/produtos`, params);
        check(res, { 'products retrieved successfully': (r) => r.status === 200 });
        getProductTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na busca de produtos: ${res.status} ${res.body}`);
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
