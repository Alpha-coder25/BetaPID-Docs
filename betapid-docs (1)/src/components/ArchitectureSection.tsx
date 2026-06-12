import { TOKENS } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';
import { ArchDiagram } from './ArchDiagram';

export function ArchitectureSection() {
  const flows = [
    {
      label: "Data Flow",
      desc: "User input → Next.js API route → Convex mutation → Inngest event → AI SDK task → Firecrawl data → Convex DB → real-time sync to client",
    },
    {
      label: "Auth Flow",
      desc: "Clerk issues JWT → passed to Convex via auth adapter → RBAC enforced at query/mutation level → role-based UI rendering",
    },
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>System Architecture</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        How BetaPID is built.
      </h2>
      <Card><ArchDiagram /></Card>
      <div style={{
        marginTop: 16,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
      }}>
        {flows.map(d => (
          <Card key={d.label} style={{ padding: "14px 16px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: TOKENS.accentSoft, marginBottom: 6 }}>
              {d.label}
            </div>
            <p style={{ fontSize: 12, color: TOKENS.text2, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
