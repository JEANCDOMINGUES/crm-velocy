# CRM Velocy - Documento Base do Projeto

## 1. Visao Geral

O CRM Velocy sera uma plataforma de atendimento e relacionamento com clientes com foco em operacao multicanal, centralizando interacoes oriundas de WhatsApp, Facebook, Instagram e E-mail em uma unica interface operacional e gerencial.

O produto devera permitir que empresas realizem atendimento receptivo e ativo, com suporte a automacao por IA no primeiro contato, roteamento para atendimento humano quando necessario, execucao de campanhas, acompanhamento de funil de atendimento e monitoramento por dashboards de metricas.

Este documento estabelece a base do projeto, suas premissas de negocio e de engenharia, os limites de escopo, as stacks sugeridas e as diretrizes para desenvolvimento no conceito SDD por CLI.

## 2. Objetivo do Produto

Construir uma solucao SaaS ou white-label de CRM de atendimento que:

- centralize os canais digitais de relacionamento com o cliente;
- permita atendimento humano assistido por IA;
- suporte campanhas outbound via WhatsApp oficial;
- forneca visibilidade operacional e executiva por meio de dashboards;
- permita evolucao incremental guiada por documentacao e especificacoes.

## 3. Problema de Negocio

Hoje muitas operacoes comerciais e de atendimento trabalham com canais fragmentados, historico disperso e baixa rastreabilidade. Isso gera:

- demora no primeiro atendimento;
- falta de contexto do historico do cliente;
- dificuldade para medir produtividade e conversao;
- risco operacional no uso de canais sem governanca;
- dificuldade em escalar atendimento e campanhas com conformidade.

O CRM Velocy devera reduzir essa fragmentacao e criar uma camada unica de operacao, gestao e inteligencia.

## 4. Perfis de Usuario

Os perfis iniciais previstos sao:

- Atendente: responde clientes, visualiza historico, assume conversas transferidas pela IA e registra andamento.
- Supervisor: acompanha filas, SLAs, produtividade, distribuicao de atendimento e campanhas.
- Gestor: acompanha dashboards executivos, resultados, desempenho por canal e indicadores de negocio.
- Administrador: configura canais, usuarios, permissoes, templates, filas, regras de roteamento e parametros da IA.

## 5. Escopo Inicial

### 5.1 Canais contemplados

- WhatsApp
- Facebook
- Instagram
- E-mail

### 5.2 Modulos principais

#### Atendimento WhatsApp Receptivo

- recebimento de mensagens vindas do cliente;
- primeiro atendimento realizado por IA;
- classificacao e segmentacao automatica do contato;
- tentativa de resolucao automatizada quando aplicavel;
- transferencia para humano quando houver gatilho de negocio, baixa confianca ou solicitacao explicita do cliente;
- manutencao do historico da conversa e do contexto do cliente.

#### Atendimento WhatsApp Ativo

- disparo de campanhas via API Oficial da Meta;
- uso de templates aprovados de acordo com as regras da Meta;
- segmentacao de audiencia;
- agendamento e monitoramento de campanhas;
- acompanhamento de entregas, leituras, respostas e conversoes.

#### Inbox Unificado

- visualizacao centralizada de conversas por canal;
- fila por equipe, agente ou prioridade;
- identificacao do canal de origem;
- historico do cliente consolidado;
- registro de status do atendimento.

#### CRM e Cadastro

- cadastro de clientes e contatos;
- consolidacao de historico de interacoes;
- tags, segmentacoes e atributos de perfil;
- vinculacao de atendimento com oportunidades ou motivos de contato.

#### Dashboard e Metricas

- metricas por canal;
- metricas por agente e equipe;
- metricas de IA versus humano;
- metricas de campanhas;
- visao executiva consolidada.

## 6. Requisitos de Negocio

### 6.1 Requisitos funcionais de alto nivel

- O sistema deve integrar os canais previstos em uma unica plataforma.
- O sistema deve permitir atendimento receptivo com apoio inicial de IA no WhatsApp.
- O sistema deve permitir transbordo do atendimento da IA para agente humano.
- O sistema deve permitir disparos ativos no WhatsApp por meio da API oficial da Meta.
- O sistema deve gerenciar templates de mensagens conforme regras da Meta.
- O sistema deve manter historico completo das interacoes do cliente.
- O sistema deve permitir dashboards com filtros por periodo, canal, equipe e agente.
- O sistema deve permitir perfis e permissoes de acesso.
- O sistema deve registrar logs de eventos operacionais relevantes.

### 6.2 Requisitos nao funcionais de alto nivel

- Seguranca de dados e controle de acesso por perfil.
- Rastreabilidade de eventos e operacoes.
- Arquitetura preparada para crescimento modular.
- Baixo acoplamento entre canais e motor de atendimento.
- Observabilidade para monitorar integracoes e filas.
- Estrutura apta a suportar multitenancy se essa estrategia for adotada.

## 7. Premissas de Negocio

- O canal de WhatsApp sera operado exclusivamente por meio da API oficial da Meta.
- O uso de templates e campanhas obedecera as politicas vigentes da Meta.
- O atendimento por IA sera assistivo e nao totalmente autonomo em cenarios criticos.
- O atendimento humano sempre podera assumir a conversa quando necessario.
- O sistema precisara suportar auditabilidade minima para operacoes sensiveis.
- O dashboard devera atender tanto visao operacional quanto gerencial.
- O produto sera desenvolvido de forma incremental, com entregas por modulos.

## 8. O Que Nao Deve Ter No Sistema

Para manter foco no MVP e reduzir risco de dispersao, o sistema inicialmente nao deve contemplar:

- integracao com WhatsApp nao oficial;
- disparos fora das regras de consentimento e politicas dos canais;
- automacao irrestrita sem possibilidade de intervencao humana;
- marketplace amplo de integracoes no inicio do projeto;
- construtor visual complexo de fluxos no primeiro ciclo;
- ERP completo ou modulo financeiro robusto;
- telefonia, VoIP ou omnichannel com voz no MVP;
- social listening amplo fora das mensagens diretamente tratadas pela operacao;
- personalizacao extrema por cliente logo no inicio;
- BI avancado substituindo ferramentas analiticas especializadas.

## 9. Diretrizes de Produto

- Centralizacao: o operador deve trabalhar em uma experiencia unica.
- Clareza operacional: filas, status e responsaveis devem ser facilmente identificados.
- Governanca: regras de acesso, trilhas de auditoria e padronizacao devem ser tratadas desde o inicio.
- Escalabilidade: novos canais e automacoes devem poder ser adicionados sem refazer o nucleo.
- Conformidade: especialmente nos fluxos de WhatsApp e no tratamento de dados pessoais.

## 10. Diretrizes Tecnicas

### 10.1 Arquitetura sugerida

Uma arquitetura modular, orientada a dominios, com separacao entre:

- aplicacao web administrativa e operacional;
- backend principal com APIs e regras de negocio;
- motor de atendimento e orquestracao;
- adaptadores de integracao por canal;
- camada de IA para classificacao, sugestao e triagem;
- pipeline de eventos e metricas;
- banco transacional e camada analitica.

### 10.2 Abordagem arquitetural inicial

Sugestao inicial:

- Monolito modular no MVP para acelerar entrega e reduzir complexidade operacional.
- Estrutura interna por modulos de dominio para facilitar futura extracao.
- Event-driven em pontos especificos como recebimento de mensagens, mudancas de status, handoff IA-humano e eventos de campanha.

Essa abordagem equilibra velocidade de entrega com capacidade de evolucao.

## 11. Stack Sugerida

### 11.1 Frontend

- Next.js
- TypeScript
- Tailwind CSS ou design system proprio
- biblioteca de componentes padronizada
- consumo de APIs REST inicialmente

### 11.2 Backend

- Node.js
- NestJS
- TypeScript
- API REST como interface principal
- Webhooks para recebimento de eventos externos

### 11.3 Dados

- PostgreSQL como banco principal transacional
- Redis para fila, cache e controle de estados rapidos
- armazenamento de objetos para anexos e artefatos

### 11.4 Filas e Processamento Assincrono

- BullMQ ou equivalente sobre Redis
- jobs para campanhas, webhooks, sincronizacoes e processamento de metricas

### 11.5 IA

- camada desacoplada para provedores de LLM
- uso inicial para classificacao, triagem, resumo e sugestao de resposta
- politicas claras de fallback para atendimento humano

### 11.6 Observabilidade e Operacao

- logs estruturados
- monitoramento de erros
- metricas de aplicacao e negocio
- trilha de auditoria para eventos criticos

### 11.7 Autenticacao e Autorizacao

- autenticacao por credenciais corporativas ou JWT com refresh token
- RBAC por perfil e permissao

## 12. Integracoes Externas Esperadas

- Meta WhatsApp Cloud API
- Facebook Messaging APIs aplicaveis
- Instagram Messaging APIs aplicaveis
- provedor de e-mail transacional e recebimento de e-mail
- provedor de IA

Observacao: cada integracao devera ser encapsulada por adaptadores especificos, evitando espalhar regras do fornecedor pelo nucleo do sistema.

## 13. Dashboard e Metricas Esperadas

### 13.1 Operacionais

- volume de atendimentos por canal;
- tempo medio de primeira resposta;
- tempo medio de atendimento;
- quantidade de atendimentos em aberto;
- SLA por fila e agente;
- taxa de transferencia IA para humano;
- taxa de resolucao pela IA.

### 13.2 Comerciais e de campanha

- quantidade de campanhas enviadas;
- taxa de entrega;
- taxa de leitura;
- taxa de resposta;
- taxa de conversao;
- desempenho por template;
- desempenho por segmento.

### 13.3 Gerenciais

- desempenho por equipe;
- produtividade por agente;
- comparativo por canal;
- tendencias por periodo;
- volumes por motivo de contato;
- indicadores de qualidade do atendimento.

## 14. Seguranca, Privacidade e Compliance

- controle de acesso por perfil e tenant, se aplicavel;
- protecao de dados pessoais em repouso e em transito;
- mascaramento de informacoes sensiveis quando necessario;
- registro de auditoria para acoes administrativas e operacionais relevantes;
- aderencia a LGPD e boas praticas de consentimento nos canais;
- governanca para uso da IA em atendimento.

## 15. Riscos e Pontos de Atencao

- dependencia de politicas e limites da Meta;
- variacao de regras por canal e por pais;
- complexidade de handoff fluido entre IA e humano;
- necessidade de observabilidade forte para webhooks e filas;
- risco de escopo excessivo se o MVP nao for bem controlado;
- necessidade de curadoria de metricas para nao criar dashboards inflados e pouco acionaveis.

## 16. Estrategia de Desenvolvimento em SDD por CLI

O desenvolvimento seguira o conceito de SDD, onde a especificacao vem antes da implementacao e cada etapa produz artefatos claros e versionaveis.

### 16.1 Ordem sugerida dos artefatos

1. Documento de visao do produto
2. Documento de requisitos funcionais e nao funcionais
3. Documento de escopo e fora de escopo do MVP
4. Documento de arquitetura inicial
5. Documento de modulos e dominios
6. Documento de integracoes externas
7. Documento de modelo de dados inicial
8. Documento de fluxos criticos
9. Documento de metricas e dashboards
10. Backlog tecnico e funcional priorizado

### 16.2 Fluxo de trabalho recomendado

1. Especificar o problema e o resultado esperado.
2. Validar restricoes de negocio e compliance.
3. Definir contrato funcional antes do codigo.
4. Definir impacto em dados, integracoes e observabilidade.
5. Quebrar em incrementos pequenos e implementaveis por CLI.
6. Implementar.
7. Validar com testes, logs e criterios de aceite.
8. Atualizar a documentacao conforme as decisoes tomadas.

### 16.3 Principios para o time

- nenhuma feature nasce sem contexto de negocio;
- nenhuma integracao entra sem contrato e estrategia de falha;
- nenhuma automacao critica fica sem supervisao operacional;
- nenhuma metrica entra em dashboard sem definicao de uso;
- toda decisao relevante deve deixar rastro documental.

## 17. Proposta de Fases

### Fase 1 - Fundacao

- definicao documental do produto;
- arquitetura inicial;
- autenticacao, perfis e base do CRM;
- inbox unificado inicial;
- integracao de WhatsApp receptivo;
- triagem inicial por IA;
- dashboard operacional basico.

### Fase 2 - Expansao de Atendimento

- Facebook;
- Instagram;
- E-mail;
- melhorias de fila, SLA e produtividade;
- mais controles de supervisao.

### Fase 3 - Campanhas e Inteligencia

- campanhas ativas via WhatsApp oficial;
- gestao de templates;
- segmentacao;
- metricas comerciais;
- recomendacoes e assistencias por IA.

## 18. Definicoes Iniciais para Decisao Futura

Pontos que precisarao ser refinados nos proximos documentos:

- sera single-tenant ou multi-tenant desde o inicio;
- qual modelo de cobranca sera adotado;
- qual provedor de autenticacao sera utilizado;
- qual provedor de e-mail sera adotado;
- quais limites operacionais e de SLA serao prometidos;
- qual profundidade o modulo de CRM tera no MVP;
- qual nivel de autonomia sera permitido para a IA.

## 19. Conclusao

O CRM Velocy deve nascer como uma plataforma focada, governavel e escalavel, priorizando atendimento multicanal, operacao centralizada, IA assistiva e medicao clara de performance. O sucesso do projeto dependera de disciplina de escopo, boa modelagem de dominios e uma execucao guiada por especificacao.

Este documento e a base para os proximos artefatos de produto e arquitetura.
