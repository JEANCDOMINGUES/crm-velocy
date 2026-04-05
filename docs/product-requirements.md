# CRM Velocy - Requisitos do Produto

## 1. Objetivo

Este documento detalha os requisitos funcionais e nao funcionais do CRM Velocy em nivel suficiente para orientar backlog, arquitetura e implementacao.

## 2. Objetivos de Negocio

- Centralizar os canais de atendimento digital em uma unica plataforma.
- Reduzir o tempo de primeira resposta ao cliente.
- Aumentar a produtividade da operacao por meio de IA assistiva.
- Permitir campanhas outbound conformes com as politicas da Meta.
- Gerar visibilidade operacional e gerencial com metricas acionaveis.

## 3. Requisitos Funcionais

### 3.1 Gestao de Usuarios e Acesso

- RF-001: O sistema deve permitir cadastro de usuarios internos.
- RF-002: O sistema deve permitir controle de acesso por perfil.
- RF-003: O sistema deve permitir associar usuarios a equipes ou filas.
- RF-004: O sistema deve registrar eventos administrativos relevantes.

### 3.2 CRM e Cadastro de Clientes

- RF-005: O sistema deve manter cadastro unificado de cliente e contato.
- RF-006: O sistema deve consolidar historico de interacoes por cliente.
- RF-007: O sistema deve permitir classificacao por tags e segmentos.
- RF-008: O sistema deve permitir registrar atributos relevantes do cliente.

### 3.3 Inbox Unificado

- RF-009: O sistema deve exibir conversas em uma fila centralizada.
- RF-010: O sistema deve identificar o canal de origem de cada interacao.
- RF-011: O sistema deve permitir atribuicao de conversa a agente ou fila.
- RF-012: O sistema deve permitir atualizacao de status do atendimento.
- RF-013: O sistema deve manter o historico visivel durante o atendimento.

### 3.4 WhatsApp Receptivo

- RF-014: O sistema deve receber mensagens oriundas do WhatsApp oficial.
- RF-015: O sistema deve encaminhar o primeiro atendimento para a camada de IA.
- RF-016: A IA deve classificar a intencao inicial do cliente.
- RF-017: A IA deve segmentar o cliente conforme regras de negocio.
- RF-018: O sistema deve transferir a conversa para humano quando houver gatilho definido.
- RF-019: O sistema deve manter o contexto da triagem quando houver handoff.

### 3.5 WhatsApp Ativo

- RF-020: O sistema deve permitir cadastro e gestao de templates aprovados.
- RF-021: O sistema deve permitir criar campanhas outbound no WhatsApp.
- RF-022: O sistema deve permitir segmentar publico de campanha.
- RF-023: O sistema deve permitir agendar o envio de campanhas.
- RF-024: O sistema deve registrar status de envio, entrega, leitura e resposta.

### 3.6 Facebook e Instagram

- RF-025: O sistema deve receber e exibir mensagens vindas do Facebook.
- RF-026: O sistema deve receber e exibir mensagens vindas do Instagram.
- RF-027: O sistema deve manter historico consolidado por cliente quando houver correlacao.

### 3.7 E-mail

- RF-028: O sistema deve receber e exibir mensagens de e-mail.
- RF-029: O sistema deve permitir responder e-mails pela plataforma.
- RF-030: O sistema deve vincular a troca de e-mails ao historico do cliente.

### 3.8 Dashboard e Relatorios

- RF-031: O sistema deve disponibilizar indicadores operacionais por canal.
- RF-032: O sistema deve disponibilizar indicadores por agente e equipe.
- RF-033: O sistema deve disponibilizar indicadores de campanhas.
- RF-034: O sistema deve permitir filtros por periodo, canal, equipe e agente.
- RF-035: O sistema deve diferenciar atendimentos iniciados por IA e por humano.

## 4. Requisitos Nao Funcionais

- RNF-001: O sistema deve possuir autenticacao segura.
- RNF-002: O sistema deve possuir autorizacao baseada em papeis.
- RNF-003: O sistema deve registrar logs estruturados de integracoes e eventos criticos.
- RNF-004: O sistema deve suportar processamento assincrono para campanhas e webhooks.
- RNF-005: O sistema deve ser modular para suportar expansao de canais.
- RNF-006: O sistema deve proteger dados pessoais em repouso e em transito.
- RNF-007: O sistema deve possuir auditabilidade para acoes sensiveis.
- RNF-008: O sistema deve permitir observabilidade minima de filas, falhas e integracoes.

## 5. Regras de Negocio Iniciais

- RN-001: O canal de WhatsApp deve operar apenas via API oficial da Meta.
- RN-002: O disparo ativo deve respeitar regras de consentimento e templates aprovados.
- RN-003: A IA nao deve encerrar cenarios criticos sem possibilidade de intervencao humana.
- RN-004: A transferencia para humano deve preservar o contexto coletado na triagem.
- RN-005: Toda campanha deve ser rastreavel por status, publico e template utilizado.

## 6. Criterios de Aceite Macro

- O operador deve conseguir atender clientes de canais suportados em uma interface unica.
- O gestor deve conseguir acompanhar metricas operacionais sem recorrer a planilhas externas.
- O atendimento receptivo de WhatsApp deve permitir triagem inicial por IA e handoff para humano.
- O modulo de campanhas deve respeitar a governanca de templates da Meta.
- O historico do cliente deve ser consultavel durante o atendimento.

## 7. Dependencias Externas

- APIs da Meta para WhatsApp e canais sociais aplicaveis.
- Provedor de e-mail para envio e recebimento.
- Provedor de IA para classificacao, triagem e assistencia.

## 8. Itens para Refinamento Futuro

- Definicao do modelo de tenancy.
- Definicao do modelo de cobranca.
- Definicao dos SLAs de produto.
- Definicao do nivel de autonomia permitido para a IA.
