import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function TeamSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>Team</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        Built by makers, for makers.
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
      }}>
        {CONTENT.team.map(m => (
          <Card key={m.name} glow style={{ textAlign: "center", padding: "28px 20px" }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              margin: "0 auto 16px",
              background: `linear-gradient(135deg, ${TOKENS.accentDim}, ${TOKENS.accent})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#fff",
              border: `2px solid ${TOKENS.accent}55`,
              boxShadow: `0 0 20px ${TOKENS.accent}33`,
            }}>
              {m.avatar
                ? <img src={m.avatar} alt={m.name} style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }} />
                : m.name[0]}
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: TOKENS.text0, marginBottom: 4 }}>
              {m.name}
            </div>
            <div style={{
              fontSize: 12,
              fontWeight: 600,
              color: TOKENS.accentSoft,
              marginBottom: 8,
            }}>{m.role}</div>
            <p style={{ fontSize: 12, color: TOKENS.text2, lineHeight: 1.6, marginBottom: 12 }}>
              {m.bio}
            </p>
            <a href={`mailto:${m.email}`} style={{
              fontSize: 12,
              color: TOKENS.accent,
              textDecoration: "none",
            }}>{m.email}</a>
          </Card>
        ))}
      </div>
    </div>
  );
}
