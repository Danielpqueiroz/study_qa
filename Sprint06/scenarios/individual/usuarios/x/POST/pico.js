import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';

// Métricas customizadas
const createUserTrend = new Trend('create_user_duration');
const deleteUserTrend = new Trend('delete_user_duration');

// Opções do teste
export let options = {
    vus: 10, // número de usuários virtuais
    duration: '20s', // duração do teste
    thresholds: {
        create_user_duration: ['p(95)<2000'], // 95% das requisições de criação devem ser menores que 2s
    },
};

// URL da API
const BASE_URL = 'http://localhost:3000';


export function setup() {
    let userId = [];
    return {userId};
}


export default function (data) {
    // 3. VU code
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const payload = JSON.stringify({
        nome: `Fulano da Silva`,
        email: `beltrano_${Math.random().toString(36).substr(2, 9)}@qa.com.br`,
        password: 'teste',
        administrador: 'true'
    });

    let res = http.post(`${BASE_URL}/usuarios`, payload, params);
    check(res, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(res.timings.duration);
    if (!res || res.status !== 201) {
        console.error(`Erro na criação do usuário: ${res.status} ${res.body}`);
        return null;
    }

    check(res, { 'user created successfully': (r) => r.status === 201 });
    createUserTrend.add(res.timings.duration);
    
    data.userId.push(res.json()._id); // Retorna o ID do usuário criado
    //console.log(userId[3]);
    
}


export function teardown(data) {
    console.log(data.userId);
    for(const i of data.userId){
        console.log(data.userId[i]);
    }
    // 4. teardown code
    for (const userIds of data.userId) {
        console.log(userIds);
        const res = http.del(`${BASE_URL}/usuarios/${userIds}`);
        if (!res || res.status !== 200) {
            console.error(`Erro na deleção do usuário: ${data.userId} ${res.status} ${res.body}`);
            continue;
        }

        check(res, { 'user deleted successfully': (r) => r.status === 200 });
        deleteUserTrend.add(res.timings.duration);
        console.log(`Usuário deletado com ID: ${data.userId}`);
    }

 }
