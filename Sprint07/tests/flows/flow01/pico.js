import { sleep } from 'k6';
import exec from 'k6/execution';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.pico;

export function handleSummary(data) {
    return {
        "summaryPico.html": htmlReport(data),
    };
}


export default function () {

    const userPayload = fakerUserData();
    const userRes = baseRest.post(ENDPOINTS.USER_ENDPOINT, userPayload);
    baseChecks.checkStatusCode(userRes, 201);
    baseChecks.checkResponseNotEmpty(userRes);
    baseChecks.checkResponseSize(userRes, 5000); 
    baseChecks.checkResponseTime(userRes, 2000);
    const user = userRes.json()._id;
    console.log('Usuário Criado: ' + userRes.json().message)

    const loginRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, { email: userPayload.email, password: userPayload.password });
    baseChecks.checkStatusCode(loginRes, 200);
    baseChecks.checkResponseNotEmpty(loginRes);
    baseChecks.checkResponseSize(loginRes, 5000); 
    baseChecks.checkResponseTime(loginRes, 2000);
    const token = loginRes.json().authorization;
    console.log('Usuário Logado: ' + loginRes.json().message)

    const productPayload = fakerProductData();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': token });
    baseChecks.checkStatusCode(productRes, 201);
    baseChecks.checkResponseNotEmpty(productRes);
    baseChecks.checkResponseSize(productRes, 5000); 
    baseChecks.checkResponseTime(productRes, 2000);
    const productId = productRes.json()._id ;
    console.log('Produto Criado: ' + productRes.json().message)

    const cartRes = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, {produtos: [ {idProduto: productId, quantidade: Math.floor(Math.random() * 10) + 1}  ]},  { 'Authorization': token });
    baseChecks.checkStatusCode(cartRes, 201);
    baseChecks.checkResponseNotEmpty(cartRes);
    baseChecks.checkResponseSize(cartRes, 5000); 
    baseChecks.checkResponseTime(cartRes, 2000);
    console.log('Carrinho Criado: ' + cartRes.json())

    console.log(token)

    const cartDelRes = baseRest.del(ENDPOINTS.CARTS_ENDPOINT + '/concluir-compra', { 'Authorization':  token });
    baseChecks.checkStatusCode(cartDelRes, 200);
    baseChecks.checkResponseNotEmpty(cartDelRes);
    baseChecks.checkResponseSize(cartDelRes, 5000); 
    baseChecks.checkResponseTime(cartDelRes, 2000);
    console.log('Carrinho apagado' + cartDelRes.json())

    const productDelRes = baseRest.del(ENDPOINTS.PRODUCTS_ENDPOINT + `/${productId}`, { 'Authorization':  token  });
    baseChecks.checkStatusCode(productDelRes, 200);
    baseChecks.checkResponseNotEmpty(productDelRes);
    baseChecks.checkResponseSize(productDelRes, 5000); 
    baseChecks.checkResponseTime(productDelRes, 2000);
    console.log('Produto apagado: ' + productDelRes.json().message)

    const userDelRes = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${user}`);
    baseChecks.checkStatusCode(userDelRes, 200);
    baseChecks.checkResponseNotEmpty(userDelRes);
    baseChecks.checkResponseSize(userDelRes, 5000); 
    baseChecks.checkResponseTime(userDelRes, 2000);
    console.log('Usuário apagado: ' + userDelRes.json().message)

    sleep(1);
}


