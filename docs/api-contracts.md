# CRM Velocy - Contratos Iniciais de API

## 1. Objetivo

Definir os contratos iniciais de API para suportar o MVP, com foco em clareza de responsabilidades e baixo acoplamento entre frontend, backend e integracoes.

## 2. Principios

- API REST como interface principal do MVP;
- contratos simples e evolutiveis;
- separacao entre APIs internas e endpoints de webhook;
- respostas coerentes com rastreabilidade minima;
- validacao de autorizacao nas rotas protegidas.

## 3. Convencoes Iniciais

- prefixo base: `/api`
- formato principal: JSON
- autenticacao: bearer token
- versao inicial sugerida: `/api/v1`

## 4. Modulo de Autenticacao

### `POST /api/v1/auth/login`

Responsabilidade:

- autenticar usuario e retornar token.

Payload inicial:

- email
- senha

Resposta esperada:

- access_token
- refresh_token, se adotado
- usuario resumido

### `GET /api/v1/auth/me`

Responsabilidade:

- retornar dados do usuario autenticado.

## 5. Modulo de Usuarios e Acesso

### `GET /api/v1/users`

- listar usuarios

### `POST /api/v1/users`

- criar usuario

### `GET /api/v1/users/:id`

- detalhar usuario

### `PATCH /api/v1/users/:id`

- atualizar usuario

### `GET /api/v1/teams`

- listar equipes

### `POST /api/v1/teams`

- criar equipe

### `GET /api/v1/queues`

- listar filas

### `POST /api/v1/queues`

- criar fila

## 6. Modulo de CRM

### `GET /api/v1/customers`

- listar clientes

### `POST /api/v1/customers`

- criar cliente

### `GET /api/v1/customers/:id`

- detalhar cliente

### `PATCH /api/v1/customers/:id`

- atualizar cliente

### `GET /api/v1/contacts`

- listar contatos

### `POST /api/v1/contacts`

- criar contato

## 7. Modulo de Conversas

### `GET /api/v1/conversations`

Responsabilidade:

- listar conversas com filtros por canal, fila, agente e status.

Filtros iniciais sugeridos:

- canal
- status
- fila_id
- usuario_id
- equipe_id

### `GET /api/v1/conversations/:id`

Responsabilidade:

- detalhar conversa, historico, contexto e dados basicos do cliente.

### `PATCH /api/v1/conversations/:id/status`

Responsabilidade:

- atualizar status da conversa.

Payload inicial:

- status
- motivo, se aplicavel

### `POST /api/v1/conversations/:id/assign`

Responsabilidade:

- atribuir conversa para fila, equipe ou usuario.

Payload inicial:

- fila_id
- equipe_id
- usuario_id

## 8. Modulo de Mensagens

### `GET /api/v1/conversations/:id/messages`

- listar mensagens da conversa

### `POST /api/v1/conversations/:id/messages`

Responsabilidade:

- enviar mensagem na conversa pelo canal correspondente.

Payload inicial:

- conteudo_texto
- anexos, em evolucao futura

## 9. Modulo de IA

### `GET /api/v1/conversations/:id/ai-triage`

- consultar ultima triagem registrada

### `POST /api/v1/conversations/:id/ai-handoff`

Responsabilidade:

- forcar transferencia para humano quando permitido pelo fluxo.

Payload inicial:

- motivo

## 10. Modulo de Dashboard

### `GET /api/v1/dashboard/operational`

Responsabilidade:

- retornar metricas operacionais agregadas.

Filtros iniciais:

- periodo_inicio
- periodo_fim
- canal
- equipe_id
- usuario_id

### `GET /api/v1/dashboard/campaigns`

- retornar indicadores de campanhas, quando habilitado

## 11. Modulo de Campanhas

### `GET /api/v1/templates`

- listar templates

### `POST /api/v1/templates`

- criar template interno ou registrar template externo

### `GET /api/v1/campaigns`

- listar campanhas

### `POST /api/v1/campaigns`

- criar campanha

### `POST /api/v1/campaigns/:id/schedule`

- agendar campanha

### `POST /api/v1/campaigns/:id/send`

- iniciar envio da campanha

## 12. Endpoints de Webhook

### `POST /api/v1/webhooks/whatsapp`

- receber eventos do WhatsApp oficial

### `POST /api/v1/webhooks/facebook`

- receber eventos do Facebook

### `POST /api/v1/webhooks/instagram`

- receber eventos do Instagram

### `POST /api/v1/webhooks/email`

- receber eventos do provedor de e-mail

## 13. Respostas de Erro Iniciais

Formato sugerido:

- codigo
- mensagem
- detalhes, quando aplicavel
- correlation_id, quando aplicavel

## 14. Pontos para Refinamento Futuro

- paginacao padronizada;
- filtros avancados;
- versionamento de contratos;
- endpoints de configuracao de canais;
- endpoints de auditoria;
- endpoints administrativos de observabilidade.
