# Matriz de Rastreabilidade de Performance com k6

## Rota: Usuários

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP01 | GET | Carga          | 1. Criar usuário<br>2. Realizar login<br>3. Buscar usuários<br>4. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 280 usuários simultâneos durante 4 minutos             | ✔️     |
| TP02 | DELETE | Concorrência   | 1. Criar usuário<br>2. Realizar login<br>3. Criar usuário<br>4. Deletar usuário<br>5. Repetir com múltiplas requisições simultâneas            | Deleção bem-sucedida para todas as requisições      | 270 usuários simultâneos durante 3 minutos e 30 segundos             | ✔️     |
| TP03 | GETid | Escalabilidade | 1. Criar usuário<br>2. Realizar login<br>3. Buscar usuários por ID<br>4. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 300 usuários simultâneos durante 4 minutos             | ✔️     |
| TP04 | POST | Estresse       | 1. Criar usuário<br>2. Realizar login<br>3. Criar usuário<br>4. Aumentar a carga até o ponto de falha                                         | Identificação dos pontos de falha                   | 300 usuários simultâneos durante 4 minutos             | ❌     |
| TP05 | PUT | Pico           | 1. Criar usuário<br>2. Realizar login<br>3. Atualizar usuário<br>4. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 400 usuários simultâneos durante 30 segundos           | ✔️     |
| TP06 | POST | Carga       | 1. Criar usuário<br>2. Realizar login<br>3. Criar usuário<br>4. Aumentar a carga até o ponto de falha                                         | Identificação dos pontos de falha                   | 280 usuários simultâneos durante 4 minutos             | ❌     |

## Rota: Login

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP07 | POST    | Carga          | 1. Criar usuário<br>2. Realizar login<br>3. Repetir sob carga contínua                                                   | Login bem-sucedido para todas as requisições        | 280 usuários simultâneos durante 4 minutos              | ✔️     |
| TP08 | POST     | Concorrência   | 1. Criar usuário<br>2. Realizar login<br>3. Repetir com múltiplas requisições simultâneas                                | Login bem-sucedido para todas as requisições        | 270 usuários simultâneos durante 3 minutos e 30 segundos              | ✔️     |
| TP09 | POST     | Escalabilidade | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar progressivamente o número de usuários                               | Login bem-sucedido com aumento progressivo de carga | 300 usuários simultâneos durante 4 minutos              | ✔️     |
| TP10 | POST     | Estresse       | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 300 usuários simultâneos durante 4 minutos              | ✔️     |
| TP11 | POST     | Pico           | 1. Criar usuário<br>2. Realizar login<br>3. Aplicar picos súbitos de carga                                               | Login bem-sucedido durante picos de carga           | 400 usuários simultâneos durante 30 segundos            | ✔️     |



## Rota: Produtos

| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|----------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP12 | GET | Carga          | 1. Realizar login<br>3. Buscar produtos<br>4. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | 280 usuários simultâneos durante 4 minutos             | ✔️     |
| TP13 | DELETE | Concorrência   | 1. Realizar login<br>3. Criar produto<br>4. Deletar produto<br>4. Repetir com múltiplas requisições simultâneas           | Deleção bem-sucedida para todas as requisições      | 270 usuários simultâneos durante 3 minutos e 30 segundos            | ✔️     |
| TP14 | GETid | Escalabilidade | 1. Realizar login<br>3. Buscar produtos por ID<br>4. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | 300 usuários simultâneos durante 4 minutos             | ✔️     |
| TP15 | POST | Estresse       | 1. Realizar login<br>3. Criar produto<br>4. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 300 usuários simultâneos durante 4 minutos             | ❌     |
| TP16 | PUT | Pico           | 1. Realizar login<br>3. Atualizar produto<br>4. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | 400 usuários simultâneos durante 30 segundos           | ❌     |
| TP17 | POST | Carga        | 1. Realizar login<br>3. Criar produto<br>4. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | 280 usuários simultâneos durante 4 minutos             | ❌     |

## Rota: Carrinho
| ID   | Verbo HTTP Testado | Tipo de Teste  | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|--------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP18 | GET                | Carga          | 1. Criar usuário<br>2. Realizar login<br>3. Buscar carrinhos<br>4. Repetir sob carga contínua                                                | Busca bem-sucedida para todas as requisições        | 280 usuários simultâneos durante 4 minutos              | ✔️     |
| TP19 | DELETE             | Concorrência   | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Deletar carrinho<br>4. Repetir com múltiplas requisições simultâneas        | Deleção bem-sucedida para todas as requisições      | 270 usuários simultâneos durante 3 minutos e 30 segundos| ✔️     |
| TP20 | GETid              | Escalabilidade | 1. Criar usuário<br>2. Realizar login<br>3. Buscar carrinhos por ID<br>4. Aumentar progressivamente o número de usuários                     | Busca bem-sucedida com aumento progressivo de carga | 300 usuários simultâneos durante 4 minutos              | ✔️     |
| TP21 | POST               | Estresse       | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Aumentar a carga até o ponto de falha                                       | Identificação dos pontos de falha                   | 300 usuários simultâneos durante 4 minutos              | ❌     |
| TP22 | POST               | Pico           | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>3. Atualizar carrinho<br>4. Aplicar picos súbitos de carga                                          | Atualização bem-sucedida durante picos de carga     | 400 usuários simultâneos durante 30 segundos            | ❌     |




# Flows01

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP23 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 280 usuários simultâneos durante 4 minuto                | ✔️     |
| TP24 | Concorrência      |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 270 usuários simultâneos durante 3 minutos e 30 segundos                                 | ✔️     |
| TP25 | Escalabilidade    |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 300 usuários simultâneos durante 4 minutos            | ✔️     |
| TP26 | Estresse          |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Identificação dos pontos de falha no fluxo               | 300 usuários simultâneos durante 4 minutos             | ✔️     |
| TP27 | Pico              |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 400 usuários simultâneos durante 30 segundos                 | ✔️     |



# Flows02

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP28 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 280 usuários simultâneos durante 4 minuto                | ❌     |
| TP29 | Concorrência      | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      |  270 usuários simultâneos durante 3 minutos e 30 segundos                                | ❌     |
| TP30 | Escalabilidade    | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 300 usuários simultâneos durante 4 minutos           | ❌     |
| TP31 | Estresse          | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Repetir continuamente | Identificação dos pontos de falha no fluxo               | 300 usuários simultâneos durante 4 minutos            | ❌     |
| TP32 | Pico              | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 400 usuários simultâneos durante 30 segundos                 | ❌     |



## Notas Adicionais:
  
1. **Métricas a Monitorar**:
   - Tempo de resposta (latência)
   - Taxa de erro (percentual de requisições com falha)
   - Throughput (número de requisições por segundo)
   - Uso de recursos (CPU, memória)

2. **Relatórios**:
   - Utilizar os arquivos `summaryExemplo.html` etc., para gerar relatórios detalhados de cada tipo de teste.
   

3. ** Resumo dos Parametros dos Tipos de Testes**

| Sigla | Tipo de Teste                           | Configuração de Teste                            |
|-------|-----------------------------------------|--------------------------------------------------|
| TP01  | Carga                               | Usuários: 280, Duração: 4 min  |
| TP02  | Estresse                            | Usuários: 300, Duração: 4 min  |
| TP03  | Escalabilidade                      | Usuários: 300, Duração: 4 min  |
| TP04  | Pico                                | Usuários: 400, Duração: 30 sec |
| TP05  | Concorrência                        | Usuários: 270, Duração: 3 min e 30 sec |


## Rota: Usuários
### TP01

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/getCarga.png?ref_type=heads" width="700px" />
</div>

Análise:

- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com todas as requisições de login sendo bem-sucedidas e sem falhas ou thresholds violados.
- **Duração das Requisições:** Embora a média e os percentis de duração de login estejam abaixo do threshold de 2000 ms, existe uma variação significativa nos tempos de resposta, com alguns logins demorando até 2082.59 ms.
- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.
---

### TP02

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/delConcorrencia.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um desempenho estável e eficiente durante o teste de concorrência, com todas as requisições de login sendo bem-sucedidas e sem falhas ou thresholds violados.
- **Duração das Requisições:**  A média e os percentis de duração de login estão bem abaixo do threshold de 2000 ms, com tempos de resposta variando, mas sem ultrapassar 1864.25 ms.
- **Estabilidade:** A ausência de falhas e thresholds violados demonstra que o sistema consegue lidar com a carga de requisições.
---

### TP03

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/getIdEscalabilidade.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um desempenho estável durante o teste de escalabilidade, com todas as requisições de login sendo bem-sucedidas e sem falhas reportadas.

- **Duração das Requisições:** A média e os percentis de duração de login mostraram variações significativas. A média das requisições foi de 1286.29 ms, com o máximo de 3028.03 ms e o percentil 95 chegando a 2469.14 ms, acima do threshold de 2000 ms.

- **Estabilidade:** Apesar da violação de um threshold, a ausência de falhas nas requisições e checks indica que o sistema conseguiu lidar com a carga progressiva. 

---

### TP04

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/postEstresseUser.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de estresse, com todas as requisições de login sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média e os percentis de duração de login estão abaixo do threshold de 2000 ms, com uma variação significativa nos tempos de resposta. A média das requisições foi de 769.71 ms, com o máximo de 2610.05 ms e o percentil 95 chegando a 1400.01 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP05

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/putPico.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um desempenho estável durante o teste de pico na rota de login, com todas as requisições sendo bem-sucedidas e sem falhas. No entanto, houve um threshold violado.

- **Duração das Requisições:** A média de duração das requisições de login foi de 1417.15 ms, com o máximo atingindo 3731.89 ms. O percentil 90 foi de 2349.53 ms e o percentil 95 foi de 2946.23 ms, que ultrapassou o threshold estabelecido.

- **Estabilidade:** Apesar da violação de um threshold, a ausência de falhas e checks falhados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP06

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/postCargaUser.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um desempenho estável durante o teste de GET na rota de produtos, com todas as requisições sendo bem-sucedidas e sem falhas. No entanto, houve um threshold violado.

- **Duração das Requisições:** A média de duração das requisições de GET produtos foi de 1811.15 ms, com o máximo atingindo 3704.27 ms. O percentil 90 foi de 3103.56 ms e o percentil 95 foi de 3256.07 ms, que ultrapassou o threshold estabelecido.

- **Estabilidade:** Apesar da violação de um threshold, a ausência de falhas e checks falhados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---
## Rota: Login

### TP07

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/cargaLogin.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de DELETE na rota de produtos, com todas as requisições sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média de duração das requisições de DELETE produtos foi de 337.05 ms, com o máximo atingindo 1146.75 ms. O percentil 90 foi de 553.78 ms e o percentil 95 foi de 592.55 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.

---

### TP08

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/concorrenciaLogin.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de GET por ID na rota de produtos, com todas as requisições sendo bem-sucedidas e sem falhas. Houve apenas uma violação de threshold.

- **Duração das Requisições:** A média de duração das requisições de GET por ID foi de 2115.27 ms, com o máximo atingindo 4353.16 ms. O percentil 90 foi de 3715.10 ms e o percentil 95 foi de 3903.78 ms, o que está acima do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e verificações falhadas indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.



---

### TP09

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/escalabilidadeLogin.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um comportamento estável durante o teste de carga na criação de produtos, com a maioria das requisições sendo bem-sucedidas. No entanto, houve 47 requisições falhadas e uma violação de threshold.

- **Duração das Requisições:** A média de duração das requisições de criação de produtos foi de 1516.37 ms, com o máximo atingindo 5024.96 ms. O percentil 90 foi de 3799.82 ms e o percentil 95 foi de 4263.03 ms, o que está acima do threshold de 2000 ms.

- **Estabilidade:** A presença de falhas e a violação do threshold de duração indicam que o sistema enfrenta dificuldades ao lidar com a carga estipulada no teste.

---

### TP10

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/estresseLogin.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema apresentou um comportamento estável durante o teste de atualização de produtos, com todas as requisições sendo bem-sucedidas. No entanto, houve uma violação de threshold.

- **Duração das Requisições:** A média de duração das requisições de atualização de produtos foi de 3503.57 ms, com o máximo atingindo 4982.39 ms. O percentil 90 foi de 4711.60 ms e o percentil 95 foi de 4763.90 ms, o que está significativamente acima do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e verificações falhadas indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP11

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/picoLogin.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com todas as requisições de busca de usuários sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média de duração das requisições de busca de usuários foi de 306.88 ms, com o máximo atingindo 1142.38 ms. O percentil 90 foi de 744.34 ms e o percentil 95 foi de 850.35 ms, ambos bem abaixo do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.

---
## Rota: Produtos

### TP12

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/getCargaP.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com todas as requisições de deleção de usuários sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média de duração das requisições de deleção de usuários foi de 222.17 ms, com o máximo atingindo 1091.22 ms. O percentil 90 foi de 367.96 ms e o percentil 95 foi de 386.89 ms, ambos bem abaixo do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP13

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/delConcorrenciaP.png?ref_type=heads" width="700px" />
</div>

Análise:

- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com todas as requisições de busca de usuários por ID sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média de duração das requisições de busca de usuários por ID foi de 410.73 ms, com o máximo atingindo 70454.17 ms. O percentil 90 foi de 584.84 ms e o percentil 95 foi de 610.72 ms, ambos bem abaixo do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP14

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/getIdEscalabilidadeP.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema enfrentou problemas significativos durante o teste de carga, com uma alta taxa de requisições falhadas e thresholds violados. Das 11085 requisições feitas, 3504 falharam, resultando em uma taxa de sucesso de apenas 68%.

- **Duração das Requisições:** A média de duração das requisições de criação de usuários foi de 2484.91 ms, com o máximo atingindo 5046.79 ms. O percentil 90 foi de 5011.43 ms e o percentil 95 foi de 5015.39 ms, ambos muito acima do threshold de 2000 ms.

- **Estabilidade:** A presença de falhas e thresholds violados indica que o sistema não conseguiu lidar com a carga estipulada no teste, comprometendo a funcionalidade.


---

### TP15

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/postEstresseP.png?ref_type=heads" width="700px" />
</div>

Análise:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com todas as requisições de atualização de usuários sendo bem-sucedidas e sem falhas ou thresholds violados.

- **Duração das Requisições:** A média de duração das requisições de atualização de usuários foi de 1102.99 ms, com o máximo atingindo 2529.88 ms. O percentil 90 foi de 1784.70 ms e o percentil 95 foi de 1981.23 ms, ambos abaixo do threshold de 2000 ms.

- **Estabilidade:** A ausência de falhas e thresholds violados indica que o sistema é capaz de lidar com a carga estipulada no teste sem comprometer a funcionalidade.


---

### TP16

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/putPicoP.png?ref_type=heads" width="700px" />
</div>

Análise:
- Foram feitas 12.443 requisições, das quais 231 falharam, resultando em 298 verificações falhadas. No entanto, nenhum threshold foi violado, indicando um desempenho geral aceitável.

### TP17

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/postCargaP.png?ref_type=heads" width="700px" />
</div>

Análise:
- Foram feitas 9.402 requisições, todas bem-sucedidas, sem falhas ou thresholds violados, indicando um desempenho geral eficiente e estável.

### TP18

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/ESCALABILIDADE_flow01.png" width="700px" />
</div>

Análise:
- Foram feitas 8.263 requisições, das quais 2.546 falharam, resultando em 3.595 verificações falhadas. Dois thresholds foram violados, indicando problemas de desempenho sob carga.

### TP19

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/ESTRESSE_flow01.png" width="700px" />
</div>

Análise:
- Foram feitas 8.156 requisições, das quais 3.438 falharam, resultando em 3.715 verificações falhadas. Dois thresholds foram violados, indicando problemas de desempenho sob carga.

### TP20

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/PICO_flow01.png" width="700px" />
</div>

Análise:
- Foram feitas 1.261 requisições, das quais 631 falharam, resultando em 774 verificações falhadas. Três thresholds foram violados, indicando problemas de desempenho sob carga.

### TP21

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/CARGA_flow02.png" width="700px" />
</div>

Análise:
- Foram feitas 5.628 requisições, das quais 3.192 falharam, resultando em 3.376 verificações falhadas. Além disso, 4 thresholds foram violados, indicando problemas significativos de desempenho.

### TP22

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/CONCORRENCIA_flow02.png" width="700px" />
</div>

Análise:
- Foram feitas 5.279 requisições, das quais 3.070 falharam, resultando em 3.206 verificações falhadas. Além disso, 4 thresholds foram violados, indicando problemas significativos de desempenho.

### TP23

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/ESCALABILIDADE_flow02.png" width="700px" />
</div>

Análise:
- Foram feitas 6.016 requisições, das quais 4.482 falharam, resultando em 5.692 verificações falhadas. Além disso, 4 thresholds foram violados, indicando problemas significativos de desempenho.

### TP24

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/ESTRESSE_flow02.png" width="700px" />
</div>

Análise:
- Foram feitas 5.708 requisições, das quais 4.305 falharam, resultando em 4.868 verificações falhadas. Além disso, 4 thresholds foram violados, indicando problemas significativos de desempenho.

### TP25

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint6/Sprint06/Challenger/Assets/PICO_flow02.png" width="700px" />
</div>

Análise:
- Foram feitas 1.677 requisições, das quais 1.376 falharam, resultando em 1.439 verificações falhadas. Além disso, 4 thresholds foram violados, indicando problemas significativos de desempenho.








