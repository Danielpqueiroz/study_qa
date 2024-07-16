| Teste           | Usuários | Duração       | Ramp Up                                |
|-----------------|----------|---------------|---------------------------------------|
| Carga           | 400      | 5 min         | 1 min                                  |
| Estresse        | 500      | 10 min        | 2 min                                  |
| Escalabilidade  | 100-800  | 30 min        | 5 min  |
| Pico            | 800      | 5 min         | 30 seg                                 |
| Resistência     | 400      | 20 min        | 3 min                                  |
| Concorrência    | 400      | 15 min        | 1 min                                  |
| Capacidade      | 100-1000 | Até falha     | 10 min  |

1. Rota de Usuários
- Objetivos: Validar o registro, atualização, listagem e deleção de usuários. Garantir a estabilidade e performance para operações com alta demanda de criação e gerenciamento de usuários.
- Volumetria: Simulação de até 600 usuários simultâneos.
- Métricas:
    - Tempo de resposta para criação e deleção deve ser menos de 3 segundos.
    - Throughput de 100 operações por minuto.
    - Taxa de erro inferior a 2%.
    - Tempo de latência.
- Tipos de Testes:
    - Teste de Carga: Validar a capacidade do sistema de manter o desempenho sob condições normais com 400 usuários simultâneos.
    - Teste de Estresse: Aumentar a carga gradualmente até 600 usuários para identificar o ponto de falha.
    - Teste de Escalabilidade: Incrementar usuários de 300 a 500 em 1 hora para testar a capacidade da API de escalonar sob carga crescente.
    - Teste de Pico: Simular um pico de 450 usuários durante 10 minutos para testar como a API lida com súbitas altas de demanda.
    - Teste de Resistência: Manter 300 usuários por 12 horas para observar a estabilidade e o comportamento da API sob uma longa duração.
    Teste de Concorrência: Executar operações simultâneas com 350 usuários para verificar a capacidade de processamento concorrente.
    Teste de Capacidade: Escalonar usuários até que a performance se degrade para estabelecer o máximo de usuários que a API pode suportar mantendo a qualidade.
2. Rota de Login
- Objetivos: Garantir que os usuários possam logar de maneira eficiente mesmo sob alta carga.
- Volumetria: Testar com até 600 logins simultâneos durante o pico.
- Métricas:
    - Tempo de resposta para login não deve exceder 2 segundos.
    - Throughput de 150 logins por minuto.
    - Taxa de erro inferior a 1%.
- Tipos de Testes:
    - Teste de Carga: Avaliar a rota com 400 tentativas de login simultâneas por 30 minutos para medir a eficiência sob carga típica.
    - Teste de Estresse: Aumentar os logins simultâneos até 500 para determinar o ponto de quebra da rota.
    - Teste de Escalabilidade: Aumentar progressivamente os usuários fazendo login de 300 para 500 em 1 hora para testar a escalabilidade.
    - Teste de Pico: 450 logins simultâneos durante um período curto de 5 minutos para testar a resposta em picos de uso.
    - Teste de Resistência: 300 logins simultâneos mantidos durante 8 horas para verificar a resistência da API.
    - Teste de Concorrência: 350 tentativas de login ao mesmo tempo para testar a gestão de sessões concorrentes.
    - Teste de Capacidade: Incrementar até que a performance decline para identificar a capacidade máxima de logins


3. Rota de Produtos
- Objetivos: Assegurar que os produtos possam ser listados, adicionados, atualizados e removidos sob diversas condições de carga.
- Volumetria: Suportar até 600 usuários acessando a lista de produtos simultaneamente.
- Métricas:
    - Tempo de resposta para listagem de produtos deve ser inferior a 4 segundos.
    - Throughput de 90 operações por minuto.
    - Taxa de erro inferior a 3%.
- Tipos de Testes:
    - Teste de Carga: Simular 250 usuários acessando a lista de produtos simultaneamente por 30 minutos.
    - Teste de Estresse: Aumentar a carga até 500 usuários para encontrar os limites da rota de produtos.
    - Teste de Escalabilidade: Incrementar de 250 para 500 usuários em 1 hora, avaliando a performance sob carga escalonada.
    - Teste de Pico: Testar com 300 usuários acessando produtos simultaneamente por 10 minutos.
    - Teste de Resistência: Manter 250 usuários por 10 horas interagindo com a rota de produtos.
    - Teste de Concorrência: 300 usuários realizando operações simultâneas na rota de produtos.
    - Teste de Capacidade: Escalonar até o ponto de degradação para estabelecer a capacidade máxima.


4. Rota de Carrinho
- Objetivos: Testar a funcionalidade e performance do carrinho, incluindo adição, remoção e atualização de itens, especialmente sob condições de alta carga.
- Volumetria: Até 600 operações simultâneas durante picos.
- Métricas:
    - Tempo de resposta para operações no carrinho deve ser menos de 5 segundos.
    - Throughput de 120 operações por minuto.
    - Taxa de erro inferior a 5%.
- Tipos de Testes:
    - Teste de Carga: Executar 150 operações no carrinho simultaneamente durante 30 minutos para verificar a performance sob uso normal.
    - Teste de Estresse: Aumentar as operações no carrinho até 300 para testar os limites.
    - Teste de Escalabilidade: Crescer de 150 para 300 operações em 1 hora para avaliar a escalabilidade.
    - Teste de Pico: Simular um pico com 200 operações durante um período curto de 10 minutos.
    - Teste de Resistência: Manter 150 operações durante 12 horas para testar a durabilidade da funcionalidade.
    - Teste de Concorrência: 200 operações concorrentes no carrinho para testar a consistência de dados e a resposta do servidor.
    - Teste de Capacidade: Determinar o máximo de operações que a rota do carrinho pode manusear eficientemente.


Preparação e Estratégia Geral
    - Preparação de Massa de Dados: Criar usuários, produtos e dados de carrinho suficientes para simular o ambiente de produção.
    - Monitoramento e Análise: Utilizar ferramentas como JMeter para coletar dados durante os testes e analisar os resultados para identificar gargalos e pontos de melhoria.
