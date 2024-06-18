# Cenário de Criação de Usuários (POST)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 01**     | Cadastrar um usuário com todos os campos preenchidos corretamente. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | Sim |
| **CT 02**     | Cadastrar um usuário sem preencher o campo nome obrigatório. | “nome”: “nome não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | Sim |
| **CT 03**     | Cadastrar um usuário sem preencher o campo email obrigatório. | “email”: “email não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | Sim |
| **CT 04**     | Cadastrar um usuário sem preencher o campo password obrigatório. | “password”: “password não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | Sim |
| **CT 05**     | Cadastrar um usuário sem preencher o campo administrador obrigatório. | ‘true’ ou ‘false’”. status 400 Bad Request | ✅ | - | Sim |
| **CT 06**     | Cadastrar um usuário com um e-mail que já está registrado. | “message”: “Este email já está sendo usado”. status 400 Bad Request | ✅ | - | Sim |
| **CT 07**     | Cadastrar um usuário com um e-mail de provedor proibido.(Gmail e Hotmail) | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para bloquear e-mails proibidos | Sim |
| **CT 08**     | Criar um usuário com a senha no limite mínimo (5 caracteres) e máximo (10 caracteres). | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | Sim |
| **CT 09**     | Cadastrar um usuário com senha fora dos limites de tamanho especificados. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para validar o tamanho da senha | Sim |
| **CT 10**     | Cadastrar um usuário com um formato de e-mail inválido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - | Sim |

# Cenário de Leitura de Usuários (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 11**     | Listar todos os usuários. | “quantidade”: 784, “usuarios”: [lista dos usuários]. status 200 OK | ✅ | - | Sim |
| **CT 12**     | Acessar um usuário específico pelo ID. | cadastro do usuario. status 200 OK | ✅ | - | Sim |
| **CT 13**     | Acessar um usuário com um ID inexistente. | “message”: “Usuário não encontrado”. status 400 Bad Request | ✅ | - | Sim |

# Cenário de Atualização de Usuários (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 14**     | Atualizar um usuário existente com dados válidos. | “message”: “Cadastro realizado com sucesso”. status 200 OK | ✅ | - | Sim |
| **CT 15**     | Atualizar um usuário com um e-mail já utilizado por outro usuário. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails duplicados | Sim |
| **CT 16**     | Atualizar um usuário com um ID inexistente (deve criar um novo usuário). | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | Sim |
| **CT 17**     | Atualizar um usuário com um e-mail de um provedor proibido. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails proibidos | Sim |
| **CT 18**     | Atualizar um usuário usando formato de e-mail inválido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - | Sim |

# Cenário de Exclusão de Usuários (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 19**     | Excluir um usuário existente. | “message”: “Registro excluído com sucesso”. status 200 OK | ✅ | - | Sim |
| **CT 20**     | Excluir um usuário com um ID inexistente. | “message”: “Nenhum registro excluído”. status 200 OK | ✅ | - | Sim |

# Cenário de Autenticação (POST) - US 002: [API] Login

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 21**     | Autenticar um usuário com credenciais válidas. | “token”: “<token_value>”. status 200 OK | ✅ | - | Sim |
| **CT 22**     | Autenticar um usuário não cadastrado. | “message”: “Usuário não encontrado”. status 401 Unauthorized | ✅ | - | Sim |
| **CT 23**     | Autenticar um usuário com senha inválida. | “message”: “Senha inválida”. status 401 Unauthorized | ✅ | - | Sim |
| **CT 24**     | Verificar a geração do token Bearer após autenticação. | “token”: “<token_value>”. status 200 OK | ✅ | - | Sim |
| **CT 25**     | Verificar a validade do token Bearer (10 minutos). | “token_validity”: “10 minutos”. status 200 OK | ✅ | - | Não |

# Cenário de Criação de Produtos (POST) - US 003: [API] Produtos

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 26**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos POST. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | Sim |
| **CT 27**     | Cadastrar um produto com todos os campos preenchidos corretamente. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | Sim |
| **CT 28**     | Cadastrar um produto sem preencher o campo nome obrigatório. | “message”: “Campo nome não preenchido”. status 400 Bad Request | ✅ | - | Sim |
| **CT 29**     | Cadastrar um produto sem preencher o campo preco obrigatório. | “message”: “Campo preco não preenchido”. status 400 Bad Request | ✅ | - | Sim |
| **CT 30**     | Cadastrar um produto sem preencher o campo descricao obrigatório. | “message”: “Campo descricao não preenchido”. status 400 Bad Request | ✅ | - | Sim |
| **CT 31**     | Cadastrar um produto sem preencher o campo quantidade obrigatório. | “message”: “Campo quantidade não preenchido”. status 400 Bad Request | ✅ | - | Sim |
| **CT 32**     | Cadastrar um produto com um nome que já está registrado. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - | Sim |
| **CT 33**     | Cadastrar um produto com um nome inválido. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | A API não deveria deixar cadastrar um produto com nome inválido. | Sim |

# Cenário de Leitura de Produtos (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 34**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos GET. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ❌ | Foi permitida a ação GET sem autenticação | Sim |
| **CT 35**     | Listar todos os produtos. | “produtos”: [lista dos produtos]. status 200 OK | ✅ | - | Sim |
| **CT 36**     | Acessar um produto específico pelo ID. | cadastro do produto. status 200 OK | ✅ | - | Sim |
| **CT 37**     | Acessar um produto com um ID inexistente. | “message”: “Produto não encontrado”. status 400 Bad Request | ✅ | - | Sim |

# Cenário de Atualização de Produtos (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 38**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos PUT. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | Sim |
| **CT 39**     | Atualizar um produto existente com dados válidos. | “message”: “Produto atualizado com sucesso”. status 200 OK | ✅ | - | Sim |
| **CT 40**     | Atualizar um produto com um nome já utilizado por outro produto. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - | Sim |
| **CT 41**     | Atualizar um produto com um ID inexistente (deve criar um novo produto). | “message”: “Produto criado com sucesso”. status 201 Created | ✅ | - | Sim |
| **CT 42**     | Atualizar um produto com um nome inválido. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | Não deveria deixar atualizar com nome inválido. | Sim |
| **CT 43**     | Produtos criados através do PUT não poderão ter nomes previamente cadastrados. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | - | Sim |

# Cenário de Exclusão de Produtos (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 44**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos DELETE. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | Sim |
| **CT 45**     | Não deve ser possível excluir produtos que estão dentro de carrinhos. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - | Sim |
| **CT 46**     | Excluir um produto existente. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - | Sim |
| **CT 47**     | Excluir um produto com um ID inexistente. | “message”: “Nenhum produto encontrado”. status 400 Bad Request | ✅ | Foi retornado o Status: 200, mas deveria ser da serie 400. | Sim |
