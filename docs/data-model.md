# CRM Velocy - Modelo de Dados Inicial

## 1. Objetivo

Definir uma estrutura inicial de dados para suportar o MVP do CRM Velocy, alinhada ao dominio e aos fluxos criticos ja documentados.

## 2. Principios

- o modelo deve priorizar clareza e rastreabilidade;
- o modelo deve suportar evolucao incremental;
- o MVP deve evitar complexidade desnecessaria;
- entidades de integracao devem preservar referencias externas;
- o historico operacional nao deve ser perdido.

## 3. Entidades Principais

### 3.1 usuarios

Campos iniciais sugeridos:

- id
- nome
- email
- senha_hash ou identificador externo
- perfil_id
- status
- criado_em
- atualizado_em

### 3.2 perfis

Campos iniciais sugeridos:

- id
- nome
- descricao
- criado_em
- atualizado_em

### 3.3 equipes

Campos iniciais sugeridos:

- id
- nome
- descricao
- criado_em
- atualizado_em

### 3.4 usuarios_equipes

Tabela de associacao entre usuarios e equipes.

Campos iniciais sugeridos:

- id
- usuario_id
- equipe_id
- criado_em

### 3.5 filas

Campos iniciais sugeridos:

- id
- nome
- descricao
- equipe_id
- prioridade_padrao
- ativa
- criado_em
- atualizado_em

### 3.6 clientes

Campos iniciais sugeridos:

- id
- nome
- documento
- tipo_cliente
- observacoes
- criado_em
- atualizado_em

### 3.7 contatos

Campos iniciais sugeridos:

- id
- cliente_id
- canal
- identificador_canal
- nome_exibicao
- email
- telefone
- ativo
- criado_em
- atualizado_em

## 4. Atendimento e Conversa

### 4.1 conversas

Campos iniciais sugeridos:

- id
- organization_id (uuid) (FK)
- cliente_id
- contato_id
- canal
- status
- fila_id
- equipe_id
- usuario_responsavel_id
- origem
- iniciada_em
- ultima_interacao_em
- encerrada_em
- criado_em
- atualizado_em

### 4.2 mensagens

Campos iniciais sugeridos:

- id
- conversa_id
- direcao
- tipo
- autor_usuario_id
- conteudo_texto
- payload_json
- referencia_externa
- enviada_em
- recebida_em
- criada_em

### 4.3 atendimentos

Campos iniciais sugeridos:

- id
- conversa_id
- fila_id
- equipe_id
- usuario_id
- status
- iniciado_em
- assumido_em
- encerrado_em
- motivo_encerramento
- criado_em
- atualizado_em

### 4.4 triagens_ia

Campos iniciais sugeridos:

- id
- conversa_id
- intencao
- segmento
- resumo_contexto
- score_confianca
- recomendacao
- motivo_handoff
- criada_em

## 5. Campanhas

### 5.1 templates

Campos iniciais sugeridos:

- id
- canal
- nome
- codigo_externo
- status_aprovacao
- idioma
- conteudo_base
- criado_em
- atualizado_em

### 5.2 campanhas

Campos iniciais sugeridos:

- id
- nome
- objetivo
- canal
- template_id
- status
- segmento_descricao
- agendada_para
- iniciada_em
- finalizada_em
- criada_por_usuario_id
- criado_em
- atualizado_em

### 5.3 campanha_destinatarios

Campos iniciais sugeridos:

- id
- campanha_id
- cliente_id
- contato_id
- status_envio
- enviada_em
- entregue_em
- lida_em
- respondeu_em
- referencia_externa
- criado_em
- atualizado_em

## 6. Integracao e Auditoria

### 6.1 eventos_integracao

Campos iniciais sugeridos:

- id
- fornecedor
- tipo_evento
- referencia_externa
- direcao
- status_processamento
- payload_json
- erro
- processado_em
- criado_em

### 6.2 eventos_auditoria

Campos iniciais sugeridos:

- id
- usuario_id
- tipo_evento
- entidade_tipo
- entidade_id
- descricao
- payload_json
- criado_em

## 7. Metricas

### 7.1 metricas_agregadas

Campos iniciais sugeridos:

- id
- tipo_metrica
- periodo_inicio
- periodo_fim
- canal
- equipe_id
- usuario_id
- valor
- dimensoes_json
- criado_em
- atualizado_em

## 8. Financeiro

### 8.1 carteiras (Wallet)
Responsabilidade: Gerenciar saldo de créditos do cliente para disparos pagos.

Campos iniciais sugeridos:
- id
- organization_id (uuid) (FK)
- cliente_id
- saldo_atual (Decimal)
- moeda (BRL)
- ultima_recarga_em
- criado_em
- atualizado_em

### 8.2 transacoes (Transaction)
Responsabilidade: Registro de débito/crédito de saldo.

Campos iniciais sugeridos:
- id
- carteira_id
- tipo (CREDITO/DEBITO)
- categoria (RECARGA, DISPARO_MKT, DISPARO_SERVICO, ESTORNO)
- valor (Decimal)
- descricao (Ex: "Disparo via Template MKT_Abril")
- referencia_externa_id
- criado_em

## 9. Relacionamentos Principais

- perfis 1:N usuarios
- equipes N:N usuarios
- equipes 1:N filas
- clientes 1:N contatos
- clientes 1:N conversas
- contatos 1:N conversas
- conversas 1:N mensagens
- conversas 1:N atendimentos
- conversas 1:N triagens_ia
- templates 1:N campanhas
- campanhas 1:N campanha_destinatarios

## 9. Decisoes Iniciais de Modelagem

- `canal` pode iniciar como enum controlado;
- `payload_json` deve guardar dados externos sem contaminar o modelo principal;
- `referencia_externa` deve existir sempre que houver correlacao com fornecedor;
- `mensagens` deve suportar anexos em evolucao futura;
- `atendimentos` e `conversas` permanecem separados para preservar recortes operacionais.

## 10. Pontos para Refinamento Futuro

- multitenancy;
- anexos e arquivos;
- tags e segmentos formalizados;
- regras de SLA por fila;
- motivos de contato;
- tabela de configuracoes por canal.
