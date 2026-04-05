# CRM Velocy - Modelo de Dominio

## 1. Objetivo

Definir os principais elementos de dominio do CRM Velocy, suas responsabilidades, relacoes e regras iniciais de negocio.

## 2. Principios de Modelagem

- o modelo deve refletir o negocio antes da tecnologia;
- entidades devem representar conceitos reais da operacao;
- canais e fornecedores nao devem distorcer o dominio central;
- o dominio deve preservar historico, rastreabilidade e contexto;
- IA deve ser modelada como apoio ao atendimento, nao como substituicao irrestrita.

## 3. Dominios Principais

Os dominios iniciais da plataforma sao:

- Identidade e Acesso
- CRM
- Atendimento
- Inbox
- Integracoes
- IA Assistiva
- Campanhas
- Dashboard e Metricas
- Auditoria

## 4. Entidades Principais

### 4.1 Usuario

Representa uma pessoa interna que acessa a plataforma.

Exemplos:

- atendente;
- supervisor;
- gestor;
- administrador.

Responsabilidades:

- autenticar no sistema;
- executar acoes conforme perfil;
- atender conversas;
- acompanhar operacao ou configuracoes.

## 4.2 Perfil

Representa o papel de acesso do usuario.

Exemplos:

- atendente;
- supervisor;
- gestor;
- administrador.

Responsabilidades:

- limitar permissoes;
- definir capacidades operacionais e administrativas.

## 4.3 Equipe

Representa um agrupamento operacional de usuarios.

Responsabilidades:

- organizar atendentes por funcao ou area;
- permitir visualizacoes e metricas por time;
- suportar distribuicao de fila.

## 4.4 Fila

Representa o agrupamento operacional para distribuicao de atendimentos.

Responsabilidades:

- receber novas conversas;
- permitir priorizacao;
- direcionar atendimentos para equipes ou agentes;
- sustentar SLA e monitoramento operacional.

## 4.5 Cliente

Representa a entidade de negocio atendida pela empresa.

Responsabilidades:

- consolidar historico de relacionamento;
- servir de referencia para segmentacao;
- concentrar dados relevantes de contexto.

Observacao:

Um cliente pode possuir um ou mais contatos.

## 4.6 Contato

Representa um identificador de comunicacao do cliente em um canal.

Exemplos:

- numero de WhatsApp;
- identificador do Facebook;
- identificador do Instagram;
- endereco de e-mail.

Responsabilidades:

- conectar o cliente ao canal;
- identificar a origem da interacao;
- permitir correlacao entre canal e cadastro.

## 4.7 Canal

Representa o meio pelo qual a interacao acontece.

Exemplos:

- WhatsApp;
- Facebook;
- Instagram;
- E-mail.

Responsabilidades:

- classificar origem e comportamento da interacao;
- direcionar regras especificas de integracao;
- permitir metricas por canal.

## 4.8 Conversa

Representa a unidade principal de atendimento.

Responsabilidades:

- agrupar mensagens relacionadas;
- manter estado operacional;
- registrar atribuicao, status e historico;
- sustentar o handoff entre IA e humano.

Estados iniciais sugeridos:

- nova;
- em triagem por IA;
- aguardando humano;
- em atendimento humano;
- aguardando cliente;
- encerrada.

## 4.9 Mensagem

Representa cada interacao trocada dentro de uma conversa.

Responsabilidades:

- registrar conteudo e autoria;
- indicar direcao de envio ou recebimento;
- manter data e origem;
- armazenar referencias de entrega e leitura, quando aplicavel.

Tipos iniciais:

- recebida;
- enviada;
- automatica;
- humana;
- sistema.

## 4.10 Atendimento

Representa o contexto operacional de tratamento de uma conversa.

Responsabilidades:

- vincular conversa a agente, fila ou equipe;
- registrar inicio, transferencia e encerramento;
- apoiar calculo de SLA e produtividade.

Observacao:

Conversa e Atendimento sao conceitos relacionados, mas nao identicos. A conversa representa o fio de interacao. O atendimento representa o recorte operacional da tratativa.

## 4.11 Triagem IA

Representa o resultado estruturado da interacao da camada de IA com a conversa.

Responsabilidades:

- registrar intencao detectada;
- registrar segmento sugerido;
- registrar resumo de contexto;
- indicar score de confianca;
- justificar handoff quando necessario.

## 4.12 Campanha

Representa uma acao ativa de comunicacao outbound.

Responsabilidades:

- definir publico alvo;
- definir template utilizado;
- controlar agendamento;
- acompanhar status e desempenho.

Estados iniciais sugeridos:

- rascunho;
- agendada;
- em envio;
- concluida;
- pausada;
- cancelada.

## 4.13 Template

Representa um modelo de mensagem aprovado para uso em canais que exigem governanca, especialmente WhatsApp.

Responsabilidades:

- padronizar conteudo;
- garantir aderencia a politicas do canal;
- sustentar campanhas e mensagens iniciadas pela empresa.

## 4.14 Evento de Integracao

Representa um fato externo recebido ou enviado para um fornecedor.

Responsabilidades:

- rastrear webhooks e respostas externas;
- registrar falhas, retries e status;
- apoiar auditoria e observabilidade.

## 4.15 Evento de Auditoria

Representa um registro de acao sensivel ou relevante no sistema.

Responsabilidades:

- registrar quem fez;
- registrar quando fez;
- registrar o que foi alterado;
- apoiar rastreabilidade e compliance.

## 4.16 Metrica

Representa um indicador calculado a partir de eventos operacionais ou comerciais.

Responsabilidades:

- permitir visao operacional;
- permitir visao gerencial;
- consolidar desempenho por canal, equipe, agente e campanha.

## 5. Relacoes Principais

- Um Usuario possui um Perfil.
- Um Usuario pode pertencer a uma ou mais Equipes.
- Uma Fila pode ser associada a uma Equipe.
- Um Cliente possui um ou mais Contatos.
- Um Contato pertence a um Canal.
- Uma Conversa pertence a um Cliente ou Contato identificado.
- Uma Conversa possui muitas Mensagens.
- Um Atendimento referencia uma Conversa.
- Um Atendimento pode ser atribuido a uma Fila, Equipe e Usuario.
- Uma Conversa pode possuir um ou mais registros de Triagem IA.
- Uma Campanha usa um Template.
- Uma Campanha gera eventos de envio e resposta.
- Eventos de Integracao e Auditoria podem se relacionar a Conversas, Campanhas ou Usuarios.

## 6. Regras de Negocio Iniciais

- uma conversa nova de WhatsApp receptivo deve iniciar em fluxo de triagem por IA, salvo excecao configurada;
- o handoff para humano deve preservar o contexto produzido pela IA;
- uma conversa nao deve ser perdida entre fila, IA e agente;
- campanhas ativas no WhatsApp devem usar templates aprovados;
- eventos externos devem ser tratados com idempotencia;
- operacoes sensiveis devem produzir evento de auditoria.

## 7. Agregados Naturais para Evolucao

Possiveis agrupamentos de consistencia:

- Cliente e Contatos
- Conversa, Mensagens e Atendimento
- Campanha e Template
- Usuario, Perfil, Equipe e Fila

## 8. Pontos para Refinamento Futuro

- modelagem de tenant, se houver multitenancy;
- modelagem de SLA por fila, canal ou cliente;
- modelagem de tags, segmentos e classificacoes;
- modelagem de anexos e arquivos;
- modelagem de motivos de contato e categorias;
- relacao entre conversa e oportunidade comercial, se existir no CRM.
