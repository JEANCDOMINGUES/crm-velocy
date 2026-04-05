# CRM Velocy - Estrutura Inicial de Modulos do Backend

## 1. Objetivo

Definir uma organizacao inicial dos modulos do backend para o MVP, alinhada ao dominio e preparada para evolucao incremental.

## 2. Diretriz Geral

O backend deve ser organizado como monolito modular, com fronteiras claras entre dominio, aplicacao, integracoes e infraestrutura.

## 3. Modulos Iniciais

### auth

Responsavel por:

- login;
- validacao de token;
- contexto do usuario autenticado.

### users

Responsavel por:

- usuarios;
- perfis;
- permissoes iniciais.

### teams

Responsavel por:

- equipes;
- associacao entre usuarios e equipes.

### queues

Responsavel por:

- filas;
- regras basicas de distribuicao.

### crm

Responsavel por:

- clientes;
- contatos;
- correlacao de identificadores por canal.

### conversations

Responsavel por:

- criacao e atualizacao de conversas;
- leitura do historico;
- estado da conversa.

### messages

Responsavel por:

- registro de mensagens;
- envio de mensagens;
- correlacao com canal.

### attendance

Responsavel por:

- atribuicao operacional;
- handoff IA para humano;
- recorte de atendimento.

### ai

Responsavel por:

- triagem;
- classificacao;
- score de confianca;
- resumo de contexto.

### integrations

Responsavel por:

- adaptadores externos;
- webhooks;
- envio por canais;
- tratamento de referencias externas.

### campaigns

Responsavel por:

- templates;
- campanhas;
- destinatarios;
- eventos de disparo.

### dashboard

Responsavel por:

- consultas agregadas;
- visoes operacionais;
- metricas basicas.

### audit

Responsavel por:

- trilha de auditoria;
- eventos sensiveis;
- rastreabilidade administrativa e operacional.

### jobs

Responsavel por:

- filas;
- processamento assincrono;
- retries;
- tarefas agendadas.

## 4. Estrutura Sugerida

Exemplo de organizacao:

- `src/modules/auth`
- `src/modules/users`
- `src/modules/teams`
- `src/modules/queues`
- `src/modules/crm`
- `src/modules/conversations`
- `src/modules/messages`
- `src/modules/attendance`
- `src/modules/ai`
- `src/modules/integrations`
- `src/modules/campaigns`
- `src/modules/dashboard`
- `src/modules/audit`
- `src/modules/jobs`

## 5. Camadas Internas Sugeridas por Modulo

Cada modulo pode iniciar com:

- controllers
- services
- repositories
- dto
- entities ou models

Se necessario evoluir depois:

- use-cases
- domain
- mappers
- policies

## 6. Regras Importantes

- integracoes nao devem conter regra central de negocio;
- controllers devem ser finos;
- services nao devem virar blocos monoliticos sem fronteira;
- persistencia deve ser encapsulada por repositorios ou camada equivalente;
- eventos relevantes devem ser publicados de forma consistente.

## 7. Dependencias Entre Modulos

Dependencias aceitaveis inicialmente:

- conversations depende de crm
- messages depende de conversations e integrations
- attendance depende de conversations, queues, teams e users
- ai depende de conversations e crm
- dashboard depende de eventos e dados agregados
- jobs depende de integrations, campaigns e dashboard

## 8. Pontos de Atencao

- evitar dependencia circular entre modulos;
- evitar que integrations conheca detalhes internos demais;
- separar claramente conversa, mensagem e atendimento;
- manter audit e jobs transversais, mas controlados.
