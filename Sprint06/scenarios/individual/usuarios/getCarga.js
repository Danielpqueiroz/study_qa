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
const getUserTrend = new Trend('get_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        get_user_duration: ['p(95)<2000'], // 95% das requisições de GET devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Variável global para armazenar IDs dos usuários criados


export default function (data) {
    // Recuperação de usuários
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    
        let res = http.get(`${BASE_URL}/usuarios`, params);
        check(res, { 'user retrieved successfully': (r) => r.status === 200 });
        getUserTrend.add(res.timings.duration);

        if (res.status !== 200) {
            console.error(`Erro na recuperação do usuário: ${res.status} ${res.body}`);
        }
    
}

