import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryPostCarga.html": htmlReport(data),
    };
}

export default function (data) {
    const payload = fakerUserData();
    console.log(`Creating user with email: ${payload.email}`);

    const urlRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
    baseChecks.checkStatusCode(urlRes, 201);
    baseChecks.checkResponseNotEmpty(urlRes);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);
    
}

export function teardown() {
    const getUsersRes = baseRest.get(ENDPOINTS.USER_ENDPOINT,);
    baseChecks.checkStatusCode(getUsersRes, 200);

    const users = getUsersRes.json().usuarios;
    users.forEach(user => {
        const userId = user._id;
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`);
        baseChecks.checkStatusCode(res, 200);
        
    });

    
}
