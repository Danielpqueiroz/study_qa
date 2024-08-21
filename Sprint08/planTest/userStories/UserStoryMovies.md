### User Story: [API] Movies

**Como** um usuário do sistema de cinema

**Gostaria** de poder adicionar, visualizar, atualizar e remover filmes no catálogo

**Para que** eu possa gerenciar o acervo de filmes disponíveis para os usuários.

---

### DoR (Definition of Ready)

- Banco de dados e infraestrutura para desenvolvimento disponibilizados.
- API de autenticação implementada.
- Ambiente de testes disponibilizado.
- Requisitos de negócio claramente definidos.
- API de categorias de filmes implementada.

---

### DoD (Definition of Done)

- CRUD de filmes implementado (CRIAR, ATUALIZAR, LISTAR e DELETAR).
- Análise de testes cobrindo a rota de filmes.
- Matriz de rastreabilidade atualizada.
- Automação de testes baseada na análise realizada.
- Código revisado e aprovado em PRs.
- Documentação do endpoint da API atualizada no Swagger.

---

### Acceptance Criteria

### Requisitos Funcionais

- **Autenticação:** Os clientes e administradores deverão ser autenticados para realizar ações na rota de filmes.
- **Adicionar Filme:** Deve ser possível criar um novo filme no catálogo e o sistema deverá criar o filme e atribuir um ID único, retornar uma resposta de sucesso com o status `201 Created`, incluindo o ID do filme.
- **Visualizar Filmes:** Deve ser possível listar todos os filmes cadastrados.
- **Visualizar Filme por ID:** Deve ser possível visualizar os detalhes de um filme específico ao fornecer seu ID e o sistema deverá retornar uma resposta de erro com o status `404 Not Found`.
- **Atualizar Filme:** Deve ser possível atualizar as informações de um filme existente no catálogo e retornar uma resposta de sucesso com o status `200 OK` e os detalhes atualizados do filme.
- **Remover Filme:** Deve ser possível deletar um filme do catálogo só por administradores e retornar uma resposta de sucesso com o status `204 No Content`.
- **Validações:** Não deve ser possível cadastrar filmes duplicados (mesmo título e ano).
- **Autorização:** Apenas administradores devem ter permissão para adicionar, deletar ou atualizar filmes.
- **Evidências:** Os testes executados deverão conter evidências.
- **Cobertura de Testes:** A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos, como tentativas de deletar filmes inexistentes.

### Requisitos Não Funcionais de Performance

- **Capacidade de Processamento:** A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo.
- **Tempo de Resposta para Criação:** O tempo médio de resposta para a criação de um novo filme não deve exceder 200 milissegundos.
- **Tempo de Resposta para Listagem:** A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 100 milissegundos.
- **Paginação:** A lista de filmes deve ser paginada, com no máximo 20 filmes por página.
- **Tempo de Resposta para Detalhes:** A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos.
- **Capacidade de Processamento para Atualização:** A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo.
- **Tempo de Resposta para Atualização:** O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 300 milissegundos.
- **Capacidade de Processamento para Exclusão:** A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo.
- **Tempo de Resposta para Exclusão:** O tempo médio de resposta para a exclusão de um filme não deve exceder 400 milissegundos.

### Requisitos Funcionais - Usuário

- **Autenticação:** Os usuários deverão ser autenticados para realizar ações na rota de filmes.
- **Visualizar Filmes:** Deve ser possível listar todos os filmes cadastrados.
- **Visualizar Filme por ID:** Deve ser possível visualizar os detalhes de um filme específico ao fornecer seu ID.
  - Se o filme não existir, o sistema deverá retornar uma resposta de erro com o status 404 Not Found.

### Requisitos Funcionais - Administrador

- **Autenticação:** Os administradores deverão ser autenticados para realizar ações na rota de filmes.

- **Adicionar Filme:** Deve ser possível criar um novo filme no catálogo.
  - O sistema deverá validar os campos obrigatórios e a unicidade do título do filme.
  - Se as validações passarem, o sistema deverá criar o filme e atribuir um ID único.
  - O sistema deverá retornar uma resposta de sucesso com o status `201 Created`, incluindo o ID do filme.

- **Buscar Todos os Filmes:** Deve ser possível listar todos os filmes cadastrados.
  - O usuário deverá enviar uma solicitação GET para o endpoint `/movies`.
  - O sistema deverá retornar uma lista de todos os filmes cadastrados com detalhes.

- **Buscar Filme por ID:** Deve ser possível visualizar os detalhes de um filme específico ao fornecer seu ID.
  - O usuário deverá enviar uma solicitação GET para o endpoint `/movies/{id}`, onde `{id}` é o ID do filme desejado.
  - O sistema deverá verificar a existência do filme e retornar seus detalhes.
  - Se o filme não existir, o sistema deverá retornar uma resposta de erro com o status `404 Not Found`.

- **Atualizar Filme:** Deve ser possível atualizar as informações de um filme existente no catálogo.
  - O sistema deverá verificar a existência do filme, permitir a atualização de campos específicos, e validar os dados.
  - Se todas as validações passarem, o sistema deverá atualizar os detalhes do filme.
  - O sistema deverá retornar uma resposta de sucesso com o status `200 OK` e os detalhes atualizados do filme.

- **Remover Filme:** Deve ser possível deletar um filme do catálogo.
  - O sistema deverá verificar a existência do filme e removê-lo permanentemente do banco de dados.
  - O sistema deverá retornar uma resposta de sucesso com o status `204 No Content`.