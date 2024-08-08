import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryPost.html": htmlReport(data),
    };
}

export function setup() {
    let users = [];
    let tokens = [];
    
    for (let i = 0; i < 5; i++) {
        const userPayload = fakerUserData();
        const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
        baseChecks.checkStatusCode(userRes, 201);
        users.push = (userRes.json()._id);
        //console.log(`User created with ID: ${users}`);
        
        const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, { email: userPayload.email, password: userPayload.password });
        baseChecks.checkStatusCode(loginRes, 200);
        const token = loginRes.json().authorization;
        //console.log({ "authorization": loginRes.json().authorization});

        tokens.push(loginRes.json().authorization);
    }
    console.log(tokens[4])
    const productPayload = fakerProductData();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': `${tokens[0]}` });
    baseChecks.checkStatusCode(productRes, 201);
    const productId = productRes.json()._id ;
    console.log(tokens);

    return { users, productId , tokens};
}

export default function (data) {
    console.log(tokens)
    data.tokens.forEach(token => {
        const urlRes = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, {produtos: [ {idProduto: data.productId, quantidade: Math.floor(Math.random() * 10) + 1}  ]},  { 'Authorization': `${token}` });
        baseChecks.checkStatusCode(urlRes, 201);
        baseChecks.checkResponseSize(urlRes, 5000); 
        baseChecks.checkResponseTime(urlRes, 2000);
        
        sleep(1);
    });
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

    
    const urlRes = baseRest.del(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 'Authorization': ` ${data.token}` });
    baseChecks.checkStatusCode(urlRes, 200);
    console.log(`Teardown deleting product with ID ${productId}`);

    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deleting user with ID ${data.userId}`);

    
}
