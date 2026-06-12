import { useState } from 'react';
import { TOKENS } from '@/data/content';
import { TopBar } from '@/components/TopBar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { MarketSection } from '@/components/MarketSection';
import { BusinessSection } from '@/components/BusinessSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { StackSection } from '@/components/StackSection';
import { ApiSection } from '@/components/ApiSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { TeamSection } from '@/components/TeamSection';
import { ChangelogSection } from '@/components/ChangelogSection';
import { Footer } from '@/components/Footer';

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 80 }}>
      {children}
    </section>
  );
}

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div style={{
      background: TOKENS.bg0,
      minHeight: "100vh",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: TOKENS.text1,
    }}>
      <TopBar search={search} onSearchChange={setSearch} />

      <main style={{
        flex: 1,
        padding: "104px 48px 80px",
        maxWidth: 860,
        margin: "0 auto",
      }}>
        <Section id="hero"><HeroSection /></Section>
        <Section id="problem"><ProblemSection /></Section>
        <Section id="solution"><SolutionSection /></Section>
        <Section id="features"><FeaturesSection search={search} /></Section>
        <Section id="market"><MarketSection /></Section>
        <Section id="business"><BusinessSection /></Section>
        <Section id="architecture"><ArchitectureSection /></Section>
        <Section id="stack"><StackSection /></Section>
        <Section id="api"><ApiSection /></Section>
        <Section id="roadmap"><RoadmapSection /></Section>
        <Section id="team"><TeamSection /></Section>
        <Section id="changelog"><ChangelogSection /></Section>
        <Footer />
      </main>
    </div>
  );
}
