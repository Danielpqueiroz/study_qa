function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Daniel', 'Amanda', 'Sabrina', 'Bia', 'Jayme']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText =  'Você pode Entrar!'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}