import { TOKENS, CONTENT } from '@/data/content';

export function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${TOKENS.border}`,
      paddingTop: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
    }}>
      <div>
        <div style={{ fontSize: 15, fontWeight: 800, color: TOKENS.text0 }}>
          Beta<span style={{ color: TOKENS.accent }}>PID</span>
        </div>
        <div style={{ fontSize: 12, color: TOKENS.text2, marginTop: 2 }}>
          Build &amp; Automate Everything · {CONTENT.product.version}
        </div>
      </div>
      <div style={{ fontSize: 12, color: TOKENS.text2 }}>
        betapid.com · {new Date().getFullYear()}
      </div>
    </footer>
  );
}
