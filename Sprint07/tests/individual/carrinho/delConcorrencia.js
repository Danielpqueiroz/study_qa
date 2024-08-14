import { sleep } from 'k6';
import exec from 'k6/execution';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.concorrencia;

export function handleSummary(data) {
    return {
        "summaryDelConclui.html": htmlReport(data),
    };
}

export function setup() {
    let users = [];
    let tokens = [];
    
    for (let i = 0; i < 15000; i++) {
        const userPayload = fakerUserData();
        const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
        baseChecks.checkStatusCode(userRes, 201);
        users.push(userRes.json()._id);
        //console.log(`User created with ID: ${users}`);
        
        const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, { email: userPayload.email, password: userPayload.password });
        baseChecks.checkStatusCode(loginRes, 200);
        const token = loginRes.json().authorization;
        

        tokens.push(loginRes.json().authorization);
    }
    
    const productPayload = fakerProductData();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': `${tokens[0]}` });
    baseChecks.checkStatusCode(productRes, 201);
    const productId = productRes.json()._id ;
    

    return { users, productId , tokens};
}

export default (data) => {
    
    let iteration = exec.scenario.iterationInTest;
    
    const res = baseRest.del(ENDPOINTS.CARTS_ENDPOINT + '/concluir-compra', { 'Authorization': `${data.tokens[iteration]}` });
    baseChecks.checkStatusCode(res, 200);
    baseChecks.checkResponseNotEmpty(res);
    baseChecks.checkResponseSize(res, 5000); 
    baseChecks.checkResponseTime(res, 2000);

};


export function teardown(data) {

    const urlRes = baseRest.del(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${data.productId}`, { 'Authorization': ` ${data.tokens[0]}` });
    baseChecks.checkStatusCode(urlRes, 200);
    //console.log(`Teardown deleting product with ID ${data.tokens[0]}`);
    
    for (let i = 0; i < data.users.length; i++)  {
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.users[i]}`);
        baseChecks.checkStatusCode(res, 200);
        console.log(`Teardown deleting user with ID ${data.users[i]}`);
    }
}