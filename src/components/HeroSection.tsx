import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function HeroSection() {
  const stats = [
    { label: "Core Features", value: "3 Live" },
    { label: "AI Models", value: "3" },
    { label: "Stack Layers", value: "5" },
    { label: "Target Launch", value: "Q3 2025" },
  ];

  const tags = ["Next.js 15", "Convex", "Inngest", "Clerk", "AI SDK", "Firecrawl", "WebContainers"];

  return (
    <div style={{ marginBottom: 64 }}>
      <SectionLabel>BetaPID — Product Overview</SectionLabel>
      <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 68px)",
          fontWeight: 900,
          color: TOKENS.text0,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          margin: 0,
        }}>
          Build &amp; Automate<br /><span style={{ color: TOKENS.accent }}>Everything.</span>
        </h1>
        <div style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${TOKENS.accent}, transparent)`,
          animation: "scanline 3s ease-in-out infinite",
          opacity: 0.6,
        }} />
      </div>
      <p style={{
        fontSize: 18,
        color: TOKENS.text1,
        maxWidth: 560,
        lineHeight: 1.65,
        marginBottom: 28,
        marginTop: 16,
      }}>
        {CONTENT.product.subtitle}
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {tags.map(t => (
          <span key={t} style={{
            padding: "4px 12px",
            borderRadius: 99,
            fontSize: 12,
            fontWeight: 500,
            border: `1px solid ${TOKENS.border}`,
            color: TOKENS.text2,
            background: TOKENS.bg1,
          }}>{t}</span>
        ))}
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginTop: 32,
      }}>
        {stats.map(s => (
          <Card key={s.label} style={{ textAlign: "center", padding: "16px 12px" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: TOKENS.text0 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: TOKENS.text2, marginTop: 4 }}>{s.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
