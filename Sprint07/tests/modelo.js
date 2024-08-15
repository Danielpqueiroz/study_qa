import {  sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../support/base/baseTest.js'


export const options = testConfig.smokeThresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('some name', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
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
    const payload = fakerUserData();
    console.log(payload)
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    
    baseChecks.checkStatusCode(res, 201)

    return { responseData : res.json(), user: payload }
}


export default (data) => {
  // let userIndex = __ITER % data.length;
  // let user = data[userIndex];
  
 


  const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: data.user.email, password: data.user.password});
  console.log(urlRes.body);
  baseChecks.checkStatusCode(urlRes, 200);
  baseChecks.checkResponseSize(urlRes, 5000); 
  baseChecks.checkResponseTime(urlRes, 2000);

  sleep(1);
  
};

export function teardown(responseData) {
    const userId = responseData.responseData._id
    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + '/${userId}')

    baseChecks.checkStatusCode(res, 200)
    
    console.log( 'Teardown deleatndo o usuário com ID ${userId}')
}