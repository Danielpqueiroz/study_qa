import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

// Definindo o endereço base como uma constante
const BASE_URL = 'http://localhost:3000';

// Métricas personalizadas
export let CreateUserDuration = new Trend('create_user_duration');
export let LoginUserDuration = new Trend('login_user_duration');
export let GetProductDuration = new Trend('get_product_duration');
export let CreateProductDuration = new Trend('create_product_duration');

export let CreateUserFailRate = new Rate('create_user_fail_rate');
export let LoginUserFailRate = new Rate('login_user_fail_rate');
export let GetProductFailRate = new Rate('get_product_fail_rate');
export let CreateProductFailRate = new Rate('create_product_fail_rate');

export let CreateUserReqs = new Counter('create_user_reqs');
export let LoginUserReqs = new Counter('login_user_reqs');
export let GetProductReqs = new Counter('get_product_reqs');
export let CreateProductReqs = new Counter('create_product_reqs');

// Função para gerar o resumo dos testes
export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
    };
}

// Opções de configuração do teste
export const options = {
  stages: [
    { duration: '5s', target: 40 }, // Ramp-up to 40 users over 2 minutes
    { duration: '20s', target: 40 }, // Sustain 40 users for 5 minutes
    { duration: '5s', target: 0 },  // Ramp-down to 0 users over 2 minutes
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.05']
  }
};

// Função para criar um usuário
function createUser() {
    const payload = JSON.stringify({
        username: `testuser_${Math.random().toString(36).substr(2, 9)}`,
        password: 'Password123'
    });
    const headers = { 'Content-Type': 'application/json' };
    let response = http.post(`${BASE_URL}/users`, payload, { headers });

    CreateUserDuration.add(response.timings.duration);
    CreateUserReqs.add(1);
    CreateUserFailRate.add(response.status !== 201);
    
    check(response, { 'User created successfully': (r) => r.status === 201 });
    return response.json('id');
}

// Função para logar com um usuário
function loginUser(username, password) {
    const payload = JSON.stringify({ username, password });
    const headers = { 'Content-Type': 'application/json' };
    let response = http.post(`${BASE_URL}/login`, payload, { headers });

    LoginUserDuration.add(response.timings.duration);
    LoginUserReqs.add(1);
    LoginUserFailRate.add(response.status !== 200);
    
    check(response, { 'User logged in successfully': (r) => r.status === 200 });
    return response.json('token');
}

// Função para buscar um produto
function getProduct(token) {
    const headers = { 'Authorization': `Bearer ${token}` };
    let response = http.get(`${BASE_URL}/products/1`, { headers });

    GetProductDuration.add(response.timings.duration);
    GetProductReqs.add(1);
    GetProductFailRate.add(response.status !== 200);
    
    check(response, { 'Product fetched successfully': (r) => r.status === 200 });
    return response.json();
}

// Função para criar um produto
function createProduct(token) {
    const payload = JSON.stringify({
        name: `Product_${Math.random().toString(36).substr(2, 9)}`,
        price: 19.99,
        description: 'A sample product'
    });
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    let response = http.post(`${BASE_URL}/products`, payload, { headers });

    CreateProductDuration.add(response.timings.duration);
    CreateProductReqs.add(1);
    CreateProductFailRate.add(response.status !== 201);
    
    check(response, { 'Product created successfully': (r) => r.status === 201 });
    return response.json('id');
}

// Função principal do teste
export default function() {
    // Criar um usuário
    const userId = createUser();
    const username = `testuser_${userId}`;
    const password = 'Password123';

    // Login com o usuário criado
    const token = loginUser(username, password);

    // Buscar um produto
    getProduct(token);

    // Criar um produto
    createProduct(token);

    sleep(1); // Pausa de 1 segundo para simular comportamento real de usuário
}
