// Objeto Endereço

// Criar um objeto endereco que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'b',

};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);