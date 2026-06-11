import { TOKENS } from '@/data/content';

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <span style={{ width: 28, height: 1, background: TOKENS.accent }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: TOKENS.accentSoft }}>
        {children}
      </span>
    </div>
  );
}
