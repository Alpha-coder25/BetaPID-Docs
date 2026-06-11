import { TOKENS } from '@/data/content';

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}

const nodes: ArchNode[] = [
  { id: "user",    label: "User / Browser",        x: 50,  y: 20,  w: 130, h: 36, color: "#6366f1" },
  { id: "next",    label: "Next.js 15\n(App Router)", x: 50,  y: 100, w: 130, h: 36, color: "#818cf8" },
  { id: "clerk",   label: "Clerk Auth",             x: 220, y: 100, w: 110, h: 36, color: "#f59e0b" },
  { id: "convex",  label: "Convex\n(Real-time BaaS)", x: 50,  y: 180, w: 130, h: 36, color: "#22c55e" },
  { id: "inngest", label: "Inngest\n(Workflows)",   x: 220, y: 180, w: 110, h: 36, color: "#ef4444" },
  { id: "ai",      label: "AI SDK\n(GPT-4o/Claude)", x: 130, y: 260, w: 150, h: 36, color: "#a78bfa" },
  { id: "fc",      label: "Firecrawl",              x: 320, y: 260, w: 90,  h: 36, color: "#f97316" },
  { id: "wc",      label: "WebContainers\nAPI",     x: 50,  y: 260, w: 130, h: 36, color: "#0ea5e9" },
  { id: "db",      label: "Convex DB",              x: 50,  y: 340, w: 130, h: 36, color: "#64748b" },
  { id: "cdn",     label: "Vercel Edge\n/ CDN",     x: 220, y: 340, w: 110, h: 36, color: "#94a3b8" },
];

const edges: [string, string][] = [
  ["user","next"], ["next","clerk"], ["next","convex"], ["next","inngest"],
  ["convex","ai"], ["inngest","ai"], ["convex","wc"], ["ai","fc"],
  ["convex","db"], ["next","cdn"],
];

function getCenter(n: ArchNode) {
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 };
}

export function ArchDiagram() {
  return (
    <div style={{ overflowX: "auto" }}>
      <svg width="460" height="400" style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}>
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={TOKENS.border} />
          </marker>
        </defs>
        {edges.map(([a, b], i) => {
          const na = nodes.find(n => n.id === a);
          const nb = nodes.find(n => n.id === b);
          if (!na || !nb) return null;
          const ca = getCenter(na);
          const cb = getCenter(nb);
          return (
            <line
              key={i}
              x1={ca.x}
              y1={ca.y}
              x2={cb.x}
              y2={cb.y}
              stroke={TOKENS.border}
              strokeWidth="1.5"
              markerEnd="url(#arr)"
            />
          );
        })}
        {nodes.map(n => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="8"
              fill={TOKENS.bg2}
              stroke={n.color}
              strokeWidth="1.5"
            />
            {n.label.split("\n").map((line, i, arr) => (
              <text
                key={i}
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 + (i - (arr.length - 1) / 2) * 14}
                textAnchor="middle"
                fontSize="11"
                fill={TOKENS.text1}
                fontFamily="Inter, system-ui"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
