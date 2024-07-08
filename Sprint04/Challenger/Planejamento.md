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

6. Critérios usados
    - Testes Exploratórios utilizados:
        - Freestyle.
        - Baseado em Cenários.
        - Valor Limite.
        - Vazio.
        - Testes de segurança. 
        - Testes de validação de dados.
        - Testes de integridade.
        - [Test Heuristics Cheat Sheet | Ministry of Testing](https://www.ministryoftesting.com/articles/test-heuristics-cheat-sheet)

7. Pessoas Envolvidas
    -  Quem são os testadores?
        -  Daniel .
       
8. Local dos Testes
    -  Onde os testes serão realizados?
        -  Em um ambiente pessoal emulando o ambiente real de uso.
        - Utilizando a API serverest localmente.

9. Recursos Necessários
    -  Recursos Humanos: Testador.
    -  Equipamento: Computador.
    -  Software: Postman, Xmind, Jira, GitLab, NodeJs, VS Code com bibliotecas Mocha e Chai.

10. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 27/05/2024
        -  Data de Conclusão: 03/07/2024
    

