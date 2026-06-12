import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Badge } from './Badge';

interface FeaturesSectionProps {
  search: string;
}

export function FeaturesSection({ search }: FeaturesSectionProps) {
  const filteredFeatures = CONTENT.features.filter(f =>
    !search ||
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.desc.toLowerCase().includes(search.toLowerCase())
  );

  const comparisonRows = [
    { others: "AI website builder only", betapid: "AI + Full IDE" },
    { others: "IDE only", betapid: "IDE + Deployment" },
    { others: "Deployment only", betapid: "End-to-end workflow" },
    { others: "IoT only", betapid: "IoT + Software creation" },
    { others: "Multiple subscriptions", betapid: "One unified platform" },
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: TOKENS.accentSoft,
          marginBottom: 8,
        }}>
          Why Betapid
        </div>
        <div className="why-betapid-table-wrapper">
          <div className="why-betapid-table">
            <div className="why-betapid-table-header">
              <span>Others</span>
              <span>Betapid</span>
            </div>
            {comparisonRows.map(row => (
              <div key={row.others} className="why-betapid-table-row">
                <span style={{ color: TOKENS.text1 }}>{row.others}</span>
                <span style={{ color: TOKENS.text0, fontWeight: 600 }}>{row.betapid}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionLabel>Feature Matrix</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 8,
        letterSpacing: "-0.02em",
      }}>
        Live-synced capabilities.
      </h2>
      <p style={{ fontSize: 14, color: TOKENS.text2, marginBottom: 20 }}>
        Real-time status of all platform features.
      </p>
      <div style={{ display: "grid", gap: 8 }}>
        {filteredFeatures.map(f => (
          <div key={f.name} style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 16px",
            background: TOKENS.bg1,
            border: `1px solid ${TOKENS.border}`,
            borderRadius: 10,
          }}>
            <Badge status={f.status} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.text0 }}>{f.name}</div>
              <div style={{ fontSize: 12, color: TOKENS.text2 }}>{f.desc}</div>
            </div>
            <span style={{
              fontSize: 11,
              color: TOKENS.text2,
              background: TOKENS.bg2,
              padding: "2px 8px",
              borderRadius: 6,
              border: `1px solid ${TOKENS.border}`,
            }}>
              {f.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
