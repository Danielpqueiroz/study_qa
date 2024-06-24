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

// Remover elementos
const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'}
];

console.log(marcar.includes({id:1, nome: 'a'}))
3:47
// Dividir elementos
// Dividir Arrays
// Combinar Arrays