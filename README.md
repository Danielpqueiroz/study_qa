# Sprint 05

# Sobre o Repositório

Este repositório consiste em um breve resumo sobre os temas abordados, separados por dias, para melhor 
fixação dos conhecimentos adquiridos durante a sprint.

## Links para acessar diretamente o material do dia:

<details>
  <summary>Dia 01 - TestesExploratórios</summary>

  - [Testes de Performance.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint4/Sprint04/Dia01/TestesExplorat%C3%B3rios.md?ref_type=heads)
 
</details>

<details>
  <summary>Dia 02 - EstrategiasTestes</summary>

  - [Testes de Performance parte 2.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint4/Sprint04/Dia02/EstrategiasTestes.md?ref_type=heads)
  
</details>

<details>
  <summary>Dia 03 - Javascript</summary>
  
  - [Curso JMeter - Testes de performance.](https://gitlab.com/compass8112219/Sprints/-/tree/pb_sprint4/Sprint04/Dia03/Projetos%20javascript?ref_type=heads)
 
</details>

# Plano de Testes de Performance para API ServeRest

Este repositório contém os scripts de teste, documentação e resultados dos testes de performance para a API ServeRest. O foco está em validar a estabilidade, performance e capacidade da API sob várias condições de carga.

## Objetivos dos Testes

Os testes de performance têm como objetivo principal garantir que a API ServeRest seja robusta, eficiente e capaz de lidar com o número esperado de usuários e transações, sem comprometer a qualidade do serviço. Especificamente, os testes são projetados para:

- Identificar gargalos e limitações do sistema.
- Garantir que o tempo de resposta está dentro dos limites aceitáveis.
- Validar o número de usuários simultâneos suportados.
- Avaliar a estabilidade da API sob diferentes cargas.

## Rotas Testadas

1. **Usuários**: Registro, atualização, listagem e deleção de usuários.
2. **Login**: Autenticação de usuários.
3. **Produtos**: Listagem, adição, atualização e remoção de produtos.
4. **Carrinho**: Operações no carrinho, incluindo adição, remoção e atualização de itens.

## Métricas Monitoradas

- **Tempo de Resposta**: O tempo necessário para a API responder às requisições.
- **Throughput**: Número de requisições que a API pode lidar por minuto.
- **Taxa de Erro**: Porcentagem de requisições que resultam em erro.
- **Latência**: Tempo para a primeira resposta ser recebida após uma requisição ser enviada.

## Tipos de Testes de Performance

- **Teste de Carga**: Simular o uso normal da aplicação.
- **Teste de Estresse**: Determinar os limites da aplicação.
- **Teste de Escalabilidade**: Verificar a capacidade de escalonamento da aplicação.
- **Teste de Pico**: Avaliar o comportamento da aplicação durante picos de uso.
- **Teste de Resistência**: Testar a durabilidade da aplicação.
- **Teste de Concorrência**: Checar a performance da aplicação sob alta concorrência.
- **Teste de Capacidade**: Estabelecer o máximo de usuários e transações suportados.

## Preparação de Dados

Os testes requerem uma massa de dados representativa, incluindo usuários fictícios, produtos e dados de carrinho, para simular as condições reais de uso.

## Execução dos Testes

Os testes são executados utilizando o JMeter, configurado para apontar para o ambiente local onde a API está rodando. As configurações específicas e scripts estão disponíveis no diretório `scripts` deste repositório.

## Análise de Resultados

Os resultados dos testes são analisados para identificar quaisquer problemas de performance ou estabilidade. Os relatórios de teste estão disponíveis no diretório `results` e devem ser revisados para garantir que a API atende ou excede todas as expectativas de performance.


## Recursos Necessários
  -  Recursos Humanos: Testador.
  -  Equipamento: Computador.
  -  Software: Postman, Xmind, Jira, GitLab, NodeJs, VS Code com bibliotecas Mocha e Chai.

## Pessoas Envolvidas
  -  Quem são os testadores?
      -  Daniel .

## Agradecimentos:
- Enzo, Gabriel Just., Leticia, Ricardo, Jorge, Mathias.

## Referências
- Material do curso da Udemy de "Curso JMeter - Testes de performance." para os conteúdos dos dias 1 e 3 da sprint.
- Chatgpt 4o para ajudar na organização do planejamento.



