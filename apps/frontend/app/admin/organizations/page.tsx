"use client";

import { Sidebar } from "../../components/Sidebar";

const organizations = [
  { id: "ORG-001", name: "Velocy Ltda", status: "active", plan: "Enterprise", balance: 422.50, users: 12, connections: 3 },
  { id: "ORG-002", name: "Haras Imperial", status: "active", plan: "Pro", balance: 1250.00, users: 4, connections: 1 },
  { id: "ORG-003", name: "Clínica Saúde", status: "pending", plan: "Basic", balance: 50.00, users: 2, connections: 0 },
  { id: "ORG-004", name: "Auto Peças Silva", status: "active", plan: "Pro", balance: 89.90, users: 6, connections: 2 },
];

export default function AdminOrganizationsPage() {
  return (
    <main className="shell">
      <Sidebar />
      <section className="content anim-fade-up">
        {/* Page Header */}
        <div className="page-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <div>
              <h1 className="page-title">Gestão de Clientes</h1>
              <p className="page-subtitle">Supervisão global de organizações, planos e saldos</p>
            </div>
            <button className="button primary">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Nova Organização
            </button>
          </div>
        </div>

        {/* Global Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          <div className="panel" style={{ padding: "20px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Total Empresas</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "8px 0" }}>04</div>
            <div style={{ fontSize: "0.75rem", color: "var(--success)" }}>+1 este mês</div>
          </div>
          <div className="panel" style={{ padding: "20px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Saldo Global</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "8px 0" }}>R$ 1.812,40</div>
            <div style={{ fontSize: "0.75rem", color: "var(--indigo)" }}>450 disparos/dia</div>
          </div>
          <div className="panel" style={{ padding: "20px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>Status Webhooks</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "8px 0", color: "var(--success)" }}>100% OK</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Latência média 240ms</div>
          </div>
        </div>

        {/* Organizations Table */}
        <div className="panel">
          <div className="panel-header" style={{ padding: "20px 20px 0" }}>
            <div className="panel-title">Empresas Cadastradas</div>
          </div>
          <div style={{ padding: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", textAlign: "left", color: "var(--text-muted)" }}>
                  <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Empresa / ID</th>
                  <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Plano</th>
                  <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Status</th>
                  <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase" }}>Usuários / Conexões</th>
                  <th style={{ padding: "12px 8px", fontWeight: "600", fontSize: "0.72rem", textTransform: "uppercase", textAlign: "right" }}>Saldo Carteira</th>
                  <th style={{ padding: "12px 8px" }}></th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org) => (
                  <tr key={org.id} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.2s" }} className="table-row-hover">
                    <td style={{ padding: "16px 8px" }}>
                      <div style={{ color: "white", fontWeight: "600" }}>{org.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "2px" }}>{org.id}</div>
                    </td>
                    <td style={{ padding: "16px 8px" }}>
                      <div style={{ 
                        display: "inline-block", padding: "4px 8px", borderRadius: "4px", 
                        background: "rgba(99,102,241,0.1)", color: "var(--indigo)", fontWeight: "600", fontSize: "0.75rem" 
                      }}>
                        {org.plan}
                      </div>
                    </td>
                    <td style={{ padding: "16px 8px" }}>
                      <span className={`badge ${org.status === "active" ? "success" : "warning"}`}>
                        <span className="badge-dot" />
                        {org.status === "active" ? "Ativo" : "Aguardando"}
                      </span>
                    </td>
                    <td style={{ padding: "16px 8px" }}>
                      <div style={{ color: "var(--text-secondary)" }}>{org.users} users · {org.connections} apps</div>
                    </td>
                    <td style={{ padding: "16px 8px", textAlign: "right" }}>
                      <div style={{ fontWeight: "bold", color: "white" }}>
                        R$ {org.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </div>
                    </td>
                    <td style={{ padding: "16px 8px", textAlign: "right" }}>
                      <button className="button secondary" style={{ padding: "6px 12px", fontSize: "0.75rem" }}>
                        Gerenciar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
