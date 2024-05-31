1) Crie uma requisição Get para validar o retorno de usuários através da API;

<div align="center">
    <img src="Assets/Ex01.png" width="700px" />
</div>

2) Crie uma requisição Post para cadastrar um novo usuário através da API;

<div align="center">
    <img src="Assets/Ex02.png" width="700px" />
</div>

3) Crie uma requisição Get para validar o retorno de um usuário apenas através da API (pode utilizar os IDs dos usuários que vocês irão criar);
Identificando o id de usuário cadastrado.
<div align="center">
    <img src="Assets/Ex03.png" width="700px" />
</div>

<div align="center">
    <img src="Assets/Ex03a.png" width="700px" />
</div>

4) Crie cenários alternativos no cadastro de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman;

Com o campo nome vazio foi retornado o status 400:
<div align="center">
    <img src="Assets/cadastro_nome _branco.png" width="700px" />
</div>
Com o campo email vazio foi retornado o status 400:
<div align="center">
    <img src="Assets/cadastro_email_invalido.png" width="700px" />
</div>
Com o campo senha vazio foi retornado o status 400:

<div align="center">
    <img src="Assets/cadastro_senha_branco.png" width="700px" />
</div>
O cadastro com senha fraca foi permitido:
<div align="center">
    <img src="Assets/cadastro_senha_fraca.png" width="700px" />
</div>

5) Crie cenários alternativos na atualização de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman;
Com o campo nome vazio foi retornado o status 400:
<div align="center">
    <img src="Assets/atualização_nome_branco.png" width="700px" />
</div>
Com o campo email vazio foi retornado o status 400:
<div align="center">
    <img src="Assets/atualização_email_branco.png" width="700px" />
</div>
Com o campo senha vazio foi retornado o status 400:
<div align="center">
    <img src="Assets/atualização_senha_branco.png" width="700px" />
</div>
Com o campo email invalido foi retornado o status 400:
<div align="center">
    <img src="Assets/atualização_email_invalido.png" width="700px" />
</div>
Novamente foi permitido atualização da senha fraca.
<div align="center">
    <img src="Assets/atualização_senha_fraca.png" width="700px" />
</div>

6) Crie cenários alternativos na exclusão de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
O usuário foi excluido mas aparece no response "Nenhum registro excluido":
<div align="center">
    <img src="Assets/excluir_usuario.png" width="700px" />
</div>
Confirmando se o usuario foi excluido, e foi confirmado:
<div align="center">
    <img src="Assets/excluir_verificação.png" width="700px" />
</div>