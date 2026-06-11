import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function ProblemSection() {
  const painPoints = [
    { icon: "🚧", title: "Builders blocked", desc: "Non-coders can't ship without hiring devs" },
    { icon: "⏱️", title: "Dev time wasted", desc: "Engineers repeat boilerplate instead of building" },
    { icon: "🔌", title: "IoT fragmented", desc: "No unified tool for hardware + software automation" },
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>The Problem</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        Building is still broken for most people.
      </h2>
      <Card glow>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: TOKENS.text1, margin: 0 }}>
          {CONTENT.pitch.problem}
        </p>
      </Card>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12,
        marginTop: 16,
      }}>
        {painPoints.map(p => (
          <Card key={p.title} style={{ padding: "16px" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.text0, marginBottom: 4 }}>{p.title}</div>
            <div style={{ fontSize: 12, color: TOKENS.text2, lineHeight: 1.5 }}>{p.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
