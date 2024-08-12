import {  sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
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

    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    
    baseChecks.checkStatusCode(res, 201)

    return { responseData : res.json(), user: payload }
}


export default (data) => {
 
  const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: data.user.email, password: data.user.password});
  //console.log(urlRes.body);
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