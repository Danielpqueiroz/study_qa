# Tipos de erros, validações e boas práticas em testes de API

 
Para validar o status de uma api pode ser feita colocando a url da api e o endpoint  /status e se estiver tudo certo o navegador ou postman irá retornar status OK em formato JSON
Headers é onde é colocado informações técnicas que pode ser uma autenticação para o servidor
Body é onde é enviado os dados da requisição
Importante sempre verificar: o código do status, se é permitido acesso sem autorização.


É importante a documentação está pronta para escolha dos testes a serem realizados que podem ser:
Funcionais - visa garantir que funções do software estão em conformidade com os requisitos. 
Não Funcionais - Performance(Escalabilidade, velocidade, estabilidade e eficiência)
Estruturais - Arquitetura da API( Visa garantir que a estrutura é robusta, segura e bem projetada)

A documentação do Swagger não contempla todas as informações, que podem estar contidas em documentos a parte como um caso de uso, diagramas, de forma informal, etc.
Exemplo Tentar cadastrar um usuário
Regra de negócio: Apenas administradores podem registrar novas viagens.
entradas: Credencial (Administrador - Registrar, Usuário - Não Registrar, Invalido - Não Registrar, Expirada - Não Registrar)
Obs. O QA tem que ser um pouco investigador para identificar a real regra de negócio, e perguntar a quem for preciso..
		

## Tipos de erros

- Gravidade - Pode ser definido como a medida da severidade do erro, quanto problemático é esse bug. E essa medida ajuda na identificação do quão perigoso pode ser este erro.
- Prioridade - É a ordem em que o erro deve ser corrigido, e é definida pelo líder ou gerente do projeto
- Risco - Envolve  a probabilidade do erro ocorrer e o potencial de dano.

- Causado por documentação -  Está relacionada a informações inadequadas, incorretas ou incompletas na documentação. Esses erros podem ocasionar uma falsa interpretação para o QA ocasionando erros nos testes
- Causado por massa de dados  -  Serve para validar e avaliar a aceitabilidade dos limites operacionais. E está relacionada a falha ou comportamento inesperado do software devido ao volume ou tipo de dado que está sendo processado. Ex: se o sistema tem a capacidade de acesso para 1000 e o QA só testar 100, ele não vai ter a certeza se o sistema suportar os 1000.

## Medidas preventivas de erros

- Quanto a gravidade - revisar regularmente o codigo para identificar possíveis erros graves antes que o código entre em produção

- Quanto à prioridade - as prioridades devem estar documentadas de forma clara e objetiva com a priorização de erros. Também deve-se fazer reuniões regulares para revisar bugs e ajustar suas prioridades.

- Quanto ao risco - deve-se realizar análises de risco no início do projeto e em etapas críticas do desenvolvimento.

- Quanto a documentação - deve se garantir que a documentação seja revisada e atualizada regularmente.

- Quanto à massa de dados - tem que ser feito testes de carga e estresse para validar o software sob diferentes volumes de dados.
