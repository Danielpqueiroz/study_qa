import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest } from '../service/baseRest.js';
import { BaseChecks } from '../support/base/baseChecks.js';
//import { userData } from '../data/dynamic/user';

export const options = {
  vus: 3, 
  duration: '10s', 
};

const base_uri = "http://localhost:3000"
const baseRest = new BaseRest(base_uri)

const data = new SharedArray('some name', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    //console.log(jsonData.users)
    return jsonData.users;
});

const payload = {
    nome: 'Fulano da Silva',
    email: 'fulano12232443@qa.com',
    password: 'teste',
    administrador: 'true'
}

export function setup() {
    const res = baseRest.post('/usuarios', payload)
    console.log(res.json())
    check(res, {
        'status should be 201': (r) => r.status == 201
    })
    return { responseData : res.json() }
}


export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
 
console.log(user);

  const urlRes = baseRest.post('/login', user);

  check(urlRes, {
    'status should be 200': (r) => r.status == 200,
  });

  sleep(1);
  
};

export function teardown(responseData) {
    const userId = responseData.responseData._id
    const res = baseRest.del('/usuarios/', userId)
    check(res, {
        'status should be 200': (r) => r.status === 200,
    })
    console.log( 'Teardown deleatndo o usuário com ID ${userId}')
}