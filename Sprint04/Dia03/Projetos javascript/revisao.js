// VARIÁVEIS
// Padrão de variavel: camelCase
// Não e recomendado fazer desta forma:
// let nome, idade, altura;

console.log('Daniel')
console.log('Bem vindo ao curso')
let idade = 20;
console.log(idade);
let altura = 170;
console.log(altura);


// CONSTANTES
// Não é possivel redefinir o valor da variável.
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto)

// TIPOS PRIMITIVOS
let nome = 'Daniel';     // string literal
let idades = 26;         // number literal
let estaAprovado = true; // boolean
let sobreNome ; // Undefined
let sobreNome2 = undefined ; // Undefined
let corSelecionada = null; // Redefinir um valor

// TIPAGEM DINÂMICA
// Utilizado no console do navegador
typeof nome // Retorna o tipo da variável

// OBJETOS
// Agrupa informações em um lugar
let pessoa = {
    nome: 'Daniel',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'Pontes'
};
console.log(pessoa)

// ARRAYS
let familia = [26,45,'Daniel',true,67,12];
console.log(familia.length)
console.log(familia[2])
let nomeDoColega = ['will','pereira',45,170,63];

// FUNCTION
// Verbo + Substantivo Ex: transformarObjeto
let corSite = "azul"
function resetCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
}; 
console.log(corSite);
resetCor("vermelho","claro");
console.log(corSite);

// TIPOS DE FUNÇÕES:
// Realiza uma tarefa e não devolve nada
function dizerNome(){
        console.log('Daniel')
}
dizerNome();

// Faz uma operação aritimética e retorna o resultado
function multiplicarPorDois(valor){
    return valor * 2;
}
console.log(multiplicarPorDois(6));
let resultado = multiplicarPorDois(5);
console.log(resultado)


// OPERADORES

// Operadores Aritiméticos:
let salario = 1000;
// +,-,*,/,**
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);
// ++, --
let idade2 = 18;
console.log(idade2++)
console.log(idade2)
console.log(idade2--)
console.log(idade2)

// Operadores Atribuição:
let valorTecladoGammer = 200;
valorTecladoGammer += valorTecladoGammer; // valorTecladoGammer = valorTecladoGammer + valorTecladoGammer;
valorTecladoGammer -= valorTecladoGammer; // valorTecladoGammer = valorTecladoGammer - valorTecladoGammer;
console.log(valorTecladoGammer);

// Operadores de Igualdade:
//Igualdade estrita
console.log ( 1 === 1);
console.log('1' === 1);
// Igualdade solta 
console.log(1 == 1);
console.log('1'== 1);

//Operador Ternário
// Tem um cliente, 100 premium, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)

// Operadores Lógicos
// E (&&) retorna true se os dois operandos forem true
console.log(true && true);
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);
// OU (||) retorna true se um dos operandos forem true
console.log(false || true);
let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
console.log(podeAplicar2);
// NOT (!) nega uma afirmação
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado)
// Compararação entre não booleanos
// Falsy : undefined, null, 0, false, '', NaN - not a number
// Truthy : 
let corPersonalizada = 'Verde';
let croPadrao = 'Azul';
let corPerfil = corPersonalizada || croPadrao
console.log(corPerfil);

// Operadores Bitwise

