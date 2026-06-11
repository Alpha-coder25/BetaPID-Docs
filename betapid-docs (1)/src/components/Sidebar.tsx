import { TOKENS, NAV_SECTIONS } from '@/data/content';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <nav style={{
      width: 200,
      position: "fixed",
      top: 56,
      bottom: 0,
      left: 0,
      padding: "24px 0",
      overflowY: "auto",
      borderRight: `1px solid ${TOKENS.border}`,
      background: TOKENS.bg0,
    }}>
      <div style={{
        padding: "0 16px 8px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: TOKENS.text2,
      }}>
        Navigation
      </div>
      {NAV_SECTIONS.map(s => (
        <button
          key={s.id}
          onClick={() => onNavigate(s.id)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "8px 16px",
            border: "none",
            background: activeSection === s.id ? TOKENS.accentDim : "none",
            color: activeSection === s.id ? TOKENS.accentSoft : TOKENS.text2,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: activeSection === s.id ? 600 : 400,
            borderLeft: activeSection === s.id ? `2px solid ${TOKENS.accent}` : "2px solid transparent",
            transition: "all 0.15s",
          }}
        >
          {s.label}
        </button>
      ))}
      <div style={{ height: 1, background: TOKENS.border, margin: "16px" }} />
      <div style={{ padding: "0 16px", fontSize: 11, color: TOKENS.text2 }}>
        <div style={{ marginBottom: 4 }}>{"v0.1.0-beta"}</div>
        <div style={{ color: TOKENS.accent }}>● Docs live</div>
      </div>
    </nav>
  );
}
