import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryGet.html": htmlReport(data),
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
    
    const cartRes = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, {produtos: [ {idProduto: productId, quantidade: Math.floor(Math.random() * 10) + 1}  ]}, { 'Authorization': `${token}` });
    baseChecks.checkStatusCode(cartRes, 201);
    const carrinhoId = cartRes.json()._id ;

    return { userId, token, productId, carrinhoId };
}

export default (data) => {
    
    const updateRes = baseRest.get(ENDPOINTS.CARTS_ENDPOINT,{ 'Authorization': `${data.token}` });
        baseChecks.checkStatusCode(updateRes, 200);
        baseChecks.checkResponseNotEmpty(updateRes);
        baseChecks.checkResponseSize(updateRes, 5000); 
        baseChecks.checkResponseTime(updateRes, 2000);

};

export function teardown(data) {

    const cartRes = baseRest.del(ENDPOINTS.CARTS_ENDPOINT + `/concluir-compra/`, { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(cartRes, 200);
    console.log(`Teardown deleting user with ID ${data.carrinhoId}`);
    
    const urlRes = baseRest.del(ENDPOINTS.PRODUCTS_ENDPOINT + `/${data.productId}`, { 'Authorization': `${data.token}` });
    baseChecks.checkStatusCode(urlRes, 200);
    console.log(`Teardown deleting user with ID ${data.productId}`);
    
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deleting user with ID ${data.userId}`);
    
}
