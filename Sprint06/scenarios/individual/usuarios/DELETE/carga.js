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
  thresholds: {
    http_req_duration: ['p(95)<200'],
    
  }
};

export let GetUserDuration = new Trend('get_User_duration');
export let GetUserFailRate = new Rate('get_User_fail_rate');
export let GetUserSuccessRate = new Rate('get_User_success_rate');
export let GetUserReqs = new Counter('get_User_reqs');

export default function() {
    let response = http.get('${BASE_URL}/usuarios');

    GetUserDuration.add(response.timings.duration);
    GetUserReqs.add(1);
    GetUserFailRate.add(response.status == 0 || response.status > 399);
    GetUserSuccessRate.add(response.status <= 399);
    
    
    let durationMsg = `Máximo de duração da minha requisição ${5000/1000}s`;
    if (check(response, {
        'máximo de duração': (r) => r.timings.duration < 1000,
    })){
        
    }else{
        fail(durationMsg);
    }

    sleep(1);
}