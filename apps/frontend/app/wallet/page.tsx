"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

const transactions = [
  { id: "TX-9021", date: "05/04/2026 18:42", description: "Disparo MKT: Promoção Abril", type: "debit", amount: 0.79, target: "551199XXX44" },
  { id: "TX-9020", date: "05/04/2026 18:30", description: "Disparo SVC: Confirmação de Agendamento", type: "debit", amount: 0.35, target: "551198XXX11" },
  { id: "TX-8995", date: "04/04/2026 14:15", description: "Recarga de Créditos via PIX", type: "credit", amount: 150.00, target: "-" },
  { id: "TX-8994", date: "04/04/2026 11:05", description: "Disparo MKT: Lançamento Coleção", type: "debit", amount: 0.79, target: "552197XXX88" },
  { id: "TX-8990", date: "03/04/2026 16:22", description: "Disparo SVC: Segunda Via Boleto", type: "debit", amount: 0.35, target: "551199XXX22" },
];

export default function WalletPage() {
  const [balance, setBalance] = useState(422.50);

  return (
    <main className="shell">
      <Sidebar />
      <section className="content anim-fade-up">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Minha Carteira</h1>
          <p className="page-subtitle">Gestão de créditos e controle de consumo de disparos</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Balance Hero Card */}
            <article 
              className="hero-card" 
              style={{ 
                background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.1) 100%), var(--surface)",
                border: "1px solid rgba(99,102,241,0.4)",
                boxShadow: "0 0 40px rgba(99,102,241,0.2)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div className="hero-eyebrow">Saldo Disponível</div>
                  <h1 style={{ fontSize: "3.5rem", margin: "10px 0 5px" }}>
                    <small style={{ fontSize: "1.5rem", verticalAlign: "middle", marginRight: "8px", opacity: 0.7 }}>R$</small>
                    {balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </h1>
                  <p className="subtitle">Créditos válidos para todos os canais integrados</p>
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  <button className="button primary" style={{ padding: "14px 24px", fontSize: "1rem" }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: 8 }}>
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Adicionar Créditos
                  </button>
                </div>
              </div>
            </article>

            {/* Transaction History */}
            <div className="panel">
              <div className="panel-header" style={{ padding: "20px 20px 0" }}>
                <div className="panel-title">Histórico de Consumo</div>
                <div className="panel-subtitle">Últimas 30 transações da carteira</div>
              </div>
              <div style={{ padding: "20px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--border)", textAlign: "left", color: "var(--text-muted)" }}>
                      <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>ID / Data</th>
                      <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Descrição</th>
                      <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Destinatário</th>
                      <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase", textAlign: "right" }}>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "16px 8px" }}>
                          <div style={{ color: "var(--text)", fontWeight: "500" }}>{tx.id}</div>
                          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>{tx.date}</div>
                        </td>
                        <td style={{ padding: "16px 8px" }}>
                          <div style={{ color: "var(--text-secondary)" }}>{tx.description}</div>
                        </td>
                        <td style={{ padding: "16px 8px" }}>
                          <div style={{ fontFamily: "monospace", color: "var(--text-muted)" }}>{tx.target}</div>
                        </td>
                        <td style={{ padding: "16px 8px", textAlign: "right" }}>
                          <div style={{ 
                            fontWeight: "700", 
                            color: tx.type === "debit" ? "var(--danger)" : "var(--success)" 
                          }}>
                            {tx.type === "debit" ? "-" : "+"} R$ {tx.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button className="button ghost">Ver histórico completo</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Pricing Cards */}
            <article className="context-card">
              <div className="context-section">
                <div className="context-title">Tabela de Preços</div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Valores definidos por contrato para disparos via API oficial.
                </p>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ 
                    padding: "14px", borderRadius: "12px", background: "var(--surface-2)", 
                    border: "1px solid rgba(99,102,241,0.3)" 
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontWeight: "700", color: "var(--indigo)" }}>Marketing (MKT)</span>
                      <span style={{ fontWeight: "800", color: "white" }}>R$ 0,79</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Campanhas de vendas, ofertas e novidades.</p>
                  </div>

                  <div style={{ 
                    padding: "14px", borderRadius: "12px", background: "var(--surface-2)", 
                    border: "1px solid rgba(16,185,129,0.3)" 
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontWeight: "700", color: "var(--success)" }}>Serviços (SVC)</span>
                      <span style={{ fontWeight: "800", color: "white" }}>R$ 0,35</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Agendamentos, boletos, autenticação e alertas.</p>
                  </div>
                </div>
              </div>

              <div className="context-section">
                <div className="context-title">Informação Adicional</div>
                <ul style={{ padding: "0", margin: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "flex", gap: "8px" }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--indigo)", marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Inclui taxas da Meta.
                  </li>
                  <li style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "flex", gap: "8px" }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--indigo)", marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sem data de expiração.
                  </li>
                </ul>
              </div>
            </article>

            {/* Quick Actions */}
            <article className="panel" style={{ padding: "20px" }}>
              <div className="context-title" style={{ marginBottom: "12px" }}>Ações Rápidas</div>
              <div style={{ display: "grid", gap: "10px" }}>
                <button className="button secondary" style={{ width: "100%", justifyContent: "flex-start" }}>
                  Solicitar NF-e
                </button>
                <button className="button secondary" style={{ width: "100%", justifyContent: "flex-start" }}>
                  Exportar Relatório CSV
                </button>
              </div>
            </article>
          </div>

        </div>
      </section>
    </main>
  );
}
