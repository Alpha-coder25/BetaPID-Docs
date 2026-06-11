import { TOKENS } from '@/data/content';
import type { Feature } from '@/types';

interface BadgeProps {
  status: Feature['status'];
}

export function Badge({ status }: BadgeProps) {
  const map: Record<string, { color: string; bg: string; label: string }> = {
    live:     { color: "#22c55e", bg: "#052e16", label: "Live" },
    beta:     { color: "#f59e0b", bg: "#1c1003", label: "Beta" },
    upcoming: { color: "#6366f1", bg: "#1e1b4b", label: "Upcoming" },
    planned:  { color: "#64748b", bg: "#0f172a", label: "Planned" },
  };
  const s = map[status] || map.planned;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "2px 8px", borderRadius: 99, fontSize: 11, fontWeight: 600,
      color: s.color, background: s.bg, border: `1px solid ${s.color}33`,
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: "50%", background: s.color,
        boxShadow: status === "live" ? `0 0 6px ${s.color}` : "none",
      }} />
      {s.label}
    </span>
  );
}
