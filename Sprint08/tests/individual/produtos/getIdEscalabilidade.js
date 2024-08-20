import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.escalabilidade;

export function handleSummary(data) {
    return {
        "summaryGetId.html": htmlReport(data),
    };
}

export function setup() {
    
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

    const productPayload = fakerProductData();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': `${token}` });
    baseChecks.checkStatusCode(productRes, 201);
    const productId = productRes.json()._id ;
    

    return { userId, token, productId };
}

export default (data) => {
    
    const urlRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT + `/${data.productId}`, { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResponseNotEmpty(urlRes);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);

};

export function teardown(data) {
    
    const urlRes = baseRest.del(ENDPOINTS.PRODUCTS_ENDPOINT + `/${data.productId}`, { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(urlRes, 200);
    console.log(`Teardown deleting user with ID ${data.productId}`);
    
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deleting user with ID ${data.userId}`);
    
    

}
