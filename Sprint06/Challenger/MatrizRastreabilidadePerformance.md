# Matriz de Rastreabilidade de Performance com k6

## Rota: Login

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP01 | POST    | Carga          | 1. Criar usuário<br>2. Realizar login<br>3. Repetir sob carga contínua                                                   | Login bem-sucedido para todas as requisições        | 500 usuários simultâneos durante 4 minutos              | ✔️     |
| TP02 | POST     | Concorrência   | 1. Criar usuário<br>2. Realizar login<br>3. Repetir com múltiplas requisições simultâneas                                | Login bem-sucedido para todas as requisições        | 450 usuários simultâneos durante 4 minutos              | ✔️     |
| TP03 | POST     | Escalabilidade | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar progressivamente o número de usuários                               | Login bem-sucedido com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos              | ✔️     |
| TP04 | POST     | Estresse       | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos              | ✔️     |
| TP05 | POST     | Pico           | 1. Criar usuário<br>2. Realizar login<br>3. Aplicar picos súbitos de carga                                               | Login bem-sucedido durante picos de carga           | 500 usuários simultâneos durante 30 segundos            | ✔️     |



## Rota: Produtos

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP06 | GET | Carga          | 1. Realizar login<br>2. Buscar produtos<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 500 usuários simultâneos durante 4 minutos             | ✔️     |
| TP07 | DELETE | Concorrência   | 1. Realizar login<br>2. Criar produto<br>3. Deletar produto<br>4. Repetir com múltiplas requisições simultâneas           | Deleção bem-sucedida para todas as requisições      | 450 usuários simultâneos durante 4 minutos             | ✔️     |
| TP08 | GETid | Escalabilidade | 1. Realizar login<br>2. Buscar produtos por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP09 | POST | Estresse       | 1. Realizar login<br>2. Criar produto<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP10 | PUT | Pico           | 1. Realizar login<br>2. Atualizar produto<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 500 usuários simultâneos durante 30 segundos           | ✔️     |

## Rota: Usuários

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP11 | GET | Carga          | 1. Realizar login<br>2. Buscar usuários<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 500 usuários simultâneos durante 4 minutos             | ✔️     |
| TP12 | DELETE | Concorrência   | 1. Realizar login<br>2. Criar usuário<br>3. Deletar usuário<br>4. Repetir com múltiplas requisições simultâneas            | Deleção bem-sucedida para todas as requisições      | 450 usuários simultâneos durante 4 minutos             | ✔️     |
| TP13 | GETid | Escalabilidade | 1. Realizar login<br>2. Buscar usuários por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP14 | POST | Estresse       | 1. Realizar login<br>2. Criar usuário<br>3. Aumentar a carga até o ponto de falha                                         | Identificação dos pontos de falha                   | 600 usuários simultâneos durante 4 minutos             | ✔️     |
| TP15 | PUT | Pico           | 1. Realizar login<br>2. Atualizar usuário<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 500 usuários simultâneos durante 30 segundos           | ✔️     |

# Flows01

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP16 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 500 usuários simultâneos durante 4 minuto                 | ✔️     |
| TP17 | Concorrência      |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 450 usuários simultâneos durante 4 minutos                                | ✔️     |
| TP18 | Escalabilidade    |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 600 usuários simultâneos durante 4 minutos           | ✔️     |
| TP19 | Estresse          |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Repetir continuamente | Identificação dos pontos de falha no fluxo               | 600 usuários simultâneos durante 4 minutos            | ✔️     |
| TP20 | Pico              |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 500 usuários simultâneos durante 30 segundos                 | ✔️     |



# Flows02

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP21 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 500 usuários simultâneos durante 4 minuto                 | ✔️     |
| TP22 | Concorrência      | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir com múltiplas requisições simultâneas | Todas as etapas do fluxo são concluídas com sucesso      | 450 usuários simultâneos durante 4 minutos                                | ✔️     |
| TP23 | Escalabilidade    | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar progressivamente o número de usuários | Todas as etapas do fluxo são concluídas com sucesso      | 600 usuários simultâneos durante 4 minutos           | ✔️     |
| TP24 | Estresse          | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar a carga até o ponto de falha | Identificação dos pontos de falha no fluxo               | 600 usuários simultâneos durante 4 minutos            | ✔️     |
| TP25 | Pico              | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aplicar picos súbitos de carga | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 500 usuários simultâneos durante 30 segundos                 | ✔️     |



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

## TP01

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CARGA_login.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP02

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CONCORRENCIA_login.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP03

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESCALABILIDADE_login.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP04

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESTRESSE_login.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP05

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/PICO_login.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP06

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/GET_product.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP07

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/DELETE_product.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP08

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/GETid_product.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP09

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/POST_product.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP10

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/PUT_product.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP11

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/GET_user.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP12

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/DELETE_user.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP13

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/GETid_user.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP14

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/POST_user.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP15

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/PUT_user.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

---

## TP16

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CARGA_flow01.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP17

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CONCORRENCIA_flow01.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP18

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESCALABILIDADE_flow01.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP19

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESTRESSE_flow01.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP20

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/PICO_flow01.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP21

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CARGA_flow02.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP22

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/CONCORRENCIA_flow02.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP23

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESCALABILIDADE_flow02.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP24

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/ESTRESSE_flow02.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

## TP25

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint6/Sprint06/Challenger/Assets/PICO_flow02.png" width="700px" />
</div>

Análise
- **Total Requests:** O número total de requisições feitas foi 1677.
- **Failed Requests:** A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
- **Breached Thresholds:** 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
- **Failed Checks:** Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.






## TP21
Análise
Total Requests: O número total de requisições feitas foi 1677.
Failed Requests: A alta taxa de falhas (1376) indica problemas significativos durante a execução do teste, como possíveis congestionamentos no servidor ou falhas na autenticação.
Breached Thresholds: 4 thresholds violados, o que sugere que o sistema não conseguiu manter o desempenho esperado sob a carga de pico.
Failed Checks: Um número alto de verificações falhadas (1439) mostra que muitas requisições não retornaram os resultados esperados.

