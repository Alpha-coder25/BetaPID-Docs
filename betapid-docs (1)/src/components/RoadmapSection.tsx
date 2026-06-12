import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function RoadmapSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Product Roadmap</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        From beta to global platform.
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 10,
      }}>
        {CONTENT.roadmap.map(r => (
          <Card key={r.phase} style={{
            border: r.label === "Now" ? `1px solid ${TOKENS.accent}55` : undefined,
            padding: "16px",
          }}>
            <div style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: r.label === "Now" ? TOKENS.accentSoft : TOKENS.text2,
              marginBottom: 4,
            }}>{r.label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: TOKENS.text0, marginBottom: 12 }}>
              {r.phase}
            </div>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 6,
            }}>
              {r.items.map(item => (
                <li key={item} style={{
                  fontSize: 12,
                  color: TOKENS.text2,
                  display: "flex",
                  gap: 6,
                }}>
                  <span style={{
                    color: r.done ? TOKENS.success : TOKENS.text2,
                    flexShrink: 0,
                  }}>{r.done ? "✓" : "○"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div style={{
        marginTop: 20,
        padding: "16px 20px",
        background: TOKENS.bg1,
        borderRadius: 10,
        border: `1px solid ${TOKENS.border}`,
      }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.text0, marginBottom: 6 }}>
          Vision Statement
        </div>
        <p style={{ fontSize: 14, color: TOKENS.text1, lineHeight: 1.7, margin: 0 }}>
          {CONTENT.pitch.vision}
        </p>
      </div>
    </div>
  );
}
