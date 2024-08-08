import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
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

export default () => {
    
    const updateRes = baseRest.get(ENDPOINTS.PRODUCTS_ENDPOINT);
        baseChecks.checkStatusCode(updateRes, 200);
        baseChecks.checkResponseSize(updateRes, 5000); 
        baseChecks.checkResponseTime(updateRes, 2000);

        sleep(1);
};


