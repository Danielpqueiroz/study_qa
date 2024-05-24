# Aprenda de forma prática como Especificar Requisitos em Projetos de Software​, utilizando Histórias de Usuário
## Visões importantes:
- Do cliente.
- Do desenvolvedor.
- Do testador.

## Exemple Mapping
- Cartão amarelo - Historia
- Cartão azul - Regras
- Cartão verde - Exemplos - devem conter contexto, ação e resultado.
- Cartão rosa - Questionamentos
Obs. As cores podem mudar.
Obs. O tempo estimado para uma Example Mapping e de até 30 min

## História de usuário
- Como/ Sendo
- Eu quero/ Gostaria / Devo
- Para / Porque

## História da Atividade

- Como um usuário
- Quero pagar um anúncio
- Para ativá-lo


 Regra 1: O usuário deve informar os dados de um cartão de crédito válido para fazer o pagamento

- Exemplo 1: O usuário inseriu Cartão: VISA, 4111 1111 1111 1111, 12/24, CVV 123. OK
- Exemplo 2: O cartão informado é expirado. ERROR

Regra 2: Após o pagamento, o anúncio deve ser alterado de "Pendente" para "Publicado"

- Exemplo 1: Pagamento aprovado alterar anúncio para Publicado.OK

- Exemplo 2: Pagamento não aprovado o status ainda vai ficar pendente. ERRO

Regra 3: Um recibo de pagamento deve ser enviado pro email do usuário após confirmação do pagamento

- Exemplo 1: Pagamento aprovado e recibo enviado para o email do usuário. OK
- Exemplo 2: Pagamento não efetuado e recibo não enviado. ERRO