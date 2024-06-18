# Cenário de Criação de Usuários (POST)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 01**     | Cadastrar um usuário com todos os campos preenchidos corretamente. | Com todos os campos preenchidos corretamente foi possível cadastrar o usuário. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - |
| **CT 02**     | Cadastrar um usuário sem preencher o campo nome obrigatório. | Com algum dos campos sem preencher não foi possível cadastrar o usuário. | “nome”: “nome não pode ficar em branco”. status 400 Bad Request<br>| ✅ | - |
| **CT 03**     | Cadastrar um usuário sem preencher o campo email obrigatório. | Com algum dos campos sem preencher não foi possível cadastrar o usuário. | “email”: “email não pode ficar em branco”. status 400 Bad Request<br>| ✅ | - |
| **CT 04**     | Cadastrar um usuário sem preencher o campo password obrigatório. | Com algum dos campos sem preencher não foi possível cadastrar o usuário. | “password”: “password não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - |
| **CT 05**     | Cadastrar um usuário sem preencher o campo administrador obrigatório. | Com algum dos campos sem preencher não foi possível cadastrar o usuário. | ‘true’ ou ‘false’”. status 400 Bad Request | ✅ | - |
| **CT 06**     | Cadastrar um usuário com um e-mail que já está registrado. | Não foi possível cadastrar um usuário já registrado. | “message”: “Este email já está sendo usado”. status 400 Bad Request | ✅ | - |
| **CT 07**     | Cadastrar um usuário com um e-mail de provedor proibido.(Gmail e Hotmail) | Foi permitido o cadastro dos provedores proibidos. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para bloquear e-mails proibidos |
| **CT 08**     | Criar um usuário com a senha no limite mínimo (5 caracteres) e máximo (10 caracteres). | Foi permitido o cadastro de um usuário com a senha contendo 5 caracteres e 10 caracteres. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - |
| **CT 09**     | Cadastrar um usuário com senha fora dos limites de tamanho especificados. | Foi permitido o cadastro de um usuário com menos de 5 caracteres e acima de 10 caracteres. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para validar o tamanho da senha |
| **CT 10**     | Cadastrar um usuário com um formato de e-mail inválido. | Não foi permitido cadastrar um email em formato invalido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - |

# Cenário de Leitura de Usuários (GET)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 11**     | Listar todos os usuários. | Foi retornada a quantidade de usuários e os cadastros dos usuários. | “quantidade”: 784, “usuarios”: [lista dos usuários]. status 200 OK | ✅ | - |
| **CT 12**     | Acessar um usuário específico pelo ID. | Foi retornado o cadastro do usuário buscado pelo id. | cadastro do usuario. status 200 OK | ✅ | - |
| **CT 13**     | Acessar um usuário com um ID inexistente. | Não foi possível buscar um usuário com id inexistente. | “message”: “Usuário não encontrado”. status 400 Bad Request | ✅ | - |

# Cenário de Atualização de Usuários (PUT)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 14**     | Atualizar um usuário existente com dados válidos. | Foi permitida a atualização de um usuário com os dados válidos. | “message”: “Cadastro realizado com sucesso”. status 200 OK | ✅ | - |
| **CT 15**     | Atualizar um usuário com um e-mail já utilizado por outro usuário. | Foi permitido atualizar o usuário com email já utilizado por outro usuário. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails duplicados |
| **CT 16**     | Atualizar um usuário com um ID inexistente (deve criar um novo usuário). | Foi possível atualizar o usuário com um id inexistente. Mas criou um novo cadastro. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - |
| **CT 17**     | Atualizar um usuário com um e-mail de um provedor proibido. | Foi possível atualizar o usuário com email proibido. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails proibidos |
| **CT 18**     | Atualizar um usuário usando formato de e-mail inválido. | Não foi possível atualizar o usuário informando um email em formato invalido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - |

# Cenário de Exclusão de Usuários (DELETE)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 19**     | Excluir um usuário existente. | Usuário foi excluído. | “message”: “Registro excluído com sucesso”. status 200 OK | ✅ | - |
| **CT 20**     | Excluir um usuário com um ID inexistente. | Não foi possível excluir um usuário com id inexistente. | “message”: “Nenhum registro excluído”. status 200 OK | ✅ | - |

# Cenário de Autenticação (POST) - US 002: [API] Login

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 21**     | Autenticar um usuário com credenciais válidas. | Autenticação bem-sucedida. | “token”: “<token_value>”. status 200 OK | ✅ | - |
| **CT 21**     | Autenticar um usuário não cadastrado. | Autenticação falhou. | “message”: “Usuário não encontrado”. status 401 Unauthorized | ✅ | - |
| **CT 22**     | Autenticar um usuário com senha inválida. | Autenticação falhou. | “message”: “Senha inválida”. status 401 Unauthorized | ✅ | - |
| **CT 23**     | Verificar a geração do token Bearer após autenticação. | Token Bearer gerado. | “token”: “<token_value>”. status 200 OK | ✅ | - |
| **CT 24**     | Verificar a validade do token Bearer (10 minutos). | Token válido por 10 minutos. | “token_validity”: “10 minutos”. status 200 OK | ✅ | - |

# Cenário de Criação de Produtos (POST) - US 003: [API] Produtos

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 25**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos POST. |  Token de acesso ausente, inválido, expirado. | “message”: “ Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - |
| **CT 26**     | Cadastrar um produto com todos os campos preenchidos corretamente. | Produto cadastrado com sucesso. | “message”: “ Cadastro realizado com sucesso”. status 201 Created | ✅ | - |
| **CT 27**     | Cadastrar um produto sem preencher o campo nome obrigatório. | Falha no cadastro do produto. | “message”: “Campo nome não preenchido”. status 400 Bad Request | ✅ | - |
| **CT 28**     | Cadastrar um produto sem preencher o campos preco obrigatório. | Falha no cadastro do produto. | “message”: “Campo preco não preenchido”. status 400 Bad Request | ✅ | - |
| **CT 29**     | Cadastrar um produto sem preencher o campos descricao obrigatório. | Falha no cadastro do produto. | “message”: “Campo descricao não preenchido”. status 400 Bad Request | ✅ | - |
| **CT 30**     | Cadastrar um produto sem preencher o campos quantidade obrigatório. | Falha no cadastro do produto. | “message”: “Campo quantidade não preenchido”. status 400 Bad Request | ✅ | - |
| **CT 31**     | Cadastrar um produto com um nome que já está registrado. | Falha no cadastro do produto. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - |
| **CT 32**     | Cadastrar um produto com um nome inválido. | Falha no cadastro do produto. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | - |

# Cenário de Leitura de Produtos (GET)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 33**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos GET. | Token de acesso ausente, inválido, expirado. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”.”. status 401 Unauthorized | ❌ | - |
| **CT 34**     | Listar todos os produtos. | Produtos listados com sucesso. | “produtos”: [lista dos produtos]. status 200 OK | ✅ | - |
| **CT 35**     | Acessar um produto específico pelo ID. | Produto acessado com sucesso. | cadastro do produto. status 200 OK | ✅ | - |
| **CT 36**     | Acessar um produto com um ID inexistente. | Produto não encontrado. | “message”: “Produto não encontrado”. status 400 Bad Request | ✅ | - |

# Cenário de Atualização de Produtos (PUT)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 37**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos PUT. | Token de acesso ausente, inválido, expirado. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - |
| **CT 38**     | Atualizar um produto existente com dados válidos. | Produto atualizado com sucesso. | “message”: “Produto atualizado com sucesso”. status 200 OK | ✅ | - |
| **CT 39**     | Atualizar um produto com um nome já utilizado por outro produto. | Falha na atualização do produto. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - |
| **CT 40**     | Atualizar um produto com um ID inexistente (deve criar um novo produto). | Produto criado com sucesso. | “message”: “Produto criado com sucesso”. status 201 Created | ✅ | - |
| **CT 41**     | Atualizar um produto com um nome inválido. | Falha na atualização do produto. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | - |
| **CT 42**     | Produtos criados através do PUT não poderão ter nomes previamente cadastrados.| Falha na atualização do produto. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | - |

# Cenário de Exclusão de Produtos (DELETE)

| Caso de Teste | Descrição | Resultado | Response | Status | Observações |
|---------------|-----------|-----------|----------|--------|-------------|
| **CT 43**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos DELETE. | Token de acesso ausente, inválido, expirado. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - |
| **CT 44**     | Não deve ser possível excluir produtos que estão dentro de carrinhos | Produto excluído com sucesso. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - |
| **CT 45**     | Excluir um produto existente. | Produto excluído com sucesso. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - |
| **CT 46**     | Excluir um produto com um ID inexistente. | Falha na exclusão do produto. | “message”: “Nenhum produto encontrado”. status 400 Bad Request | ✅ | - |
