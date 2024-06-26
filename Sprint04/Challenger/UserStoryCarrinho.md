### User Story: [API] Carrinho


**Como** um usuário do Marketplace da ServeRest  
**Gostaria** de poder adicionar, visualizar, atualizar e remover produtos no meu carrinho de compras  
**Para** que eu possa gerenciar os itens que desejo comprar antes de finalizar a compra.

#### DoR (Definition of Ready)
- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- API de cadastro de usuários implementada;
- API de autenticação implementada;
- API de produtos implementada;
- Ambiente de testes disponibilizado.

#### DoD (Definition of Done)
- CRUD de carrinho de compras implementado (CRIAR, ATUALIZAR, LISTAR e DELETAR);
- Análise de testes cobrindo a rota de carrinhos;
- Matriz de rastreabilidade atualizada;
- Automação de testes baseada na análise realizada;

#### Acceptance Criteria
- Os clientes deverão ser autenticados para realizar ações na rota de Carrinho;
- Não deverá ser possível adicionar produtos inexistentes no carrinho;
- Deve ser possível visualizar todos os itens no carrinho;
- Deve ser possível atualizar a quantidade de produtos no carrinho;
- Não deverá ser possível adicionar produtos que não estão disponíveis no estoque;
- Deve ser possível remover produtos do carrinho;
- O carrinho deve ser esvaziado automaticamente após a finalização da compra;
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.
