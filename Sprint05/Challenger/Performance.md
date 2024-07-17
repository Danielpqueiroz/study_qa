## Performance dos testes do CRUD da API Serverest

### Tabela para orientação dos criterios usados para cada tipo de testes

| Teste           | Usuários | Duração       | Ramp Up   |
|-----------------|----------|:---------------:|:-----------:|
| Carga           | 500      |  4 min        | 30 seg     |
| Estresse        | 600      |  4 min        | 30 seg     |
| Escalabilidade  | 600      |  4 min        | 30 seg     |
| Pico            | 500      | 30 sec        | 5 seg      |
| Resistência     | 400      | 10 min        | 30 seg     |
| Concorrência    | 450      |  4 min        | 30 seg     |
| Capacidade      | 400      |  4 min        | 30 seg     |


## Resumo dos Testes
| Sigla | Tipo de Teste                  | Configuração de Teste                            | Métricas Chave                                | Resultados Esperados                           | Dados Obtidos        |
|-------|--------------------------------|--------------------------------------------------|-----------------------------------------------|-----------------------------------------------|----------------------|
| TP01  | Carga                          | Usuários: 300, Duração: 10 min, Ramp-up: 2 min   | Tempo de resposta, Throughput, Taxa de erro   | Tempo < 2s, Throughput > 90 req/s, Erros < 1% |                      |
| TP02  | Estresse                       | Usuários: 500, Duração: 15 min, Ramp-up: 5 min   | Tempo de resposta, Erros                      | Identificação de pontos de quebra             |                      |
| TP03  | Escalabilidade                 | De 100 a 500 usuários em 30 min                  | Throughput, Taxa de sucesso                   | Aumento linear do throughput sem degradação   |                      |
| TP04  | Pico                           | Usuários: 600, Duração: 5 min, Ramp-up: 1 min    | Tempo de resposta, Erros                      | Resposta efetiva sem falhas críticas          |                      |
| TP05  | Resistência                    | Usuários: 300, Duração: 12 horas, Ramp-up: 10 min| Tempo de resposta, Uso de recursos            | Sem vazamentos de memória ou degradação       |                      |
| TP06  | Concorrência                   | Usuários: 400, Duração: 20 min, Ramp-up: 3 min   | Tempo de resposta, Throughput                 | Desempenho consistente, sem erros de deadlock |                      |
| TP07  | Capacidade                     | Incrementar usuários até falha, Ramp-up: 10 min  | Tempo de resposta, Throughput, Erros          | Máximo de usuários suportados antes da falha  |                      |
| TP08  | Carga - Cadastro de Usuários   | Usuários: 300, Duração: 5 min, Ramp-up: 1 min    | Tempo de resposta, Taxa de sucesso, Taxa de erro | Sucesso no cadastro com tempo < 2s, Erros < 1% |                   |
| TP09  | Estresse - Cadastro de Usuários| Usuários: 450, Duração: 10 min, Ramp-up: 2 min   | Tempo de resposta, Erros                      | Identificação de falhas no registro sob estresse |                   |
| TP10  | Pico - Cadastro de Usuários    | Usuários: 500, Duração: 3 min, Ramp-up: 30 seg   | Tempo de resposta, Erros                      | Cadastros eficientes mesmo sob alta demanda   |                      |
| TP11  | Carga - Leitura de Usuários    | Usuários: 300, Duração: 5 min, Ramp-up: 1 min    | Tempo de resposta, Throughput                 | Leitura rápida e precisa de dados de usuário  |                      |
| TP12  | Estresse - Leitura de Usuários | Usuários: 450, Duração: 10 min, Ramp-up: 2 min   | Tempo de resposta, Erros                      | Avaliar a robustez da API na recuperação de dados |                   |
| TP13  | Pico - Leitura de Usuários     | Usuários: 500, Duração: 3 min, Ramp-up: 30 seg   | Tempo de resposta, Erros                      | Manter performance adequada durante picos    |                      |

### Configurações do JMeter
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### Teste de Carga CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### Teste de Estresse CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
### Teste de Escalabilidade CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
### Teste de Pico CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
### Teste de Resistência CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
### Teste de Concorrência CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
### Teste de Capacidade CRUD
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Tabela
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>