import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  return {
      "summaryPut.html": htmlReport(data),
  };
}


// Métricas customizadas
const updateProductTrend = new Trend('update_product_duration');
const updateProductFailRate = new Rate('update_product_fail_rate');
const updateProductSuccessRate = new Rate('update_product_success_rate');
const updateProductReqs = new Counter('update_product_reqs');

// Opções do teste
export let options = {
    Timeout: '600s',
    stages: [
        { duration: '5s', target: 40 }, 
        { duration: '20s', target: 500 },
        { duration: '5s', target: 40 },
        
      ],
    thresholds: {
        update_product_duration: ['p(95)<2000'], 
        update_product_fail_rate: ['rate<0.05'],  
        update_product_success_rate: ['rate>0.95'], 
    },
};


const BASE_URL = 'http://localhost:3000';

let userToken = '';

let productIds = [];

export function setup() {
    // Criação de usuário 
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const email = `admin_${Math.random().toString(36)}@qa.com.br`;
    const payload = JSON.stringify({
        nome: `Administrador`,
        email: email,
        password: 'teste',
        administrador: 'true'
    });

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });
    

    if (res.status === 201) {
        let loginRes = http.post(`${BASE_URL}/login`, JSON.stringify({ email: email, password: 'teste' }), params);
        check(loginRes, { 'user logged in successfully': (r) => r.status === 200 });
        

        if (loginRes.status === 200) {
            userToken = loginRes.json().authorization; 
            console.log(`Usuário logado com token: ${userToken}`);

            
            for (let i = 0; i < 30; i++) {
                const productName = `Produto_${Math.random().toString(36)}`;
                const preco = Math.floor(Math.random() * 1000) + 1;
                const payload = JSON.stringify({
                    nome: productName,
                    preco: preco,
                    descricao: "Descrição do produto",
                    quantidade: Math.floor(Math.random() * 1000)
                });

                let productRes = http.post(`${BASE_URL}/produtos`, payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${userToken}`,
                    },
                });

                check(productRes, { 'product created successfully': (r) => r.status === 201 });
                

                if (productRes.status === 201) {
                    productIds.push(productRes.json()._id); 
                    console.log(`Produto criado com ID: ${productRes.json()._id}`);
                } else {
                    console.error(`Erro na criação do produto: ${productRes.status} ${productRes.body}`);
                }
            }
        } else {
            console.error(`Erro no login do usuário: ${loginRes.status} ${loginRes.body}`);
        }
    } else {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
    }
    return { userToken, productIds }; 
}

export default function (data) {
    // Atualização de produtos
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        const updatedPayload = JSON.stringify({
            nome: `Produto_Atualizado_${Math.random().toString(36)}`,
            preco: Math.floor(Math.random() * 1000) + 1, 
            descricao: "Descrição do produto atualizada",
            quantidade: Math.floor(Math.random() * 1000) + 1 
        });

        let updateRes = http.put(`${BASE_URL}/produtos/${productId}`, updatedPayload, params);
        updateProductTrend.add(updateRes.timings.duration);
        updateProductReqs.add(1);
        updateProductFailRate.add(updateRes.status !== 200);
        updateProductSuccessRate.add(updateRes.status === 200);
        check(updateRes, { 'product updated successfully': (r) => r.status === 200 });
        

        if (updateRes.status !== 200) {
            console.error(`Erro na atualização do produto: ${updateRes.status} ${updateRes.body}`);
        }
    }

    sleep(1); 
}

export function teardown(data) {
    // Deleção de produtos a
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${data.userToken}`,
        },
    };

    for (const productId of data.productIds) {
        let res = http.del(`${BASE_URL}/produtos/${productId}`, null, params);
        check(res, { 'product deleted successfully': (r) => r.status === 200 });
        

        if (res.status !== 200) {
            console.error(`Erro na deleção do produto: ${res.status} ${res.body}`);
        }
    }
}
