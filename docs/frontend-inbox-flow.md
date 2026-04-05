# CRM Velocy - Funcionamento do Frontend Operacional e Inbox

## 1. Objetivo

Descrever como o frontend deve funcionar no dia a dia da operacao humana, especialmente no fluxo de recebimento de conversas transferidas pela IA.

## 2. Papel do Frontend

O frontend e a camada de operacao humana. Ele nao deve conter a logica principal da IA nem ser responsavel por decidir o fluxo do atendimento. Seu papel e apresentar o estado oficial da operacao, permitir a acao humana e reduzir tempo de resposta.

## 3. Principios de UX Operacional

- a conversa deve aparecer com contexto suficiente para acao rapida;
- o atendente nao deve precisar navegar em varias telas para entender o caso;
- a diferenca entre conversa em IA e conversa humana deve ser explicita;
- o estado da conversa deve ser visivel;
- a interface deve privilegiar fluxo continuo de atendimento.

## 4. Estrutura Recomendada da Tela de Inbox

### Coluna 1 - Lista de Conversas

Deve exibir:

- nome do cliente;
- canal de origem;
- fila;
- status;
- prioridade;
- ultima interacao;
- indicador de conversa transferida pela IA.

Filtros minimos:

- canal;
- status;
- fila;
- agente;
- equipe;
- prioridade.

### Coluna 2 - Painel da Conversa

Deve exibir:

- cabecalho com dados do cliente;
- timeline das mensagens;
- autor da mensagem;
- data e hora;
- origem da mensagem;
- status atual da conversa.

### Coluna 3 - Contexto e Acoes

Deve exibir:

- resumo da IA;
- intencao detectada;
- nivel de confianca;
- motivo do handoff;
- tags;
- historico relevante;
- dados do cliente;
- botoes de acao.

## 5. Acoes Humanas Principais

O agente deve conseguir:

- assumir conversa;
- responder mensagem;
- reatribuir;
- alterar status;
- encerrar;
- registrar observacao interna, se isso entrar no MVP estendido.

## 6. Como a Conversa Deve Chegar do Handoff

Quando a IA entregar para humano, o frontend deve receber da API uma conversa com:

- identificacao do cliente;
- timeline completa;
- ultima triagem registrada;
- fila atual;
- status `aguardando_humano`;
- sugestao de prioridade;
- resumo operacional da IA.

## 7. Melhor Forma de Exibir o Historico

O historico deve ser apresentado em ordem cronologica, com diferenciacao visual entre:

- mensagens do cliente;
- mensagens da IA;
- mensagens humanas;
- eventos de sistema.

Isso ajuda o agente a entender:

- o que o cliente pediu;
- o que a IA ja perguntou;
- o que ja foi tentado;
- onde exatamente o fluxo precisou de intervencao humana.

## 8. Melhor Forma de Exibir o Resumo da IA

O resumo nao deve ficar escondido nem misturado na timeline.

Recomendacao:

- bloco fixo ou card lateral;
- campos estruturados;
- linguagem objetiva.

Campos sugeridos:

- intencao;
- segmento;
- confianca;
- resumo;
- perguntas feitas;
- respostas principais;
- motivo do handoff.

## 9. Estados Visuais Importantes

O frontend deve deixar claro se a conversa esta:

- nova;
- em triagem por IA;
- aguardando humano;
- em atendimento humano;
- aguardando cliente;
- encerrada.

## 10. Atualizacao em Tempo Real

O inbox deve atualizar quase em tempo real para:

- novas conversas;
- transferencia da IA para humano;
- nova mensagem do cliente;
- atribuicao de conversa;
- mudanca de status.

Recomendacao:

- usar WebSocket ou SSE;
- manter fallback por polling, se necessario.

## 11. Consulta Ideal da API para Detalhe da Conversa

O frontend deve consultar um endpoint de detalhe que retorne, no minimo:

- dados do cliente;
- dados do contato;
- conversa;
- mensagens;
- triagem_ia_atual;
- atendimento_atual;
- fila_atual;
- historico resumido relevante.

## 12. O Que Evitar no Frontend

- reconstruir regra de handoff na interface;
- depender do n8n para buscar contexto;
- esconder a origem das mensagens;
- misturar resumo da IA com mensagem comum;
- sobrecarregar a tela com informacao nao acionavel no MVP.

## 13. Fluxo Resumido do Agente

1. O agente abre o inbox.
2. O sistema mostra conversas aguardando humano.
3. O agente seleciona uma conversa.
4. O sistema exibe timeline e resumo da IA.
5. O agente entende o caso rapidamente.
6. O agente assume a conversa.
7. O agente responde o cliente.
8. O sistema atualiza status e historico.

## 14. Conclusao

O frontend deve ser desenhado como uma central operacional de alta velocidade. Seu maior papel no handoff e reduzir o tempo de entendimento do atendente, exibindo historico completo, resumo estruturado da IA e acoes claras sobre a conversa.
