# CRM Velocy - Maquina de Estados da Conversa

## 1. Objetivo

Definir os estados principais de uma conversa e as transicoes permitidas no fluxo de atendimento.

## 2. Principios

- toda conversa deve estar em um estado valido;
- transicoes devem ser rastreaveis;
- o handoff entre IA e humano deve ser explicito;
- estados devem refletir a operacao, nao apenas a interface.

## 3. Estados Iniciais

### nova

Estado de entrada quando uma nova conversa e criada.

### em_triagem_ia

Estado em que a IA esta avaliando a mensagem e definindo o proximo passo.

### aguardando_humano

Estado em que a conversa ja foi transferida e aguarda atendimento humano.

### em_atendimento_humano

Estado em que um agente assumiu a conversa.

### aguardando_cliente

Estado em que o time respondeu e aguarda retorno do cliente.

### encerrada

Estado final da conversa no recorte atual.

### pausada

Estado opcional para conversas temporariamente suspensas por regra operacional.

## 4. Transicoes Permitidas

- `nova` -> `em_triagem_ia`
- `nova` -> `aguardando_humano`
- `em_triagem_ia` -> `aguardando_humano`
- `em_triagem_ia` -> `aguardando_cliente`
- `em_triagem_ia` -> `encerrada`
- `aguardando_humano` -> `em_atendimento_humano`
- `em_atendimento_humano` -> `aguardando_cliente`
- `em_atendimento_humano` -> `encerrada`
- `aguardando_cliente` -> `em_triagem_ia`
- `aguardando_cliente` -> `em_atendimento_humano`
- `aguardando_cliente` -> `encerrada`
- `em_atendimento_humano` -> `pausada`
- `pausada` -> `em_atendimento_humano`
- `pausada` -> `encerrada`

## 5. Regras por Estado

### nova

- conversa acabou de ser identificada;
- deve possuir canal e contato relacionados;
- nao deve permanecer tempo excessivo sem transicao.

### em_triagem_ia

- deve existir registro da interacao da IA;
- deve haver controle de confianca e motivo de decisao;
- se falhar, deve existir fallback para fila humana.

### aguardando_humano

- deve existir fila ou equipe definida;
- deve estar visivel no inbox operacional;
- deve preservar resumo da IA quando houver.

### em_atendimento_humano

- deve haver agente responsavel ou atribuicao em processo;
- mudancas importantes devem gerar evento de auditoria operacional.

### aguardando_cliente

- deve existir ultima resposta do sistema ou do agente;
- novo contato do cliente deve reabrir a conversa para IA ou humano, conforme regra.

### encerrada

- deve registrar data de encerramento;
- deve permitir consulta historica;
- nao deve aceitar novas mensagens sem regra explicita de reabertura ou nova conversa.

## 6. Gatilhos de Transicao

Exemplos:

- recebimento de nova mensagem;
- classificacao da IA;
- baixa confianca da IA;
- agente assume conversa;
- agente responde cliente;
- cliente responde novamente;
- encerramento manual;
- timeout operacional;
- regra de automacao.

## 7. Eventos que Devem Ser Registrados

- conversa criada;
- conversa roteada para IA;
- conversa transferida para humano;
- conversa assumida por agente;
- conversa alterou status;
- conversa encerrada;
- conversa reaberta.

## 8. Pontos de Atencao

- definir claramente quando reabrir conversa versus criar nova;
- evitar transicoes implicitas demais;
- garantir consistencia entre `conversas.status` e `atendimentos.status`;
- preservar historico de mudancas de estado.
