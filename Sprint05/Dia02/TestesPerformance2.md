# Testes de Performance parte 2

## Requisito Funcional
- Regras de negócio
- Definição dos fluxos da API
- O que API deve fazer?
## Requisitos não Funcionais
- É mais difícil de prever
- Comportamento da API
- Como a API será usada?
## Como se comporta com aumento de carga?
- Tem integração?
- Tem Concorrência?
- Levar sempre em consideração a criticidade, risco e contexto.

## Pontos Importantes
- Criação de uma planilha para comparar resultados entre baterias ajudando na tomada de decisão estratégica;
- Disseminar a Cultura de Performance no Time;
- Não começar a execução de um Teste de Performance sem um critério de aceitação previamente definido;
- Elaborar os Testes de Performance baseado nos 5 níveis do Framework de APM do Gartner;
- Salientar o quanto é importante um "Comitê” de Performance durante a execução dos testes e análise dos resultados;
- Usar uma ferramenta de APM (Dynatrace) para ajudar a encontrar o gargalo da aplicação;
- Levar em consideração a importância da massa de teste ao encontrar o gargalo da aplicação;
- Executar os testes de performance por linha de comando.


## Preparação:
- Apresentação sobre Testes de Performance: Introdução ao conceito e importância dos testes de performance.
- Entendimento sobre projeto e arquitetura: Análise do projeto e sua arquitetura para compreender onde aplicar os testes.
- Plano de Teste de Performance: Desenvolvimento de um plano detalhado para os testes, incluindo critérios de aceitação, ferramentas, métricas, cenários de teste, e massa de teste.
## Implementação:
- Configurar ambiente de teste: Preparação do ambiente onde os testes serão executados.
- Codificar cenários de teste: Escrita dos scripts de teste conforme os cenários identificados.
- Preparar massa de teste e setup de carga dos cenários: Organização dos dados de teste e configuração da carga de teste a ser aplicada.
## Execução:
- Executar script de performance: Rodar os scripts de teste no ambiente configurado.
- Logs da Ferramenta de Carga e Monitoramento: Coleta de logs para análise posterior.
# Curso Udemy Testes de Performance com Jmeter

| Categoria            | Código | Descrição                      | Mais Usado |
|----------------------|--------|--------------------------------|------------|
| **1XX Informational** |        |                                |            |
|                      | 100    | Continue                       | Não        |
|                      | 101    | Switching Protocols            | Não        |
|                      | 102    | Processing                     | Não        |
| **2XX Success**      |        |                                |            |
|                      | 200    | OK                             | Sim        |
|                      | 201    | Created                        | Sim        |
|                      | 202    | Accepted                       | Não        |
|                      | 203    | Non-authoritative Information  | Não        |
|                      | 204    | No Content                     | Sim        |
|                      | 205    | Reset Content                  | Não        |
|                      | 206    | Partial Content                | Não        |
|                      | 207    | Multi-Status                   | Não        |
|                      | 208    | Already Reported               | Não        |
|                      | 226    | IM Used                        | Não        |
| **3XX Redirectional** |        |                                |            |
|                      | 300    | Multiple Choices               | Não        |
|                      | 301    | Moved Permanently              | Sim        |
|                      | 302    | Found                          | Sim        |
|                      | 303    | See Other                      | Não        |
|                      | 304    | Not Modified                   | Sim        |
|                      | 305    | Use Proxy                      | Não        |
|                      | 307    | Temporary Redirect             | Não        |
|                      | 308    | Permanent Redirect             | Não        |
| **4XX Client Error** |        |                                |            |
|                      | 400    | Bad Request                    | Sim        |
|                      | 401    | Unauthorized                   | Sim        |
|                      | 402    | Payment Required               | Não        |
|                      | 403    | Forbidden                      | Sim        |
|                      | 404    | Not Found                      | Sim        |
|                      | 405    | Method Not Allowed             | Não        |
|                      | 406    | Not Acceptable                 | Não        |
|                      | 407    | Proxy Authentication Required  | Não        |
|                      | 408    | Request Timeout                | Não        |
|                      | 409    | Conflict                       | Não        |
|                      | 410    | Gone                           | Não        |
|                      | 411    | Length Required                | Não        |
|                      | 412    | Precondition Failed            | Não        |
|                      | 413    | Payload Too Large              | Não        |
|                      | 414    | Request-URI Too Long           | Não        |
|                      | 415    | Unsupported Media Type         | Não        |
|                      | 416    | Requested Range Not Satisfiable| Não        |
|                      | 417    | Expectation Failed             | Não        |
|                      | 418    | I'm a teapot                   | Não        |
|                      | 421    | Misdirected Request            | Não        |
|                      | 422    | Unprocessable Entity           | Não        |
|                      | 423    | Locked                         | Não        |
|                      | 424    | Failed Dependency              | Não        |
|                      | 426    | Upgrade Required               | Não        |
|                      | 428    | Precondition Required          | Não        |
|                      | 429    | Too Many Requests              | Sim        |
|                      | 431    | Request Header Fields Too Large| Não        |
|                      | 444    | Connection Closed Without Response | Não    |
|                      | 451    | Unavailable For Legal Reasons  | Não        |
|                      | 499    | Client Closed Request          | Não        |
| **5XX Server Error** |        |                                |            |
|                      | 500    | Internal Server Error          | Sim        |
|                      | 501    | Not Implemented                | Não        |
|                      | 502    | Bad Gateway                    | Sim        |
|                      | 503    | Service Unavailable            | Sim        |
|                      | 504    | Gateway Timeout                | Sim        |
|                      | 505    | HTTP Version Not Supported     | Não        |
|                      | 506    | Variant Also Negotiates        | Não        |
|                      | 507    | Insufficient Storage           | Não        |
|                      | 508    | Loop Detected                  | Não        |
|                      | 510    | Not Extended                   | Não        |
|                      | 511    | Network Authentication Required| Não        |
|                      | 599    | Network Connect Timeout Error  | Não        |



## Modelos de Testes
- Teste de Carga (Load test)
    - A aplicação é submetida a uma determinada carga e tem seu comportamento observado.
    - A carga submetida deve ser a carga esperada em produção.
- Teste de estresse (stress test)
    - Consiste em testar o limite da aplicação. E também testa a resistência do sistema com a redução de recursos disponíveis.
- Teste de Escalabilidade: 
    - Este teste mede a capacidade de um sistema de atender a requisitos futuros de eficiência, incluindo expansão para mais usuários ou grandes quantidades de dados.
- Teste de pico (Peak test)
    - Consiste em avaliar a capacidade do sistema lidar com picos repentinos de usuários.
    - Executado em produção. (Ex: Black friday)
- Teste de continuidade (Soak test)
    - Executado em produção, mas em longos períodos.
    - Usando carga próxima da esperada em produção.
    - Pode ocasionar problemas de memória.
- Teste de Concorrência: 
    - Este teste verifica o impacto de ações específicas que ocorrem simultaneamente, como quando muitos usuários fazem login ao mesmo tempo.
- Teste de Capacidade: 
    - Este teste determina o número de usuários e/ou transações que um sistema pode suportar, mantendo uma performance aceitável.


Importante planejar a volumetria, que consiste em prever por exemplo o volume de dados, números de lojas, quantos produtos, quantos usuários, quantas peças de cada produto, quantas vendas.

## Indicadores orientados a serviços
- Disponibilidade
    - Capacidade da aplicação manter-se operando sobre a carga durante um período de tempo.
- Tempo de resposta
    - Tempo que a aplicação leva para dar um feedback ao usuário.
## Indicadores orientados a eficiência
- Vazão (Throughput)
    - Quantidade de dados processados em um determinado espaço de tempo.
- Utilização De recursos
    - Otimização de infraestrutura e custos de escalabilidade vertical e horizontal

## Terminologias de testes de performance
- baseline - É uma linha de base feita a partir de um teste inicial.
- Benchmarking - consiste em comparar o desempenho com a linha de base.
- Métricas 
- Saturação - É quando os resultados começam a degradar.
- Workload - Qual carga de trabalho está relacionado a qual carga de trabalho está sendo aplicado neste teste.
- Think time - Intervalo de tempo entre duas requisições do usuário.
- Ramp Up - Aumento gradual de carga de usuários.
- Steady State - 
## Categorias de Defeitos
- Performance
    - Timeouts.
    - Tempo de Resposta.
    - Falha de caching.
    - Memory leak.
- Funcionais.
- Estruturais.
    - Corrupção de dados.
    - Load balancer.
    - Latência.
    - Largura de banda.
- Segurança
    - Exposição de Dados.

## Referências
https://www.youtube.com/watch?v=Tkg5kMIQWFw
https://www.youtube.com/watch?v=BhCYA7fUE4Y
https://www.youtube.com/watch?v=SE0HhF4T0OQ
Curso Udemy Testes de Performance com Jmeter
