# Sprint 05


## Sobre o Repositório


Este repositório consiste em um breve resumo sobre os temas abordados, separados por dias, para melhor
fixação dos conhecimentos adquiridos durante a sprint. Documentação e resultados dos testes de performance para a API ServeRest. O foco está em validar a estabilidade, performance e capacidade da API sob várias condições de carga.


## Links para acessar diretamente o material do dia:


<details>
  <summary>Dia 01 - Testes de Performance.</summary>


  - [Testes de Performance.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint5/Sprint05/Dia01/TestesPerformance.md?ref_type=heads)
 
</details>


<details>
  <summary>Dia 02 - Testes de Performance parte 2.</summary>


  - [Testes de Performance parte 2.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint5/Sprint05/Dia02/TestesPerformance2.md?ref_type=heads)
 
</details>


<details>
  <summary>Dia 03 - JMeter</summary>
 
  - [Curso JMeter - Testes de performance.](https://gitlab.com/compass8112219/Sprints/-/tree/pb_sprint5/Sprint05/Dia03?ref_type=heads)
 
</details>


## Objetivos dos Testes


Os testes de performance têm como objetivo principal garantir que a API ServeRest seja robusta, eficiente e capaz de lidar com o número esperado de usuários e transações, sem comprometer a qualidade do serviço. Especificamente, os testes são projetados para:


- Identificar gargalos e limitações do sistema.
- Garantir que o tempo de resposta está dentro dos limites aceitáveis.
- Validar o número de usuários simultâneos suportados.
- Avaliar a estabilidade da API sob diferentes cargas.


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


## Resumo dos resultados
  -  Os resultados indicam que a operação de cadastro e atualização de usuários são as mais custosas em termos de tempo, enquanto listar e deletar usuários são mais rápidas.
  - Foi constatado também que os valores de latência oscilam bastante.
  - A taxa de throughput foi menor que a esperada no planejamento.
  - Foi constatado que no testes de pico de cadastro e leitura individuais a taxa de erro ficou muito alta.
 


## Recursos Necessários
  -  Recursos Humanos: Testador.
  -  Equipamento: Computador.
  -  Software: Jira, GitLab, NodeJs, VS Code, JMeter.


## Pessoas Envolvidas
  -  Quem são os testadores?
      -  Daniel .


## Agradecimentos:
- Enzo, Gabriel Just., Leticia, Ricardo, Jorge, Mathias.


