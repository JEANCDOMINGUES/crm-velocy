# CRM Velocy - Matriz Inicial de Cobertura de QA

## 1. Objetivo

Relacionar os principais modulos e fluxos do sistema com os tipos de teste que devem protege-los durante o desenvolvimento do MVP.

## 2. Legenda

- U: teste de unidade
- I: teste de integracao
- E: teste end-to-end
- M: teste manual guiado

## 3. Matriz Inicial

| Area | Fluxo ou Componente | U | I | E | M | Prioridade |
| --- | --- | --- | --- | --- | --- | --- |
| Auth | Login e contexto autenticado | X | X | X | X | P0 |
| Auth | Controle de permissao por perfil | X | X | X | X | P0 |
| CRM | Cadastro de cliente | X | X | X | X | P1 |
| CRM | Correlacao cliente e contato | X | X | X | X | P0 |
| Conversas | Criacao de conversa | X | X | X | X | P0 |
| Conversas | Transicao de estado | X | X | X | X | P0 |
| Mensagens | Persistencia de mensagem | X | X | X | X | P0 |
| Integracoes | Webhook WhatsApp |  | X | X | X | P0 |
| IA | Registro da triagem | X | X | X | X | P0 |
| IA | Regra de handoff | X | X | X | X | P0 |
| Atendimento | Atribuicao para fila | X | X | X | X | P0 |
| Atendimento | Assumir conversa por agente | X | X | X | X | P0 |
| Frontend | Exibicao da timeline |  | X | X | X | P0 |
| Frontend | Exibicao do resumo da IA |  | X | X | X | P0 |
| Auditoria | Registro de evento sensivel | X | X | X | X | P1 |
| Dashboard | Atualizacao de metricas operacionais | X | X | X | X | P1 |
| Campanhas | Validacao de template | X | X | X | X | P1 |
| Campanhas | Registro de envio | X | X | X | X | P1 |

## 4. Cobertura Obrigatoria no Inicio do Projeto

Os primeiros itens que devem possuir cobertura forte sao:

- webhook WhatsApp;
- correlacao cliente e contato;
- criacao de conversa;
- persistencia de mensagem;
- triagem IA;
- handoff;
- inbox humano;
- resposta humana;
- transicao de estado;
- auditoria basica.

## 5. Observacoes

- nem toda tela precisa de teste end-to-end no inicio;
- fluxos de alto risco devem receber cobertura em mais de uma camada;
- a matriz deve ser atualizada conforme novos modulos entrarem no MVP.
