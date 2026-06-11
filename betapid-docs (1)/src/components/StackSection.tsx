import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function StackSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Technology Stack</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        Modern, proven, production-ready.
      </h2>
      <div style={{ display: "grid", gap: 12 }}>
        {Object.entries(CONTENT.stack).map(([layer, techs]) => (
          <Card key={layer} style={{ padding: "14px 18px" }}>
            <div style={{
              fontSize: 12,
              fontWeight: 700,
              color: TOKENS.accentSoft,
              textTransform: "capitalize",
              marginBottom: 10,
            }}>{layer}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {techs.map(t => (
                <span key={t} style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 500,
                  border: `1px solid ${TOKENS.border}`,
                  color: TOKENS.text1,
                  background: TOKENS.bg2,
                }}>{t}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
