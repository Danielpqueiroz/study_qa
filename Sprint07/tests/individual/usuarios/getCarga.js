import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';

export const options = testConfig.options.carga;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default () => {
    
    const updateRes = baseRest.get(ENDPOINTS.USER_ENDPOINT);
        baseChecks.checkStatusCode(updateRes, 200);
        baseChecks.checkResponseSize(updateRes, 5000); 
        baseChecks.checkResponseTime(updateRes, 2000);

        sleep(1);
};


