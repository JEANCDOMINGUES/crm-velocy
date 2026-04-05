import Link from "next/link";
import { Sidebar } from "./components/Sidebar";

const stats = [
  {
    label: "Conversas abertas",
    value: "128",
    delta: "+12%",
    deltaType: "up",
    iconType: "indigo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Aguardando humano",
    value: "19",
    delta: "-4",
    deltaType: "up",
    iconType: "warning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Resp. média IA",
    value: "2m14s",
    delta: "–",
    deltaType: "neutral",
    iconType: "violet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Handoffs IA → Human",
    value: "31%",
    delta: "-2%",
    deltaType: "up",
    iconType: "success",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const activity = [
  { customer: "Clínica Horizonte", text: "Solicitou 2ª via do boleto de abril", time: "há 2 min", status: "waiting" },
  { customer: "Marina Costa", text: "Perguntou sobre planos disponíveis", time: "há 5 min", status: "active" },
  { customer: "TechSoft Ltda", text: "Abriu ticket sobre integração API", time: "há 11 min", status: "active" },
  { customer: "João Ferreira", text: "Verificação de cadastro concluída", time: "há 18 min", status: "done" },
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function HomePage() {
  return (
    <main className="shell">
      <Sidebar />
      <section className="content">
        {/* Page header */}
        <div className="page-header anim-fade-up">
          <h1 className="page-title">Visão Geral</h1>
          <p className="page-subtitle">Monitoramento em tempo real das conversas e SLAs</p>
        </div>

        {/* Hero card */}
        <div className="hero">
          <article className="hero-card anim-fade-up anim-delay-1">
            <div className="hero-eyebrow">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              MVP Operacional
            </div>
            <h1>Atendimento receptivo com IA<br />e handoff inteligente para humano</h1>
            <p className="subtitle">
              Inbox unificado, histórico persistido, triagem estruturada por intenção e controle
              de estado da conversa — tudo em tempo real via n8n.
            </p>
            <div className="actions">
              <Link className="button primary" href="/inbox">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                Abrir inbox
              </Link>
              <button className="button secondary" type="button">
                Configurar canais
              </button>
            </div>
          </article>

          {/* KPI Stats */}
          <div className="stats">
            {stats.map((stat, i) => (
              <article
                className={`stat anim-fade-up`}
                style={{ animationDelay: `${0.15 + i * 0.05}s` }}
                key={stat.label}
              >
                <div className="stat-header">
                  <div className={`stat-icon ${stat.iconType}`}>{stat.icon}</div>
                  <span className={`stat-delta ${stat.deltaType}`}>{stat.delta}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </article>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div
          className="panel anim-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="panel-header">
            <div className="panel-title">Atividade recente</div>
            <div className="panel-subtitle">Últimas interações processadas pela IA</div>
          </div>
          <div style={{ padding: "0 20px 20px" }}>
            {activity.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: i < activity.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {initials(item.customer)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
                    {item.customer}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.text}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <span
                    className={`badge ${item.status === "waiting" ? "waiting" : item.status === "active" ? "active" : "default"}`}
                  >
                    <span className="badge-dot" />
                    {item.status === "waiting" ? "Aguardando" : item.status === "active" ? "Em atendimento" : "Encerrado"}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", minWidth: 60, textAlign: "right" }}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
