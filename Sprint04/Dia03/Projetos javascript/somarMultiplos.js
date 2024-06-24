// Criar uma função para somar que retorna a 
// soma de todos os múltiplos de 3 e 5

// Multiplos de 3
// 3,6,9
// Mutiplos de 5
// 5,10

// Somando os multiplos
// Somando os multiplos de 3
// Somando os multiplos de 5
// Somar os dois

somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i <= limite; i++){
        if(i % 3 === 0) 
            multiplosDe3 += i;
            if(i % 5 === 0)
                multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}