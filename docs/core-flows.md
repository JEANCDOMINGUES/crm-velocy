# CRM Velocy - Fluxos Criticos

## 1. Objetivo

Descrever os fluxos centrais do sistema para alinhar negocio, arquitetura e implementacao.

## 2. Principios

- todo fluxo deve deixar rastreabilidade;
- sempre que possivel o usuario deve ter contexto completo;
- a IA deve apoiar, mas nao bloquear a supervisao humana;
- integracoes externas devem falhar de forma controlada;
- fluxos criticos devem produzir eventos para metricas e auditoria.

## 3. Fluxo 1 - Atendimento Receptivo no WhatsApp com IA

### Objetivo

Receber uma nova mensagem de cliente no WhatsApp, iniciar triagem por IA e encaminhar para atendimento humano quando necessario.

### Etapas

1. O cliente envia mensagem para o numero oficial integrado.
2. A Meta envia o webhook para o sistema.
3. O Modulo de Integracoes valida e traduz o evento recebido.
4. O Backend identifica ou cria o contato e correlaciona com um cliente.
5. O Motor de Atendimento localiza ou cria a conversa ativa.
6. A conversa entra no estado `em triagem por IA`.
7. A Camada de IA recebe contexto minimo e classifica a intencao.
8. A IA gera segmento, resumo e score de confianca.
9. O sistema decide entre continuar automacao inicial ou transferir para humano.
10. Se houver transferencia, a conversa vai para uma fila humana.
11. O atendente visualiza o historico, o resumo e a classificacao.
12. O atendimento humano assume a conversa.
13. O sistema registra eventos para dashboard, auditoria e historico.

### Gatilhos de handoff sugeridos

- baixa confianca da IA;
- solicitacao do cliente para falar com humano;
- tema sensivel ou critico;
- falha repetida de compreensao;
- regra de negocio configurada.

### Saida esperada

- conversa criada ou atualizada;
- contexto preservado;
- atendimento corretamente roteado;
- eventos registrados.

## 4. Fluxo 2 - Atendimento Humano no Inbox

### Objetivo

Permitir que o agente trate uma conversa de forma centralizada e rastreavel.

### Etapas

1. O agente acessa o inbox.
2. O sistema lista conversas por fila, status e prioridade.
3. O agente assume uma conversa ou recebe atribuicao automatica.
4. O sistema exibe historico do cliente e interacoes anteriores.
5. O agente responde o cliente.
6. O sistema envia a mensagem pelo canal correspondente.
7. O status da conversa e atualizado.
8. O atendimento pode ficar aguardando cliente, em andamento ou encerrado.
9. Eventos operacionais alimentam metricas e auditoria.

### Saida esperada

- resposta enviada;
- historico preservado;
- status atualizado;
- produtividade mensuravel.

## 5. Fluxo 3 - Campanha Ativa no WhatsApp

### Objetivo

Permitir disparo ativo de comunicacao outbound com governanca e rastreabilidade.

### Etapas

1. Um usuario autorizado cria uma campanha.
2. O usuario define nome, objetivo, publico e template.
3. O sistema valida template aprovado e regras de envio.
4. A campanha e salva como rascunho ou agendada.
5. No momento de envio, jobs assincronos processam a lista de destinatarios.
6. O Modulo de Integracoes envia as mensagens pela API oficial da Meta.
7. O sistema recebe eventos de entrega, leitura e resposta.
8. A campanha consolida seus resultados.
9. O dashboard exibe desempenho por campanha, template e segmento.

### Saida esperada

- campanha rastreavel;
- conformidade com o canal;
- metricas consolidadas.

## 6. Fluxo 4 - Recebimento de E-mail

### Objetivo

Permitir que e-mails sejam tratados dentro da mesma plataforma.

### Etapas

1. O provedor de e-mail encaminha ou sinaliza uma nova mensagem.
2. O sistema identifica remetente e correlaciona com cliente ou contato.
3. O Motor de Atendimento cria ou atualiza a conversa.
4. O inbox apresenta o novo item para tratamento.
5. O agente responde pela plataforma.
6. O sistema registra a interacao e atualiza metricas.

### Saida esperada

- e-mail consolidado no historico;
- atendimento unificado;
- rastreabilidade preservada.

## 7. Fluxo 5 - Atualizacao de Dashboard

### Objetivo

Garantir que indicadores reflitam o comportamento operacional do sistema.

### Etapas

1. Eventos operacionais e de integracao sao registrados.
2. O Processamento Assincrono consolida os eventos relevantes.
3. As agregacoes alimentam estruturas de consulta do dashboard.
4. O Frontend recupera indicadores por filtros definidos.
5. O usuario acompanha visao operacional, supervisao ou campanha.

### Saida esperada

- indicadores consistentes;
- leitura rapida da operacao;
- apoio a decisao.

## 8. Fluxo 6 - Auditoria de Acao Sensivel

### Objetivo

Registrar acoes criticas para fins de governanca, seguranca e compliance.

### Etapas

1. Um usuario executa uma acao administrativa ou operacional sensivel.
2. O Backend valida permissao.
3. A acao e executada.
4. O sistema registra quem fez, quando fez e o que mudou.
5. O evento fica disponivel para rastreabilidade e analise.

### Exemplos de acoes sensiveis

- alteracao de perfil de acesso;
- configuracao de canal;
- criacao ou alteracao de template;
- disparo de campanha;
- encerramento manual relevante;
- reatribuicao de conversa em contexto sensivel.

## 9. Pontos Criticos de Implementacao

- idempotencia em webhooks;
- preservacao de contexto no handoff IA para humano;
- correlacao correta entre contato e cliente;
- definicao clara de estados da conversa;
- consolidacao confiavel de metricas;
- consistencia entre conversa, atendimento e auditoria.

## 10. Proxima Camada de Especificacao

A partir desses fluxos, os proximos artefatos naturais sao:

- modelo de dados inicial;
- contratos de API;
- backlog funcional do MVP;
- criterios de aceite por fluxo;
- matriz de estados da conversa.
