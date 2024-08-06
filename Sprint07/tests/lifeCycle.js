import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
//import { userData } from '../data/dynamic/user';

export const options = {
  vus: 3, 
  duration: '10s', 
};

const data = new SharedArray('some name', function () {
    const jsonData = JSON.parse(open('../data/static/user.json'));
    //console.log(jsonData.users)
    return jsonData.users;
});

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
 // let userDy = userData();
console.log(user);

  const urlRes = http.post('http://localhost:3000/login', user);

  check(urlRes, {
    'response code was 200': (r) => r.status == 200,
  });

  sleep(1);
  
};