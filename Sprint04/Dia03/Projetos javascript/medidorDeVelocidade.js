// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velociadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velociadeMaxima) console.log('Ok');
    else {
        const pontos = Math.floor(( velocidade - velociadeMaxima) / KmPorPonto);
        if(pontos >=12) console.log ('Carteira Suspensa');
        else console.log('Pontos', pontos);
    }
}