# Análise, Modelagem e Implementação

## Modelagem - elencar os títulos dos testes.
- Implementação 
    - Detalhar os testes.
    - Criar a massa de testes.
    - Preparativos de ambiente - Hardware, software, acessos, pessoas.
- Cenário:
    - O que será testado -  caso de teste
    Situações
    - Dia x Noite
    - Dia de Semana x Fim de Semana
    - Sazonalidades - estações do ano
    - Datas especiais
        - black friday
        - dia das mães
        - dia dos namorados
        - dia da criança
- Suites de Testes( Ajuda a escolher qual a melhor sequência para os testes)
    - Agrupa os casos de teste.
    - Sequência de execução.
    - Pré-condições.
    - Pré-requisitos.
    - Riscos.
    - Sequência de desenvolvimento.
- Casos de Teste 
    - Exemplos
        - Nome do Prato - Identificador - (CT01 - Cadastro de Usuário)
        - Ingredientes - Pré-condições - (E-mail válido)
        - Modo de Fazer - Passos - (1 - Acessar o site, 2 - Clicar em novo Usuário)
        - Avaliações - Resultado Esperado - (Usuário cadastrado com sucesso!)
- Data Driven
    - Direcionado a dados
    - Tags e tabelas de dados
- Keyword Driven
    - Direcionado a palavras chaves
    - Palavras chaves e tabela de dados 
- Exemplo em Guerkin
    - Funcionalidade: Cadastro do Usuário
    -   Cenário: Cadastro com Sucesso
        - Dado que acesso o <site>
        - Quando clico no link Novo Usuário
        - E preencho <email> e <senha> e pressiono Enter
        - Então exibe a mensagem de Usuário Cadastrado com sucesso!
    - Exemplos: 

    | Site                  | Email                   | Senha   | Mensagem                        |
|-----------------------|-------------------------|---------|---------------------------------|
| dev.iterasys.com.br   | testes@iterasys.com.br  | Teste123| Usuário Cadastrado com Sucesso! |
| test.iterasys.com.br  | qa@iterasys.com.br      | amora34 | Usuário Cadastrado com Sucesso! |


## Introdução a TDD BDD ATDD

- TDD - Desenvolvimento Direcionado por Testes
- BDD - Desenvolvimento Direcionado po Comportamento
- ATDD - Desenvolvimento Direcionado por Testes de Aceitação
