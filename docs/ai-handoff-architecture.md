# CRM Velocy - Arquitetura de IA com n8n e Handoff para Humano

## 1. Objetivo

Definir a melhor abordagem para integrar a camada de IA executada em ambiente proprio com n8n, garantindo que o atendimento possa ser entregue ao humano com historico completo, contexto e rastreabilidade.

## 2. Decisao Arquitetural Principal

A camada de IA sera executada no n8n em servidor proprio, porem o estado oficial do atendimento nao deve ficar no n8n.

Fonte unica de verdade:

- conversas;
- mensagens;
- clientes;
- contatos;
- filas;
- atribuicoes;
- status;
- historico;
- auditoria.

Tudo isso deve permanecer no backend e no banco do CRM Velocy.

## 3. Papel de Cada Camada

### Backend

Responsavel por:

- receber webhooks dos canais;
- persistir mensagens e conversas;
- controlar estado operacional;
- disponibilizar APIs para frontend;
- disponibilizar APIs internas para n8n;
- registrar auditoria e metricas;
- decidir e persistir o resultado do handoff.

### n8n

Responsavel por:

- executar o fluxo de automacao;
- chamar o provedor de IA;
- aplicar logica de triagem;
- montar resumo estruturado;
- indicar quando deve haver transferencia para humano;
- devolver resultado estruturado ao backend.

### Frontend

Responsavel por:

- mostrar o inbox humano;
- mostrar historico completo;
- mostrar resumo da IA;
- permitir assumir, responder, transferir e encerrar;
- operar sobre o estado persistido no backend.

## 4. O Que Nao Fazer

- nao usar o n8n como base oficial do historico;
- nao deixar o frontend consultar o n8n diretamente;
- nao manter o estado da conversa apenas em memoria do fluxo;
- nao entregar ao humano apenas um resumo solto sem timeline;
- nao permitir que a IA conclua cenarios criticos sem possibilidade de intervencao humana.

## 5. Fluxo Recomendado

### Etapa 1 - Entrada da Mensagem

1. O cliente envia mensagem no WhatsApp.
2. A Meta envia webhook ao backend.
3. O backend valida, identifica contato e persiste a mensagem.
4. O backend cria ou atualiza a conversa.

### Etapa 2 - Disparo da Automacao

5. O backend gera um evento de nova mensagem.
6. O n8n recebe esse evento ou e acionado por endpoint interno.
7. O n8n executa a logica de triagem.

### Etapa 3 - Resultado da IA

8. O n8n produz um resultado estruturado.
9. O n8n envia esse resultado para um endpoint interno do backend.
10. O backend salva o registro da triagem e decide o novo estado da conversa.

### Etapa 4 - Handoff para Humano

11. Se houver handoff, o backend muda a conversa para `aguardando_humano`.
12. O backend direciona a conversa para a fila adequada.
13. O frontend recebe a atualizacao e exibe a conversa no inbox humano.

### Etapa 5 - Atendimento Humano

14. O agente abre a conversa.
15. O agente visualiza o historico, o resumo da IA e o motivo da transferencia.
16. O agente assume e continua o atendimento normalmente.

## 6. Estrutura Recomendada do Resultado da IA

O n8n deve retornar dados estruturados, e nao apenas texto livre.

Campos sugeridos:

- conversation_id
- customer_id
- intent
- segment
- confidence
- summary
- asked_questions
- customer_answers
- handoff_reason
- recommended_queue
- recommended_priority
- requires_human

## 7. Exemplo de Payload de Retorno do n8n

```json
{
  "conversation_id": "conv_123",
  "customer_id": "cust_456",
  "intent": "segunda_via_boleto",
  "segment": "financeiro",
  "confidence": 0.82,
  "summary": "Cliente solicita segunda via do boleto de abril e informa nao ter recebido por email.",
  "asked_questions": [
    "Qual o CPF ou CNPJ do titular?",
    "Deseja receber por WhatsApp ou email?"
  ],
  "customer_answers": [
    "CNPJ 12.345.678/0001-99",
    "Pode mandar por WhatsApp"
  ],
  "handoff_reason": "necessita validacao humana de dados financeiros",
  "recommended_queue": "financeiro",
  "recommended_priority": "normal",
  "requires_human": true
}
```

## 8. Melhor Forma de Entregar ao Humano

O handoff nao deve entregar apenas a ultima mensagem. Deve entregar tres camadas:

### Timeline completa

- todas as mensagens em ordem cronologica.

### Resumo operacional da IA

- intencao;
- segmento;
- resumo da conversa;
- perguntas feitas pela IA;
- respostas do cliente;
- motivo do handoff;
- nivel de confianca.

### Contexto do cliente

- dados principais do cliente;
- historico anterior relevante;
- tags e observacoes;
- canal de origem;
- fila sugerida;
- SLA ou prioridade.

## 9. Endpoints Internos Sugeridos

### `POST /api/v1/internal/ai/triage-result`

Responsabilidade:

- receber o resultado da IA produzido pelo n8n.

Payload sugerido:

- conversation_id
- intent
- segment
- confidence
- summary
- asked_questions
- customer_answers
- handoff_reason
- recommended_queue
- requires_human

### `POST /api/v1/internal/ai/message-event`

Responsabilidade:

- opcionalmente disparar evento interno para acionar o n8n, se esse padrao for adotado.

## 10. Regras Importantes de Persistencia

- toda mensagem deve ser salva antes da chamada ao n8n;
- todo resultado da IA deve ser salvo como registro de triagem;
- toda transferencia para humano deve alterar o estado da conversa;
- toda mudanca relevante deve gerar evento auditavel;
- repeticao de webhook ou callback deve ser tratada com idempotencia.

## 11. Atualizacao em Tempo Real para o Frontend

Para que o handoff seja percebido rapidamente pelo agente, recomenda-se:

- WebSocket ou SSE para novas conversas e mudancas de status;
- fallback com polling quando necessario.

Assim, quando o backend salvar o resultado do handoff, o inbox humano e atualizado quase em tempo real.

## 12. Vantagens Dessa Abordagem

- historico centralizado;
- menor risco de perda de contexto;
- maior auditabilidade;
- menor acoplamento entre frontend e automacao;
- possibilidade de trocar o provedor de IA sem quebrar o CRM;
- operacao humana mais confiavel.

## 13. Conclusao

O n8n deve ser o motor de automacao e IA, mas o backend deve continuar sendo o centro do estado operacional. Dessa forma, o handoff para humano ocorre com seguranca, contexto completo e menor risco arquitetural.
