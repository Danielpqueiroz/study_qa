import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 20 }, // 20 usuários em 30s
        { duration: '1m', target: 20 },  // mantém 20 usuários por 1m
        { duration: '30s', target: 0 },  // reduz para 0 usuários em 30s
    ],
};

const BASE_URL = 'http://localhost:3000';

export default function () {
    // Listar usuários
    let res = http.get(`${BASE_URL}/usuarios`);
    check(res, {
        'GET /usuarios status was 200': (r) => r.status === 200,
        'GET /usuarios response time < 200ms': (r) => r.timings.duration < 200,
    });

    // Cadastrar um novo usuário
    let payload = JSON.stringify({
        nome: `Usuário ${Math.floor(Math.random() * 1000)}`,
        email: `email${Math.floor(Math.random() * 1000)}@test.com`,
        password: 'senha123',
        administrador: 'true'
    });

    let headers = { 'Content-Type': 'application/json' };
    res = http.post(`${BASE_URL}/usuarios`, payload, { headers: headers });
    check(res, {
        'POST /usuarios status was 201': (r) => r.status === 201,
        'POST /usuarios response time < 200ms': (r) => r.timings.duration < 200,
    });

    let userId = JSON.parse(res.body)._id;

    // Atualizar o usuário
    payload = JSON.stringify({
        nome: `Usuário Atualizado ${Math.floor(Math.random() * 1000)}`,
        email: `email${Math.floor(Math.random() * 1000)}@test.com`,
        password: 'senha123',
        administrador: 'true'
    });

    res = http.put(`${BASE_URL}/usuarios/${userId}`, payload, { headers: headers });
    check(res, {
        'PUT /usuarios/:id status was 200': (r) => r.status === 200,
        'PUT /usuarios/:id response time < 200ms': (r) => r.timings.duration < 200,
    });

    // Deletar o usuário
    res = http.del(`${BASE_URL}/usuarios/${userId}`, null, { headers: headers });
    check(res, {
        'DELETE /usuarios/:id status was 200': (r) => r.status === 200,
        'DELETE /usuarios/:id response time < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1); // pausa de 1 segundo entre as requisições
}
