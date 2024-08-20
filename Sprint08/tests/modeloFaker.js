import {  sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../support/base/baseTest.js'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


export const options = testConfig.options.smoke;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
    const jsonData = JSON.parse(open('../data/dynamic/users.json'));
    //console.log(jsonData.users)
    return jsonData.users;
});

// const payload = {
//     nome: 'Fulano da Silva',
//     email: 'fulano1222332443@qa.com',
//     password: 'teste',
//     administrador: 'true'
// }


export function setup() {
    let responseData = [];

    data.forEach(user => {
        console.log('criando usuário', user)
        const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, user)
        baseChecks.checkStatusCode(res, 201)

        responseData.push(res.json())
    })

        return { responseData }
}


export default () => {

    let user = randomItem(data);
  
    const payload = {
        email: user.email,
        password: user.password
    }
    console.log('login com usuário', payload)

    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, payload);
    console.log(urlRes.body);
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResponseSize(urlRes, 5000); 
    baseChecks.checkResponseTime(urlRes, 2000);

    sleep(1);
  
};

export function teardown(responseData) {
    console.log(responseData.responseData)

    const ids = responseData.responseData.map(item => item._id)

    ids.forEach(id => {
        console.log( `Teardown deletando o usuário com ID ${id}`)
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${id}`)
        baseChecks.checkStatusCode(res, 200)
        
    })

}
    // const userId = responseData.responseData._id
    // const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + '/${userId}')

    // baseChecks.checkStatusCode(res, 200)
    
    // console.log( 'Teardown deleatndo o usuário com ID ${userId}')
