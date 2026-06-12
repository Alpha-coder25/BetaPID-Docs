import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function SolutionSection() {
  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>The Solution</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        One platform to build, deploy, and operate.
      </h2>
      <Card glow>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: TOKENS.text1, margin: 0 }}>
          {CONTENT.pitch.solution}
        </p>
      </Card>
      <div style={{
        marginTop: 20,
        padding: "20px 24px",
        background: TOKENS.accentDim,
        borderRadius: 12,
        border: `1px solid ${TOKENS.accent}33`,
      }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.accentSoft, marginBottom: 8 }}>Why Now</div>
        <p style={{ fontSize: 14, color: TOKENS.text1, lineHeight: 1.7, margin: 0 }}>
          {CONTENT.pitch.whyNow}
        </p>
      </div>
    </div>
  );
}
