import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryEscalabilidade.html": htmlReport(data),
  };
}


// Métricas customizadas

export const loginTrend = new Trend('login_duration');
export const loginFailRate = new Rate('login_fail_rate');
export const loginSuccessRate = new Rate('login_success_rate');
export const loginReqs = new Counter('login_reqs');

// Opções do teste
export let options = {
    setupTimeout: '600s',
    stages: [
        { duration: '15s', target: 40 }, // 400 users over 1 minute
        { duration: '3m', target: 600 },
        { duration: '15s', target: 40 },
    ],
    thresholds: {
        login_duration: ['p(95)<2000'], // 95% das requisições de login devem ser menores que 2s
        login_fail_rate: ['rate<0.05'], // Taxa de falhas de login deve ser < 5%
        login_success_rate: ['rate>0.95'], // Taxa de sucesso de login deve ser > 95%
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Função de setup
export function setup() {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let users = [];
    for (let i = 0; i < 4000; i++) {
        const email = `user_${Math.random().toString(36)}@qa.com.br`;
        const payload = JSON.stringify({
            nome: `User_${i}`,
            email: email,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.post(`${BASE_URL}/usuarios`, payload, params);
        check(res, { 'user created successfully': (r) => r.status === 201 });
        

        if (res.status === 201) {
            users.push({
                id: res.json()._id,
                email: email,
                password: 'teste'
            });
            console.log(`Usuário criado com email: ${email}`);
        } else {
            console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        }
    }
    return { users };
}


export default function (data) {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    data.users.forEach(user => {
        const payload = JSON.stringify({
            email: user.email,
            password: user.password,
        });

        const res = http.post(`${BASE_URL}/login`, payload, params);
        loginTrend.add(res.timings.duration);
        loginReqs.add(1);
        loginFailRate.add(res.status !== 200);
        loginSuccessRate.add(res.status === 200);

        check(res, {
            'is status 200': (r) => r.status === 200,
            'is token present': (r) => r.json('authorization') !== '',
        });
        loginTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro no login do usuário: ${res.status} ${res.body}`);
        }
    });

    // Aguarde 1 segundo antes de continuar para evitar sobrecarga
    sleep(1);
}

// Função de teardown
export function teardown(data) {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    data.users.forEach(user => {
        let res = http.del(`${BASE_URL}/usuarios/${user.id}`, null, params);
        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        

        if (res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${res.status} ${res.body}`);
        }
    });
}
