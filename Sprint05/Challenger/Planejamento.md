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
    - Tempo de Resposta: O tempo de resposta para cada operação CRUD não deve exceder 500 ms sob carga normal e 800 ms sob carga alta.
    - Capacidade de Carga: Identificar o ponto de saturação onde o tempo de resposta excede 800 ms, esperando suportar pelo menos 100 usuários simultâneos.
    - Confiabilidade e Estabilidade: A API deve manter uma taxa de erro abaixo de 5% durante o teste de estresse.
    - Fazer os Teste de Carga, Estresse, Escalabilidade, Pico, Resistência, Concorrência e capacidade.
    1. Rota de Usuários
    - Objetivos: Validar o registro, atualização, listagem e deleção de usuários. Garantir a estabilidade e performance para operações com alta demanda de criação e gerenciamento de usuários.
    - Volumetria: Simulação de até 600 usuários simultâneos.
    - Métricas:
        - Tempo de resposta para criação e deleção deve ser menos de 3 segundos.
        - Throughput de 100 operações por minuto.
        - Taxa de erro inferior a 2%.
        - Tempo de latência.
    - Tipos de Testes:
        - Teste de Carga: Validar a capacidade do sistema de manter o desempenho sob condições normais com 400 usuários simultâneos.
        - Teste de Estresse: Aumentar a carga gradualmente até 600 usuários para identificar o ponto de falha.
        - Teste de Escalabilidade: Incrementar 500 usuários em 4 min para testar a capacidade da API.
        - Teste de Pico: Simular um pico de 450 usuários durante 30 seg para testar como a API lida com súbitas altas de demanda.
        - Teste de Resistência: Manter 300 usuários por 10 min para observar a estabilidade e o comportamento da API sob uma longa duração.
        Teste de Concorrência: Executar operações simultâneas com 350 usuários para verificar a capacidade de processamento concorrente.
        Teste de Capacidade: Escalonar usuários até que a performance se degrade para estabelecer o máximo de usuários que a API pode suportar mantendo a qualidade.
    2. Rota de Login
    - Objetivos: Garantir que os usuários possam logar de maneira eficiente mesmo sob alta carga.
    - Volumetria: Simulação de até 600 logins simultâneos.
    - Métricas:
        - Tempo de resposta para login deve ser menos de 2 segundos.
        - Throughput de 150 logins por minuto.
        - Taxa de erro inferior a 1%.
        - Tempo de latência.
    - Tipos de Testes:
        - Teste de Carga: Avaliar a rota com 400 tentativas de login simultâneas por 30 minutos para medir a eficiência sob carga típica.
        - Teste de Estresse: Aumentar os logins simultâneos até 600 para determinar o ponto de quebra da rota.
        - Teste de Escalabilidade: Aumentar progressivamente os usuários fazendo login de 300 para 500 em 4 minutos para testar a escalabilidade.
        - Teste de Pico: 450 logins simultâneos durante um período curto de 30 segundos para testar a resposta em picos de uso.
        - Teste de Resistência: 300 logins simultâneos mantidos durante 10 minutos para verificar a resistência da API.
        - Teste de Concorrência: 350 tentativas de login ao mesmo tempo para testar a gestão de sessões concorrentes.
        - Teste de Capacidade: Incrementar até que a performance decline para identificar a capacidade máxima de logins.
    3. Rota de Produtos
    - Objetivos: Assegurar que os produtos possam ser listados, adicionados, atualizados e removidos sob diversas condições de carga.
    - Volumetria: Suportar até 600 usuários acessando a lista de produtos simultaneamente.
    - Métricas:
        - Tempo de resposta para listagem de produtos deve ser inferior a 3 segundos.
        - Throughput de 120 operações por minuto.
        - Taxa de erro inferior a 2%.
        - Tempo de latência.
    - Tipos de Testes:
        - Teste de Carga: Simular 250 usuários acessando a lista de produtos simultaneamente por 30 minutos.
        - Teste de Estresse: Aumentar a carga até 500 usuários para encontrar os limites da rota de produtos.
        - Teste de Escalabilidade: Incrementar de 250 para 500 usuários em 4 minutos, avaliando a performance sob carga escalonada.
        - Teste de Pico: Testar com 300 usuários acessando produtos simultaneamente por 30 segundos.
        - Teste de Resistência: Manter 250 usuários por 10 minutos interagindo com a rota de produtos.
        - Teste de Concorrência: 300 usuários realizando operações simultâneas na rota de produtos.
        - Teste de Capacidade: Escalonar até o ponto de degradação para estabelecer a capacidade máxima.
    4. Rota de Carrinho
    - Objetivos: Testar a funcionalidade e performance do carrinho, incluindo adição, remoção e atualização de itens, especialmente sob condições de alta carga.
    - Volumetria: Até 600 operações simultâneas durante picos.
    - Métricas:
        - Tempo de resposta para operações no carrinho deve ser menos de 2 segundos.
        - Throughput de 130 operações por minuto.
        - Taxa de erro inferior a 1.5%.
        - Tempo de latência.
    - Tipos de Testes:
        - Teste de Carga: Executar 150 operações no carrinho simultaneamente durante 30 minutos para verificar a performance sob uso normal.
        - Teste de Estresse: Aumentar as operações no carrinho até 600 para testar os limites.
        - Teste de Escalabilidade: Crescer de 150 para 300 operações em 4 minutos para avaliar a escalabilidade.
        - Teste de Pico: Simular um pico com 200 operações durante um período curto de 30 segundos.
        - Teste de Resistência: Manter 150 operações durante 10 minutos para testar a durabilidade da funcionalidade.
        - Teste de Concorrência: 200 operações concorrentes no carrinho para testar a consistência de dados e a resposta do servidor.
        - Teste de Capacidade: Determinar o máximo de operações que a rota do carrinho pode manusear eficientemente.


    Preparação e Estratégia Geral
        - Preparação de Massa de Dados: Criar usuários, produtos e dados de carrinho suficientes para simular o ambiente de produção.
        - Monitoramento e Análise: Utilizar ferramentas como JMeter para coletar dados durante os testes e analisar os resultados para identificar gargalos e pontos de melhoria.
- Obs: Resutados dos testes estarão contidos em um arquivo Performance.md

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
    -  Software: Postman, Xmind, Jira, GitLab, NodeJs, VS Code com bibliotecas Mocha e Chai, JMeter.

11. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 04/07/2024
        -  Data de Conclusão: 18/07/2024
    

