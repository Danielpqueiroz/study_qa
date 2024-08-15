import { sleep } from 'k6';
import exec from 'k6/execution';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData, fakerProductData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryCarga.html": htmlReport(data),
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
    const tokenSetup = urlRes.json().authorization;
    console.log(urlRes.json().authorization);

    const productPayload = fakerProductData();
    const productRes = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { 'Authorization': `${tokenSetup}` });
    baseChecks.checkStatusCode(productRes, 201);
    const productId = productRes.json()._id ;
    
    return { userId, tokenSetup, productId };
}


export default function (data) {

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

    const productRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT + `/${data.productId}`, { 'Authorization': token });
    baseChecks.checkStatusCode(productRes, 200);
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

}

export function teardown(data) {

    const getProductRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
    baseChecks.checkStatusCode(getProductRes, 200);

    const products = getProductRes.json().produtos;
    products.forEach(product => {
        const productId = product._id;
        const res = baseRest.del(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 'Authorization': ` ${data.tokenSetup}` });
        baseChecks.checkStatusCode(res, 200);
        console.log(`Teardown deleting product with ID ${productId}`);
    });
    
    const getUsersRes = baseRest.get(ENDPOINTS.USER_ENDPOINT,);
    baseChecks.checkStatusCode(getUsersRes, 200);

    const users = getUsersRes.json().usuarios;
    users.forEach(user => {
        const userId = user._id;
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${userId}`);
        baseChecks.checkStatusCode(res, 200);
        
    });

}
