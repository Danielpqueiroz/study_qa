1. Nome do Projeto

    -  Usabilidade do site ServeRest.

2. Resumo
    -  Objetivo: É desenvolver e garantir a funcionalidade e a integridade de uma API para o Marketplace ServeRest, permitindo que vendedores e usuários se cadastrem, autentiquem, gerenciem seus produtos e consigam manipular os produtos no carrinho de forma segura e eficiente.
    

3. Cenários Macro na Suíte de Testes

   1. US 001: [API] Usuários
        1. Cenário de Criação de Usuários (POST)

        2. Cenário de Leitura de Usuários (GET)

        3. Cenário de Atualização de Usuários (PUT)

        4. Cenário de Exclusão de Usuários (DELETE)

    2. US 002: Login

        1. Cenário de Autenticação (POST)

    3. US 003: [API] Produtos
        1. Cenário de Criação de Produtos (POST)

        2. Cenário de Leitura de Produtos (GET)

        3. Cenário de Atualização de Produtos (PUT)

        4. Cenário de Exclusão de Produtos (DELETE)

    4. US 004: [API] Carrinho
        1. Cenário de Criação de Carrinho (POST)

        2. Cenário de Leitura de Carrinho (GET)

        3. Cenário de Atualização de Carrinho (PUT)

        4. Cenário de Exclusão de Carrinho (DELETE)

4. Testes Candidatos à Automação
    - Testes de CRUD:

        - Todos os cenários de testes de criação, leitura, atualização e exclusão são candidatos à automação devido à necessidade de repetição e à eficiência que a automação proporciona.

    - Testes de Validação de Dados:

        - Automação de testes que verificam a validação de campos obrigatórios e se estão em formato correto.

    - Testes de Integridade e Segurança:

        - Testes que verificam as restrições quanto a acesso sem autorização,  impossibilidade de duplicação de usuários, produtos ou carrinhos são críticos e devem ser automatizados para garantir a segurança e a integridade dos dados.
    
5. Cenários de Teste Importantes

    1. Cenário 1: Criação de Usuários (POST) 

    - Valor Gerado: Constatar que o usuário consiga se cadastrar no Serverest de forma correta e completa.

    2. Cenário 2: Login (POST)

    - Valor Gerado: Garantir que o login do vendedor ou usuário esteja funcionando perfeitamente e gerando o token de autenticação.

    3. Cenário 3: Busca por produtos (GET)

    - Valor Gerado: Garantir que a busca por produtos esteja funcionando perfeitamente e que seja necessario o uso da autenticação.

    4. Cenário 4: Criação de carrinho (POST)

    - Valor Gerado: Garantir que os produtos possam ser adicionados ao carrinho esteja funcionando perfeitamente e que seja necessario o uso da autenticação, para posteriormente finalizar a compra.

6. Testes Exploratórios utilizados:
    - Freestyle.
    - Baseado em Cenários.
    - Valor Limite.
    - Vazio.
    - Testes de segurança. 
    - Testes de validação de dados.
    - Testes de integridade.
    - [Test Heuristics Cheat Sheet | Ministry of Testing](https://www.ministryoftesting.com/articles/test-heuristics-cheat-sheet)

7. Teste de Performance:

    Objetivos do Teste de Performance
    - **Tempo de Resposta:** O tempo de resposta para cada operação CRUD não deve exceder 1000 ms sob carga normal e 2000 ms sob carga alta.
    - **Capacidade de Carga:** Identificar o ponto de saturação onde o tempo de resposta excede 2000 ms, esperando suportar pelo menos 300 usuários simultâneos.
    - **Confiabilidade e Estabilidade:** A API deve manter uma taxa de erro abaixo de 5% durante o teste de estresse.
    - Fazer os Teste de Carga, Estresse, Escalabilidade, Pico e Concorrência.

    Métricas a Serem Monitoradas:

    - **Tempo de Resposta (Latência):** Identificar o tempo necessário para que o sistema responda a uma requisição.
    - **Taxa de Erro:** Monitorar a porcentagem de requisições que resultam em erro.
    - **Throughput:** Medir o número de requisições processadas por segundo.
    - **Uso de Recursos:** Monitorar o uso de CPU e memória durante os testes.

    Configurações de Testes:

    - **Carga:** 280 usuários simultâneos durante 4 minutos.
    - **Estresse:** 300 usuários simultâneos durante 4 minutos.
    - **Escalabilidade:** 300 usuários simultâneos durante 4 minutos.
    - **Pico:** 400 usuários simultâneos durante 30 segundos.
    - **Concorrência:** 270 usuários simultâneos durante 3 minutos e 30 segundos.

    1. Rota de Usuários
    - **TP01:** Carga para GET
    - **TP02:** Concorrência para DELETE
    - **TP03:** Escalabilidade para GET por ID
    - **TP04:** Estresse para POST
    - **TP05:** Pico para PUT
    - **TP06:** Carga para POST
    
    2. Rota de Login
    - **TP07:** Carga para POST
    - **TP08:** Concorrência para POST
    - **TP09:** Escalabilidade para POST
    - **TP10:** Estresse para POST
    - **TP11:** Pico para POST
    
    3. Rota de Produtos
    - **TP12:** Carga para GET
    - **TP13:** Concorrência para DELETE
    - **TP14:** Escalabilidade para GET por ID
    - **TP15:** Estresse para POST
    - **TP16:** Pico para PUT
    - **TP17:** Carga para POST
    
    4. Rota de Carrinho
    - **TP18:** Carga para GET
    - **TP19:** Concorrência para DELETE
    - **TP20:** Escalabilidade para GET por ID
    - **TP21:** Estresse para POST
    - **TP22:** Pico para POST
    

    5. Testes de Flow01
    - **TP23: Carga**
    - **TP24: Concorrência**
    - **TP25: Escalabilidade**
    - **TP26: Estresse**
    - **TP27: Pico**
    
    5. Testes de Flow02
    - **TP28: Carga**
    - **TP29: Concorrência**
    - **TP30: Escalabilidade**
    - **TP31: Estresse**
    - **TP32: Pico**

    Critérios de Sucesso
    - **Passar em todos os checks** (verificações de status code, tamanho da resposta, etc.) sem falhas significativas.
    - **Manter os tempos de resposta** dentro dos limites aceitáveis (<2000 ms).
    - **Não haver violação de thresholds** estabelecidos para cada tipo de teste.
    
- Obs: Resutados dos testes e mais detalhes dos testes estarão contidos em um arquivo MatrizRastreabilidadePerformance.md e na pasta report.

8. Pessoas Envolvidas
    -  Quem são os testadores?
        -  Daniel .
       
9. Local dos Testes
    -  Onde os testes serão realizados?
        -  Em um ambiente pessoal emulando o ambiente real de uso.
        - Utilizando a API serverest localmente.

10. Recursos Necessários
    -  Recursos Humanos: Testador.
    -  Equipamento: Computador: i7 10° geração, 16 GB de RAM e SSD de 200 GB.
    -  Software: Postman, Xmind, Jira, GitLab, NodeJs, VS Code com bibliotecas Mocha e Chai, JMeter, chocolatey, K6.

11. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 04/07/2024
        -  Data de Conclusão: 18/09/2024
    

