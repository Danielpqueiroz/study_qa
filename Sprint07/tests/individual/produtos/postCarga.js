import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
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

    return { userId, token };
}

export default function (data) {
    const payload = fakerProductData();
    
    const urlRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, payload,  { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(urlRes, 201);
    baseChecks.checkResponseNotEmpty(urlRes);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);
    
}

export function teardown(data) {
    const getProductRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
    baseChecks.checkStatusCode(getProductRes, 200);

    const products = getProductRes.json().produtos;
    products.forEach(product => {
        const productId = product._id;
        const res = baseRest.del(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 'Authorization': ` ${data.token}` });
        baseChecks.checkStatusCode(res, 200);
        console.log(`Teardown deleting product with ID ${productId}`);
    });

    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deleting user with ID ${data.userId}`);

    
}
