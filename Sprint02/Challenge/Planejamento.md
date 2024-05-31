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

3. Pessoas Envolvidas
-  Quem são os testadores?
    -  Daniel Pontes.
       
    

4. Cenários Macro na Suíte de Testes

- Testes de Criação de Usuários (POST):

    - Tentar cadastrar um usuário com todos os campos preenchidos corretamente.
    - Tentar cadastrar um usuário com o e-mail já existente.
    - Tentar cadastrar um usuário com e-mail de provedores proibidos (gmail, hotmail).
    - Tentar cadastrar um usuario com e-mail em um formato invalido.
    - Tentar cadastrar um usuário sem os campos obrigatórios.
    - Tentar cadastrar um usuário com senha com meno que 5 caracteres e mais que 10 caracteres.

- Testes de Leitura de Usuários (GET):

    - Listar todos os usuários.
    - Buscar por um usuário específico usando um ID válido.
    - Tentar buscar um usuário usando um ID inexistente.

- Testes de Atualização de Usuários (PUT):

    - Atualizar um usuário existente com novos valores válidos.
    - Tentar atualizar um usuário com um e-mail que já está em uso.
    - Se um ID inexistente é usado, verificar se um novo usuário é criado.

- Testes de Exclusão de Usuários (DELETE):

    - Excluir um usuário existente.
    - Tentar excluir um usuário usando um ID inexistente.

5. Testes Candidatos à Automação
- Testes de CRUD:

    - Todos os cenários de testes de criação, leitura, atualização e exclusão são candidatos à automação devido à necessidade de repetição e à eficiência que a automação proporciona.

- Testes de Validação de Dados:

    - Automação de testes que verificam a validação de campos obrigatórios, restrições de e-mail e senha.

- Testes de Integridade e Segurança:

    - Testes que verificam as restrições de e-mail e a impossibilidade de duplicação de usuários são críticos e devem ser automatizados para garantir a segurança e a integridade dos dados.
  
6. Local dos Testes
    -  Onde os testes serão realizados?
        -  Em um ambiente pessoal emulando o ambiente real de uso.

7. Recursos Necessários
    -  Recursos Humanos: Testador.
    -  Equipamento: Computador.
    -  Software: Postman.
    

8. Riscos
    -  Identificação de Riscos: Possíveis problemas que podem ocorrer durante a execução do teste.
        -  Exemplo: Falta de conexão com a internet.
    -  Plano de Contingência: Ações a serem tomadas em caso de riscos.
        -  Exemplo: Usar conexão via rede celular em caso de falha do Wi-Fi.

9. Cronograma
    -  Datas e Prazos: Definir quando cada atividade será realizada.
        -  Data de Início: 27/05/2024
        -  Data de Conclusão: 03/06/2024
    

10. Divulgação dos Resultados
    -  Como os resultados finais serão divulgados:
        -  Documentos Gerados: Relatório dos resultados dos testes, relatório de defeitos.
        -  Métricas Usadas: Quais métricas serão utilizadas para avaliar os resultados.