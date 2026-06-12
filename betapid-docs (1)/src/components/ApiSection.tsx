import { TOKENS, CONTENT } from '@/data/content';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';

export function ApiSection() {
  const securityItems = [
    "Clerk JWT for all user-facing APIs",
    "Inngest HMAC signing for internal events",
    "Convex RBAC: row-level access per role",
    "Firecrawl API key in server-only env",
    "No secrets exposed to client bundle",
    "Rate limiting via Vercel Edge middleware",
  ];

  return (
    <div style={{ marginBottom: 56 }}>
      <SectionLabel>API Documentation</SectionLabel>
      <h2 style={{
        fontSize: 30,
        fontWeight: 800,
        color: TOKENS.text0,
        marginBottom: 8,
        letterSpacing: "-0.02em",
      }}>
        Endpoints &amp; Auth.
      </h2>
      <p style={{ fontSize: 14, color: TOKENS.text2, marginBottom: 16 }}>
        All endpoints require a valid Clerk JWT unless otherwise noted.
         {/* Base URL:{" "}
        <code style={{
          color: TOKENS.accentSoft,
          background: TOKENS.bg2,
          padding: "1px 6px",
          borderRadius: 4,
        }}>
          https://api.betapid.com
        </code> */}
      </p>
      <div style={{ display: "grid", gap: 8 }}>
        {CONTENT.apis.map(a => (
          <Card key={a.name} style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <code style={{
                fontSize: 13,
                fontWeight: 700,
                color: TOKENS.accentSoft,
                background: TOKENS.bg2,
                padding: "2px 8px",
                borderRadius: 6,
              }}>{a.name}</code>
              <span style={{
                fontSize: 11,
                color: TOKENS.warning,
                background: "#1c100333",
                padding: "2px 8px",
                borderRadius: 6,
                border: `1px solid ${TOKENS.warning}33`,
              }}>{a.auth}</span>
            </div>
            <p style={{ fontSize: 13, color: TOKENS.text2, margin: 0 }}>{a.desc}</p>
          </Card>
        ))}
      </div>
      <Card style={{ marginTop: 16, padding: "16px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.text0, marginBottom: 8 }}>
          Security Model
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {securityItems.map(s => (
            <div key={s} style={{
              fontSize: 12,
              color: TOKENS.text2,
              display: "flex",
              gap: 6,
              alignItems: "flex-start",
            }}>
              <span style={{ color: TOKENS.success, flexShrink: 0 }}>✓</span> {s}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
