# CRM Velocy - Metricas e Dashboard

## 1. Objetivo

Definir a visao inicial de metricas e dashboards para apoiar operacao, supervisao e gestao do CRM Velocy.

## 2. Principios

- metricas devem ser acionaveis;
- dashboards devem responder perguntas operacionais reais;
- o sistema deve diferenciar claramente IA e humano;
- cada indicador deve possuir definicao objetiva.

## 3. Dashboard Operacional

Perguntas que deve responder:

- quantos atendimentos estao em aberto agora;
- qual fila esta mais pressionada;
- quem esta com maior volume de conversas;
- qual o tempo medio de primeira resposta;
- quantas conversas vieram da IA para humano.

Indicadores iniciais:

- atendimentos em aberto;
- atendimentos por fila;
- atendimentos por agente;
- tempo medio de primeira resposta;
- tempo medio de atendimento;
- taxa de transferencia IA para humano;
- taxa de resolucao inicial pela IA.

## 4. Dashboard de Supervisao

Perguntas que deve responder:

- qual equipe esta performando melhor;
- onde existem gargalos de SLA;
- quais agentes estao com maior carga;
- qual canal esta gerando mais demanda.

Indicadores iniciais:

- SLA por equipe;
- SLA por agente;
- produtividade por agente;
- volume por canal;
- distribuicao de atendimentos por periodo;
- taxa de reabertura, se adotada no fluxo.

## 5. Dashboard de Campanhas

Perguntas que deve responder:

- quantas campanhas foram enviadas;
- quais templates performam melhor;
- quais segmentos respondem mais;
- qual a conversao gerada por campanha.

Indicadores iniciais:

- campanhas enviadas;
- taxa de entrega;
- taxa de leitura;
- taxa de resposta;
- taxa de conversao;
- desempenho por template;
- desempenho por segmento.

## 6. Dashboard Gerencial

Perguntas que deve responder:

- qual canal gera maior volume;
- como a operacao evolui ao longo do tempo;
- quanto a IA contribui para eficiencia;
- onde estao os principais motivos de contato.

Indicadores iniciais:

- volume total por canal;
- tendencia por periodo;
- participacao IA versus humano;
- motivos de contato mais frequentes;
- comparativo entre equipes;
- indicadores de qualidade do atendimento.

## 7. Definicoes que Precisam Ser Fechadas

- definicao de quando um atendimento e considerado iniciado;
- definicao de encerramento de atendimento;
- definicao de transferencia bem sucedida;
- definicao de resolucao pela IA;
- definicao de conversao de campanha;
- definicao de SLA aplicavel por fila ou canal.

## 8. Recomendacoes Tecnicas

- separar metricas operacionais de metricas executivas;
- consolidar eventos em pipeline proprio;
- evitar calcular tudo diretamente da interface;
- versionar definicoes de indicadores relevantes.
