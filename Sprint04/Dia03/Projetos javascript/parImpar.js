// Receber uma qunatidade de valores para avaliar
// Função exibe se cada valor é par ou impar

exibirTipo(5);
function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++) {
        if ( i % 2 === 0) console.log(i,'é PAR');
        else console.log(i,'é IMPAR');
    }
}