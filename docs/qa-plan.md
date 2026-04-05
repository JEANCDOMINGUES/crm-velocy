# CRM Velocy - Plano de QA

## 1. Objetivo

Definir a estrategia de QA do CRM Velocy para apoiar o desenvolvimento desde o inicio, reduzir riscos de regressao e garantir confiabilidade nos fluxos criticos do produto.

## 2. Principio Central

O QA nao deve atuar apenas no final da entrega. Ele deve servir como suporte continuo ao desenvolvimento, ajudando a validar requisitos, fluxos, integracoes, estados, dados e comportamento esperado do sistema.

## 3. Objetivos do QA

- validar que o sistema atende aos requisitos documentados;
- reduzir risco nos fluxos criticos de atendimento;
- identificar falhas cedo no ciclo de desenvolvimento;
- proteger integracoes externas e handoff IA para humano;
- garantir rastreabilidade e qualidade operacional;
- apoiar a evolucao segura do MVP.

## 4. Escopo do QA

O QA deve cobrir prioritariamente:

- autenticacao e autorizacao;
- cadastro de clientes, contatos, filas e usuarios;
- criacao e atualizacao de conversas;
- persistencia de mensagens;
- fluxo receptivo de WhatsApp;
- triagem por IA via n8n;
- handoff para humano com historico completo;
- atendimento humano no inbox;
- auditoria;
- dashboard operacional inicial;
- base de campanhas e templates, quando habilitada.

## 5. Riscos Prioritarios do Produto

- perda de mensagem no recebimento de webhook;
- duplicidade por reprocessamento de webhook;
- correlacao incorreta entre contato e cliente;
- perda de contexto no handoff IA para humano;
- divergencia entre estado da conversa e estado do atendimento;
- falhas silenciosas em integracoes externas;
- dashboards exibindo metricas inconsistentes;
- envio ativo sem governanca adequada de template.

## 6. Estrategia por Camada

### 6.1 Validacao de Requisitos

Cada fluxo e modulo deve ser associado a:

- requisito funcional;
- criterio de aceite;
- cenarios positivos;
- cenarios negativos;
- cenarios de erro.

### 6.2 Testes de Unidade

Aplicar principalmente em:

- regras de negocio;
- validacoes;
- transicoes de estado;
- handoff;
- correlacao de entidades;
- consolidacao de metricas.

### 6.3 Testes de Integracao

Aplicar principalmente em:

- persistencia;
- modulos internos do backend;
- webhooks;
- jobs;
- integracao entre backend e n8n;
- integracao entre mensagens, conversa e atendimento.

### 6.4 Testes End-to-End

Aplicar nos fluxos criticos do produto:

- nova mensagem no WhatsApp;
- triagem por IA;
- transferencia para fila humana;
- atendimento no inbox;
- resposta humana;
- atualizacao de metricas.

### 6.5 Testes Manuais Guiados

Devem existir para:

- validacao exploratoria;
- experiencia operacional do inbox;
- validacao de resumo da IA;
- clareza do handoff;
- percepcao de consistencia visual e operacional.

## 7. Piramide de Testes Recomendada

- base forte de testes de unidade;
- camada intermediaria de integracao;
- conjunto enxuto, mas confiavel, de testes end-to-end;
- apoio de testes manuais exploratorios em fluxos novos e de alto risco.

## 8. Fluxos Criticos para Cobertura Obrigatoria

- recebimento de nova mensagem por webhook;
- criacao de conversa;
- persistencia de mensagem;
- triagem IA registrada;
- handoff para humano;
- exibicao do historico no frontend;
- atribuicao para agente;
- resposta humana;
- alteracao de status;
- auditoria de acoes sensiveis;
- atualizacao do dashboard operacional.

## 9. Tipos de Teste Necessarios

### Funcionais

- validam se o comportamento esta correto frente aos requisitos.

### Integracao

- validam a comunicacao entre modulos e servicos.

### Contrato

- validam o formato de entrada e saida de APIs internas e externas.

### Regressao

- protegem fluxos ja entregues contra quebras futuras.

### Exploratorios

- ajudam a encontrar lacunas nao previstas em cenarios formais.

### Observabilidade Operacional

- validam se erros, retries e eventos importantes ficam visiveis.

## 10. QA Orientado a Risco

A priorizacao inicial deve seguir:

- P0: perda de dado, quebra de atendimento, falha de handoff, erro de permissao;
- P1: erro de roteamento, erro de exibicao de contexto, inconsistencias de dashboard;
- P2: refinamentos de UX, ordenacao, filtros secundarios e detalhes nao criticos.

## 11. Ambientes Recomendados

- ambiente local para desenvolvimento;
- ambiente de homologacao para validacao de fluxos integrados;
- ambiente controlado para testes com canais reais ou simulados.

## 12. Dados de Teste

Devem existir dados de teste para:

- cliente novo;
- cliente existente;
- conversa nova;
- conversa reaberta;
- transferencia por baixa confianca;
- transferencia por solicitacao de humano;
- atendimento encerrado;
- webhook duplicado;
- campanha com template aprovado;
- tentativa de campanha com template invalido.

## 13. Evidencias Esperadas

Para fluxos criticos, o QA deve validar:

- estado da conversa;
- registro da mensagem;
- registro da triagem;
- fila atribuida;
- visualizacao correta no frontend;
- eventos de auditoria;
- impacto esperado no dashboard.

## 14. Definicao de Pronto com QA

Uma entrega so deve ser considerada pronta quando:

- requisitos e criterios de aceite estiverem cobertos;
- cenarios criticos tiverem sido testados;
- principais erros tiverem comportamento conhecido;
- nao houver perda de rastreabilidade;
- documentacao e casos de teste estiverem atualizados.

## 15. Conclusao

O QA do CRM Velocy deve ser parte da engenharia do produto. Como o sistema envolve integracoes, IA, handoff e operacao humana, a qualidade precisa ser tratada como arquitetura de confiabilidade e nao apenas como checagem final.
