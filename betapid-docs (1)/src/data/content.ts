import type {
  TeamMember, BusinessTier, TractionMetric, Competitor,
  Feature, ApiEndpoint, RoadmapPhase, ChangelogEntry, NavSection
} from '@/types';

export const TOKENS = {
  bg0: "#0a0a0f",
  bg1: "#111118",
  bg2: "#18181f",
  border: "#2a2a35",
  accent: "#6366f1",
  accentSoft: "#818cf8",
  accentDim: "#312e81",
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  text0: "#f8fafc",
  text1: "#cbd5e1",
  text2: "#64748b",
} as const;

export const CONTENT = {
  product: {
    name: "BetaPID",
    tagline: "Build & Automate Everything.",
    subtitle: "The unified platform where non-coders launch products and engineers ship faster — powered by AI, WebContainers, and real-time automation.",
    version: "v0.1.0-beta",
    url: "betapid.com",
  },
  team: [
    {
      name: "Hasib",
      role: "Founder & CEO",
      email: "betapidai@gmail.com",
      bio: "EEE engineer, embedded systems & IoT researcher, serial entrepreneur. Founder of Incutech Systems & Aloron Projukti.",
      avatar: null,
    },
  ] as TeamMember[],
  pitch: {
    problem: "Entrepreneurs juggle no-code tools, developers switch between IDEs and deployment platforms, and industrial teams rely on disconnected IoT systems. Building and operating products still requires stitching together dozens of tools. Non-technical founders get stuck; developers waste time on boilerplate. Industrial automation is fragmented across legacy tools. There is no single platform that serves both worlds.",
    solution: "Betapid brings AI creation, professional development, deployment, and industrial automation into a single workspace. Non-coders get an AI-driven website builder. Developers get a full WebContainer IDE with AI pair programming. Industrial teams get IoT device management and automation workflow orchestration — all under one roof.",
    whyNow: "AI has changed how software is created. Browser-based infrastructure has removed setup barriers. The cost of intelligence is rapidly falling, making it possible for a single platform to empower founders, developers, and industrial operators alike. Betapid arrives at the exact moment these technologies converge.",
    market: {
      tam: "$650B",
      sam: "$42B",
      som: "$1.2B",
      description: "Global no-code/low-code market is projected to reach $187B by 2030. Industrial IoT automation adds another $465B addressable layer.",
    },
    businessModel: [
      { tier: "Free", price: "$0/mo", features: "3 projects, community templates, basic AI" },
      { tier: "Starter", price: "$10/mo", features: "10 projects, custom domain, AI builder" },
      { tier: "Pro", price: "$25/mo", features: "Unlimited projects, IoT devices, workflows" },
      { tier: "Enterprise", price: "Custom", features: "White-label, dedicated infra, SLA" },
    ] as BusinessTier[],
    traction: [
      { metric: "Beta Signups", value: "Active", status: "live" },
      { metric: "Core Modules", value: "4 built", status: "live" },
      { metric: "AI Integrations", value: "3 models", status: "live" },
      { metric: "Target Launch", value: "Q3 2025", status: "upcoming" },
    ] as TractionMetric[],
    competition: [
      { name: "Webflow", strength: "Design-first", gap: "No IoT, no code execution" },
      { name: "Bubble", strength: "No-code apps", gap: "No AI agents, no automation" },
      { name: "Zapier", strength: "Workflow automation", gap: "No builder, no IoT layer" },
      { name: "BetaPID", strength: "All three unified", gap: "—", isUs: true },
    ] as Competitor[],
    gtm: [
      {
        phase: "Phase 1 — Developer & Creator Adoption",
        description: "Acquire early users through developer communities, university innovation programs, hackathons, and strategic partnerships across Bangladesh and Southeast Asia. Focus on validating product-market fit and building an engaged user base.",
      },
      {
        phase: "Phase 2 — Startup Ecosystem Expansion",
        description: "Partner with startup accelerators, incubators, and digital agencies to position Betapid as the preferred platform for AI-powered product development and deployment.",
      },
      {
        phase: "Phase 3 — Enterprise & Industrial Growth",
        description: "Expand into enterprise and industrial markets through collaborations with IoT hardware providers, system integrators, and regional channel partners, enabling large-scale automation and connected operations.",
      },
    ],
    vision:
      "A world where any person — from a Dhaka street vendor to a Munich engineer — can build, deploy, and automate their ideas without barriers. Betapid is the operating system for makers.",
  },
  features: [
    { name: "AI Website Builder", status: "live", category: "Core", desc: "Drag-drop + AI prompt → full site in minutes" },
    { name: "WebContainer IDE", status: "live", category: "Core", desc: "In-browser Node.js execution, no setup" },
    { name: "IoT Device Manager", status: "live", category: "IoT", desc: "Connect, monitor, control hardware devices" },
    { name: "Automation Workflows", status: "beta", category: "Automation", desc: "Visual workflow builder powered by Inngest" },
    { name: "AI Agent Orchestration", status: "beta", category: "AI", desc: "Multi-agent task delegation via AI SDK" },
    { name: "Firecrawl Web Scraping", status: "beta", category: "Data", desc: "Structured data extraction for AI context" },
    { name: "Template Marketplace", status: "upcoming", category: "Platform", desc: "Buy/sell project templates" },
    { name: "White-label Builder", status: "planned", category: "Enterprise", desc: "Rebrandable platform for agencies" },
    { name: "Mobile App (PWA)", status: "planned", category: "Mobile", desc: "Full platform on mobile" },
  ] as Feature[],
  stack: {
    frontend: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    backend: ["Convex (real-time BaaS)", "Inngest (event-driven workflows)", "Clerk (auth + RBAC)"],
    ai: ["Vercel AI SDK", "OpenAI GPT-4o", "Anthropic Claude", "Firecrawl (web data)"],
    infra: ["Vercel (edge deployment)", "WebContainers API", "Convex Cloud", "Cloudflare CDN"],
    devtools: ["TypeScript", "Next.js", "ESLint", "Prettier", "Vitest"],
  },
  apis: [
    { name: "POST /api/ai/generate", auth: "Clerk JWT", desc: "AI content/code generation" },
    { name: "GET /api/devices", auth: "API Key", desc: "List IoT devices" },
    { name: "POST /api/workflows/trigger", auth: "Inngest HMAC", desc: "Trigger automation workflow" },
    { name: "GET /api/projects", auth: "Clerk JWT", desc: "List user projects" },
    { name: "POST /api/scrape", auth: "Clerk JWT", desc: "Firecrawl web extraction" },
  ] as ApiEndpoint[],
  roadmap: [
    { phase: "Q2 2026", label: "Now", items: ["AI Builder v1", "WebContainer IDE", "IoT Dashboard", "Workflow engine"], done: true },
    { phase: "Q3 2026", label: "Next", items: ["Agent marketplace", "Mobile PWA", "Template store", "Analytics v1"], done: false },
    { phase: "Q4 2026", label: "Soon", items: ["White-label", "Enterprise SSO", "API gateway", "Multi-region"], done: false },
    { phase: "2027", label: "Vision", items: ["BetaPID OS", "Hardware SDK", "Global maker network", "IPO-readiness"], done: false },
  ] as RoadmapPhase[],
  changelog: [
    { version: "v0.1.0-beta", date: "2026-06-10", notes: "Initial beta release. AI builder, WebContainer IDE, IoT manager, workflow engine." },
    { version: "v0.0.5-alpha", date: "2026-05-01", notes: "Core infrastructure. Convex schema, Clerk auth, Inngest integration." },
    { version: "v0.0.1-alpha", date: "2026-03-15", notes: "Project inception. Tech stack finalized." },
  ] as ChangelogEntry[],
} as const;

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "market", label: "Market" },
  { id: "business", label: "Business" },
  { id: "architecture", label: "Architecture" },
  { id: "stack", label: "Stack" },
  { id: "api", label: "API" },
  { id: "roadmap", label: "Roadmap" },
  { id: "team", label: "Team" },
  { id: "changelog", label: "Changelog" },
];
