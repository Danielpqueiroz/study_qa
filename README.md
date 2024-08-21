# Sprint 08
<div align="center">
    <img src="https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-covers/cl7god9gt00lx04wg4p2a93zt.jpg
    " width="500px" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_bYvvXNpcfN5I71aaQ4kpNFYBksZhMuREA&s
    " width="118px" />
</div>


## Sobre o Repositório

Esta branch contem a documentação e resultados dos testes de performance para a API ServeRest utilizando o K6. O foco está em validar a estabilidade, performance e capacidade da API sob várias condições de carga.

## Links para acessar diretamente os materiais:

- [Planejamento.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint7/Sprint07/planTest/Planejamento.md?ref_type=heads)
 
- [Matriz Rastreabilidade.](https://gitlab.com/compass8112219/Sprints/-/blob/pb_sprint7/Sprint07/planTest/MatrizRastreabilidadePerformance.md?ref_type=heads)


- [Códigos dos Testes.](https://gitlab.com/compass8112219/Sprints/-/tree/pb_sprint7/Sprint07/tests?ref_type=heads)

- [Report dos Testes.](https://gitlab.com/compass8112219/Sprints/-/tree/pb_sprint7/Sprint07/report?ref_type=heads)
 

## Objetivos dos Testes

Os testes de performance têm como objetivo principal garantir que a API ServeRest seja robusta, eficiente e capaz de lidar com o número esperado de usuários e transações, sem comprometer a qualidade do serviço. Especificamente, os testes são projetados para:

- Identificar gargalos e limitações do sistema.
- Garantir que o tempo de resposta está dentro dos limites aceitáveis.
- Validar o número de usuários simultâneos suportados.
- Avaliar a estabilidade da API sob diferentes cargas.

## Métricas Monitoradas

- **Tempo de Resposta**: O tempo necessário para a API responder às requisições.
- **Throughput**: Número de requisições que a API pode lidar por minuto.
- **Taxa de Erro**: Porcentagem de requisições que resultam em erro.
- **Latência**: Tempo para a primeira resposta ser recebida após uma requisição ser enviada.

## Tipos de Testes de Performance

- **Teste de Carga**: Simular o uso normal da aplicação.
- **Teste de Estresse**: Determinar os limites da aplicação.
- **Teste de Escalabilidade**: Verificar a capacidade de escalonamento da aplicação.
- **Teste de Pico**: Avaliar o comportamento da aplicação durante picos de uso.
- **Teste de Concorrência**: Checar a performance da aplicação sob alta concorrência.


## Resumo dos resultados
  -  Os resultados indicam que a operação de cadastro e de buscar todos são as mais custosas em termos de tempo, enquanto listar e deletar usuários são mais rápidas.
  - Foi constatado também que os valores de latência oscilam bastante.
  - Foi constatado que outros processos e a temperatura mais elevadas no hardware afetam nos resultatdos dos testes. Pois foram feitos testes após uma serie de testes, e posteriormente foram refeitos após o harware frio e deram resultados bem diferentes.
 
## Recursos Necessários
  -  Recursos Humanos: Testador.
  -  Equipamento: Computador.
  -  Software: Jira, GitLab, NodeJs, VS Code, K6, chocolatey.
  - Para instalar o chocolatey é necessario instalar via linha de comando em um terminal usando este comando:
  ```` bash
 Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
  ````
  - E posteriormente instalar o K6 tambem no terminal usando este comando
  `````bash
  choco install k6
`````
Para rodar a API ServeRest localmente foi utilizado o seguinte comando:
`````bash
  npx serverest@latest
`````
Já para rodar os testes utiliza o seguite comando:
`````bash
  k6 run nomeDaPasta.js
`````

`````bash
sudo yum update -y

sudo yum install gcc-c++ make -y

//checar se curl está instalado
curl --version

​​​​​​​// caso curl não esteja instalado execute comando abaixo
​​​​​​​​​​​​​sudo yum install curl 

mkdir serverestApi

cd serverestApi

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo yum install -y nodejs

// caso de algum erro de apt-get execute apenas o comando abaixo!
sudo yum install -y nodejs

npx serverest@latest
````

`````bash
sudo yum install git -y  # Para Amazon Linux/CentOS

git clone https://github.com/juniorschmitz/nestjs-cinema.git

cd nestjs-cinema

npm install

npm run start
`````

34.227.111.1:3000/movies

### **Cobertura Atingida (%)** = (Número de Cenários Bem-sucedidos / Número Total de Cenários Propostos) × 100

- **Cobertura Atingida (%)** = (19/32) x 100 = 59,375%

## Pessoas Envolvidas
  -  Quem são os testadores?
      -  Daniel .

## Agradecimentos:
- Enzo, Leticia, Ricardo, Jorge, Mathias, Gabriel Just.

## Referências
- Material do sharepoint de K6 Avançado".
- Documentação do K6.
- Chatgpt 4o para ajudar na organização do planejamento e códigos.

# LET'S GO!!!!
<div align="center">
    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJlMnFtbnF0MWl0aDBxaHkxeTFva3YyOHdseXJhajdxb3B3eng1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6pPRBKAoRKJa/giphy.gif" width="500px" />
</div>




