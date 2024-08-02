import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
    return {
        "summaryDelete.html": htmlReport(data),
    };
}

// Métricas customizadas
const deleteProductTrend = new Trend('delete_product_duration');
const deleteProductFailRate = new Rate('delete_product_fail_rate');
const deleteProductSuccessRate = new Rate('delete_product_success_rate');
const deleteProductReqs = new Counter('delete_product_reqs');

// Opções do teste
export let options = {
    setupTimeout: '600s',
    stages: [
        { duration: '2s', target: 40 }, // 400 users over 1 minute
        { duration: '3m', target: 450 },
        { duration: '2s', target: 40 },
      ],
    thresholds: {
        delete_product_duration: ['p(95)<2000'], // 95% das requisições de deleção devem ser menores que 2s
        delete_product_fail_rate: ['rate<0.05'], // Taxa de falhas na deleção deve ser < 5%
        delete_product_success_rate: ['rate>0.95'], // Taxa de sucesso na deleção deve ser > 95%
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';

// Função de configuração para criar um usuário administrador, fazer login e criar produtos
export function setup() {
    // Criação de usuário administrador antes do teste
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const email = `admin_${Math.random().toString(36).substr(2, 9)}@qa.com.br`;
    const userPayload = JSON.stringify({
        nome: `Administrador`,
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let res = http.post(`${BASE_URL}/usuarios`, userPayload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });

    if (res.status === 201) {
        let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
        check(loginRes, { 'user logged in successfully': (r) => r.status === 200 });

        if (loginRes.status === 200) {
            const userToken = loginRes.json().authorization; // Armazena o token do usuário
            console.log(`Usuário logado com token: ${userToken}`);

            // Criação de múltiplos produtos
            const productIds = [];
            for (let i = 0; i < 10000; i++) {
                const productName = `Produto_${Math.random().toString(36).substr(2, 9)}`;
                const productPayload = JSON.stringify({
                    nome: productName,
                    preco: Math.floor(Math.random() * 1000) + 1,
                    descricao: "Descrição do produto",
                    quantidade: Math.floor(Math.random() * 1000)
                });

                let productRes = http.post(`${BASE_URL}/produtos`, productPayload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${userToken}`,
                    },
                });

                check(productRes, { 'product created successfully': (r) => r.status === 201 });

                if (productRes.status === 201) {
                    const productId = productRes.json()._id;
                    productIds.push(productId);
                    console.log(`Produto criado com ID: ${productId}`);
                } else {
                    console.error(`Erro na criação do produto: ${productRes.status} ${productRes.body}`);
                }
            }

            return { userToken, productIds }; // Retorna o token do usuário e os IDs dos produtos criados
        } else {
            console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
            return null;
        }
    } else {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        return null;
    }
}

// Função principal para deletar os produtos criados
export default function (data) {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        let delRes = http.del(`${BASE_URL}/produtos/${productId}`, null, params);
        deleteProductTrend.add(delRes.timings.duration);
        deleteProductReqs.add(1);
        deleteProductFailRate.add(delRes.status !== 200);
        deleteProductSuccessRate.add(delRes.status === 200);

        if (delRes.status !== 200) {
            console.error(`Erro na deleção do produto: ${delRes.status} ${delRes.body}`);
        } else {
            check(delRes, { 'product deleted successfully': (r) => r.status === 200,});
        }
    }

    sleep(1); // Aguarde 1 segundo antes de continuar
}
