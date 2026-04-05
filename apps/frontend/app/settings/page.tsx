"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleTestConnection = () => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      setConnected(true);
    }, 1500);
  };

  return (
    <main className="shell">
      <Sidebar />
      <section className="content anim-fade-up">
        <div className="page-header">
          <h1 className="page-title">Configurações</h1>
          <p className="page-subtitle">Gerencie suas conexões, canais e preferências do sistema</p>
        </div>

        <div style={{ display: "grid", gap: "24px", maxWidth: "900px" }}>
          
          {/* WhatsApp Integration Card */}
          <article className="panel">
            <div className="panel-header" style={{ padding: "24px 24px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="panel-title" style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z" />
                    </svg>
                    WhatsApp Cloud API (Meta)
                  </div>
                  <div className="panel-subtitle">Conecte sua conta oficial do WhatsApp Business</div>
                </div>
                <span className={`badge ${connected ? "success" : "warning"}`}>
                  <span className="badge-dot" />
                  {connected ? "Conectado" : "Pendente"}
                </span>
              </div>
            </div>

            <div style={{ padding: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div className="input-group">
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                    Phone Number ID
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: 105634..." 
                    style={{ 
                      width: "100%", background: "var(--surface-2)", border: "1px solid var(--border)", 
                      borderRadius: "8px", padding: "10px 12px", color: "white", outline: "none" 
                    }} 
                  />
                </div>
                <div className="input-group">
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                    WhatsApp Business Account ID
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: 112457..." 
                    style={{ 
                      width: "100%", background: "var(--surface-2)", border: "1px solid var(--border)", 
                      borderRadius: "8px", padding: "10px 12px", color: "white", outline: "none" 
                    }} 
                  />
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                  Permanent Access Token
                </label>
                <input 
                  type="password" 
                  placeholder="EAAB..." 
                  style={{ 
                    width: "100%", background: "var(--surface-2)", border: "1px solid var(--border)", 
                    borderRadius: "8px", padding: "10px 12px", color: "white", outline: "none" 
                  }} 
                />
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "6px" }}>
                  Utilize um Token de Sistema Permanente para evitar expiração da conexão.
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                <button 
                  className="button primary" 
                  onClick={handleTestConnection}
                  disabled={loading}
                >
                  {loading ? "Testando..." : "Salvar e Testar Conexão"}
                </button>
                <button className="button secondary">Desconectar</button>
              </div>
            </div>

            {/* Audit Log Footer */}
            <div style={{ background: "rgba(0,0,0,0.2)", padding: "10px 24px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Ação Sensível (Auditada)
              </span>
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Última alteração: <strong>Agente</strong> em 05/04/2026 20:15
              </span>
            </div>
          </article>

          {/* Webhook Configuration Card */}
          <article className="panel">
            <div className="panel-header" style={{ padding: "24px 24px 0" }}>
              <div className="panel-title" style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Configuração de Webhook
              </div>
              <div className="panel-subtitle">Copie estes dados para o painel de desenvolvedor da Meta</div>
            </div>

            <div style={{ padding: "24px" }}>
              <div className="input-group" style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                  Callback URL
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input 
                    readOnly
                    type="text" 
                    value="https://api.velocy.com/api/v1/webhooks/whatsapp" 
                    style={{ 
                      flex: 1, background: "var(--surface-hover)", border: "1px solid var(--border)", 
                      borderRadius: "8px", padding: "10px 12px", color: "var(--text-secondary)", outline: "none", cursor: "default" 
                    }} 
                  />
                  <button className="button secondary" style={{ padding: "8px 12px" }}>Copiar</button>
                </div>
              </div>

              <div className="input-group">
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase" }}>
                  Verify Token
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input 
                    readOnly
                    type="text" 
                    value="velocy_secure_token_2026_xYz" 
                    style={{ 
                      flex: 1, background: "var(--surface-hover)", border: "1px solid var(--border)", 
                      borderRadius: "8px", padding: "10px 12px", color: "var(--text-secondary)", outline: "none", cursor: "default" 
                    }} 
                  />
                  <button className="button secondary" style={{ padding: "8px 12px" }}>Copiar</button>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
