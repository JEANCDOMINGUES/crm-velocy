import Link from "next/link";

const stats = [
  { label: "Conversas abertas", value: "128" },
  { label: "Aguardando humano", value: "19" },
  { label: "Primeira resposta media", value: "02m14s" },
  { label: "Handoffs IA", value: "31%" }
];

export default function HomePage() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <h1 className="brand">CRM Velocy</h1>
        <nav className="nav">
          <Link href="/">Visao Geral</Link>
          <Link href="/inbox">Inbox</Link>
        </nav>
      </aside>
      <section className="content">
        <div className="hero">
          <article className="hero-card">
            <p className="muted">MVP operacional</p>
            <h1>Atendimento receptivo com IA via n8n e handoff para humano</h1>
            <p className="muted">
              Esta base inicial prioriza inbox humano, historico persistido, triagem estruturada e
              controle de estado da conversa.
            </p>
            <div className="actions">
              <Link className="button primary" href="/inbox">
                Abrir inbox
              </Link>
              <button className="button secondary" type="button">
                Configurar canais
              </button>
            </div>
          </article>
          <div className="stats">
            {stats.map((stat) => (
              <article className="stat" key={stat.label}>
                <span className="muted">{stat.label}</span>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

