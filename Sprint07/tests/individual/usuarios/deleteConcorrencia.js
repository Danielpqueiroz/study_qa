import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryDel.html": htmlReport(data),
    };
}

export function setup() {
    const createdUsers = [];
    for (let i = 0; i < 500; i++) { // Criar 10 usuários
        const payload = fakerUserData();
        console.log(payload)
        const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
        baseChecks.checkStatusCode(res, 201);
        createdUsers.push({ id: res.json()._id });
    }
    return { createdUsers: createdUsers };
}

export default (data) => {
    
    data.createdUsers.forEach(user => {
        
        const urlRes = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${user.id}`);
        baseChecks.checkStatusCode(urlRes, 200);
        baseChecks.checkResponseSize(urlRes, 5000); 
        baseChecks.checkResponseTime(urlRes, 2000);

        sleep(1);
    });
};


