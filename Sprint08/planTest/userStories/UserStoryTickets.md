### User Story: [API] Tickets

**Como** um usuário do sistema de cinema

**Gostaria** de poder criar, visualizar, atualizar e remover tickets de cinema

**Para que** eu possa gerenciar a venda e disponibilidade de ingressos de forma eficiente.

---

### DoR (Definition of Ready)

- Banco de dados e infraestrutura para desenvolvimento disponibilizados.
- API de autenticação implementada.
- Ambiente de testes disponibilizado.
- Requisitos de negócio claramente definidos.
- API de filmes implementada (se aplicável).

---

### DoD (Definition of Done)

- CRUD de tickets implementado (CRIAR, ATUALIZAR, LISTAR e DELETAR).
- Análise de testes cobrindo a rota de tickets.
- Matriz de rastreabilidade atualizada.
- Automação de testes baseada na análise realizada.
- Código revisado e aprovado em PRs.
- Documentação do endpoint da API atualizada no Swagger.

---

### Acceptance Criteria

- **Autenticação:** Os clientes deverão ser autenticados para realizar ações na rota de tickets.
- **Criar Ticket:** Deve ser possível criar um novo ticket.
- **Visualizar Tickets:** Deve ser possível listar todos os tickets cadastrados.
- **Visualizar Ticket por ID:** Deve ser possível visualizar os detalhes de um ticket específico ao fornecer seu ID.
- **Atualizar Ticket:** Deve ser possível atualizar as informações de um ticket existente.
- **Remover Ticket:** Deve ser possível deletar um ticket.
- **Validações:** Não deve ser possível criar tickets para sessões inexistentes.
- **Validação de Campos Obrigatórios:** O sistema deverá validar que todos os campos obrigatórios estão corretamente preenchidos, incluindo o ID do Filme, ID do Usuário, Número do Assento, Preço do Ingresso e Data de Apresentação.
- **Autorização:** Apenas administradores devem ter permissão para deletar ou atualizar tickets.
- **Evidências:** Os testes executados deverão conter evidências.
- **Cobertura de Testes:** A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos, como tentativas de criar tickets duplicados.

---
Requisitos Funcionais:

- **Criação de Ingressos:** Os clientes deverão enviar uma solicitação POST para o endpoint /tickets com os detalhes do ingresso, incluindo ID do Filme (movieId), ID do Usuário (userId), Número do Assento (seatNumber), Preço do Ingresso (price), e Data de Apresentação (showtime).
- **Validação de Campos Obrigatórios:** O sistema deverá validar que todos os campos obrigatórios estão corretamente preenchidos, incluindo o ID do Filme, ID do Usuário, Número do Assento, Preço do Ingresso e Data de Apresentação.
- **Validação de Número do Assento:** O sistema deverá verificar que o número do assento está dentro do intervalo permitido de 0 a 99.
- **Validação de Preço:** O sistema deverá garantir que o preço do ingresso esteja dentro do intervalo permitido de 0 a 60.
- **Criação de Reserva:** Se todas as validações passarem, o sistema deverá criar uma reserva de ingresso e atribuir um ID único à reserva.
- **Resposta de Sucesso:** O sistema deverá retornar uma resposta de sucesso com o status 201 Created, incluindo o ID da reserva de ingresso criada.

Requisitos Não Funcionais de Performance:

- A API deve ser capaz de processar pelo menos 50 solicitações de reserva de ingressos por segundo.
- O tempo médio de resposta para a reserva de um ingresso não deve exceder 300 milissegundos.