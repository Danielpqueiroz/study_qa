import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check, fail } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const BASE_URL = 'http://localhost:3000'

export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
    };
}

export const options = {
  stages: [
    { duration: '2s', target: 40 }, // 400 users over 1 minute
    { duration: '20s', target: 400 },
    { duration: '2s', target: 40 },
  ],
  
};

export let CreateUserDuration = new Trend('create_user_duration');
export let CreateUserFailRate = new Rate('create_user_fail_rate');
export let CreateUserSuccessRate = new Rate('create_user_success_rate');
export let CreateUserReqs = new Counter('create_user_reqs');

export default function() {
    const payload = JSON.stringify({
        nome: `Fulano da Silva`,
        email: `beltrano_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
        password: 'teste',
        administrador: 'true'
    });
    const headers = { 'Content-Type': 'application/json' };
    let response = http.post(`${BASE_URL}/usuarios`, payload, { headers });
    
    CreateUserDuration.add(response.timings.duration);
    CreateUserReqs.add(1);
    CreateUserFailRate.add(response.status !== 201);
    CreateUserSuccessRate.add(response.status === 201);
    
    let durationMsg = `Máximo de duração da minha requisição ${5000/1000}s`;
    if (check(response, {
        'máximo de duração': (r) => r.timings.duration < 5000,
    })){
        
    }else{
        fail(durationMsg);
    }

    sleep(1);

    check(response, { 'User created successfully': (r) => r.status === 201 });
    return response.json('id');

}

