// Criar uma função para mostrar os números primos

// Primos
// Compostos

// Ex: 10, 11
// 10 (divisivel por 1 ou por ele mesmo)
// 11
exibriNumerosPrimos(15);

function exibriNumerosPrimos(limite){
    
    for (let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);
    }

}

function numeroPrimo(numero) {
    
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0) {
            return false;
        }
    }
    return true;

}