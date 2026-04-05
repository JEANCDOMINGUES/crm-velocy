# CRM Velocy - Roadmap Tecnico de Implementacao

## 1. Objetivo

Organizar a implementacao em fases tecnicas pequenas, validaveis e compativeis com uma execucao orientada por CLI.

## 2. Estrategia

- construir base solida primeiro;
- entregar fluxo funcional cedo;
- adicionar inteligencia e metricas de forma incremental;
- evitar expandir canais antes de estabilizar o nucleo.

## 3. Fase 0 - Preparacao

- definir stack final;
- estruturar repositorio;
- configurar padroes de codigo;
- configurar ambiente local;
- configurar base inicial de documentacao.

## 4. Fase 1 - Fundacao do Produto

- autenticacao e autorizacao;
- usuarios, equipes e filas;
- clientes e contatos;
- modelo inicial de conversa e mensagem;
- estrutura do inbox.

Resultado esperado:

- base operacional pronta para receber integracoes.

## 5. Fase 2 - WhatsApp Receptivo

- endpoint de webhook;
- correlacao de contato;
- criacao de conversa;
- persistencia de mensagem;
- exibicao no inbox;
- resposta humana inicial.

Resultado esperado:

- operacao consegue receber e responder mensagens reais no canal principal.

## 6. Fase 3 - IA Assistiva e Handoff

- classificacao de intencao;
- resumo de contexto;
- score de confianca;
- regra de transferencia;
- exibicao do resumo para o agente.

Resultado esperado:

- primeiro atendimento assistido por IA funcionando com transbordo controlado.

## 7. Fase 4 - Observabilidade, Auditoria e Dashboard

- logs estruturados;
- eventos de auditoria;
- metricas agregadas;
- dashboard operacional inicial.

Resultado esperado:

- operacao e supervisao passam a ter visibilidade do comportamento do sistema.

## 8. Fase 5 - Fundacao de Campanhas

- templates;
- entidades de campanha;
- eventos de envio;
- trilha de status.

Resultado esperado:

- base pronta para evolucao do modulo ativo.

## 9. Fase 6 - Expansao de Canais

- e-mail;
- Facebook;
- Instagram.

Resultado esperado:

- consolidacao do omnichannel inicial.

## 10. Critério de Progressao Entre Fases

Uma fase so avanca quando:

- fluxo principal da fase estiver operacional;
- criterios de aceite da fase estiverem atendidos;
- rastreabilidade minima estiver funcionando;
- documentacao relevante estiver atualizada.

## 11. Entrega Recomendada por CLI

Sequencia sugerida de execucao:

1. documentar
2. modelar
3. gerar estrutura
4. implementar modulo
5. validar
6. revisar documentacao
7. seguir para o proximo incremento
