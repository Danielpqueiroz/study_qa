# Casos de Teste

- CT 01:

    - Resultado: Com todos os campos preenchidos corretamente foi possível cadastrar o usuário. 
    - Response: “message”: “Cadastro realizado com sucesso”. status 201 Created.

- CT 02: 

    - Resultado: Com algum dos campos sem preencher não foi possível cadastrar o usuário. 
    - Response: “nome”: “nome não pode ficar em branco”. status 400 Bad Request.
    - Response: “email”: “email não pode ficar em branco”. status 400 Bad Request.
    - Response: “password”: “password não pode ficar em branco”. status 400 Bad Request.
    - Response: “administardor”: “administrador deve ser ‘true’ ou ‘false’ ”. status 400 Bad Request.

- CT 03: 

    - Resultado: Não foi possível cadastrar um usuário já registrado.
    - Response: “message”: “Este email já está sendo usado”. status 400 Bad Request.

- CT 04: 
    - Resultado: Foi permitido o cadastro dos provedores proibidos.
    - Response: “message”: “Cadastro realizado com sucesso”. status 201 Created.

- CT 05: 
    - Resultado: Foi permitido o cadastro de um usuário com a senha contendo 5 caracteres e 10 caracteres.
    - Response: “message”: “Cadastro realizado com sucesso”. status 201 Created.

- CT 06: Cadastrar um usuário com senha fora dos limites de tamanho especificados.
    - Resultado: Foi permitido o cadastro de um usuário com menos de 5 caracteres e acima de 10 caracteres.
    - Response: “message”: “Cadastro realizado com sucesso”. status 201 Created.

- CT 07: Cadastrar um usuário com um formato de e-mail inválido.
    - Resultado: Não foi permitido cadastrar um email em formato invalido.
    - Response: “email”: “email deve ser um email válido”. status 400 Bad Request.

- CT 08: Listar todos os usuários.
    - Resultado: Foi retornada a quantidade de usuários e os cadastros dos usuários.
    - Response: “quantidade”: 784, “usuarios”: [lista dos usuários]. status 200 OK.

- CT 09: Acessar um usuário específico pelo ID.
    - Resultado: Foi retornado o cadastro do usuário buscado pelo id.
    - Response: cadastro do usuario. status 200 OK.

- CT 10: Acessar um usuário com um ID inexistente.
    - Resultado: Não foi possível buscar um usuário com id inexistente.
    - Response: “message”: “Usuário não encontrado”. status 400 Bad Request.

- CT 11: Atualizar um usuário existente com dados válidos.
    - Resultado: Foi permitida a atualização de um usuário com os dados válidos.
    - Response: “message”: “Cadastro realizado com sucesso”. status 200 OK.

- CT 12: Atualizar um usuário com um e-mail já utilizado por outro usuário.
    - Resultado: Foi permitido atualizar o usuário com email já utilizado por outro usuário.
    - Response: “message”: “Registro alterado com sucesso”. status 200 OK.

- CT 13: Atualizar um usuário com um ID inexistente (deve criar um novo usuário).
    - Resultado: Foi possível atualizar o usuário com um id inexistente. Mas criou um novo cadastro.
    - Response: “message”: “Cadastro realizado com sucesso”. status 201 Created.

- CT 14: Atualizar um usuário com um e-mail de um provedor proibido.
    - Resultado: Foi possível atualizar o usuário com email proibido.
    - Response: “message”: “Registro alterado com sucesso”. status 200 OK.

- CT 15: Atualizar um usuário usando formato de e-mail inválido.
    - Resultado: Não foi possível atualizar o usuário informando um email em formato invalido.
    - Response: “email”: “email deve ser um email válido ``. status 400 Bad Request.

- CT 16: Excluir um usuário existente.
    - Resultado:Usuário foi excluído.
    - Response: “message”: “Registro excluído com sucesso”. status 200 OK.

- CT 17: Excluir um usuário com um ID inexistente.
    - Resultado: Não foi possível excluir um usuário com id inexistente.
    - Response: “message”: “Nenhum registro excluído ``. status 200 OK.

- Resultados não esperados: 
    - caso 4: onde foi permitido que o usuário se cadastrar com estes provedores de email proibidos.
    - caso 6: onde foi permitido cadastrar um usuário com a senha menor que 5 caracteres e maior que 10 caracteres.
    - caso 12: onde foi permitido o cadastro de um usuário já cadastrado por outro usuário.

- As provas dos testes estão contidas na pasta  [Assets](Sprint02\Challenge\Assets)

| Caso de Teste | Resultado                                                                                          | Response                                                       |
|---------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **CT 01**     | Com todos os campos preenchidos corretamente foi possível cadastrar o usuário.                    | “message”: “Cadastro realizado com sucesso”. status 201 Created|
| **CT 02**     | Com algum dos campos sem preencher não foi possível cadastrar o usuário.                           | “nome”: “nome não pode ficar em branco”. status 400 Bad Request|
|               |                                                                                                    | “email”: “email não pode ficar em branco”. status 400 Bad Request|
|               |                                                                                                    | “password”: “password não pode ficar em branco”. status 400 Bad Request|
|               |                                                                                                    | “administardor”: “administrador deve ser ‘true’ ou ‘false’”. status 400 Bad Request|
| **CT 03**     | Não foi possível cadastrar um usuário já registrado.                                               | “message”: “Este email já está sendo usado”. status 400 Bad Request|
| **CT 04**     | Foi permitido o cadastro dos provedores proibidos.                                                 | “message”: “Cadastro realizado com sucesso”. status 201 Created|
| **CT 05**     | Foi permitido o cadastro de um usuário com a senha contendo 5 caracteres e 10 caracteres.          | “message”: “Cadastro realizado com sucesso”. status 201 Created|
| **CT 06**     | Foi permitido o cadastro de um usuário com menos de 5 caracteres e acima de 10 caracteres.         | “message”: “Cadastro realizado com sucesso”. status 201 Created|
| **CT 07**     | Não foi permitido cadastrar um email em formato invalido.                                          | “email”: “email deve ser um email válido”. status 400 Bad Request|
| **CT 08**     | Foi retornada a quantidade de usuários e os cadastros dos usuários.                                | “quantidade”: 784, “usuarios”: [lista dos usuários]. status 200 OK|
| **CT 09**     | Foi retornado o cadastro do usuário buscado pelo id.                                               | cadastro do usuario. status 200 OK                             |
| **CT 10**     | Não foi possível buscar um usuário com id inexistente.                                             | “message”: “Usuário não encontrado”. status 400 Bad Request    |
| **CT 11**     | Foi permitida a atualização de um usuário com os dados válidos.                                    | “message”: “Cadastro realizado com sucesso”. status 200 OK     |
| **CT 12**     | Foi permitido atualizar o usuário com email já utilizado por outro usuário.                        | “message”: “Registro alterado com sucesso”. status 200 OK      |
| **CT 13**     | Foi possível atualizar o usuário com um id inexistente. Mas criou um novo cadastro.                | “message”: “Cadastro realizado com sucesso”. status 201 Created|
| **CT 14**     | Foi possível atualizar o usuário com email proibido.                                               | “message”: “Registro alterado com sucesso”. status 200 OK      |
| **CT 15**     | Não foi possível atualizar o usuário informando um email em formato invalido.                      | “email”: “email deve ser um email válido”. status 400 Bad Request|
| **CT 16**     | Usuário foi excluído.                                                                              | “message”: “Registro excluído com sucesso”. status 200 OK      |
| **CT 17**     | Não foi possível excluir um usuário com id inexistente.                                            | “message”: “Nenhum registro excluído”. status 200 OK           |


[ ✔️ ]