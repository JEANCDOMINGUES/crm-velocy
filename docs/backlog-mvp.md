# CRM Velocy - Backlog Inicial do MVP

## 1. Objetivo

Organizar o MVP em entregas priorizadas para orientar implementacao incremental.

## 2. Prioridades

- P0: obrigatorio para o MVP operar
- P1: muito importante para validacao do produto
- P2: relevante, mas pode entrar apos estabilizacao do MVP

## 3. Backlog

### P0 - Fundacao

- BL-001: Estruturar projeto base frontend e backend.
- BL-002: Implementar autenticacao de usuarios.
- BL-003: Implementar autorizacao por perfis.
- BL-004: Implementar cadastro basico de usuarios, equipes e filas.
- BL-005: Implementar cadastro basico de clientes e contatos.
- BL-006: Implementar modelo inicial de conversa e mensagem.
- BL-007: Implementar inbox unificado inicial.

### P0 - WhatsApp Receptivo

- BL-008: Implementar recebimento de webhook do WhatsApp oficial.
- BL-009: Implementar correlacao de contato e cliente.
- BL-010: Implementar criacao e atualizacao de conversa.
- BL-011: Implementar registro de mensagens recebidas e enviadas.
- BL-012: Implementar roteamento inicial para triagem por IA.
- BL-013: Implementar transferencia de conversa para fila humana.
- BL-014: Exibir resumo da IA no atendimento humano.

### P0 - Operacao

- BL-015: Permitir atribuicao de conversa para agente.
- BL-016: Permitir resposta humana pelo inbox.
- BL-017: Permitir atualizacao de status da conversa.
- BL-018: Registrar auditoria basica de operacoes sensiveis.
- BL-019: Implementar logs estruturados e observabilidade minima.

### P1 - Dashboard

- BL-020: Implementar metricas de volume por canal.
- BL-021: Implementar tempo medio de primeira resposta.
- BL-022: Implementar volume por agente e equipe.
- BL-023: Implementar taxa de transferencia IA para humano.
- BL-024: Criar dashboard operacional inicial.

### P1 - IA Assistiva

- BL-025: Implementar classificacao de intencao.
- BL-026: Implementar segmentacao inicial.
- BL-027: Implementar score de confianca.
- BL-028: Implementar regras de handoff configuraveis.

### P1 - Fundacao para Campanhas

- BL-029: Estruturar entidades de template e campanha.
- BL-030: Implementar cadastro inicial de templates.
- BL-031: Implementar trilha de eventos de envio.

### P2 - Evolucao

- BL-032: Integrar e-mail ao inbox.
- BL-033: Integrar Facebook ao inbox.
- BL-034: Integrar Instagram ao inbox.
- BL-035: Implementar modulo inicial de campanhas ativas.
- BL-036: Evoluir dashboards gerenciais.

## 4. Dependencias Relevantes

- webhooks dependem da estrutura de integracoes e persistencia;
- handoff depende da camada de IA e do motor de atendimento;
- dashboard depende da emissao confiavel de eventos;
- campanhas dependem de templates e integracao oficial.

## 5. Ordem Recomendada de Implementacao

1. autenticacao e perfis
2. clientes, contatos, filas e usuarios
3. conversa e mensagem
4. recebimento de webhook e inbox
5. triagem por IA
6. handoff para humano
7. resposta humana
8. metricas e dashboard inicial
9. base de campanhas

## 6. Definicao de Pronto Inicial

Um item do backlog so deve ser considerado pronto quando:

- a regra de negocio estiver clara;
- o comportamento estiver implementado;
- houver rastreabilidade minima;
- os principais cenarios de erro estiverem tratados;
- a documentacao relevante estiver atualizada.
