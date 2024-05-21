# Fundamentos do teste de software (Back-End)

## Pontos importantes
- Se um teste de nível superior detectar um erro e não houver falha no teste de nível inferior, você precisará escrever um teste de nível inferior
- Posicione seus testes na base da pirâmide de testes sempre que possível.
- O código de teste tem a mesma importância que o código de produção, trate-o com o mesmo cuidado e atenção.
- Teste uma condição por teste. Isso ajuda você a manter seus testes curtos e fáceis de raciocinar

## Pirâmide de Testes
<div align="center">
    <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*S0yR438zKtJtEEBldSviFA.png" width="700px" />
</div>

## Testes de Ponta a Ponta ou E2E
- Os testes de ponta a ponta, visam simular o ambiente que o usuário final irá utilizar, preenchendo formulários, clicando em botões e verificando se está tudo funcionando como o esperado ou seja testar o sistema como um todo.

## Testes de Integração
- Os testes de Integração, como o próprio nome já diz, tem como objetivo testar a integração entre diferentes componentes, para que funcionem em conjunto como o esperado.

## Testes de Unidade
- O teste unitário é definido como a menor parte testável do sistema de forma isolada.
- Tem como objetivo garantir que cada unidade do código funcione como esperado.
- São rápidos porém, só eles não são suficientes. Mas deve-se fazer em grande quantidade pois são rápidos.

## Exemplo de ferramentas e bibliotecas:

- JUnit : nosso executor de testes
- Mockito : para zombar de dependências
- Wiremock : para eliminar serviços externos
- Pacto : para escrever testes CDC
- Selenium : para escrever testes ponta a ponta orientados pela UI
- Garantido por REST : para escrever testes ponta a ponta orientados pela API REST
