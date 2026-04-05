# CRM Velocy - Criterios de Aceite Iniciais

## 1. Objetivo

Definir criterios de aceite de alto valor para os fluxos e modulos centrais do MVP.

## 2. Atendimento Receptivo no WhatsApp

- CA-001: Quando uma nova mensagem chegar pelo WhatsApp oficial, o sistema deve criar ou atualizar uma conversa valida.
- CA-002: A mensagem recebida deve ficar registrada no historico da conversa.
- CA-003: A conversa deve entrar em fluxo de triagem por IA, salvo configuracao contraria.
- CA-004: O sistema deve registrar o resultado da triagem com intencao, resumo e confianca.
- CA-005: Se houver gatilho de transferencia, a conversa deve ir para fila humana sem perda de contexto.

## 3. Atendimento Humano

- CA-006: O agente deve conseguir visualizar conversas atribuidas ou disponiveis em fila.
- CA-007: O agente deve conseguir abrir uma conversa e visualizar o historico.
- CA-008: O agente deve conseguir responder a conversa pela plataforma.
- CA-009: O sistema deve atualizar o status da conversa apos resposta do agente.
- CA-010: O sistema deve registrar quem assumiu e quem respondeu a conversa.

## 4. Inbox Unificado

- CA-011: O inbox deve identificar o canal de origem de cada conversa.
- CA-012: O inbox deve permitir filtragem minima por fila, agente e status.
- CA-013: O inbox deve exibir o estado atual da conversa.

## 5. IA Assistiva

- CA-014: A IA deve classificar a intencao inicial do cliente.
- CA-015: A IA deve gerar um resumo que possa ser usado no handoff.
- CA-016: O sistema deve permitir fallback para humano em caso de baixa confianca.
- CA-017: A IA nao deve impedir o atendimento humano quando o fluxo exigir transferencia.

## 6. Auditoria e Rastreabilidade

- CA-018: Acoes administrativas sensiveis devem gerar evento de auditoria.
- CA-019: O sistema deve registrar eventos relevantes de integracao.
- CA-020: O sistema deve permitir rastrear alteracoes de status de conversa.

## 7. Dashboard Inicial

- CA-021: O sistema deve exibir volume de atendimentos por canal.
- CA-022: O sistema deve exibir tempo medio de primeira resposta.
- CA-023: O sistema deve exibir volume por agente ou equipe.
- CA-024: O sistema deve exibir taxa de transferencia IA para humano.

## 8. Campanhas e Templates

- CA-025: O sistema deve permitir manter templates com status de aprovacao.
- CA-026: O sistema deve impedir disparo ativo com template invalido ou nao aprovado.
- CA-027: Eventos de envio de campanha devem ser rastreaveis.

## 9. Qualidade Operacional

- CA-028: Falhas de integracao nao devem descartar mensagens sem registro.
- CA-029: Webhooks repetidos nao devem criar duplicidade indevida.
- CA-030: O sistema deve manter consistencia minima entre conversa, atendimento e mensagem.
