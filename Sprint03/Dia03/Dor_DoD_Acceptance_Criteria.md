# DoR, DoD & Acceptance Criteria

## História de Usuário

- Em portugues devemos usar a expressão ‘história de usuário’
- É crucial contextualizar os desenvolvedores, explicando para quem a funcionalidade é destinada, suas dores e necessidades, e o que o usuário espera alcançar com a solução. Assim, histórias de usuário funcionam como uma narrativa que guia o desenvolvimento ao descrever o quê, para quem e por quê entregar uma funcionalidade, proporcionando um direcionamento claro ao time.

- Ela deve responder às seguintes perguntas:

    - Quem é o ator? Ou seja, quem utilizará a funcionalidade?
    - Qual a ação que o ator executará?
    - Qual o objetivo da ação?


- Modelo:
    - Como – autor da ação (persona);
    - eu quero – funcionalidade desejada;
    - para – valor agregado à funcionalidade desejada.

- Técnica 3W 

    - Como (quem?) – aqui eu devo referenciar para quem eu estou construindo aquela funcionalidade. Quem é a minha persona atingida por aquela história?
    - eu quero (o quê?) – aqui eu devo colocar qual a funcionalidade esperada. O que minha persona deseja realizar?
    - para (por quê?) – devo descrever qual a motivação para a construção daquela história. Qual o valor esperado pela pessoa usuária?

- Técnica 3C 

    - Cartão – uma User Story não deve ser muito extensa, tornando possível escrevê-la em um único cartão;
    - Conversa – seu conteúdo deve gerar discussões de alinhamento entre o time sobre o que se deseja atender;
    - Confirmação – é importante que a história de usuário possua critérios de aceitação para que seja possível a validação de êxito na construção e entrega.

- Técnica INVEST:

    - I - Independente (Independent):
    A história deve ser independente de outras, podendo ser desenvolvida e entregue separadamente. Isso facilita a priorização e planejamento das sprints.
    - N - Negociável (Negotiable):
    As histórias devem ser flexíveis e negociáveis, não sendo contratos rígidos. Deve haver espaço para discussão e ajustes conforme necessário.
    - V - Valiosa (Valuable):
    Cada história deve agregar valor ao usuário ou ao cliente. Se a história não traz valor, não deve ser considerada.
    - E - Estimável (Estimable):
    A equipe deve ser capaz de estimar o tamanho ou esforço necessário para completar a história. Isso é crucial para o planejamento eficaz das sprints.
    - S - Pequena (Small):
    As histórias devem ser pequenas o suficiente para serem completadas dentro de uma sprint. Histórias muito grandes devem ser divididas em menores.
    - T - Testável (Testable):
    Cada história deve ter critérios de aceitação claros que permitam sua verificação por meio de testes. Se não é possível testar a história, ela não está bem definida.

Exemplo:

- User Story
    - COMO vendedor
    - EU QUERO visualizar os produtos da loja
    - PARA ver sua quantidade em estoque

- O perfil vendedor deve:
    - ter acesso ao sistema de gestão da loja;
    - possuir permissão de geração de relatórios;
    - possuir permissão a opção de relatório ‘’Produtos em Estoque’’.

- Exemplificando um pouco melhor sobre as tasks(tarefas) para o exemplo apresentado:

    - Task 1 – Criar perfil de usuário ‘’vendedor’’;
    - Task 2 – Criar permissão de geração de relatório;
    - Task 3 – Criar permissão de ‘’Relatório de Produtos em Estoque’’.


- É muito importante a participação do cliente e o time para contribuir com a história de usuário.
- A história de usuário deve ser objetiva, ágil e simples.
- Um Épico é uma história de usuário muito grande, e que deve ser dividido em User Stories menores

## Defintion of Ready (DoR - Definição de Preparado)

- Define os critérios que uma história de usuário, tarefa ou item do backlog deve atender antes de ser puxada para uma sprint. Estes critérios garantem que o time tenha todas as informações necessárias para começar a trabalhar na tarefa.

## Definition of Done (DoD - Definição de Feito)

- Define os critérios que uma história de usuário, tarefa ou incremento de produto deve atender para ser considerado completo. Estes critérios garantem que o trabalho está pronto para ser entregue e que cumpre os padrões de qualidade.
- DoR e DoD:
    - Devem ser criadas antes da primeira sprint.
    - Podem ser alteradas contato que faça sentido para o time
    - Cada time deve ter a sua.

## Critérios de Aceitação
- São condições específicas que uma história de usuário deve atender para ser considerada completa e funcional.
- Bons critérios de aceitação:
    - São escritos com menor nível de detalhamento
    - São independente de implementação
    - Definem o que fazer e não como fazer
- Não existe uma forma correta de escrita desses critérios de aceitação. Eles podem ser em forma de tópicos ou mesmo através da descrição de possíveis cenários de uso do usuário.

- Critérios de Aceite

- Exemplo simples: Exibir apenas os dois últimos e-mails não lidos ao acessar pela primeira vez.

- Exemplo avançado: DADO que o cliente ainda não recebeu nenhum email, QUANDO o cliente abrir o painel, ENTÃO a seguinte mensagem “nenhum email anterior” é exibida.


- Referências
    - https://www.dtidigital.com.br/blog/historias-de-usuario
    - https://medium.com/guma-rs/n%c3%a3o-confunda-dod-com-crit%c3%a9rios-de-aceite-d030b9a812d9
    - https://medium.com/@karladiasn/user-stories-e-crit%C3%A9rios-de-aceita%C3%A7%C3%A3o-317c48403fcd
