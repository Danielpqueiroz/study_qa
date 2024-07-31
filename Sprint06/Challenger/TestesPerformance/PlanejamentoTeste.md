1. **Execução Sequencial e Paralela**:
   - **Execução Sequencial**: Cada funcionalidade (Login, Produtos, Usuários) deve ser testada sequencialmente para garantir que os resultados não sejam influenciados por outros testes.
   - **Execução Paralela**: Testes de carga e concorrência podem ser executados em paralelo para simular um ambiente mais realista.
   
2. **Métricas a Monitorar**:
   - Tempo de resposta (latência)
   - Taxa de erro (percentual de requisições com falha)
   - Throughput (número de requisições por segundo)
   - Uso de recursos (CPU, memória)

3. **Relatórios**:
   - Utilizar os arquivos `summaryCarga.html`, `summaryDelete.html`, `summaryPut.html`, etc., para gerar relatórios detalhados de cada tipo de teste.
   - Apresentar gráficos e análises para visualização clara dos resultados.

## Execução dos Testes
### Preparação:
- **Configurar ambiente de testes**: Garantir que a API está disponível e configurada corretamente.
- **Configurar k6 e dependências**: Instalar k6 e preparar scripts de teste.

### Execução:
- **Rodar testes**: Executar cada script conforme o planejamento.
- **Monitorar e registrar**: Coletar dados de desempenho durante a execução dos testes.

### Análise:
- **Comparar resultados**: Avaliar os resultados obtidos em relação aos benchmarks definidos.
- **Identificar problemas**: Localizar pontos de falha e gargalos no sistema.

### Relatórios:
- **Gerar relatórios**: Utilizar os arquivos HTML para consolidar os resultados.
- **Apresentar conclusões**: Fornecer recomendações baseadas nos dados coletados.

# Planejamento de Testes de Performance com k6

| ID   | Tipo de Teste     | Arquivo                | Objetivo Específico                                                         |
|------|-------------------|------------------------|-----------------------------------------------------------------------------|
| TP01 | Carga             | `carga.js`             | Avaliar o desempenho do fluxo completo sob carga contínua.                  |
| TP02 | Concorrência      | `concorrencia.js`      | Verificar a resposta do sistema a requisições concorrentes do fluxo completo.|
| TP03 | Escalabilidade    | `escalabilidade.js`    | Avaliar a capacidade de escalabilidade do fluxo completo.                   |
| TP04 | Estresse          | `estresse.js`          | Identificar pontos de falha no fluxo completo.                              |
| TP05 | Pico              | `pico.js`              | Verificar a resposta do fluxo completo a picos súbitos.                     |
| TP06 | Resistência       | `resistencia.js`       | Avaliar a estabilidade do fluxo completo a longo prazo.                     |
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
   - Utilizar os arquivos `summaryCarga.html`, `summaryDelete.html`, `summaryPut.html`, etc., para gerar relatórios detalhados de cada tipo de teste.
   - Apresentar gráficos e análises para visualização clara dos resultados.

## Execução dos Testes
### Preparação:
- **Configurar ambiente de testes**: Garantir que a API está disponível e configurada corretamente.
- **Configurar k6 e dependências**: Instalar k6 e preparar scripts de teste.

### Execução:
- **Rodar testes**: Executar cada script conforme o planejamento.
- **Monitorar e registrar**: Coletar dados de desempenho durante a execução dos testes.

### Análise:
- **Comparar resultados**: Avaliar os resultados obtidos em relação aos benchmarks definidos.
- **Identificar problemas**: Localizar pontos de falha e gargalos no sistema.

### Relatórios:
- **Gerar relatórios**: Utilizar os arquivos HTML para consolidar os resultados.
- **Apresentar conclusões**: Fornecer recomendações baseadas nos dados coletados.

# Planejamento de Testes de Performance com k6

| ID   | Tipo de Teste     | Funcionalidade | Arquivo                     | Objetivo Específico                                                         |
|------|-------------------|----------------|-----------------------------|-----------------------------------------------------------------------------|
| TP01 | Carga             | Login          | `carga.js`                  | Avaliar o desempenho do login com carga contínua.                           |
| TP02 | Concorrência      | Login          | `concorrencia.js`           | Verificar a resposta do sistema a requisições concorrentes no login.        |
| TP03 | Escalabilidade    | Login          | `escalabilidade.js`         | Avaliar a capacidade de escalabilidade do login.                            |
| TP04 | Estresse          | Login          | `estresse.js`               | Identificar pontos de falha no login.                                       |
| TP05 | Pico              | Login          | `pico.js`                   | Verificar a resposta do login a picos súbitos de carga.                     |
| TP06 | Resistência       | Login          | `resistencia.js`            | Avaliar a estabilidade do login a longo prazo.                              |
| TP07 | Carga             | Produtos       | `getCarga.js`               | Avaliar o desempenho da busca de produtos com carga contínua.               |
| TP08 | Concorrência      | Produtos       | `deleteCapacidade.js`       | Verificar a resposta do sistema a requisições concorrentes na deleção de produtos. |
| TP09 | Escalabilidade    | Produtos       | `getIdEscalabilidade.js`    | Avaliar a capacidade de escalabilidade da busca de produtos por ID.         |
| TP10 | Estresse          | Produtos       | `postEstresse.js`           | Identificar pontos de falha na criação de produtos.                         |
| TP11 | Pico              | Produtos       | `putPico.js`                | Verificar a resposta da atualização de produtos a picos súbitos.            |
| TP12 | Carga             | Usuários       | `getCarga.js`               | Avaliar o desempenho da busca de usuários com carga contínua.               |
| TP13 | Concorrência      | Usuários       | `deleteConcorrencia.js`     | Verificar a resposta do sistema a requisições concorrentes na deleção de usuários. |
| TP14 | Escalabilidade    | Usuários       | `getIdEscalabilidade.js`    | Avaliar a capacidade de escalabilidade da busca de usuários por ID.         |
| TP15 | Estresse          | Usuários       | `postEstresse.js`           | Identificar pontos de falha na criação de usuários.                         |
| TP16 | Pico              | Usuários       | `putEstresse.js`            | Verificar a resposta da atualização de usuários a picos súbitos.            |

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
   - Utilizar os arquivos `summaryCarga.html`, `summaryDelete.html`, `summaryPut.html`, etc., para gerar relatórios detalhados de cada tipo de teste.
   - Apresentar gráficos e análises para visualização clara dos resultados.

## Execução dos Testes
### Preparação:
- **Configurar ambiente de testes**: Garantir que a API está disponível e configurada corretamente.
- **Configurar k6 e dependências**: Instalar k6 e preparar scripts de teste.

### Execução:
- **Rodar testes**: Executar cada script conforme o planejamento.
- **Monitorar e registrar**: Coletar dados de desempenho durante a execução dos testes.

### Análise:
- **Comparar resultados**: Avaliar os resultados obtidos em relação aos benchmarks definidos.
- **Identificar problemas**: Localizar pontos de falha e gargalos no sistema.

### Relatórios:
- **Gerar relatórios**: Utilizar os arquivos HTML para consolidar os resultados.
- **Apresentar conclusões**: Fornecer recomendações baseadas nos dados coletados.
