// Objeto Postagem de Blog

// postagem
/*
titulo
mensagem
autor
visualizações
comentarios
    (autor,mensagem)
estaoAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        { autor: 'a',mensagem: 'b'},
        { autor: 'a',mensagem: 'b'}
    ],
    estaoAoVivo: true
}

console.log(postagem);