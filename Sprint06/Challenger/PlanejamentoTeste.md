# Planejamento de Testes de Performance com k6

## Rota: Login

| ID   | Descrição                                      | Critério de Aceitação                                        | Passos                                                                                                                   | Resultado Esperado                                   | Tipo de Teste de Performance |
|------|------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------|
| TP01 | Teste de Carga no Login                        | O login deve funcionar corretamente sob carga contínua.      | 1. Criar usuário<br>2. Realizar login<br>3. Repetir sob carga contínua                                                   | Login bem-sucedido para todas as requisições        | Carga                        |
| TP02 | Teste de Concorrência no Login                 | O login deve funcionar sob múltiplas requisições concorrentes.| 1. Criar usuário<br>2. Realizar login<br>3. Repetir com múltiplas requisições simultâneas                                | Login bem-sucedido para todas as requisições        | Concorrência                 |
| TP03 | Teste de Escalabilidade no Login               | O login deve escalar com o aumento progressivo de usuários.  | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar progressivamente o número de usuários                               | Login bem-sucedido com aumento progressivo de carga | Escalabilidade               |
| TP04 | Teste de Estresse no Login                     | O sistema deve identificar pontos de falha sob estresse.     | 1. Criar usuário<br>2. Realizar login<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | Estresse                     |
| TP05 | Teste de Pico no Login                         | O login deve lidar com picos súbitos de carga.               | 1. Criar usuário<br>2. Realizar login<br>3. Aplicar picos súbitos de carga                                               | Login bem-sucedido durante picos de carga           | Pico                         |
| TP06 | Teste de Resistência no Login                  | O login deve ser estável sob carga prolongada.               | 1. Criar usuário<br>2. Realizar login<br>3. Manter carga contínua por longo período                                      | Estabilidade do login a longo prazo                 | Resistência                  |

## Rota: Produtos

| ID   | Descrição                                      | Critério de Aceitação                                        | Passos                                                                                                                   | Resultado Esperado                                   | Tipo de Teste de Performance |
|------|------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------|
| TP07 | Teste de Carga na Busca de Produtos            | A busca de produtos deve funcionar sob carga contínua.       | 1. Realizar login<br>2. Buscar produtos<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | Carga                        |
| TP08 | Teste de Concorrência na Deleção de Produtos   | A deleção de produtos deve funcionar sob requisições concorrentes.| 1. Realizar login<br>2. Criar produto<br>3. Deletar produto<br>4. Repetir com múltiplas requisições simultâneas           | Deleção bem-sucedida para todas as requisições      | Concorrência                 |
| TP09 | Teste de Escalabilidade na Busca de Produtos   | A busca de produtos deve escalar com aumento progressivo.    | 1. Realizar login<br>2. Buscar produtos por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | Escalabilidade               |
| TP10 | Teste de Estresse na Criação de Produtos       | O sistema deve identificar pontos de falha na criação de produtos.| 1. Realizar login<br>2. Criar produto<br>3. Aumentar a carga até o ponto de falha                                        | Identificação dos pontos de falha                   | Estresse                     |
| TP11 | Teste de Pico na Atualização de Produtos       | A atualização de produtos deve lidar com picos súbitos de carga.| 1. Realizar login<br>2. Atualizar produto<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | Pico                         |

## Rota: Usuários

| ID   | Descrição                                      | Critério de Aceitação                                        | Passos                                                                                                                   | Resultado Esperado                                   | Tipo de Teste de Performance |
|------|------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------|
| TP12 | Teste de Carga na Busca de Usuários            | A busca de usuários deve funcionar sob carga contínua.       | 1. Realizar login<br>2. Buscar usuários<br>3. Repetir sob carga contínua                                                 | Busca bem-sucedida para todas as requisições        | Carga                        |
| TP13 | Teste de Concorrência na Deleção de Usuários   | A deleção de usuários deve funcionar sob requisições concorrentes.| 1. Realizar login<br>2. Criar usuário<br>3. Deletar usuário<br>4. Repetir com múltiplas requisições simultâneas            | Deleção bem-sucedida para todas as requisições      | Concorrência                 |
| TP14 | Teste de Escalabilidade na Busca de Usuários   | A busca de usuários deve escalar com aumento progressivo.    | 1. Realizar login<br>2. Buscar usuários por ID<br>3. Aumentar progressivamente o número de usuários                      | Busca bem-sucedida com aumento progressivo de carga | Escalabilidade               |
| TP15 | Teste de Estresse na Criação de Usuários       | O sistema deve identificar pontos de falha na criação de usuários.| 1. Realizar login<br>2. Criar usuário<br>3. Aumentar a carga até o ponto de falha                                         | Identificação dos pontos de falha                   | Estresse                     |
| TP16 | Teste de Pico na Atualização de Usuários       | A atualização de usuários deve lidar com picos súbitos de carga.| 1. Realizar login<br>2. Atualizar usuário<br>3. Aplicar picos súbitos de carga                                            | Atualização bem-sucedida durante picos de carga     | Pico                         |

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

| ID   | Tipo de Teste     | Arquivo                | Objetivo Específico                                                    | Critério de Aceitação                                                     | Passos                                                                                                                      | Resultado Esperado                                        |
|------|-------------------|------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| TP01 | Carga             | `carga.js`             | Avaliar o desempenho do fluxo completo sob carga contínua.             | O fluxo completo deve funcionar corretamente sob carga contínua.          | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir continuamente | Todas as etapas do fluxo são concluídas com sucesso      |
| TP02 | Concorrência      | `concorrencia.js`      | Verificar a resposta do sistema a requisições concorrentes do fluxo completo.| O fluxo completo deve funcionar sob múltiplas requisições concorrentes.   | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Repetir com múltiplas requisições simultâneas | Todas as etapas do fluxo são concluídas com sucesso      |
| TP03 | Escalabilidade    | `escalabilidade.js`    | Avaliar a capacidade de escalabilidade do fluxo completo.              | O fluxo completo deve escalar com o aumento progressivo de usuários.      | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar progressivamente o número de usuários | Todas as etapas do fluxo são concluídas com sucesso      |
| TP04 | Estresse          | `estresse.js`          | Identificar pontos de falha no fluxo completo.                         | O sistema deve identificar pontos de falha sob estresse.                  | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aumentar a carga até o ponto de falha | Identificação dos pontos de falha no fluxo               |
| TP05 | Pico              | `pico.js`              | Verificar a resposta do fluxo completo a picos súbitos.                | O fluxo completo deve lidar com picos súbitos de carga.                   | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Aplicar picos súbitos de carga | Todas as etapas do fluxo são concluídas com sucesso durante os picos |
| TP06 | Resistência       | `resistencia.js`       | Avaliar a estabilidade do fluxo completo a longo prazo.                | O fluxo completo deve ser estável sob carga prolongada.                   | 1. Criar usuário<br>2. Realizar login<br>3. Buscar produtos<br>4. Criar produto<br>5. Deletar usuário<br>6. Manter carga contínua por longo período | Estabilidade do fluxo completo a longo prazo            |

## Notas Adicionais:
1. **Execução Sequencial e Paralela**:
   - **Execução Sequencial**: Cada funcionalidade deve ser testada sequencialmente para garantir que os resultados não sejam influenciados por outros testes.
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
