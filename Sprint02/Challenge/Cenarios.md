# Cenários de Teste para a API de Usuários

1. Testes de Criação de Usuários (POST)

- Cenário 1: Criar um usuário com todos os campos (NOME, E-MAIL, PASSWORD, ADMINISTRADOR) preenchidos corretamente.
- Cenário 2: Tentar criar um usuário sem preencher algum dos campos obrigatórios.
- Cenário 3: Tentar criar um usuário com um e-mail que já está registrado.
- Cenário 4: Tentar criar um usuário com um e-mail de provedor proibido (gmail, hotmail).
- Cenário 5: Criar um usuário com a senha no limite mínimo (5 caracteres) e máximo (10 caracteres).
- Cenário 6: Tentar criar um usuário com senha fora dos limites de tamanho especificados.
- Cenário 7: Tentar criar um usuário com um formato de e-mail inválido.

2. Testes de Leitura de Usuários (GET)

- Cenário 8: Listar todos os usuários.
- Cenário 9: Tentar acessar um usuário específico pelo ID.
- Cenário 10: Tentar acessar um usuário com um ID inexistente.

3. Testes de Atualização de Usuários (PUT)

- Cenário 11: Atualizar um usuário existente com dados válidos.
- Cenário 12: Tentar atualizar um usuário com um e-mail já utilizado por outro usuário.
- Cenário 13: Tentar atualizar um usuário com um ID inexistente (deve criar um novo usuário).
- Cenário 14: Atualizar um usuário com um e-mail de um provedor proibido.
- Cenário 15: Atualizar um usuário usando formato de e-mail inválido.

4. Testes de Exclusão de Usuários (DELETE)

- Cenário 16: Excluir um usuário existente.
- Cenário 17: Tentar excluir um usuário com um ID inexistente.

# Cenários de Teste Importantes

1. Criação de um Novo Usuário (POST)

- Cenário 1: Tentar cadastrar um usuário com todos os campos (NOME, E-MAIL, PASSWORD, ADMINISTRADOR) preenchidos corretamente.

- Valor Gerado: Verifica a funcionalidade básica da API, assegurando que os vendedores possam se cadastrar e iniciar suas atividades no marketplace do ServeRest.

2. Validação de E-mail Único (POST)

- Cenário 3: Tentar cadastrar um usuário usando um e-mail que já está registrado na base de dados.

- Valor Gerado: Garante a integridade dos dados, evitando conflitos e problemas de identificação ao impedir registros duplicados de e-mail.

3. Restrição de Provedores de E-mail (POST)

- Cenário 4: Tentar cadastrar um usuário com e-mails de provedores específicos proibidos (gmail, hotmail).

- Valor Gerado: Testa regras de negócio específicas que podem estar relacionadas à política de segurança ou estratégia de mercado.

4. Validação de Formato de E-mail (POST)

- Cenário 7: Tentar cadastrar um usuário com um e-mail que não segue um padrão válido (ex: "usuario@@exemplo..com").

- Valor Gerado: Assegura que a entrada de dados segue padrões que evitam erros de comunicação e problemas técnicos no futuro.

5. Criação Condicional de Usuário (PUT)

- Cenário 13: Usar o método PUT para atualizar um usuário, e caso o ID não exista, verificar se um novo usuário é criado.

- Valor Gerado: Verifica a robustez da API em lidar com casos onde atualizações se transformam em criações, mantendo a continuidade e a integridade dos dados.

6. Validação de Senha (POST)

- Cenário 5: Tentar cadastrar um usuário com senhas que não atendem aos critérios de tamanho mínimo (5 caracteres) e máximo (10 caracteres).

- Valor Gerado: Protege o sistema contra senhas fracas que podem comprometer a segurança do usuário e do sistema.

7. Deleção de Usuário (DELETE)

- Cenário 16 e 17: Excluir um usuário existente e tentar excluir um usuário usando um ID inexistente.

- Valor Gerado: Assegura que o processo de exclusão está funcionando corretamente e que a tentativa de excluir um usuário inexistente é tratada adequadamente.