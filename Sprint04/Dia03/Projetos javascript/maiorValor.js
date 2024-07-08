// Escreva uma função que usa 2 numeros e retorna o maior entre eles


function maiorValor (num1, num2){
    // if (num1 > num2){
    //     return num1;
    // }else {
    //     return num2;
    // }
    return num1>num2 ? num1: num2 ;
}

let valorMaior = maiorValor(34,67);
console.log('O número maior é: ' ,valorMaior);