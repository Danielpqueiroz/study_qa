import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
export const options = testConfig.options.carga;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function setup() {
    const createdUsers = [];
    for (let i = 0; i < 10; i++) { // Criar 10 usuários
        const payload = fakerUserData();
        console.log(payload)
        const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
        baseChecks.checkStatusCode(res, 201);
        createdUsers.push({ id: res.json()._id });
    }
    return { createdUsers: createdUsers };
}

export default (data) => {
    const payload = fakerUserData();
    data.createdUsers.forEach(user => {
        
        const updatePayload = fakerUserData();
        const updateRes = baseRest.put(ENDPOINTS.USER_ENDPOINT + `/${user.id}`, updatePayload);
        baseChecks.checkStatusCode(updateRes, 200);

        sleep(1);
    });
};

export function teardown(data) {
    data.createdUsers.forEach(user => {
        const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${user.id}`);
        baseChecks.checkStatusCode(res, 200);
        console.log(`Teardown deleting user with ID ${user.id}`);
    });
}
