import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'is status 200': (r) => r.status === 200, // Verifica se o status code é 200
    'body size is 11,278 bytes': (r) => r.body.length == 11278, // Verifica o tamanho da resposta em bytes
  });
  console.log(res.body.length);
}
