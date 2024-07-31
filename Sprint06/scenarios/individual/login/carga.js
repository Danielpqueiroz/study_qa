import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryDelete.html": htmlReport(data),
  };
}


// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginTrend = new Trend('login_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    stages: [
        { duration: '1s', target: 50 }, // subindo para 50 usuários em 1 minuto
        { duration: '20s', target: 50 }, // mantendo 50 usuários por 3 minutos
        { duration: '1s', target: 0 }, // diminuindo para 0 usuários em 1 minuto
    ],
    thresholds: {
        login_duration: ['p(95)<2000'], // 95% das requisições de login devem ser menores que 2s
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
    for (let i = 0; i < 10; i++) {
        const email = `user_${Math.random().toString(36).substr(2, 9)}@qa.com.br`;
        const payload = JSON.stringify({
            nome: `User_${i}`,
            email: email,
            password: 'teste',
            administrador: 'true'
        });

        let res = http.post(`${BASE_URL}/usuarios`, payload, params);
        check(res, { 'user created successfully': (r) => r.status === 201 });
        createUserTrend.add(res.timings.duration);

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

// Função principal do teste
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
        deleteUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${res.status} ${res.body}`);
        }
    });
}
