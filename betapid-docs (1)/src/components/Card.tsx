import { TOKENS } from '@/data/content';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  glow?: boolean;
}

export function Card({ children, style = {}, glow = false }: CardProps) {
  return (
    <div style={{
      background: TOKENS.bg1,
      border: `1px solid ${glow ? TOKENS.accent + "44" : TOKENS.border}`,
      borderRadius: 12,
      padding: "20px 24px",
      boxShadow: glow ? `0 0 24px ${TOKENS.accent}18` : "none",
      ...style,
    }}>
      {children}
    </div>
  );
}
