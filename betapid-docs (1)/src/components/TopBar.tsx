import { TOKENS } from '@/data/content';
import { Badge } from './Badge';

interface TopBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function TopBar({ search, onSearchChange }: TopBarProps) {
  return (
    <header className="topbar" style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: `${TOKENS.bg0}e8`,
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${TOKENS.border}`,
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      padding: "0 16px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
        <span style={{ fontSize: 17, fontWeight: 800, color: TOKENS.text0, letterSpacing: "-0.02em" }}>
          Beta<span style={{ color: TOKENS.accent }}>PID</span>
        </span>
        <span style={{
          fontSize: 11,
          color: TOKENS.text2,
          background: TOKENS.bg2,
          border: `1px solid ${TOKENS.border}`,
          padding: "2px 8px",
          borderRadius: 99,
        }}>/docs</span>
        <Badge status="live" />
      </div>
      <input
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search docs…"
        className="topbar-search"
        style={{
          padding: "6px 12px",
          borderRadius: 8,
          border: `1px solid ${TOKENS.border}`,
          background: TOKENS.bg1,
          color: TOKENS.text0,
          fontSize: 13,
          width: "min(220px, 100%)",
          outline: "none",
          minWidth: 0,
        }}
      />
    </header>
  );
}
