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




# Flow01

| ID   | Tipo de Teste     | Passos                                                                                                                   | Resultado Esperado                                   | Configurações do Teste                                   | Status |
|------|-------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------|--------|
| TP23 | Carga             | 1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 280 usuários simultâneos durante 4 minuto                | ✔️     |
| TP24 | Concorrência      |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 270 usuários simultâneos durante 3 minutos e 30 segundos                                 | ✔️     |
| TP25 | Escalabilidade    |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      | 300 usuários simultâneos durante 4 minutos            | ✔️     |
| TP26 | Estresse          |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Identificação dos pontos de falha no fluxo               | 300 usuários simultâneos durante 4 minutos             | ✔️     |
| TP27 | Pico              |  1. Criar usuário<br>2. Realizar login<br>3. Criar produto<br>4. Criar carrinho<br>5. Apaga carrinho<br>6. Apaga produto<br>7. Apaga usuário<br>8. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso durante os picos | 400 usuários simultâneos durante 30 segundos                 | ✔️     |



# Flow02

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

#### **Análise**:

**Desempenho Geral:** O teste de carga foi realizado com um total de 140.460 requisições, das quais nenhuma falhou, demonstrando a estabilidade do sistema. Não houve violação de thresholds, o que sugere que o sistema conseguiu lidar com a carga de forma eficaz.

**Duração das Requisições:** A duração média das requisições foi de 275.20 ms, com um tempo máximo registrado de 2822.42 ms. O 95º percentil ficou em 588.50 ms, o que indica que a maioria das requisições foi concluída rapidamente, mas houve algumas variações que levaram a tempos de resposta mais longos.

**Estabilidade:** Apesar de 14 falhas nos checks de tempo de resposta, a ausência de outras falhas e thresholds violados aponta para um sistema capaz de suportar a carga proposta. No entanto, as variações nos tempos de resposta devem ser monitoradas para garantir a consistência do desempenho.

---

### TP02

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/delConcorrencia.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema demonstrou uma performance sólida e estável durante o teste, com um total de 230.258 requisições realizadas e nenhuma falha reportada. Além disso, não houve violação de thresholds, o que sugere que o sistema está bem dimensionado para lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 155,86 ms, com um máximo de 1409,08 ms. O 95º percentil foi de 336,05 ms, indicando que a maioria das requisições foi processada de maneira eficiente, com poucas variações significativas nos tempos de resposta.

- **Estabilidade:** A ausência de falhas e a robustez nos checks de validação indicam que o sistema é capaz de suportar a carga esperada sem comprometimentos funcionais. Isso reflete um sistema bem preparado para o ambiente de produção.

---

### TP03

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/getIdEscalabilidade.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou uma excelente estabilidade durante o teste de identificação por ID, com todas as requisições sendo bem-sucedidas e nenhuma falha ou threshold violado.
  
- **Duração das Requisições:** A duração média das requisições foi de 304.52 ms, com um pico de 4372.86 ms. Apesar de o 95º percentil estar em 633.99 ms, a existência de um máximo significativamente maior sugere a presença de outliers que poderiam afetar a experiência do usuário em casos extremos.
  
- **Estabilidade:** Apesar de algumas falhas nos checks relacionados ao tempo de resposta, a quantidade de falhas foi muito baixa (49 em 164.076 tentativas), demonstrando que o sistema pode lidar consistentemente com a carga aplicada.

---

### TP04

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/postEstresseUser.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de estresse, com um total de 46.463 requisições, das quais 2.632 falharam. Além disso, 3 thresholds foram violados, o que indica que o sistema teve dificuldades em lidar com a carga extrema imposta durante o teste.

- **Duração das Requisições:** A duração média das requisições foi de 883.44 ms, com um tempo máximo registrado de 5.037,44 ms. O 95º percentil foi de 4.745,80 ms, o que demonstra que uma parte significativa das requisições teve tempos de resposta superiores ao esperado, sinalizando possíveis gargalos no sistema sob alta carga.

- **Estabilidade:** O teste revelou instabilidades consideráveis, com 9.787 checks falhados, principalmente relacionados ao tempo de resposta. A presença de 3 thresholds violados reforça a necessidade de otimizações no sistema para melhorar sua capacidade de lidar com picos de carga.

---

### TP05

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/putPico.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou um desempenho estável e eficiente durante o teste de carga. Foram realizadas 7.290 requisições sem nenhuma falha, e não houve violação de thresholds. Esses resultados indicam que o sistema conseguiu lidar com a carga proposta de forma eficaz.

- **Duração das Requisições:** A duração média das requisições foi de 84.69 ms, com o tempo máximo registrado sendo 494.28 ms. O 95º percentil ficou em 357.80 ms, demonstrando que a maioria das requisições foi processada de forma rápida e consistente, com variações mínimas nos tempos de resposta.

- **Estabilidade:** Com 0 falhas registradas nos checks de tempo de resposta, e nenhuma violação de thresholds, o sistema demonstrou alta estabilidade e capacidade de suportar a carga estipulada sem comprometer a funcionalidade. Todos os checks passaram com sucesso, reforçando a robustez do sistema sob a carga aplicada.

---

### TP06

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/users/postCargaUser.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de carga, com um total de 48.105 requisições realizadas, das quais 17 falharam. Além disso, houve 2 thresholds violados e 9.014 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 810,81 ms, com um tempo máximo registrado de 5013,73 ms. O 95º percentil ficou em 3870,86 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** Apesar da ausência de falhas em algumas métricas, o elevado número de falhas nos checks de tempo de resposta (8.997) e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.

---

## Rota: Login

### TP07

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/cargaLogin.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga. Foram realizadas 37.972 requisições no total, sem falhas registradas. Nenhum threshold foi violado, o que indica que o sistema conseguiu lidar com a carga de maneira eficaz.

- **Duração das Requisições:** A duração média das requisições foi de 16,97 ms, com um tempo máximo registrado de 133,95 ms. O 95º percentil ficou em 41,75 ms, o que demonstra que a maioria das requisições foi concluída rapidamente, com baixa variação nos tempos de resposta.

- **Estabilidade:** A ausência de falhas e thresholds violados durante o teste aponta para um sistema estável e capaz de suportar a carga estipulada. A estabilidade do sistema é reforçada pela consistência nos tempos de resposta, sem grandes variações.

---

### TP08

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/concorrenciaLogin.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema demonstrou estabilidade durante o teste de concorrência, com um total de 34.948 requisições realizadas, todas elas bem-sucedidas. Não houve falhas nas requisições nem violações de thresholds, indicando que o sistema foi capaz de lidar com a carga aplicada sem problemas significativos.

- **Duração das Requisições:** A duração média das requisições foi de 14,65 ms, com o tempo máximo registrado sendo 83,57 ms. O 95º percentil ficou em 34,24 ms, o que mostra que as requisições foram processadas rapidamente, com pouca variação nos tempos de resposta.

- **Estabilidade:** A ausência de falhas nos checks e a não ocorrência de thresholds violados indicam que o sistema é robusto e capaz de manter um desempenho consistente sob condições de concorrência. Este resultado é positivo e sugere que o sistema está bem preparado para lidar com múltiplas requisições simultâneas.

---

### TP09

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/escalabilidadeLogin.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de escalabilidade, com um total de 193.290 requisições realizadas, das quais nenhuma falhou. Além disso, não houve thresholds violados ou falhas nos checks, indicando que o sistema foi capaz de lidar com a carga aplicada de forma eficaz.

- **Duração das Requisições:** A duração média das requisições foi de 232,43 ms, com um tempo máximo registrado de 1037,35 ms. O 95º percentil ficou em 406,14 ms, o que demonstra que a maioria das requisições foi concluída rapidamente, com pouca variação nos tempos de resposta.

- **Estabilidade:** A ausência de falhas e thresholds violados, juntamente com a consistência nos tempos de resposta, sugere que o sistema manteve a estabilidade e a capacidade de resposta sob a carga proposta. Este resultado é um indicativo positivo de que o sistema pode escalar com eficácia enquanto mantém o desempenho adequado.

---

### TP10

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/estresseLogin.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de estresse, com um total de 186.021 requisições realizadas, das quais nenhuma falhou. Não houve violação de thresholds, indicando que o sistema lidou bem com a carga imposta.

- **Duração das Requisições:** A duração média das requisições foi de 217,31 ms, com um tempo máximo registrado de 1368,12 ms. O 95º percentil ficou em 534,39 ms, o que mostra que a maioria das requisições foi processada de forma rápida, com poucas variações significativas nos tempos de resposta.

- **Estabilidade:** A ausência de falhas nas requisições e checks, junto com a não violação de thresholds, demonstra que o sistema é estável e capaz de suportar a carga aplicada durante o teste. Estes resultados indicam que o sistema está bem preparado para operar sob condições de estresse sem comprometer a funcionalidade ou o desempenho.

---

### TP11

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/login/picoLogin.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira extremamente estável durante o teste de pico, com um total de 34.797 requisições realizadas e nenhuma falha registrada. Além disso, não houve violações de thresholds, o que indica que o sistema conseguiu lidar com os picos de carga de maneira eficaz.

- **Duração das Requisições:** A duração média das requisições foi de 201,91 ms, com um tempo máximo registrado de 467,60 ms. O 95º percentil ficou em 401,16 ms, demonstrando que a maioria das requisições foi processada rapidamente, com tempos de resposta dentro dos limites esperados.

- **Estabilidade:** A ausência de falhas e violações de thresholds, aliada aos tempos de resposta consistentes, sugere que o sistema foi capaz de manter um desempenho estável e confiável mesmo sob condições de pico de carga. Este resultado é positivo, indicando que o sistema está bem preparado para lidar com variações súbitas e intensas na carga.

---
## Rota: Produtos

### TP12

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/getCargaP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com um total de 152.315 requisições realizadas, das quais nenhuma falhou. Não houve violação de thresholds, indicando que o sistema foi capaz de lidar com a carga aplicada sem comprometer a performance.

- **Duração das Requisições:** A duração média das requisições foi de 253,87 ms, com um tempo máximo registrado de 3544,58 ms. O 95º percentil ficou em 553,28 ms, o que demonstra que a maioria das requisições foi concluída rapidamente, embora existam algumas variações nos tempos de resposta.

- **Estabilidade:** Apesar de 20 falhas nos checks de tempo de resposta, a ausência de falhas em outras métricas e a ausência de thresholds violados sugerem que o sistema conseguiu manter a consistência do desempenho sob a carga proposta. No entanto, as variações nos tempos de resposta devem ser monitoradas para garantir a consistência contínua.


---

### TP13

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/delConcorrenciaP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de carga, com um total de 52.898 requisições realizadas, das quais 3.434 falharam. Além disso, houve 3 thresholds violados e 6.930 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 546,22 ms, com um tempo máximo registrado de 5.038,23 ms. O 95º percentil ficou em 4.965,05 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** O elevado número de falhas nos checks de tempo de resposta (3.496) e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.

---

### TP14

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/getIdEscalabilidadeP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:

- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste, com um total de 105.592 requisições realizadas, das quais 120 falharam. Não houve violação de thresholds, mas a falha nas requisições indica que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 324,92 ms, com um tempo máximo registrado de 140.937,51 ms. O 95º percentil ficou em 455,95 ms, mostrando que a maioria das requisições foi concluída rapidamente, mas algumas levaram muito mais tempo do que o esperado, o que indica variações significativas nos tempos de resposta.

- **Estabilidade:** O número significativo de falhas nos checks (120) e nas requisições sugere que o sistema não conseguiu manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.

---

### TP15

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/postEstresseP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:

- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de estresse, com um total de 45.433 requisições realizadas, das quais nenhuma falhou. No entanto, houve 2 thresholds violados e 9.129 falhas nos checks, o que indica que o sistema encontrou dificuldades para lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 899,67 ms, com um tempo máximo registrado de 4.945,63 ms. O 95º percentil ficou em 4.304,53 ms, mostrando que algumas requisições levaram significativamente mais tempo do que o esperado, evidenciando uma variação significativa nos tempos de resposta.

- **Estabilidade:** Apesar da ausência de falhas diretas em termos de status code, o elevado número de falhas nos checks de tempo de resposta (9.129) e as violações de thresholds sugerem que o sistema não conseguiu manter a consistência do desempenho sob a carga proposta. Esses resultados indicam a necessidade de melhorias para garantir a estabilidade e a capacidade de resposta do sistema em condições de estresse elevado.

---

### TP16

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/putPicoP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:

- **Desempenho Geral:** O sistema apresentou estabilidade durante o teste de carga, com um total de 3.729 requisições realizadas, das quais nenhuma falhou. No entanto, houve 2 thresholds violados e 2.074 falhas nos checks, sugerindo que o sistema encontrou dificuldades em manter o desempenho esperado em certas condições.

- **Duração das Requisições:** A duração média das requisições foi de 2.194,02 ms, com um tempo máximo registrado de 3.958,88 ms. O 95º percentil ficou em 3.919,76 ms, o que indica que algumas requisições demoraram significativamente mais do que o esperado, afetando a experiência geral.

- **Estabilidade:** Apesar da ausência de falhas em algumas métricas, o elevado número de falhas nos checks de tempo de resposta (2.074) e as violações de thresholds sugerem que o sistema não conseguiu manter a consistência do desempenho sob a carga proposta. Este resultado destaca a necessidade de otimizações para melhorar a estabilidade e a capacidade de resposta do sistema.


### TP17

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/products/postCargaP.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de carga, com um total de 44.828 requisições realizadas, das quais 2.258 falharam. Além disso, houve 3 thresholds violados e 8.590 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 872,10 ms, com um tempo máximo registrado de 5036,37 ms. O 95º percentil ficou em 3934,19 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** O elevado número de falhas nos checks de tempo de resposta (6.332) e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.


---
## Rota: Carrinho

### TP18

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/carts/getCargaCarrinho.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com um total de 34.696 requisições realizadas, das quais nenhuma falhou. Não houve violação de thresholds, indicando que o sistema foi capaz de lidar com a carga aplicada sem comprometer a performance.

- **Duração das Requisições:** A duração média das requisições foi de 114,30 ms, com um tempo máximo registrado de 863,38 ms. O 95º percentil ficou em 397,99 ms, o que demonstra que a maioria das requisições foi concluída rapidamente, com uma baixa variação nos tempos de resposta.

- **Estabilidade:** A ausência de falhas nos checks e thresholds violados sugere que o sistema conseguiu manter a consistência do desempenho sob a carga proposta. A estabilidade foi mantida durante todo o teste, indicando que o sistema está bem preparado para lidar com a carga testada.


### TP19

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/carts/delConcorrenciaCarrrinho.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:

- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de carga, com um total de 52.898 requisições realizadas, das quais 3.434 falharam. Além disso, houve 3 thresholds violados e 6.930 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 546,22 ms, com um tempo máximo registrado de 5.038,23 ms. O 95º percentil ficou em 4.965,05 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** O elevado número de falhas nos checks de tempo de resposta e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.


### TP20

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/carts/getIdEscalabilidadeCarrinho.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema se comportou de maneira estável e eficiente durante o teste de carga, com um total de 48.388 requisições realizadas, das quais nenhuma falhou. Não houve violação de thresholds, indicando que o sistema foi capaz de lidar com a carga aplicada sem comprometer a performance.

- **Duração das Requisições:** A duração média das requisições foi de 21,34 ms, com um tempo máximo registrado de 359,08 ms. O 95º percentil ficou em 69,48 ms, o que demonstra que a maioria das requisições foi concluída muito rapidamente, com tempos de resposta consistentemente baixos.

- **Estabilidade:** A ausência de falhas nos checks de tempo de resposta e a ausência de thresholds violados sugerem que o sistema conseguiu manter a consistência do desempenho sob a carga proposta. Isso indica uma boa capacidade do sistema para suportar a carga sem comprometer a estabilidade ou a performance.


### TP21

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/carts/postEstesseCarrinho.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de carga, com um total de 39.679 requisições realizadas, das quais 7.559 falharam. Além disso, houve 3 thresholds violados e 8.580 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 1.043,93 ms, com um tempo máximo registrado de 5.176,51 ms. O 95º percentil ficou em 5.010,44 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** Apesar da ausência de falhas em algumas métricas, o elevado número de falhas nos checks de tempo de resposta (1.021) e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.


### TP22

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/carts/postPicoCarrinho.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- **Desempenho Geral:** O sistema apresentou instabilidade durante o teste de pico, com um total de 4.760 requisições realizadas, das quais 502 falharam. Além disso, houve 3 thresholds violados e 590 falhas nos checks, indicando que o sistema encontrou dificuldades em lidar com a carga aplicada.

- **Duração das Requisições:** A duração média das requisições foi de 597,43 ms, com um tempo máximo registrado de 5.049,50 ms. O 95º percentil ficou em 5.014,32 ms, mostrando que algumas requisições levaram muito mais tempo do que o esperado, evidenciando uma significativa variação nos tempos de resposta.

- **Estabilidade:** O elevado número de falhas nos checks de tempo de resposta (88) e as violações de thresholds sugerem que o sistema não foi capaz de manter a consistência do desempenho sob a carga proposta. Este resultado indica a necessidade de ajustes para melhorar a estabilidade e a capacidade de resposta do sistema.


---
# Flow01

### TP23

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow01/cargaFlow01.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 88.130 requisições, todas bem-sucedidas, resultando em 0 verificações falhadas. Além disso, não houve violação de thresholds, indicando um desempenho robusto e consistente durante o fluxo de requisições.

### TP24

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow01/concorrenciaFlow01.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 78.239 requisições, das quais nenhuma falhou, resultando em 0 verificações falhadas. Além disso, nenhum threshold foi violado, indicando um desempenho robusto do sistema durante o teste.

### TP25

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow01/escalabilidadeFlow01.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 87.227 requisições, das quais nenhuma falhou, resultando em 0 verificações falhadas. Além disso, não houve violação de thresholds, indicando que o desempenho do sistema foi adequado sob a carga aplicada.


### TP26

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow01/estresseFlow01.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 85.715 requisições, das quais 8 falharam, resultando em 8 verificações falhadas. Não houve violação de thresholds, indicando que o sistema conseguiu lidar com a carga aplicada de maneira estável, mas houve pequenas falhas que devem ser investigadas para otimizar ainda mais o desempenho.


### TP27

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow01/picoFlow01.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 10.087 requisições, das quais 640 falharam, resultando em 640 verificações falhadas. Além disso, 1 threshold foi violado, indicando problemas significativos de desempenho.

---
# Flow02

### TP28

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow02/cargaFlow02.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 48.950 requisições, das quais nenhuma falhou, resultando em 6.500 verificações falhadas. Além disso, 1 threshold foi violado, indicando alguns problemas de desempenho.

### TP29

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow02/concorrenciaFlow02.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 34.150 requisições, das quais nenhuma falhou, resultando em 7.592 verificações falhadas. Além disso, 2 thresholds foram violados, indicando problemas de desempenho que precisam ser investigados mais a fundo.

### TP30

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow02/escalabilidadeFlow02.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 58.507 requisições, das quais nenhuma falhou, resultando em 7.685 verificações falhadas. Além disso, 1 threshold foi violado, indicando alguns problemas de desempenho que precisam ser analisados e corrigidos.

### TP31

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow02/estresseFlow02.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 43.612 requisições, das quais 67 falharam, resultando em 7.903 verificações falhadas. Além disso, 1 threshold foi violado, indicando problemas significativos de desempenho.

### TP32

<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint7/Sprint07/report/flow02/picoFlow02.png?ref_type=heads" width="700px" />
</div>

#### **Análise**:
- Foram feitas 4.919 requisições, das quais 92 falharam, resultando em 2.108 verificações falhadas. Além disso, 3 thresholds foram violados, indicando problemas significativos de desempenho.










