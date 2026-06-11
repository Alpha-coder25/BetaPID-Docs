# BetaPID Docs

Production-ready documentation site for **BetaPID** — a unified platform for building, deploying, and automating products with AI, WebContainers, and real-time infrastructure.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
betapid-docs/
├── public/
│   └── favicon.svg              # Brand favicon
├── src/
│   ├── components/              # React components
│   │   ├── ArchDiagram.tsx     # SVG architecture diagram
│   │   ├── Badge.tsx           # Status badge component
│   │   ├── Card.tsx            # Reusable card container
│   │   ├── SectionLabel.tsx    # Section header label
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   ├── TopBar.tsx          # Header with search
│   │   ├── Footer.tsx          # Site footer
│   │   ├── HeroSection.tsx     # Hero/overview section
│   │   ├── ProblemSection.tsx  # Problem statement
│   │   ├── SolutionSection.tsx # Solution overview
│   │   ├── FeaturesSection.tsx # Feature matrix with search
│   │   ├── MarketSection.tsx   # Market opportunity
│   │   ├── BusinessSection.tsx # Pricing & GTM
│   │   ├── ArchitectureSection.tsx # System architecture
│   │   ├── StackSection.tsx    # Tech stack display
│   │   ├── ApiSection.tsx      # API documentation
│   │   ├── RoadmapSection.tsx  # Product roadmap
│   │   ├── TeamSection.tsx     # Team profiles
│   │   └── ChangelogSection.tsx # Version history
│   ├── data/
│   │   └── content.ts          # All content data & design tokens
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tsconfig.node.json          # Node TS config
├── vite.config.ts              # Vite build config
└── eslint.config.js            # ESLint rules
```

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 6 |
| Language | TypeScript 5.6 |
| Styling | Inline styles + CSS |
| Build | Vite (ESM, Terser, code splitting) |
| Linting | ESLint + React Hooks/Refresh plugins |

## 🎨 Design Tokens

All colors and values are centralized in `src/data/content.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `bg0` | `#0a0a0f` | Page background |
| `bg1` | `#111118` | Card background |
| `bg2` | `#18181f` | Secondary background |
| `border` | `#2a2a35` | Borders |
| `accent` | `#6366f1` | Primary accent (indigo) |
| `accentSoft` | `#818cf8` | Hover states |
| `accentDim` | `#312e81` | Active backgrounds |
| `success` | `#22c55e` | Live status |
| `warning` | `#f59e0b` | Beta status |
| `text0` | `#f8fafc` | Headings |
| `text1` | `#cbd5e1` | Body text |
| `text2` | `#64748b` | Muted text |

## 📦 Build Configuration

### Vite Features Enabled
- **Code Splitting**: Vendor chunk (React) separated from app code
- **Terser Minification**: Optimized for production
- **Source Maps**: Enabled for debugging
- **Path Aliases**: `@/` maps to `src/`
- **ESM Target**: Modern browsers only

### TypeScript Strict Mode
- `noUnusedLocals` & `noUnusedParameters`
- `noFallthroughCasesInSwitch`
- `strict` mode enabled
- Path mapping via `baseUrl` & `paths`

## 🔍 Search Functionality

The search bar in the TopBar filters the **Features** section in real-time:
- Matches against feature `name` and `description`
- Case-insensitive search
- Instant filtering without debounce (suitable for <100 items)

## 📱 Responsive Behavior

- **Desktop (>768px)**: Full sidebar + main content layout
- **Mobile (≤768px)**: Sidebar hidden, full-width content
- **Print**: Clean layout without navigation

## 🧩 Component Architecture

### Shared Components
- **Card**: Container with optional glow effect
- **Badge**: Status indicator (live/beta/upcoming/planned)
- **SectionLabel**: Consistent section header with accent line

### Section Components
Each section is self-contained with its own data mapping:
- Accepts props where needed (e.g., `FeaturesSection` receives `search`)
- Uses shared components for consistency
- Inline styles for zero CSS-in-JS dependency

## 🔐 Security Notes

The API documentation section includes security model details:
- Clerk JWT for user-facing APIs
- Inngest HMAC for internal events
- Convex RBAC enforcement
- Server-only environment variables
- Vercel Edge rate limiting

## 📈 Performance

- **No runtime CSS-in-JS**: Pure inline styles + static CSS
- **SVG Architecture Diagram**: Zero external image dependencies
- **Code Splitting**: Vendor chunk cached independently
- **Passive Scroll Listener**: Non-blocking scroll spy
- **Font Preconnect**: Google Fonts loaded with `preconnect`

## 📝 Content Management

All copy, data, and configuration live in `src/data/content.ts`:
- Update pricing → edit `businessModel` array
- Add team member → append to `team` array
- New feature → add to `features` array
- Roadmap changes → modify `roadmap` array

No component code changes needed for content updates.

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Static Hosting
The build output in `dist/` is a fully static site:
- Single `index.html` entry
- ESM JS chunks
- No server-side rendering required

## 📄 License

Proprietary — BetaPID Inc.

---

**Version**: v0.1.0-beta  
**Built with**: React 19 + Vite 6 + TypeScript 5.6
