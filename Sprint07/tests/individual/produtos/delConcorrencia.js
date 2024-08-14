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
        "summaryDel.html": htmlReport(data),
    };
}

export function setup() {

    const createdProducts = [];

    const payload = fakerUserData();
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
    baseChecks.checkStatusCode(res, 201);
    const userId =  res.json()._id ;
    console.log(res.json()._id)
    
    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: payload.email, password: payload.password});
    console.log(urlRes.body);
    baseChecks.checkStatusCode(urlRes, 200);
    const token = urlRes.json().authorization;
    console.log(urlRes.json().authorization);

    
    for (let i = 0; i < 60000; i++) { 
        const payload = fakerProductData();
        console.log(payload)
        const res = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, payload, { 'Authorization': `${token}` });
        baseChecks.checkStatusCode(res, 201);
        createdProducts.push( res.json()._id );
    }
    return { createdProducts: createdProducts, token };
}

export default (data) => {

    let iteration = exec.scenario.iterationInTest;
    
    const urlRes = baseRest.del(ENDPOINTS.PRODUCTS_ENDPOINT + `/${data.createdProducts[iteration]}`, { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResponseNotEmpty(urlRes);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);

};


