import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
    };
}

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const loginTrend = new Trend('login_duration');
const getProductTrend = new Trend('get_product_duration');
const createProductTrend = new Trend('create_product_duration');

// Opções do teste
export let options = {
    stages: [
        { duration: '15s', target: 40 },
        { duration: '3m', target: 500 },
        { duration: '15s', target: 40 },
    ],
    thresholds: {
        create_user_duration: ['p(95)<2000'],
        login_duration: ['p(95)<2000'],
        get_product_duration: ['p(95)<2000'],
        create_product_duration: ['p(95)<2000'],
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Função principal do teste
export default function () {
    const headers = { 'Content-Type': 'application/json' };

    // Criação de usuário
    const email = `user_${Math.random().toString(36).substr(2, 9)}@qa.com.br`;
    const userPayload = JSON.stringify({
        nome: 'Test User',
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let createUserRes = http.post(`${BASE_URL}/usuarios`, userPayload, { headers });
    createUserTrend.add(createUserRes.timings.duration);

    if (check(createUserRes, { 'user created successfully': (r) => r.status === 201 })) {
        // Login
        const loginPayload = JSON.stringify({
            email: email,
            password: 'teste',
        });

        let loginRes = http.post(`${BASE_URL}/login`, loginPayload, { headers });
        loginTrend.add(loginRes.timings.duration);

        if (check(loginRes, {
            'is status 200': (r) => r.status === 200,
            'is token present': (r) => r.json('authorization') !== '',
        })) {
            const authToken = loginRes.json('authorization');

            // Buscar produtos
            let productRes = http.get(`${BASE_URL}/produtos`, {
                headers: {
                    'Authorization': `${authToken}`,
                },
            });
            getProductTrend.add(productRes.timings.duration);

            if (check(productRes, { 'is status 200': (r) => r.status === 200 })) {
                // Criar produto
                const productPayload = JSON.stringify({
                    nome: `Produto_${Math.random().toString(36).substr(2, 9)}`,
                    preco: Math.floor(Math.random() * 1000) + 1,
                    descricao: 'Descrição do produto',
                    quantidade: Math.floor(Math.random() * 1000)
                });

                let createProductRes = http.post(`${BASE_URL}/produtos`, productPayload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${authToken}`,
                    },
                });
                createProductTrend.add(createProductRes.timings.duration);

                if (check(createProductRes, { 'is status 201': (r) => r.status === 201 })) {
                    // Aguarde 1 segundo antes de continuar para evitar sobrecarga
                    sleep(1);

                    // Deletar usuário criado
                    const userId = createUserRes.json()._id;
                    let deleteUserRes = http.del(`${BASE_URL}/usuarios/${userId}`, null, {
                        headers: {
                            'Authorization': `${authToken}`,
                        },
                    });

                    check(deleteUserRes, { 'user deleted successfully': (r) => r.status === 200 });

                    if (deleteUserRes.status !== 200) {
                        console.error(`Erro na deleção do usuário: ${deleteUserRes.status} ${deleteUserRes.body}`);
                    }
                } else {
                    console.error(`Erro na criação do produto: ${createProductRes.status} ${createProductRes.body}`);
                }
            } else {
                console.error(`Erro na busca de produtos: ${productRes.status} ${productRes.body}`);
            }
        } else {
            console.error(`Erro no login: ${loginRes.status} ${loginRes.body}`);
        }
    } else {
        console.error(`Erro na criação do usuário: ${createUserRes.status} ${createUserRes.body}`);
    }
}

// Função de teardown (opcional)
export function teardown(data) {
    // No teardown não há necessidade de ação, pois o usuário já foi deletado na função default
}
