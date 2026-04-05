# CRM Velocy - Blueprint Inicial de Banco de Dados

## 1. Objetivo

Traduzir o modelo de dados inicial em uma visao pratica de persistencia para orientar o backend e futuras migrations.

## 2. Banco Principal

Tecnologia sugerida:

- PostgreSQL

Uso principal:

- dados transacionais;
- historico;
- configuracoes;
- auditoria;
- campanhas e templates.

## 3. Agrupamentos Iniciais de Tabelas

### Acesso

- perfis
- usuarios
- equipes
- usuarios_equipes
- filas

### CRM

- clientes
- contatos

### Atendimento

- conversas
- mensagens
- atendimentos
- triagens_ia

### Campanhas

- templates
- campanhas
- campanha_destinatarios

### Integracao e Auditoria

- eventos_integracao
- eventos_auditoria

### Agregacoes

- metricas_agregadas

## 4. Chaves e Referencias

Direcao inicial:

- ids unicos por tabela;
- foreign keys nas relacoes principais;
- indices para consultas operacionais frequentes.

Indices iniciais sugeridos:

- `conversas(status, canal)`
- `conversas(fila_id, usuario_responsavel_id)`
- `mensagens(conversa_id, criada_em)`
- `contatos(canal, identificador_canal)`
- `campanha_destinatarios(campanha_id, status_envio)`
- `eventos_integracao(referencia_externa, fornecedor)`

## 5. Campos Importantes para Auditoria e Historico

- `criado_em`
- `atualizado_em`
- `encerrada_em`
- `processado_em`
- `payload_json`
- `referencia_externa`

## 6. Regras Iniciais de Persistencia

- mensagens nunca devem ser descartadas silenciosamente;
- eventos externos devem manter referencia para idempotencia;
- mudancas de estado da conversa devem ser rastreaveis;
- eventos de auditoria nao devem depender de processamento manual posterior.

## 7. Redis

Uso inicial sugerido:

- filas de processamento;
- jobs de campanha;
- retries;
- cache de apoio operacional;
- locks distribuidos, se necessario.

## 8. Object Storage

Uso inicial sugerido:

- anexos de mensagens;
- artefatos de campanha;
- arquivos importados;
- exportacoes futuras.

## 9. Proxima Etapa Natural

A partir deste blueprint, o proximo artefato pode ser:

- especificacao de migrations;
- DER simplificado;
- contratos de repositorios;
- estrategia de seed inicial.
