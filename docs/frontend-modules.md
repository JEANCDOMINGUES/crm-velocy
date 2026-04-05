# CRM Velocy - Estrutura Inicial de Modulos do Frontend

## 1. Objetivo

Definir a organizacao inicial do frontend para suportar operacao, administracao e dashboards do MVP.

## 2. Diretriz Geral

O frontend deve refletir os dominios do produto e manter separacao clara entre experiencia operacional, administrativa e gerencial.

## 3. Areas Principais

### autenticacao

- login
- sessao do usuario
- protecao de rotas

### inbox

- lista de conversas
- filtros por fila, agente, canal e status
- painel de atendimento
- visualizacao do historico

### clientes

- listagem de clientes
- detalhes do cliente
- contatos vinculados

### filas e equipes

- configuracoes operacionais
- associacoes e atribuicoes

### dashboard

- visao operacional
- visao de supervisao
- visao de campanhas, quando habilitada

### campanhas

- templates
- criacao de campanha
- listagem e status

### administracao

- usuarios
- perfis
- configuracoes iniciais

## 4. Estrutura Sugerida

Exemplo:

- `src/app/(auth)`
- `src/app/(protected)/inbox`
- `src/app/(protected)/customers`
- `src/app/(protected)/teams`
- `src/app/(protected)/queues`
- `src/app/(protected)/dashboard`
- `src/app/(protected)/campaigns`
- `src/app/(protected)/admin`

## 5. Componentes Reutilizaveis Iniciais

- tabela padrao
- filtros
- cards de indicadores
- painel lateral de conversa
- timeline de mensagens
- badge de status
- badge de canal
- seletor de fila e agente

## 6. Estado e Dados

Direcao inicial sugerida:

- usar componentes server e client conforme necessidade do framework;
- manter chamadas a API organizadas por dominio;
- evitar espalhar contratos de API pela interface;
- padronizar tratamento de loading, empty state e erro.

## 7. Regras Importantes

- a interface deve priorizar rapidez operacional;
- o inbox deve reduzir troca excessiva de contexto;
- dashboards devem priorizar leitura acionavel;
- telas administrativas devem ser simples e objetivas no MVP.

## 8. Pontos de Atencao

- nao inflar o frontend com regra de negocio;
- nao criar muitas variacoes de componentes cedo demais;
- preservar consistencia visual entre operacao e administracao;
- desenhar o inbox para alto volume desde o inicio.
