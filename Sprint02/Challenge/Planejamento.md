1. Nome do Projeto

    -  Usabilidade do site ServeRest.

2. Resumo
    -  Objetivo: Garantir que a API de cadastro de usuários funcione corretamente de acordo com os critérios de aceitação definidos, permitindo ao vendedor de uma loja se cadastrar no marketplace para vender seus produtos.
    - Teste de API: Foco na validação de todas as operações CRUD (Criar, Ler, Atualizar, Deletar) sobre os usuários.
    - Testes de segurança: Validar que os campos de e-mail e senha atendem às exigências de segurança.
    - Testes de validação de dados: Verificar que os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR estão de acordo com as regras especificadas.
    - Testes de integridade: Assegurar que não é possível criar ou atualizar um usuário com um e-mail já utilizado ou com e-mails de provedores proibidos.

    
    -  Resultado Esperado: Descrever o resultado esperado do teste.
        -  Exemplo: Deseja-se verificar se a usabilidade da interface do SITE ServeRest é boa e, para isso, serão aplicados testes simulando usuários pertencentes ao público-alvo.


3. Cenários Macro na Suíte de Testes

    1. Cenário de Criação de Usuários (POST)
        - Objetivo: Garantir que um usuário possa ser criado.

        - CT 01: Cadastrar um usuário com todos os campos (NOME, E-MAIL, PASSWORD, ADMINISTRADOR) preenchidos corretamente.

        - CT 02: Cadastrar um usuário sem preencher algum dos campos obrigatórios.

        - CT 03: Cadastrar um usuário com um e-mail que já está registrado.

        - CT 04: Cadastrar um usuário com um e-mail de provedor proibido (gmail, hotmail).

        - CT 05: Criar um usuário com a senha no limite mínimo (5 caracteres) e máximo (10 caracteres).

        - CT 06: Cadastrar um usuário com senha fora dos limites de tamanho especificados.

        - CT 07: Cadastrar um usuário com um formato de e-mail inválido.


    2. Cenário de Leitura de Usuários (GET)
        - Objetivo: Verificar se a API pode listar todos os usuários registrados corretamente.

        - CT 08: Listar todos os usuários.

        - CT 09: Acessar um usuário específico pelo ID.

        - CT 10: Acessar um usuário com um ID inexistente.

  
    3. Cenário de Atualização de Usuários (PUT)
        - Objetivo: Verificar se a API permite a atualização de um usuário com dados válidos e retorna a resposta adequada

        - CT 11: Atualizar um usuário existente com dados válidos.

        - CT 12: Atualizar um usuário com um e-mail já utilizado por outro usuário.

        - CT 13: Atualizar um usuário com um ID inexistente (deve criar um novo usuário).

        - CT 14: Atualizar um usuário com um e-mail de um provedor proibido.

        - CT 15: Atualizar um usuário usando formato de e-mail inválido.

    4. Cenário de Exclusão de Usuários (DELETE)
        - Objetivo: Verificar se a API permite a exclusão de um usuário existente e retorna uma confirmação adequada.

        - CT 16: Excluir um usuário existente.

        - CT 17: Excluir um usuário com um ID inexistente.

4. Testes Candidatos à Automação
    - Testes de CRUD:

        - Todos os cenários de testes de criação, leitura, atualização e exclusão são candidatos à automação devido à necessidade de repetição e à eficiência que a automação proporciona.

    - Testes de Validação de Dados:

        - Automação de testes que verificam a validação de campos obrigatórios, restrições de e-mail e senha.

    - Testes de Integridade e Segurança:

        - Testes que verificam as restrições de e-mail e a impossibilidade de duplicação de usuários são críticos e devem ser automatizados para garantir a segurança e a integridade dos dados.
    
5. Cenários de Teste Importantes

    1. Cenário 1: Criação de Usuários (POST)

    - Valor Gerado: Verifica a funcionalidade básica da API, assegurando que os vendedores possam se cadastrar e iniciar suas atividades no marketplace do ServeRest. Garantindo a integridade dos dados e assegurando que a entrada de dados segue padrões que evitam erros de comunicação e problemas técnicos no futuro. E Proteger o sistema contra senhas fracas que podem comprometer a segurança do usuário e do sistema.

    2. Cenário 2: Atualização de Usuários (PUT)

    - Valor Gerado: Verifica a robustez da API em lidar com casos onde atualizações se transformam em criações, mantendo a continuidade e a integridade dos dados.

    3. Cenário 4: Exclusão de Usuários (DELETE)

    - Valor Gerado: Assegura que o processo de exclusão está funcionando corretamente e que a tentativa de excluir um usuário inexistente é tratada adequadamente.

6. Pessoas Envolvidas
    -  Quem são os testadores?
        -  Daniel Pontes.
       
7. Local dos Testes
    -  Onde os testes serão realizados?
        -  Em um ambiente pessoal emulando o ambiente real de uso.

8. Recursos Necessários
    -  Recursos Humanos: Testador.
    -  Equipamento: Computador.
    -  Software: Postman.

9. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 27/05/2024
        -  Data de Conclusão: 03/06/2024
    

