1. Nome do Projeto

    -  Usabilidade do site ServeRest.

2. Resumo
    -  Objetivo: É desenvolver e garantir a funcionalidade e a integridade de uma API para o Marketplace ServeRest, permitindo que vendedores se cadastrem, autentiquem e gerenciem seus produtos de forma segura e eficiente.
    - Teste de API: 
        - Cadastro de Usuários: Testar operações CRUD para garantir que as funcionalidades básicas de cadastro de usuários estejam funcionando conforme esperado.
        - Login: Testar autenticação com credenciais válidas e inválidas e verificar a geração e validade do token Bearer.
        - Gerenciamento de Produtos: Testar operações CRUD para produtos e verificar as restrições de nomes duplicados e a exclusão de produtos em carrinhos.
    - Testes de segurança: 
        - Cadastro de Usuários: Verificar restrições de provedores de e-mail proibidos e validação de senhas.
        - Login: Verificar segurança e validade do token Bearer.
        - Gerenciamento de Produtos: Garantir que apenas usuários autenticados possam realizar ações na rota de produtos.
    - Testes de validação de dados:
        - Cadastro de Usuários: Validar preenchimento correto dos campos obrigatórios e padrão válido de e-mail.
        - Login: Verificar autenticação com credenciais inválidas.
        - Gerenciamento de Produtos: Validar que produtos com nomes duplicados não possam ser cadastrados.
    - Testes de integridade: 
        - Cadastro de Usuários: Garantir que não é possível criar ou atualizar usuários com e-mails duplicados.
        - Login: Garantir validade do token Bearer por 10 minutos.
        - Gerenciamento de Produtos: Verificar que atualizações com ID inexistente criam novos produtos.
    
    -  Resultado Esperado: Descrever o resultado esperado do teste.
        - Cadastro de Usuários: Usuários são cadastrados com sucesso, respeitando todas as validações e restrições.
        - Login: Vendedores autenticados com credenciais válidas recebem um token Bearer, enquanto tentativas inválidas são bloqueadas com status 401.
        - Gerenciamento de Produtos: Vendedores autenticados conseguem gerenciar produtos conforme esperado, respeitando as regras de negócio estabelecidas.


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

4. Testes Candidatos à Automação
    - Testes de CRUD:

        - Todos os cenários de testes de criação, leitura, atualização e exclusão são candidatos à automação devido à necessidade de repetição e à eficiência que a automação proporciona.

    - Testes de Validação de Dados:

        - Automação de testes que verificam a validação de campos obrigatórios, restrições de e-mail e senha.

    - Testes de Integridade e Segurança:

        - Testes que verificam as restrições de e-mail e a impossibilidade de duplicação de usuários são críticos e devem ser automatizados para garantir a segurança e a integridade dos dados.
    
5. Cenários de Teste Importantes

    1. Cenário 1: Criação de Usuários (POST) login procura produto

    - Valor Gerado: Verifica a funcionalidade básica da API, assegurando que os vendedores possam se cadastrar e iniciar suas atividades no marketplace do ServeRest. Garantindo a integridade dos dados e assegurando que a entrada de dados segue padrões que evitam erros de comunicação e problemas técnicos no futuro. E Proteger o sistema contra senhas fracas que podem comprometer a segurança do usuário e do sistema.

    2. Cenário 2: Login (POST)

    - Valor Gerado: A implementação de um cenário de login na API ServeRest oferece valor substancial ao garantir segurança, melhorar a experiência do usuário, manter a integridade dos dados.

    3. Cenário 4: Busca por produtos (GET)

    - Valor Gerado: A implementação de um cenário de busca por produtos na API ServeRest oferece valor substancial ao facilitar o acesso à informação, aumentar a eficiência nas operações comerciais, melhorar a tomada de decisões, permitir uma experiência de navegação personalizada.



6. Pessoas Envolvidas
    -  Quem são os testadores?
        -  Daniel .
       
7. Local dos Testes
    -  Onde os testes serão realizados?
        -  Em um ambiente pessoal emulando o ambiente real de uso.
        - Utilizando a API serverest localmente.

8. Recursos Necessários
    -  Recursos Humanos: Testador.
    -  Equipamento: Computador.
    -  Software: Postman, Xmind, Jira, GitLab.

9. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 27/05/2024
        -  Data de Conclusão: 03/06/2024
    

