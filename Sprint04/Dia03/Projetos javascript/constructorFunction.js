// Criar um objeto postagem
// titulo,mensagem,autor,visualizações,comentarios,estaoAoVivo

function Postagem(titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaoAoVivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);