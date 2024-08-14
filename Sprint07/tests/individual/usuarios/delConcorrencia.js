import { sleep } from 'k6';
import exec from 'k6/execution';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.concorrencia;

export function handleSummary(data) {
    return {
        "summaryDel.html": htmlReport(data),
    };
}

export function setup() {
    const users = [];
    for (let i = 0; i < 60000; i++) { // Criar 10 usuários
        const payload = fakerUserData();
        console.log(payload)
        const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
        baseChecks.checkStatusCode(res, 201);
        users.push( res.json()._id );
    }
    return { users };
}

export default (data) => {

    let iteration = exec.scenario.iterationInTest;
    
    const urlRes = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.users[iteration]}`);
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResponseNotEmpty(urlRes);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);

};



