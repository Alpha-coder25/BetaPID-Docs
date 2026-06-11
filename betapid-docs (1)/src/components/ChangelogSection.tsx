import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';
import { Badge } from './Badge';

export function ChangelogSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Changelog</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        Version history.
      </h2>
      <div style={{ display: "grid", gap: 10 }}>
        {CONTENT.changelog.map((c, i) => (
          <Card key={c.version} style={{
            padding: "14px 18px",
            borderLeft: i === 0 ? `2px solid ${TOKENS.accent}` : undefined,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <code style={{
                fontSize: 13,
                fontWeight: 700,
                color: i === 0 ? TOKENS.accentSoft : TOKENS.text0,
                background: TOKENS.bg2,
                padding: "2px 8px",
                borderRadius: 6,
              }}>{c.version}</code>
              <span style={{ fontSize: 12, color: TOKENS.text2 }}>{c.date}</span>
              {i === 0 && <Badge status="live" />}
            </div>
            <p style={{ fontSize: 13, color: TOKENS.text2, margin: 0, lineHeight: 1.6 }}>
              {c.notes}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
