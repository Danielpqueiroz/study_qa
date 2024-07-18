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
| TP08  | Carga - Cadastro de Usuários            | Usuários: 500, Duração: 4 min, Ramp-up: 30 min   |
| TP09  | Estresse - Cadastro de Usuários         | Usuários: 600, Duração: 4 min, Ramp-up: 30 min   |
| TP10  | Pico - Cadastro de Usuários             | Usuários: 500, Duração: 3 sec, Ramp-up: 5 seg    |
| TP11  | Carga - Leitura de Usuários             | Usuários: 500, Duração: 4 min, Ramp-up: 30 min   |
| TP12  | Estresse - Leitura de Usuários          | Usuários: 600, Duração: 4 min, Ramp-up: 30 min   |
| TP13  | Pico - Leitura de Usuários              | Usuários: 500, Duração: 3 sec, Ramp-up: 5 seg    |



### Configurações do JMeter
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP01
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP02
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP03
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP04
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP05
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP06
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

### TP07
- Relatório
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>

- Grafico
<div align="center">
    <img src="https://github.com/Danielpqueiroz/compass_uol/assets/112348645/b9ccb5c1-1e38-438c-a848-c6791e45f152" width="700px" />
</div>