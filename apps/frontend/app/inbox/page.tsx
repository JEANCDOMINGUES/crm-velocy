const conversationList = [
  {
    customer: "Clinica Horizonte",
    channel: "WhatsApp",
    queue: "Financeiro",
    status: "Aguardando humano",
    preview: "Preciso da segunda via do boleto de abril."
  },
  {
    customer: "Marina Costa",
    channel: "WhatsApp",
    queue: "Comercial",
    status: "Em atendimento humano",
    preview: "Gostaria de entender os planos disponiveis."
  }
];

const messages = [
  {
    type: "customer",
    author: "Cliente",
    text: "Oi, preciso da segunda via do boleto de abril."
  },
  {
    type: "ai",
    author: "IA",
    text: "Entendi. Pode me informar o CNPJ do titular para localizar o cadastro?"
  },
  {
    type: "customer",
    author: "Cliente",
    text: "CNPJ 12.345.678/0001-99."
  }
];

export default function InboxPage() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <h1 className="brand">CRM Velocy</h1>
        <nav className="nav">
          <a href="/">Visao Geral</a>
          <a href="/inbox">Inbox</a>
        </nav>
      </aside>
      <section className="content">
        <div className="inbox-grid">
          <article className="panel">
            <h2>Conversas</h2>
            <p className="muted">Fila priorizada para handoff IA -&gt; humano</p>
            <div className="conversation-list">
              {conversationList.map((conversation) => (
                <div className="conversation-card" key={conversation.customer}>
                  <div className="badge-row">
                    <span className="badge">{conversation.channel}</span>
                    <span className="badge">{conversation.queue}</span>
                  </div>
                  <strong>{conversation.customer}</strong>
                  <p>{conversation.preview}</p>
                  <p className="muted">{conversation.status}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="panel">
            <h2>Timeline da conversa</h2>
            <div className="badge-row">
              <span className="badge">WhatsApp</span>
              <span className="badge">Aguardando humano</span>
              <span className="badge">Prioridade normal</span>
            </div>
            <div className="timeline">
              {messages.map((message, index) => (
                <div className={`message ${message.type}`} key={`${message.author}-${index}`}>
                  <strong>{message.author}</strong>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <div className="actions">
              <button className="button primary" type="button">
                Assumir conversa
              </button>
              <button className="button secondary" type="button">
                Encerrar
              </button>
            </div>
          </article>
          <aside className="context-card panel">
            <h3>Resumo da IA</h3>
            <p>
              Cliente solicita segunda via do boleto de abril. Identificacao preliminar realizada
              com sucesso. Caso encaminhado para validacao humana no financeiro.
            </p>
            <div className="badge-row">
              <span className="badge">Intencao: segunda_via_boleto</span>
              <span className="badge">Confianca: 0.82</span>
            </div>
            <p className="muted">Motivo do handoff: necessita validacao humana de dados financeiros.</p>
            <h3>Contexto</h3>
            <p className="muted">Cliente: Clinica Horizonte</p>
            <p className="muted">Canal: WhatsApp oficial</p>
            <p className="muted">Fila sugerida: Financeiro</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

