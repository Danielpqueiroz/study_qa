# Matriz de Rastreabilidade de Performance com k6

## Rota: Login

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP01 | POST    | Carga          | 1. Criar usuário<br>2. Realizar login<br>3. Repetir sob carga contínua                                                   | Login bem-sucedido para todas as requisições        | 500 usuários simultâneos durante 4 minutos              | ✔️     |
| TP02 | POST     | Concorrência   | 1. Criar usuário<br>2. Realizar login<br>3. Repetir com múltiplas requisições simultâneas                                | Login bem-sucedido para todas as requisições        | 450 usuários simultâneos durante 4 minutos              | ✔️     |
| TP03 | POST     | Escalabilidade | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar progressivamente o número de usuários                               | Login bem-sucedido com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos              | ✔️     |
| TP04 | POST     | Estresse       | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos              | ✔️     |
| TP05 | POST     | Pico           | 1. Criar usuário<br>2. Realizar login<br>3. Aplicar picos súbitos de carga                                               | Login bem-sucedido durante picos de carga           | 500 usuários simultâneos durante 30 segundos            | ✔️     |
| TP06 | POST     | Resistência    | 1. Criar usuário<br>2. Realizar login<br>3. Manter carga contínua por longo período                                      | Estabilidade do login a longo prazo                 | 400 usuários simultâneos durante 10 minutos             | ✔️     |


## Rota: Produtos

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP07 | GET | Carga          | 1. Realizar login<br>2. Buscar produtos<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 500 usuários simultâneos durante 4 minutos             | ✔️     |
| TP08 | DELETE | Concorrência   | 1. Realizar login<br>2. Criar produto<br>3. Deletar produto<br>4. Repetir com múltiplas requisições simultâneas           | Deleção bem-sucedida para todas as requisições      | 450 usuários simultâneos durante 4 minutos             | ✔️     |
| TP09 | GETid | Escalabilidade | 1. Realizar login<br>2. Buscar produtos por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP10 | POST | Estresse       | 1. Realizar login<br>2. Criar produto<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP11 | PUT | Pico           | 1. Realizar login<br>2. Atualizar produto<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 500 usuários simultâneos durante 30 segundos           | ✔️     |

## Rota: Usuários

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP12 | GET | Carga          | 1. Realizar login<br>2. Buscar usuários<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 500 usuários simultâneos durante 4 minutos             | ✔️     |
| TP13 | DELETE | Concorrência   | 1. Realizar login<br>2. Criar usuário<br>3. Deletar usuário<br>4. Repetir com múltiplas requisições simultâneas            | Deleção bem-sucedida para todas as requisições      | 450 usuários simultâneos durante 4 minutos             | ✔️     |
| TP14 | GETid | Escalabilidade | 1. Realizar login<br>2. Buscar usuários por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP15 | POST | Estresse       | 1. Realizar login<br>2. Criar usuário<br>3. Aumentar a carga até o ponto de falha                                         | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP16 | PUT | Pico           | 1. Realizar login<br>2. Atualizar usuário<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 500 usuários simultâneos durante 30 segundos           | ✔️     |


# Flows

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP17 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 500 usuários simultâneos durante 4 minuto                 | ✔️     |
| TP18 | Concorrência      | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir com múltiplas requisições simultâneas | Todas as etapas do fluxo são concluídas com sucesso      | 450 usuários simultâneos durante 4 minutos                                | ✔️     |
| TP19 | Escalabilidade    | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar progressivamente o número de usuários | Todas as etapas do fluxo são concluídas com sucesso      | 600 usuários simultâneos durante 4 minutos           | ✔️     |
| TP20 | Estresse          | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar a carga até o ponto de falha | Identificação dos pontos de falha no fluxo               | 600 usuários simultâneos durante 4 minutos            | ✔️     |
| TP21 | Pico              | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aplicar picos súbitos de carga | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 500 usuários simultâneos durante 30 segundos                 | ✔️     |
| TP22 | Resistência       | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Manter carga contínua por longo período | Estabilidade do fluxo completo a longo prazo            | 400 usuários simultâneos durante 10 minutos             | ✔️     |


## Notas Adicionais:
1. **Execução Sequencial e Paralela**:
   - **Execução Sequencial**: Cada funcionalidade (Login, Produtos, Usuários) deve ser testada sequencialmente para garantir que os resultados não sejam influenciados por outros testes.
   - **Execução Paralela**: Testes de carga e concorrência podem ser executados em paralelo para simular um ambiente mais realista.
   
2. **Métricas a Monitorar**:
   - Tempo de resposta (latência)
   - Taxa de erro (percentual de requisições com falha)
   - Throughput (número de requisições por segundo)
   - Uso de recursos (CPU, memória)

3. **Relatórios**:
   - Utilizar os arquivos `summary.html` etc., para gerar relatórios detalhados de cada tipo de teste.
   

## Resumo dos Parametros dos Tipos de Testes
| Sigla | Tipo de Teste                           | Configuração de Teste                            |
|-------|-----------------------------------------|--------------------------------------------------|
| TP01  | Carga CRUD                              | Usuários: 500, Duração: 4 min  |
| TP02  | Estresse CRUD                           | Usuários: 600, Duração: 4 min  |
| TP03  | Escalabilidade CRUD                     | Usuários: 600, Duração: 4 min  |
| TP04  | Pico CRUD                               | Usuários: 500, Duração: 30 sec |
| TP05  | Resistência CRUD                        | Usuários: 400, Duração: 10 min |
| TP06  | Concorrência CRUD                       | Usuários: 450, Duração: 4 min  |
| TP07  | Capacidade CRUD                         | Usuários: 400, Duração: 4 min  |




