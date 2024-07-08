// CONDICIONAIS

// if..else
// Se a hora estiver entre 06:00 até 12:00 : Bomdia!
// Se estiver entre 12:00 até 18 ; Boa tarde!
// Caso contrario : Boa noite!
// Criar um novo objeto Date
const agora = new Date();

// Obter as horas, minutos e segundos
const hora = agora.getHours(); // Horas (0-23)
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
}else if (hora > 12 && hora < 18) {
    console.log('Bom tarde!')
}else {
    console.log('Bom noite!')
}

// Switch case
let permissao; // comum,gerente,diretor

switch (permissao) {
    case 'comum':
        console.log('usuário comum');
    break;
    case 'gerente':
        console.log('usuário gerente');
    break;
    case 'diretor':
        console.log('usuário diretor');
    break;

    default:
        console.log('Uruário não reconhecido!');
}

// Estrutura de repetição
// 1. For
for(let i = 0; i < 5; i++){
    if(i % 2 !== 0){
    console.log( i);
    }
}
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
    console.log( i);
    }
}

// 2. While
let i = 5;
while (i >=  1){
    if(i % 2 !== 0){
        console.log( i);
    }
    i--;
}

// 3. Do..while
let j = 0;
do {
    console.log('digitando');
    j++;
} while (j < 10)

// 4. For..in
const pessoa = {
    nome: 'Daniel',
    idade: 25
};
//key-value
for(let chave in pessoa) {
    console.log(chave,pessoa);
}

const cores = ['vermelho', 'Azul', 'Verde'];
for (let indice in cores) {
    console.log(indice,cores[indice])
}

// 5.For..of
for(let cor of cores) {
    console.log(cor);
}










