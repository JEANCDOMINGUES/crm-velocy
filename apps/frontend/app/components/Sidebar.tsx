"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconInbox() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function IconContacts() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

const mainNav = [
  { href: "/",       label: "Visão Geral", icon: <IconHome />,     badge: null },
  { href: "/inbox",  label: "Inbox",       icon: <IconInbox />,    badge: "19" },
  { href: "#",       label: "Contatos",    icon: <IconContacts />, badge: null },
  { href: "#",       label: "Relatórios",  icon: <IconChart />,    badge: null },
];

const bottomNav = [
  { href: "#", label: "Configurações", icon: <IconSettings /> },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-logo">
            <IconZap />
          </div>
          Velocy
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">Principal</p>
        <nav className="nav">
          {mainNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) && item.href !== "#";
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 12px",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isActive ? "var(--indigo)" : "var(--text-secondary)",
                  background: isActive ? "rgba(99,102,241,0.15)" : "transparent",
                  transition: "color 0.15s ease, background 0.15s ease",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                {isActive && (
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 6,
                    bottom: 6,
                    width: 3,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    borderRadius: "0 3px 3px 0",
                  }} />
                )}
                <span className="nav-icon" style={{ width: 18, height: 18, opacity: isActive ? 1 : 0.6 }}>
                  {item.icon}
                </span>
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-section" style={{ marginTop: "auto" }}>
        <p className="sidebar-label">Sistema</p>
        <nav className="nav">
          {bottomNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 12px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                background: "transparent",
                transition: "color 0.15s ease, background 0.15s ease",
                textDecoration: "none",
              }}
            >
              <span className="nav-icon" style={{ width: 18, height: 18, opacity: 0.6 }}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="agent-card">
          <div className="agent-avatar">
            <div className="agent-avatar-img">A</div>
            <div className="agent-status-dot" />
          </div>
          <div className="agent-info">
            <div className="agent-name">Agente</div>
            <div className="agent-role">Online · Suporte</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
