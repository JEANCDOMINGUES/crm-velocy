# CRM Velocy - Integracoes Externas

## 1. Objetivo

Mapear as integracoes externas previstas, seu papel no produto e as precaucoes de projeto para cada uma.

## 2. Principios Gerais

- toda integracao deve ter adaptador proprio;
- contratos externos nao devem vazar para o dominio central;
- falhas de integracao devem ser rastreaveis;
- retries e idempotencia devem ser previstos;
- segredos e credenciais devem ser gerenciados com seguranca.

## 3. Meta WhatsApp Cloud API

### Finalidade

- atendimento receptivo;
- envio ativo de campanhas;
- uso de templates aprovados;
- recebimento de eventos de entrega e leitura.

### Cuidados

- obedecer politicas vigentes da Meta;
- controlar uso de templates aprovados;
- tratar limites, erros e expirada de sessoes aplicaveis;
- manter rastreabilidade por mensagem e campanha.

## 4. Facebook Messaging

### Finalidade

- receber mensagens oriundas de paginas integradas;
- centralizar atendimento no inbox.

### Cuidados

- validar escopo da API disponivel para o produto;
- isolar diferencas de payload em adaptador proprio;
- manter correlacao de conversa com cadastro interno.

## 5. Instagram Messaging

### Finalidade

- receber mensagens de Instagram suportadas pelas APIs da Meta;
- consolidar atendimento no inbox.

### Cuidados

- considerar restricoes especificas do canal;
- manter separacao clara entre identidade do canal e identidade do cliente.

## 6. Provedor de E-mail

### Finalidade

- recebimento de mensagens;
- resposta a e-mails pela plataforma;
- correlacao com cadastro e historico.

### Cuidados

- tratar threading de e-mail;
- lidar com anexos;
- garantir autenticidade e rastreabilidade de envio.

## 7. Provedor de IA

### Finalidade

- classificacao de intencao;
- segmentacao inicial;
- resumo de contexto;
- sugestao de resposta;
- apoio ao handoff.

### Cuidados

- definir limites claros de autonomia;
- prever fallback para humano;
- registrar contexto minimo para auditoria funcional;
- evitar dependencia excessiva de um unico fornecedor.

## 8. Modelo de Integracao Recomendado

Para cada integracao, definir:

- contrato de entrada;
- contrato de saida;
- autenticacao;
- retries;
- idempotencia;
- mapeamento de erros;
- monitoramento;
- eventos auditaveis.

## 9. Riscos de Integracao

- mudancas de politica dos fornecedores;
- indisponibilidade temporaria de APIs;
- divergencia entre payload externo e modelo interno;
- custos variaveis por volume e uso de IA;
- impacto operacional de retries mal projetados.
