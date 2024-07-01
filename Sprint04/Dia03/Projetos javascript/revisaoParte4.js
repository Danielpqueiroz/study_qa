//DATE
const data1 = new Date();
const date2 = new Date('Jun 23 2024 09:30');
const date3 = new Date(2024,5,23,9,30);

console.log(data1);
console.log(date2);
console.log(date3);


// INTRODUÇÃO A ARRAYS

// Add novos elementos
    const numeros = [1,2,3];
    // Início
    numeros.unshift(0);
    console.log(numeros);
    // Meio
    numeros.splice(1,0,'a');
    console.log(numeros);
    // Fim
    numeros.push(5);
    console.log(numeros);

// Encontrar elementos
    const numeros1 = [1,2,3,1,4];
    console.log(numeros1.indexOf(2));
    console.log(numeros1.lastIndexOf(1));
    console.log(numeros1.includes(2));


    const marcas = [
        {id:1 , nome: 'a'},
        {id:2 , nome: 'b'}
    ];

    const marca =  marcas.find(function(marca) {
        return marca.nome === 'a';
    })
    console.log(marca);

    console.log(marcas.find(() => marca.nome === 'a'));

// Remover elementos
const numeros4 = [12,22,13,14,25,36];
numeros.push();
numeros.unshift();
numeros.splice();
console.log(numeros4);
    //Inicio
    const primeiro = numeros4.shift();
    console.log(primeiro);
    console.log(numeros4);

    //Meio
    const meio = numeros4.splice(2,1);
    console.log(meio);
    console.log(numeros4);

    //Final
    const ultimo = numeros4.pop();
    console.log(ultimo);
    console.log(numeros4)

    // Como esvaziar um array
    //Solução 1
    //numeros4 = [];

    //Solução 2 mais eficiente
    numeros.length = 0;

    // Solução 3
    // numeros4.splice(0,numeroros.length);

    // Solução 4
    // while (numeros.length > 0)
    // numeros4.pop();



// Combinar Arrays

    const primeirox = [1,2,3];
    const segundo = [4,5,6];
    console.log(primeirox);
    console.log(segundo);

    const combinado = primeirox.concat(segundo);
    console.log(combinado);


// Dividir Arrays
    const cortado = combinado.slice(1,3);
    console.log(cortado);
    const cortado2 = combinado.slice(1);
    console.log(cortado2);
    const cortado3 = combinado.slice();
    console.log(cortado3);

// Outra forma de juntar arrays usando spread(...)
const combinado2 = [...primeirox,'%',...segundo,'$'];
console.log(combinado2);
const clonado = [...combinado2];
console.log(clonado);

const numeros5 = [1,2,3,4,5,6];

for (numero of numeros5)
    console.log(numero);

numeros5.forEach(function(numero) {
    console.log(numero);
})

numeros5.forEach((numero, indice) => console.log(numero, indice));

// 