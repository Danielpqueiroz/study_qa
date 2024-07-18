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
| Sigla | Tipo de Teste                           | Configuração de Teste                            |
|-------|-----------------------------------------|--------------------------------------------------|
| TP01  | Carga CRUD                              | Usuários: 500, Duração: 4 min, Ramp-up: 30 seg   |
| TP02  | Estresse CRUD                           | Usuários: 600, Duração: 4 min, Ramp-up: 30 seg   |
| TP03  | Escalabilidade CRUD                     | Usuários: 600, Duração: 4 min, Ramp-up: 30 seg   |
| TP04  | Pico CRUD                               | Usuários: 500, Duração: 30 sec, Ramp-up: 5 seg   |
| TP05  | Resistência CRUD                        | Usuários: 400, Duração: 10 min, Ramp-up: 30 seg  |
| TP06  | Concorrência CRUD                       | Usuários: 450, Duração: 4 min, Ramp-up: 30 seg   |
| TP07  | Capacidade CRUD                         | Usuários: 400, Duração: 4 min, Ramp-up: 30 seg   |
| TP08  | Carga - Cadastro de Usuários            | Usuários: 500, Duração: 4 min, Ramp-up: 30 seg   |
| TP09  | Estresse - Cadastro de Usuários         | Usuários: 600, Duração: 4 min, Ramp-up: 30 seg   |
| TP10  | Pico - Cadastro de Usuários             | Usuários: 500, Duração: 3 sec, Ramp-up: 5 seg    |
| TP11  | Carga - Leitura de Usuários             | Usuários: 500, Duração: 4 min, Ramp-up: 30 seg   |
| TP12  | Estresse - Leitura de Usuários          | Usuários: 600, Duração: 4 min, Ramp-up: 30 seg   |
| TP13  | Pico - Leitura de Usuários              | Usuários: 500, Duração: 3 sec, Ramp-up: 5 seg    |



### Configurações do JMeter
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Configuracoes.png" width="300px" />
</div>

### TP01
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Carga%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Carga%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 1472 ms
    - Erro Máx: 0.14%
    - Throughput: 91.3/sec

### TP02
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Estresse%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Estresse%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2133 ms
    - Erro Máx: 0.46%
    - Throughput: 75.3/sec

### TP03
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Escalabilidade%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Escalabilidade%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2700 ms
    - Erro Máx: 0.71%
    - Throughput: 58.7/sec

### TP04
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Pico%20CRUD.png" width="700px" />
</div>
- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Pico%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2446 ms
    - Erro Máx: 1.01%
    - Throughput: 91.3/sec

### TP05
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Resistencia%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Resistencia%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2404 ms
    - Erro Máx: 1.36%
    - Throughput: 46.1/sec

### TP06
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Concorrencia%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Concorrencia%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2893 ms
    - Erro Máx: 1.61%
    - Throughput: 41.9/sec

### TP07
- Relatório
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Capacidade%20CRUD.png" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://gitlab.com/compass8112219/Sprints/-/raw/pb_sprint5/Sprint05/Challenger/Assets/Capacidade%20CRUD%20grafico.png" width="700px" />
</div>
- Resultados Obtidos:
    - Tempo Máximo de Resposta: 2777 ms
    - Erro Máx: 1.48%
    - Throughput: 38.8/sec