# CRM Velocy - Detalhamento dos Componentes

## 1. Objetivo

Detalhar os componentes principais da arquitetura do CRM Velocy, deixando claro o papel de cada bloco, suas entradas, saidas, responsabilidades e interacoes.

## 2. Visao Geral

Os componentes principais do sistema sao:

- Frontend Web
- API Backend
- Modulo de Integracoes
- Motor de Atendimento
- Camada de IA
- Processamento Assincrono
- Persistencia

Esses componentes trabalham juntos para receber interacoes dos canais, processar regras de negocio, distribuir atendimento, apoiar a operacao com IA e gerar metricas e auditoria.

## 3. Frontend Web

### Papel

E a interface usada por atendentes, supervisores, gestores e administradores.

### Responsabilidades

- exibir inbox unificado;
- permitir resposta e acompanhamento de conversas;
- exibir historico do cliente;
- disponibilizar dashboards;
- permitir configuracoes administrativas;
- operar campanhas e templates, quando habilitados.

### Entradas

- acoes dos usuarios;
- dados carregados da API Backend;
- atualizacoes de status e conversas.

### Saidas

- comandos para API;
- alteracoes de status;
- acoes de atribuicao, resposta, filtros e configuracoes.

### Observacoes

O frontend nao deve conter regra critica de negocio. Ele deve refletir o estado do sistema e acionar a API para toda decisao relevante.

## 4. API Backend

### Papel

E o ponto central de orquestracao do sistema, responsavel por regras de negocio, seguranca e exposicao de contratos internos e externos.

### Responsabilidades

- autenticar usuarios;
- autorizar operacoes por perfil;
- expor endpoints para frontend;
- aplicar regras de negocio;
- coordenar acesso aos modulos internos;
- persistir e consultar dados;
- publicar eventos internos quando necessario.

### Entradas

- requisicoes do frontend;
- chamadas internas;
- eventos encaminhados pelo modulo de integracoes.

### Saidas

- respostas para frontend;
- comandos para motor de atendimento;
- comandos para camada de IA;
- comandos para persistencia;
- publicacao de jobs e eventos.

### Observacoes

Este componente e o nucleo da plataforma. A regra de negocio deve ficar concentrada aqui e nos modulos de dominio, e nao espalhada nos adaptadores externos.

## 5. Modulo de Integracoes

### Papel

Atuar como ponte entre o CRM Velocy e sistemas externos.

### Responsabilidades

- receber webhooks dos canais;
- enviar mensagens e campanhas para APIs externas;
- traduzir payloads externos para o modelo interno;
- encapsular autenticacao e detalhes de cada fornecedor;
- tratar falhas, retries e idempotencia.

### Entradas

- webhooks vindos de WhatsApp, Facebook, Instagram e e-mail;
- comandos internos de envio de mensagem;
- comandos de disparo de campanha.

### Saidas

- eventos internos padronizados;
- status de entrega, leitura, falha e resposta;
- notificacoes de erro ou indisponibilidade.

### Observacoes

Cada fornecedor deve ter adaptador proprio. Exemplo:

- adaptador WhatsApp;
- adaptador Facebook;
- adaptador Instagram;
- adaptador E-mail;
- adaptador IA, se tratado nessa camada.

## 6. Motor de Atendimento

### Papel

Coordenar o ciclo de vida do atendimento e da conversa.

### Responsabilidades

- criar e atualizar conversas;
- classificar status do atendimento;
- atribuir conversa a fila, equipe ou agente;
- aplicar regras de prioridade;
- acionar transferencia da IA para humano;
- manter o contexto operacional da interacao.

### Entradas

- novas mensagens recebidas;
- comandos do frontend;
- resultados da camada de IA;
- regras de negocio definidas pela API.

### Saidas

- atualizacao de fila e status;
- atribuicoes;
- eventos de handoff;
- historico consolidado para consulta.

### Observacoes

Este componente representa o coracao operacional do CRM. Ele nao conversa diretamente com o usuario final nem com o fornecedor externo sem passar pelas camadas apropriadas.

## 7. Camada de IA

### Papel

Apoiar o atendimento receptivo com automacao assistiva e classificacao inteligente.

### Responsabilidades

- identificar intencao do cliente;
- segmentar o contato;
- sugerir categoria ou motivo de contato;
- gerar resumo da conversa para handoff;
- sugerir respostas ao atendente;
- sinalizar baixa confianca ou necessidade de humano.

### Entradas

- mensagem inicial do cliente;
- historico resumido da conversa;
- contexto do cliente;
- regras de negocio para triagem.

### Saidas

- classificacao de intencao;
- score ou nivel de confianca;
- sugestao de segmento;
- resumo de contexto;
- decisao recomendada de continuar na IA ou transferir.

### Observacoes

Essa camada deve ser assistiva. O sistema nao deve depender de autonomia total da IA para cenarios criticos ou sensiveis.

## 8. Processamento Assincrono

### Papel

Executar tarefas que nao precisam bloquear a experiencia do usuario.

### Responsabilidades

- processar webhooks recebidos;
- enviar campanhas;
- recalcular agregacoes de metricas;
- executar retries;
- consolidar eventos de auditoria e analise;
- lidar com operacoes em lote.

### Entradas

- jobs enfileirados pela API;
- eventos do modulo de integracoes;
- rotinas internas de consolidacao.

### Saidas

- atualizacao de dados;
- eventos processados;
- notificacoes de sucesso ou falha;
- registros para dashboards e auditoria.

### Observacoes

Sem essa camada, o sistema pode ficar lento ou fragil com aumento de volume. Ela e essencial para campanhas e webhooks.

## 9. Persistencia

### Papel

Armazenar dados de forma estruturada, segura e consultavel.

### Responsabilidades

- salvar entidades de negocio;
- manter historico de conversas;
- armazenar configuracoes;
- registrar eventos de auditoria;
- guardar anexos e arquivos;
- suportar leitura para dashboards e operacao.

### Subcomponentes

#### PostgreSQL

Usado para:

- usuarios;
- clientes;
- conversas;
- mensagens;
- campanhas;
- templates;
- configuracoes;
- auditoria.

#### Redis

Usado para:

- filas;
- jobs;
- cache;
- locks;
- estados temporarios.

#### Object Storage

Usado para:

- anexos;
- arquivos de campanha;
- artefatos externos;
- eventualmente exportacoes.

## 10. Comunicacao Entre Componentes

### Fluxo geral

1. O canal externo envia um evento.
2. O Modulo de Integracoes recebe e traduz esse evento.
3. A API Backend e o Motor de Atendimento processam a regra de negocio.
4. Se necessario, a Camada de IA e acionada.
5. O resultado atualiza a conversa e a fila.
6. O Frontend Web apresenta o novo estado ao operador.
7. Eventos derivados seguem para Processamento Assincrono e Persistencia.

## 11. Exemplo de Fluxo - WhatsApp Receptivo com IA

### Passo 1

O cliente envia uma mensagem no WhatsApp.

### Passo 2

O webhook chega no adaptador WhatsApp dentro do Modulo de Integracoes.

### Passo 3

O evento e traduzido para o formato interno e entregue ao Backend.

### Passo 4

O Motor de Atendimento cria ou atualiza a conversa.

### Passo 5

A Camada de IA recebe a mensagem, classifica a intencao, segmenta o cliente e sugere o proximo passo.

### Passo 6

Se a IA tiver confianca e o caso permitir, ela continua o atendimento inicial.

### Passo 7

Se houver gatilho de transferencia, o Motor de Atendimento encaminha a conversa para uma fila humana.

### Passo 8

O Frontend exibe ao atendente o historico, o resumo da IA e o contexto coletado.

### Passo 9

Os eventos relevantes alimentam metricas, auditoria e monitoramento.

## 12. Exemplo de Fluxo - Campanha Ativa no WhatsApp

### Passo 1

Um usuario autorizado cria uma campanha no Frontend.

### Passo 2

A API valida permissao, segmento e template aprovado.

### Passo 3

O Processamento Assincrono agenda ou dispara os envios.

### Passo 4

O Modulo de Integracoes envia as mensagens pela API oficial da Meta.

### Passo 5

Eventos de entrega, leitura e resposta retornam ao sistema.

### Passo 6

Os resultados sao persistidos e consolidados no dashboard.

## 13. Fronteiras e Cuidados

- o Frontend nao decide regra critica;
- o Modulo de Integracoes nao deve concentrar regra de negocio;
- a Camada de IA nao deve assumir autonomia irrestrita;
- o Motor de Atendimento deve ser o centro do estado operacional;
- o Processamento Assincrono deve absorver tarefas pesadas e volumosas.

## 14. Conclusao

Esses componentes formam a espinha dorsal do CRM Velocy. Separar claramente seus papeis desde o inicio reduz acoplamento, melhora manutencao e prepara o sistema para crescer com mais canais, automacoes e inteligencia.
