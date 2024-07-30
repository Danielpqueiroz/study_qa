import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { group, check, sleep, fail } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const BASE_URL = 'http://localhost:3000';

export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
    };
}

export const options = {
    stages: [
        { duration: '2s', target: 40 }, // Ramp-up to 40 users over 2 seconds
        { duration: '20s', target: 400 }, // Sustain 400 users for 20 seconds
        { duration: '2s', target: 40 }, // Ramp-down to 40 users over 2 seconds
    ],
    // thresholds: {
    //     http_req_duration: ['p(95)<200'], // 95% das requisições devem ser completadas em menos de 200ms
    //     http_req_failed: ['rate<0.05'] // Menos de 5% das requisições devem falhar
    // }
};

export let CreateUserDuration = new Trend('create_user_duration');
export let CreateUserFailRate = new Rate('create_user_fail_rate');
export let CreateUserSuccessRate = new Rate('create_user_success_rate');
export let CreateUserReqs = new Counter('create_user_reqs');

let createdUserIds = [];

export default function() {
    group('CREATE USER - Flow', () => {
        let userId = createUser();
        if (userId) {
            createdUserIds.push(userId);
        }
    });
    sleep(1); // Pausa de 1 segundo para simular comportamento real de usuário
}

export function createUser() {
    const uniqueId = Math.random().toString(36).substr(2, 9);
    const payload = JSON.stringify({
        nome: `Fulano da Silva ${uniqueId}`,
        email: `beltrano_${uniqueId}@qa.com.br`,
        password: 'teste',
        administrador: 'true'
    });

    const headers = { 'Content-Type': 'application/json' };
    let response = http.post(`${BASE_URL}/usuarios`, payload, { headers });

    CreateUserDuration.add(response.timings.duration);
    CreateUserReqs.add(1);
    CreateUserFailRate.add(response.status !== 201);
    CreateUserSuccessRate.add(response.status === 201);

    let success = check(response, {
        'User created successfully': (r) => r.status === 201,
        'Response time < 1s': (r) => r.timings.duration < 2000,
    });

    if (!success) {
        console.error(`Failed to create user: ${response.status} ${response.body}`);
        fail(`Request failed with status ${response.status}`);
    }

    sleep(1);

    return success ? response.json('id') : null;
}

export function teardown() {
    createdUserIds.forEach((userId) => {
        deleteUser(userId);
    });
}

export function deleteUser(userId) {
    let response = http.del(`${BASE_URL}/usuarios/${userId}`);

    let success = check(response, {
        'User deleted successfully': (r) => r.status === 200,
    });

    if (!success) {
        console.error(`Failed to delete user ${userId}: ${response.status} ${response.body}`);
        fail(`Request failed with status ${response.status}`);
    }
}
