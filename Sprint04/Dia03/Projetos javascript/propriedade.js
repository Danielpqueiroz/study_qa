// Cria um metodo para ler propriedades de um objeto e 
//exibe somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Velozes e Furiosos',
    ano : 2018,
    diretor : 'Sei lá',
    personagem : 'Leth'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj){
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop]);
    }
}