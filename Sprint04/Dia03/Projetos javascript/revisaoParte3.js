const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function( ){
        console.log("Fazendo ligação...")
    }
}
// FACTORY FUNCTIONS (FUNÇÃO DE FÁBRICA)

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar( ){
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('ZenFone',5.5,5000); // Aqui vc define um objeto novo
console.log(celular1)

// CONSTRUCTOR FUNCTIONS (FUNÇÃO CONSTRUTORA)

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = this.tamanhoTela,
    this.capacidadeBateria = this.capacidadeBateria
    this.ligar = function() {
        console.log("Fazendo Ligação")
    }
}

const celular2 = new Celular('asus',5.6,6000);// Aqui vc cria um objeto novo
console.log(celular2);

// NATUREZA DINÂMICA DE OBJETOS 
const mouse = {
    cor : 'red',
    marca : 'liba'
}
mouse.velocidade = 2400;
mouse.trocarDPI = function () {
    console.log(' mudando DPI ')
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);

// CLONAR OBJETOS
const novoObjeto = Object.assign({
    bateria: 10000
},celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);

// MATH
// Math.random       // Gera um número aleatorio entre 0 e 1
// Math.max(3,6,8,10)// Informa o maior valor
// Math.min(2,6,7,9) // Informa o menor valor
// Math.cbrt(x)      // Retorna a raiz cúbica de um número
// Math.ceil(x)      // Retorna o menor inteiro maior ou igual a um número
// Math.pow(base, exponent)// Retorna a base elevada à potência do expoente
// Math.PI           // A constante PI, aproximadamente 3.14159
// Math.SQRT2        // A raiz quadrada de 2, aproximadamente 1.414

// METODOS DE STRINGS
// Tipo primitivo
const mensagem = 'minha primeira mensagem'
// Tipo objeto
const outraMensagem = new String('Boa noite');

// Comandos 

console.log(typeof mensagem); // Verifica o tipo da variável 'mensagem' Output: "string"

console.log(typeof outraMensagem); // Verifica o tipo da variável 'outraMensagem' Output: "string"

console.log(typeof mensagem); // Verifica o tipo da variável 'mensagem'  Output: "string"

console.log(typeof outraMensagem); // Verifica o tipo da variável 'outraMensagem'  Output: "string"

console.log(outraMensagem[2]); // Acessa o terceiro caractere da string 'outraMensagem' Output: "t"

console.log(mensagem.includes('primeira')); // Verifica se a string 'mensagem' inclui a substring 'primeira' Output: true

console.log(mensagem.includes('vermelho')); // Verifica se a string 'mensagem' inclui a substring 'vermelho' Output: false

console.log(mensagem.startsWith('minha')); // Verifica se a string 'mensagem' começa com a substring 'minha' Output: true

console.log(mensagem.endsWith('mensagem')); // Verifica se a string 'mensagem' termina com a substring 'mensagem' Output: true

console.log(mensagem.indexOf('primeira')); // Obtém a posição inicial da substring 'primeira' na string 'mensagem' Output: 6

console.log(mensagem.replace('minha','sua')); // Substitui a substring 'minha' por 'sua' na string 'mensagem' Output: "sua primeira mensagem"

console.log(mensagem.trim()); // Remove os espaços em branco do início e do final da string 'mensagem' Output: "minha primeira mensagem"

console.log(mensagem.split(' ')); // Divide a string 'mensagem' em um array de substrings usando o espaço como delimitador Output: ["minha", "primeira", "mensagem"]

// TEMPLATE LITERAL

const mensagem3 = 'Oi isso é minha\n' +
                    '\'primeira\' mensagem';
console.log(mensagem3);

const outra = `Oi isso é a minha 'primeira' mensagem`;
console.log(outra);

const nome = 'Daniel';

const email =
`Olá ${nome}

Obrigado por se inscrever no canal

Para acompanhar os videos não se esqeuça de ativar o sino.

Obrigado,
Daniel.`;
console.log(email);