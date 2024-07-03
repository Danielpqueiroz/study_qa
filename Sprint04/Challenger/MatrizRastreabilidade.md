# Matriz de Rastreabilidade

## Cenário de Criação de Usuários (POST)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 01**     | Cadastrar um usuário com todos os campos preenchidos corretamente. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 02**     | Cadastrar um usuário sem preencher o campo nome obrigatório. | “nome”: “nome não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | ✅ |
| **CT 03**     | Cadastrar um usuário sem preencher o campo email obrigatório. | “email”: “email não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | ✅ |
| **CT 04**     | Cadastrar um usuário sem preencher o campo password obrigatório. | “password”: “password não pode ficar em branco”. status 400 Bad Request<br> | ✅ | - | ✅ |
| **CT 05**     | Cadastrar um usuário sem preencher o campo administrador obrigatório. | ‘true’ ou ‘false’”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 06**     | Cadastrar um usuário com um e-mail que já está registrado. | “message”: “Este email já está sendo usado”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 07**     | Cadastrar um usuário com um e-mail de provedor proibido.(Gmail e Hotmail) | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para bloquear e-mails proibidos | ✅ |
| **CT 08**     | Criar um usuário com a senha no limite mínimo (5 caracteres) e máximo (10 caracteres). | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 09**     | Cadastrar um usuário com senha fora dos limites de tamanho especificados. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ❌ | Deve ser corrigido para validar o tamanho da senha | ✅ |
| **CT 10**     | Cadastrar um usuário com um formato de e-mail inválido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 11**     | Cadastrar nome de usuário com mais de 255 caracteres | “email”: “nome deve ter menos de 255 caracteres”. status 400 Bad Request | ✅ | Deveria ter um filtro para limitar a quantidade de caracteres | ✅ |
| **CT 12**     | Cadastrar nome de usuário com caracteres especiais | “email”: “nome não pode conter alguns caracteres especiais”. status 400 Bad Request | ✅ | Deveria ter um filtro para não deixar alguns caracteres especiais. | ✅ |


## Cenário de Leitura de Usuários (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 13**     | Listar todos os usuários. | “quantidade”: 784, “usuarios”: [lista dos usuários]. status 200 OK | ✅ | - | ✅ |
| **CT 14**     | Acessar um usuário específico pelo ID. | cadastro do usuario. status 200 OK | ✅ | - | ✅ |
| **CT 15**     | Acessar um usuário com um ID inexistente. | “message”: “Usuário não encontrado”. status 400 Bad Request | ✅ | - | ✅ |

## Cenário de Atualização de Usuários (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 16**     | Atualizar um usuário existente com dados válidos. | “message”: “Cadastro realizado com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 17**     | Atualizar um usuário com um e-mail já utilizado por outro usuário. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails duplicados | ✅ |
| **CT 18**     | Atualizar um usuário com um ID inexistente (deve criar um novo usuário). | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 19**     | Atualizar um usuário com um e-mail de um provedor proibido. | “message”: “Registro alterado com sucesso”. status 200 OK | ❌ | Deve ser corrigido para bloquear e-mails proibidos | ✅ |
| **CT 20**     | Atualizar um usuário usando formato de e-mail inválido. | “email”: “email deve ser um email válido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 21**     | Cadastrar nome de usuário com mais de 255 caracteres | “email”: “nome deve ter menos de 255 caracteres”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 22**     | Cadastrar nome de usuário com caracteres especiais | “email”: “nome não pode conter alguns caracteres especiais”. status 400 Bad Request | ✅ | - | ✅ |

## Cenário de Exclusão de Usuários (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 23**     | Excluir um usuário existente. | “message”: “Registro excluído com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 24**     | Excluir um usuário com um ID inexistente. | “message”: “Nenhum registro excluído”. status 200 OK | ✅ | - | ✅ |

## Cenário de Autenticação (POST) - US 002: [API] Login

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 25**     | Autenticar um usuário com credenciais válidas. | “token”: “<token_value>”. status 200 OK | ✅ | - | ✅ |
| **CT 26**     | Autenticar um usuário não cadastrado. | “message”: “Usuário não encontrado”. status 401 Unauthorized | ✅ | - | ✅ |
| **CT 27**     | Autenticar um usuário com senha inválida. | “message”: “Senha inválida”. status 401 Unauthorized | ✅ | - | ✅ |
| **CT 28**     | Verificar a geração do token Bearer após autenticação. | “token”: “<token_value>”. status 200 OK | ✅ | - | ✅ |
| **CT 29**     | Verificar a validade do token Bearer (10 minutos). | “token_validity”: “10 minutos”. status 200 OK | ✅ | - | ❌ |

## Cenário de Criação de Produtos (POST) - US 003: [API] Produtos

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 30**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos POST. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | ✅ |
| **CT 31**     | Cadastrar um produto com todos os campos preenchidos corretamente. | “message”: “Cadastro realizado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 32**     | Cadastrar um produto sem preencher o campo nome obrigatório. | “message”: “Campo nome não preenchido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 33**     | Cadastrar um produto sem preencher o campo preco obrigatório. | “message”: “Campo preco não preenchido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 34**     | Cadastrar um produto sem preencher o campo descricao obrigatório. | “message”: “Campo descricao não preenchido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 35**     | Cadastrar um produto sem preencher o campo quantidade obrigatório. | “message”: “Campo quantidade não preenchido”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 36**     | Cadastrar um produto com um nome que já está registrado. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 37**     | Cadastrar um produto com um nome inválido. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | A API não deveria deixar cadastrar um produto com nome inválido. | ✅ |
| **CT 38**     | Cadastrar nome do produto com mais de 255 caracteres | “email”: “nome deve ter menos de 255 caracteres”. status 400 Bad Request | ✅ | Deveria ter um filtro para limitar a quantidade de caracteres | ✅ |
| **CT 39**     | Cadastrar nome do produto com caracteres especiais | “email”: “nome não pode conter alguns caracteres especiais”. status 400 Bad Request | ✅ | Deveria ter um filtro para não deixar alguns caracteres especiais. | ✅ |

## Cenário de Leitura de Produtos (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 40**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos GET. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ❌ | Foi permitida a ação GET sem autenticação | ✅ |
| **CT 41**     | Listar todos os produtos. | “produtos”: [lista dos produtos]. status 200 OK | ✅ | - | ✅ |
| **CT 42**     | Acessar um produto específico pelo ID. | cadastro do produto. status 200 OK | ✅ | - | ✅ |
| **CT 43**     | Acessar um produto com um ID inexistente. | “message”: “Produto não encontrado”. status 400 Bad Request | ✅ | - | ✅ |

## Cenário de Atualização de Produtos (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 44**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos PUT. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | ✅ |
| **CT 45**     | Atualizar um produto existente com dados válidos. | “message”: “Produto atualizado com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 46**     | Atualizar um produto com um nome já utilizado por outro produto. | “message”: “Nome do produto já utilizado”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 47**     | Atualizar um produto com um ID inexistente (deve criar um novo produto). | “message”: “Produto criado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 48**     | Atualizar um produto com um nome inválido. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | Não deveria deixar atualizar com nome inválido. | ✅ |
| **CT 49**     | Produtos criados através do PUT não poderão ter nomes previamente cadastrados. | “message”: “Nome do produto inválido”. status 400 Bad Request | ✅ | - | ✅ |

## Cenário de Exclusão de Produtos (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 50**     | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos DELETE. | “message”: “Token de acesso ausente, inválido, expirado ou usuário do token não existe mais”. status 401 Unauthorized | ✅ | - | ✅ |
| **CT 51**     | Não deve ser possível excluir produtos que estão dentro de carrinhos. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 52**     | Excluir um produto existente. | “message”: “Produto excluído com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 53**     | Excluir um produto com um ID inexistente. | “message”: “Nenhum produto encontrado”. status 400 Bad Request | ✅ | Foi retornado o Status: 200, mas deveria ser da serie 400. | ✅ |


## Cenário de Criação de Carrinho (POST)
| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|---------------------|
| **CT 54**     | Usuários não autenticados não devem conseguir criar um carrinho. | Status: 401, Token de acesso ausente, inválido, expirado ou usuário do token não existe mais. | ✅ | - | ✅ |
| **CT 55**     | Adicionar um produto existente no carrinho. | Status: 201, Cadastro realizado com sucesso. | ✅ | - | ✅ |
| **CT 56**     | Adicionar um produto com id vazio no carrinho. |Status: 400, idProduto não pode ficar em branco. | ✅ | - | ✅ |
| **CT 57**     | Adicionar um produto com id inexistente no carrinho. | Status: 400, Produto não encontrado. | ✅ | - | ✅ |
| **CT 58**     | Adicionar um produto fora de estoque no carrinho. | Status 400, Produto não possui quantidade suficiente | ✅ | - | ✅ |
| **CT 59**     | Adicionar um produto com quantidade menor igual a zero no carrinho. | Status: 400, quantidade deve ser um número positivo | ✅ | - | ✅ |
| **CT 60**     | Verificar se após colocar um produto no carrinho o estoque foi alterado. | Status: 201, Cadastro realizado com sucesso. | ✅ | - | ✅ |

## Cenário de Leitura de Carrinho (GET)
| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|---------------------|
| **CT 61**     | Usuários não autenticados não devem conseguir buscar o(s) carrinho(s). | Status: 401, Token de acesso ausente, inválido, expirado ou usuário do token não existe mais. | ❌ | - | ✅ |
| **CT 62**     | Listar todos os itens do carrinho. | Status: 200, com a quantidade de carrinhos e os produtos de cada carrinho. | ✅ | - | ✅ |
| **CT 63**     | Visualizar um carrinho pelo ID. | Status: 200, com os produtos contidos no carrinho em especifico. | ✅ | - | ✅ |
| **CT 64**     | Visualizar um carrinho com ID inexistente. | Status: 400, Carrinho não encontrado. | ✅ | - | ✅ |
| **CT 65**     | Buscar carrinho mesmo não sendo administrador. | Status: 401, usuário não é administrador. | ❌ | - | ✅ |

## Cenário de Atualização de Carrinho (PUT)
| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|---------------------|
| **CT 67**     | Usuários não autenticados não devem conseguir atualizar o carrinho. | Status: 401, Token de acesso ausente, inválido, expirado ou usuário do token não existe mais. | ❌ | Status: 405, e que não foi permitida realizar a rota PUT. | ✅ |
| **CT 68**     | Atualizar a quantidade de um produto no carrinho. | Status: 200, Carrinho alterado com sucesso. | ❌ | Status: 405, e que não foi permitida realizar a rota PUT. | ✅ |
| **CT 69**     | Atualizar adicionar um produto no carrinho. | Status: 200, Carrinho alterado com sucesso. | ❌ | Status: 405, e que não foi permitida realizar a rota PUT. | ✅ |
| **CT 70**     | Atualizar retirar um produto do carrinho. | Status: 200, Carrinho alterado com sucesso. | ❌ | Status: 405, e que não foi permitida realizar a rota PUT. | ✅ |

## Cenário de Exclusão de Carrinho (DELETE)
| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|---------------------|
| **CT 71**     | Usuários não autenticados não devem conseguir deletar um carrinho. | Status: 401, Token de acesso ausente, inválido, expirado ou usuário do token não existe mais. | ✅ | - | ✅ |
| **CT 72**     | Remover carrinho após concluir a compra. | Status: 200, Registro excluído com sucesso. | ✅ | - | ✅ |
| **CT 73**     | Remover carrinho de um usuário sem carrinho. | Status: 400, Não foi encontrado carrinho para esse usuário. | ✅ | - | ✅ |
| **CT 74**     | Remover carrinho após cancelar a compra. | Status: 200, Registro excluído com sucesso. Estoque dos produtos reabastecido | ✅ | - | ✅ |
| **CT 75**     | Verificar estoque após remover carrinho e cancelar a compra. | Status: 200, Registro excluído com sucesso. Estoque dos produtos reabastecido | ✅ | - | ✅ |
| **CT 76**     | Verificar estoque após remover carrinho e concluir a compra. | Status: 200, Registro excluído com sucesso. | ✅ | - | ✅ |



