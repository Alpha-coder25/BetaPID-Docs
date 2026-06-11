import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function BusinessSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Business Model</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 8,
        letterSpacing: "-0.02em",
      }}>
        Simple, scalable pricing.
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
        marginBottom: 20,
      }}>
        {CONTENT.pitch.businessModel.map((b, i) => (
          <Card key={b.tier} style={{
            padding: "16px",
            border: i === 2 ? `1px solid ${TOKENS.accent}55` : undefined,
            background: i === 2 ? TOKENS.accentDim : undefined,
          }}>
            <div style={{
              fontSize: 13,
              fontWeight: 700,
              color: i === 2 ? TOKENS.accentSoft : TOKENS.text0,
              marginBottom: 6,
            }}>{b.tier}</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: TOKENS.text0, marginBottom: 8 }}>{b.price}</div>
            <div style={{ fontSize: 12, color: TOKENS.text2, lineHeight: 1.5 }}>{b.features}</div>
          </Card>
        ))}
      </div>
      <Card>
        <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.text0, marginBottom: 8 }}>
          Go-To-Market Strategy
        </div>
        <p style={{ fontSize: 14, color: TOKENS.text1, lineHeight: 1.7, margin: 0 }}>
          {CONTENT.pitch.gtm}
        </p>
      </Card>
    </div>
  );
}
