import { useState, useEffect, useRef, useCallback } from 'react';
import { TOKENS, NAV_SECTIONS } from '@/data/content';
import { TopBar } from '@/components/TopBar';
import { Sidebar } from '@/components/Sidebar';
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
  const [activeSection, setActiveSection] = useState("hero");
  const [search, setSearch] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      for (const { id } of [...NAV_SECTIONS].reverse()) {
        const el = sectionRefs.current[id];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = useCallback((id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  return (
    <div style={{
      background: TOKENS.bg0,
      minHeight: "100vh",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: TOKENS.text1,
    }}>
      <TopBar search={search} onSearchChange={setSearch} />

      <div style={{ display: "flex", paddingTop: 56 }}>
        <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

        <main style={{
          marginLeft: 200,
          flex: 1,
          padding: "40px 48px 80px",
          maxWidth: 860,
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
    </div>
  );
}
