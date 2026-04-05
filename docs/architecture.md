# CRM Velocy - Arquitetura Inicial

## 1. Objetivo

Definir a arquitetura inicial recomendada para suportar o MVP e permitir evolucao incremental sem comprometer clareza e manutencao.

## 2. Abordagem Arquitetural

A recomendacao inicial e iniciar com um monolito modular orientado a dominios. Essa abordagem favorece:

- menor complexidade operacional no inicio;
- maior velocidade de entrega;
- separacao logica por modulos;
- possibilidade de extracao futura de componentes mais criticos.

## 3. Dominios Iniciais

- Identity and Access
- CRM
- Inbox
- Atendimento
- IA Assistiva
- Campanhas
- Integracoes
- Dashboard e Metricas
- Auditoria

## 4. Componentes Principais

### 4.1 Frontend Web

- interface de operacao;
- area administrativa;
- dashboards;
- configuracoes.

### 4.2 API Backend

- autenticacao;
- regras de negocio;
- CRUDs;
- contratos de integracao interna.

### 4.3 Modulo de Integracoes

- recebimento de webhooks;
- envio de mensagens;
- adaptadores por canal;
- tratamento de falhas e retries.

### 4.4 Motor de Atendimento

- orquestracao de filas;
- atribuicao;
- status de conversa;
- handoff IA para humano.

### 4.5 Camada de IA

- classificacao de intencao;
- segmentacao inicial;
- resumo de contexto;
- sugestao de resposta;
- regras de fallback.

### 4.6 Processamento Assincrono

- campanhas;
- sincronizacoes;
- webhooks;
- agregacao de metricas;
- retries e retentativas.

## 5. Persistencia

### 5.1 Banco Transacional

- PostgreSQL para entidades principais, historico, configuracoes e auditoria.

### 5.2 Cache e Filas

- Redis para cache, locks e filas de jobs.

### 5.3 Arquivos

- object storage para anexos e artefatos.

## 6. Integracao por Adaptadores

Cada canal deve ser isolado em adaptador proprio, com responsabilidades claras:

- traduzir payloads externos para o modelo interno;
- encapsular autenticacao e contrato do fornecedor;
- padronizar erros e retries;
- evitar acoplamento do dominio a regras externas.

## 7. Eventos Relevantes

Eventos que merecem tratamento assincrono desde o inicio:

- mensagem recebida;
- mensagem enviada;
- conversa atribuida;
- conversa transferida IA para humano;
- campanha agendada;
- campanha enviada;
- erro de integracao;
- consolidacao de metricas.

## 8. Seguranca

- autenticacao via JWT ou provedor corporativo;
- RBAC por perfis;
- segregacao de acesso por tenant, se adotado;
- logs de auditoria para operacoes sensiveis;
- protecao de segredos e credenciais externas.

## 9. Observabilidade

- logs estruturados;
- rastreamento de falhas em webhooks e jobs;
- metricas de filas e retries;
- monitoramento de erros de integracoes;
- monitoramento basico de disponibilidade.

## 10. Decisoes Iniciais

- iniciar com REST como interface principal;
- receber eventos externos via webhooks;
- usar jobs para desacoplar processamento critico;
- evitar microservicos no primeiro ciclo;
- manter o dominio protegido de detalhes dos fornecedores.
