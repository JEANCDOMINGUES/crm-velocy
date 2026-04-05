"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

const conversationList = [
  {
    customer: "Clínica Horizonte",
    initials: "CH",
    channel: "WhatsApp",
    queue: "Financeiro",
    status: "Aguardando humano",
    statusType: "waiting",
    preview: "Preciso da segunda via do boleto de abril.",
    time: "2m",
    unread: true,
  },
  {
    customer: "Marina Costa",
    initials: "MC",
    channel: "WhatsApp",
    queue: "Comercial",
    status: "Em atendimento humano",
    statusType: "active",
    preview: "Gostaria de entender os planos disponíveis.",
    time: "5m",
    unread: false,
  },
  {
    customer: "TechSoft Ltda",
    initials: "TL",
    channel: "Email",
    queue: "Suporte",
    status: "Aguardando humano",
    statusType: "waiting",
    preview: "Preciso de ajuda com a integração da API REST.",
    time: "12m",
    unread: true,
  },
];

const messages = [
  {
    type: "customer",
    author: "Cliente",
    text: "Oi, preciso da segunda via do boleto de abril.",
    time: "14:03",
  },
  {
    type: "ai",
    author: "IA Velocy",
    text: "Entendi. Pode me informar o CNPJ do titular para localizar o cadastro?",
    time: "14:03",
  },
  {
    type: "customer",
    author: "Cliente",
    text: "CNPJ 12.345.678/0001-99.",
    time: "14:04",
  },
  {
    type: "ai",
    author: "IA Velocy",
    text: "Cadastro localizado! Identificando o boleto de abril para a Clínica Horizonte. Transferindo para o setor Financeiro para envio da 2ª via.",
    time: "14:04",
  },
];

export default function InboxPage() {
  const [activeConv, setActiveConv] = useState(0);
  const [replyText, setReplyText] = useState("");

  return (
    <main className="shell">
      <Sidebar />
      <section className="content" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Header */}
        <div className="page-header anim-fade-up" style={{ marginBottom: 16 }}>
          <h1 className="page-title">Inbox</h1>
          <p className="page-subtitle">Fila priorizada — handoff IA → humano</p>
        </div>

        {/* Inbox grid */}
        <div className="inbox-grid anim-fade-up anim-delay-1">

          {/* ── Conversation List ── */}
          <div className="inbox-panel">
            <div className="inbox-panel-header">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div className="panel-title">Conversas</div>
                  <div className="panel-subtitle">{conversationList.length} conversas ativas</div>
                </div>
                <span className="badge waiting">
                  <span className="badge-dot" />
                  2 aguardando
                </span>
              </div>
            </div>
            <div className="inbox-panel-body">
              {conversationList.map((conv, i) => (
                <div
                  className={`conversation-card ${activeConv === i ? "active" : ""}`}
                  key={conv.customer}
                  onClick={() => setActiveConv(i)}
                >
                  <div className="conv-top">
                    <div
                      className="conv-avatar"
                      style={{
                        background:
                          conv.statusType === "active"
                            ? "linear-gradient(135deg, #10b981, #059669)"
                            : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      {conv.initials}
                    </div>
                    <div className="conv-meta">
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div className="conv-name">{conv.customer}</div>
                        {conv.unread && (
                          <span style={{
                            width: 7, height: 7, borderRadius: "50%",
                            background: "var(--indigo)", flexShrink: 0
                          }} />
                        )}
                      </div>
                      <div className="conv-time">{conv.time} atrás</div>
                    </div>
                  </div>
                  <div className="conv-preview">{conv.preview}</div>
                  <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                    <span className="badge channel">{conv.channel}</span>
                    <span className="badge queue">{conv.queue}</span>
                    <span className={`badge ${conv.statusType}`}>{conv.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Timeline ── */}
          <div className="inbox-panel" style={{ display: "flex", flexDirection: "column" }}>
            <div className="inbox-panel-header">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div className="panel-title">{conversationList[activeConv].customer}</div>
                  <div className="panel-subtitle">Timeline da conversa</div>
                </div>
                <div className="badge-row" style={{ marginBottom: 0 }}>
                  <span className="badge channel">{conversationList[activeConv].channel}</span>
                  <span className={`badge ${conversationList[activeConv].statusType}`}>
                    <span className="badge-dot" />
                    {conversationList[activeConv].status}
                  </span>
                  <span className="badge default">Prioridade normal</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="timeline">
              {messages.map((message, index) => (
                <div
                  className={`message-wrap ${message.type === "customer" ? "" : "right"}`}
                  key={`${message.author}-${index}`}
                >
                  <div className={`msg-avatar ${message.type}`}>
                    {message.type === "customer" ? "CL" : message.type === "ai" ? "IA" : "AG"}
                  </div>
                  <div className={`message ${message.type}`}>
                    <div className="msg-author">{message.author}</div>
                    {message.text}
                    <div className="msg-time">{message.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply box + actions */}
            <div className="reply-box">
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <button className="button primary" type="button" style={{ flex: 1 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="23" y1="11" x2="17" y2="11" /><line x1="20" y1="8" x2="20" y2="14" />
                  </svg>
                  Assumir conversa
                </button>
                <button className="button ghost" type="button">
                  Encerrar
                </button>
              </div>
              <div className="reply-input-wrap">
                <textarea
                  className="reply-textarea"
                  placeholder="Digite sua resposta…"
                  rows={1}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button className="reply-send" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── AI Context Panel ── */}
          <div className="context-card">
            {/* AI Summary */}
            <div className="context-section">
              <div className="context-title">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Resumo da IA
                </span>
              </div>
              <p className="ai-summary">
                Cliente solicita 2ª via do boleto de abril. Identificação preliminar realizada com sucesso.
                Caso encaminhado para validação humana no financeiro.
              </p>
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                <span className="badge ai">segunda_via_boleto</span>
              </div>
              <div className="confidence-bar-wrap">
                <div className="confidence-label">
                  <span>Confiança da intenção</span>
                  <span>82%</span>
                </div>
                <div className="confidence-bar">
                  <div className="confidence-fill" style={{ width: "82%" }} />
                </div>
              </div>
            </div>

            {/* Motivo handoff */}
            <div className="context-section">
              <div className="context-title">Motivo do handoff</div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Necessita validação humana de dados financeiros — política de segurança aplicada.
              </p>
            </div>

            {/* Contexto */}
            <div className="context-section">
              <div className="context-title">Contexto</div>
              <div className="context-row">
                <span className="context-row-label">Cliente</span>
                <span>Clínica Horizonte</span>
              </div>
              <div className="context-row">
                <span className="context-row-label">Canal</span>
                <span>WhatsApp oficial</span>
              </div>
              <div className="context-row">
                <span className="context-row-label">Fila</span>
                <span>Financeiro</span>
              </div>
              <div className="context-row">
                <span className="context-row-label">CNPJ</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.78rem" }}>12.345.678/0001-99</span>
              </div>
            </div>

            {/* SLA */}
            <div className="context-section">
              <div className="context-title">SLA</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <div style={{
                  flex: 1, padding: "10px 12px", borderRadius: "var(--radius-sm)",
                  background: "var(--surface-2)", border: "1px solid var(--border)", textAlign: "center"
                }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--warning)" }}>2m</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 2 }}>Em espera</div>
                </div>
                <div style={{
                  flex: 1, padding: "10px 12px", borderRadius: "var(--radius-sm)",
                  background: "var(--surface-2)", border: "1px solid var(--border)", textAlign: "center"
                }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--success)" }}>98%</div>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 2 }}>SLA OK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
