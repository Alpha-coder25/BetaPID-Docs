import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function MarketSection() {
  const metrics = [
    { label: "TAM", value: CONTENT.pitch.market.tam, desc: "Total addressable market" },
    { label: "SAM", value: CONTENT.pitch.market.sam, desc: "Serviceable addressable" },
    { label: "SOM", value: CONTENT.pitch.market.som, desc: "Obtainable (3yr)" },
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Market Opportunity</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        A massive, converging market.
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12,
        marginBottom: 20,
      }}>
        {metrics.map(m => (
          <Card key={m.label} glow style={{ textAlign: "center" }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              color: TOKENS.accentSoft,
              letterSpacing: "0.12em",
              marginBottom: 6,
            }}>{m.label}</div>
            <div style={{
              fontSize: 32,
              fontWeight: 900,
              color: TOKENS.text0,
              letterSpacing: "-0.02em",
            }}>{m.value}</div>
            <div style={{ fontSize: 12, color: TOKENS.text2, marginTop: 4 }}>{m.desc}</div>
          </Card>
        ))}
      </div>
      <Card>
        <p style={{ fontSize: 14, color: TOKENS.text1, lineHeight: 1.7, margin: 0 }}>
          {CONTENT.pitch.market.description}
        </p>
      </Card>
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: TOKENS.text0, marginBottom: 12 }}>
          Competitive Landscape
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {CONTENT.pitch.competition.map(c => (
            <div key={c.name} style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              background: c.isUs ? TOKENS.accentDim : TOKENS.bg1,
              border: `1px solid ${c.isUs ? TOKENS.accent + "55" : TOKENS.border}`,
              borderRadius: 10,
            }}>
              <div style={{
                width: 90,
                fontSize: 13,
                fontWeight: 700,
                color: c.isUs ? TOKENS.accentSoft : TOKENS.text0,
              }}>{c.name}</div>
              <div style={{ flex: 1, fontSize: 12, color: TOKENS.text2 }}>
                <span style={{ color: TOKENS.success }}>✓</span> {c.strength}
              </div>
              <div style={{ flex: 1, fontSize: 12, color: TOKENS.text2 }}>
                {c.gap !== "—"
                  ? <><span style={{ color: TOKENS.danger }}>✗</span> {c.gap}</>
                  : <span style={{ color: TOKENS.success }}>Full platform</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
