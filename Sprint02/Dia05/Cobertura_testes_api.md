
# Cobertura de testes de API

- É importante que seja feita essa análise para que seja entendido com clareza sobre o que está sendo implementado e o quanto os testes estão cobrindo.


## Cobertura de entrada(Input Coverage)

- URI é um identificador genérico que inclui tanto URLs quanto URNs. Em outras palavras, toda URL ou URN é uma URI.
Exemplo de URI: https://www.example.com/index.html (URL) e user (URN).
Quando for a mesma URI para métodos diferentes considera apenas um endpoint.

- (testes automatizados / quantidade de endpoints) * 100 = A porcentagem da cobertura

- Ex: 6/13 * 100 = 46%

## Cobertura de Operações (input)

- (quantidade de operações da API estão automatizados/ quantidade total de operações da API REST)*100 = Cobertura de Operações

Obs: Para garantir uma cobertura de 100% é necessário testar todos os parâmetros de entrada.


# Testes candidatos à automação

## Pontos a serem levados em consideração para automação dos testes

- Considerar as necessidades do cliente e quais os fluxos mais importantes.

- Identificar os riscos e a partir do grau desse risco pode ser necessário automatizar.

- Tarefas de testes que se repetem muito estão sujeitas a automação.

- Testes que são simples de automatizar e não requerem muita configuração são bons candidatos. Testes muito complexos podem ser mais difíceis e caros de automatizar.

- Tarefas nova não podem ser automatizadas de início.

- Mapa mental organizado por árvores de funcionalidade com tópicos organizados por fluxos.
