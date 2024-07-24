import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep } from 'k6';
import { check, fail } from 'k6';

export let GetCustomerDuration = new Trend('get_customer_duration');
export let GetCustomerFailRate = new Rate('get_customer_fail_rate');
export let GetCustomerSuccessRate = new Rate('get_customer_success_rate');
export let GetCustomerReqs = new Counter('get_customer_reqs');

export default function() {
    let response = http.get('http://localhost:3000/usuarios');

    GetCustomerDuration.add(response.timings.duration);
    GetCustomerFailRate.add(response.status == 0 || response.status > 399);
    GetCustomerSuccessRate.add(response.status <= 399);
    GetCustomerReqs.add(1);
    
    let durationMsg = `Máximo de duração da minha requisição ${5000/1000}s`;
    if (check(response, {
        'máximo de duração': (r) => r.timings.duration < 5000,
        
        
    })){
        fail(durationMsg);
    }

    sleep(1);
}
