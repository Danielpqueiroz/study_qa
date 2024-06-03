# Atividade 01

# Bug Report Template
## Título:
(Uma breve descrição do bug, deve ser concisa e descritiva)

Descrição:
(Uma descrição detalhada do problema, incluindo contexto e impacto do bug)

## Passos para Reproduzir:

(Passo 1: Ação inicial para reproduzir o bug)

(Passo 2: Ação subsequente para reproduzir o bug)

(Passo 3: Continuação dos passos, se necessário)
...
## Resultado Esperado:
(Uma descrição do que deveria acontecer, caso o sistema funcionasse corretamente)

Resultado Obtido:
(Uma descrição do que realmente aconteceu, detalhando o comportamento incorreto observado)

## Ambiente de Teste:

Sistema Operacional: (ex.: Windows 10, macOS Big Sur, Ubuntu 20.04)
Navegador: (ex.: Chrome 89, Firefox 86, Safari 14)
Versão da Aplicação: (ex.: v1.0.0)
Dispositivo: (ex.: PC, Mac, Smartphone)
Anexos:

## Capturas de Tela:
 (Adicione capturas de tela que mostram o problema)
Vídeos: (Links para vídeos que demonstrem o bug em ação, se aplicável)
Logs: (Qualquer log relevante que possa ajudar a entender o problema)
Prioridade: (Baixa, Média, Alta, Crítica)

## Severidade: 
(Trivial, Menor, Maior, Crítica, Bloqueante)

## Comentários Adicionais:
(Adicione qualquer outra informação relevante que possa ajudar na análise e resolução do bug)

# Exemplo Preenchido
Título:
Erro ao salvar nova entrada de usuário

## Descrição:
Ao tentar salvar uma nova entrada de usuário no formulário de registro, a aplicação retorna um erro e a entrada não é salva. Este problema impede novos usuários de se registrarem na aplicação.

## Passos para Reproduzir:

Navegue até a página de registro.
Preencha todos os campos obrigatórios no formulário.
Clique no botão "Registrar".
Observe o erro que ocorreu.
Resultado Esperado:
A aplicação deve salvar a nova entrada de usuário e redirecionar para a página de boas-vindas.

## Resultado Obtido:
A aplicação exibe uma mensagem de erro "Falha ao salvar o usuário" e permanece na página de registro.

## Ambiente de Teste:

Sistema Operacional: Windows 10
Navegador: Chrome 89
Versão da Aplicação: v1.0.0
Dispositivo: PC
Anexos:

## Capturas de Tela: 
[captura_de_tela_erro.png](URL para a imagem)
Vídeos: [video_erro_registro.mp4](URL para o vídeo)
Logs: [log_erro.txt](URL para o arquivo de log)
Prioridade: Alta

## Severidade: Crítica

## Comentários Adicionais:
Este problema foi reportado por vários usuários e ocorre consistentemente.

# Atividade 2
API REST são respostas padrões dos servidores quando lhe é solicitado algo. essas respostas são códigos com três dígitos onde o primeiro digito é referente a uma família de códigos.

## 1xx São Informativos
- 100 Continue: O servidor recebeu os cabeçalhos da solicitação e o cliente deve prosseguir para enviar o corpo da solicitação.
- 101 Switching Protocols: O servidor concorda em mudar o protocolo conforme solicitado pelo cliente.
## 2xx Indica Sucesso
- 200 OK: A solicitação foi bem-sucedida. A resposta depende do método HTTP utilizado.
- 201 Created: A solicitação foi bem-sucedida e um novo recurso foi criado.
- 204 No Content: A solicitação foi bem-sucedida, mas não há conteúdo para enviar de volta.
## 3xx São Redirecionamentos
- 301 Moved Permanently: O recurso solicitado foi movido permanentemente para uma nova URL.
- 302 Found: O recurso solicitado foi temporariamente movido para uma nova URL.
- 304 Not Modified: O recurso não foi modificado desde a última solicitação.
## 4xx Erro causado pelo cliente
- 400 Bad Request: A solicitação não foi aceita devido a uma sintaxe inválida.
- 401 Unauthorized: A autenticação é necessária e não foi fornecida.
- 403 Forbidden: O servidor entendeu a solicitação, mas se recusa a autorizá-la.
- 404 Not Found: O recurso solicitado não foi encontrado.
- 409 Conflict: A solicitação não pôde ser concluída devido a um conflito com o estado atual do recurso.
## 5xx Erro no servidor
- 500 Internal Server Error: O servidor encontrou uma condição inesperada.
- 501 Not Implemented: O servidor não suporta a funcionalidade necessária para atender à solicitação.
- 503 Service Unavailable: O servidor está indisponível temporariamente, geralmente devido a manutenção ou sobrecarga.