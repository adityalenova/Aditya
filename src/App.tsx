import React, { useEffect, useState } from 'react';
import { Navbar, NavSection } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { TechStackSection } from './components/TechStackSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { BuildingWithAISection } from './components/BuildingWithAISection';
import { CreativePlaygroundSection } from './components/CreativePlaygroundSection';
import { FolderShowcaseSection } from './components/FolderShowcaseSection';
import { ExperienceCertificatesSection } from './components/ExperienceCertificatesSection';
import { OutOfFrameSection } from './components/OutOfFrameSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { FooterContactSection } from './components/FooterContactSection';
import { CaseStudyPage } from './components/CaseStudyPage';
import { ResumePdfPage } from './components/ResumePdfPage';
import { CaseStudyProject, EXTRA_CASE_STUDIES, SELECTED_WORK } from './data/portfolioData';

export type ThemeMode = 'light' | 'dark';

function findCaseStudyBySlug(slug: string | null): CaseStudyProject | null {
  if (!slug) return null;
  const legacyAliases: Record<string, string> = {
    'static-case': 'static-selected',
    'beyondhuman-case': 'beyondhuman-selected',
    'nirogi-case': 'nirogi-selected',
    'spectre-case': 'spectre-selected',
  };
  const resolved = legacyAliases[slug] || slug;
  const fromSelected = SELECTED_WORK.find((p) => p.slug === resolved || p.id === resolved);
  if (fromSelected) return fromSelected;
  const fromExtra = Object.values(EXTRA_CASE_STUDIES).find((p) => p.slug === resolved || p.id === resolved);
  return fromExtra || null;
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [activeSection, setActiveSection] = useState<NavSection>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyProject | null>(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return findCaseStudyBySlug(params.get('case'));
  });
  const [resumePdfOpen, setResumePdfOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('resume') === 'pdf';
  });

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // ignore storage failure
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openResumePdf = () => {
    setSelectedCaseStudy(null);
    setResumePdfOpen(true);
    const url = new URL(window.location.href);
    url.searchParams.delete('case');
    url.searchParams.set('resume', 'pdf');
    window.history.pushState({ resumePdf: true }, '', url.toString());
  };

  const closeResumePdf = () => {
    setResumePdfOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('resume');
    window.history.pushState({}, '', url.toString());
  };

  const openCaseStudyPage = (project: CaseStudyProject) => {
    setResumePdfOpen(false);
    setSelectedCaseStudy(project);
    const url = new URL(window.location.href);
    url.searchParams.delete('resume');
    url.searchParams.set('case', project.slug);
    window.history.pushState({ caseSlug: project.slug }, '', url.toString());
  };

  const closeCaseStudyPage = () => {
    setSelectedCaseStudy(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('case');
    window.history.pushState({}, '', url.toString());
    window.setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      setResumePdfOpen(params.get('resume') === 'pdf');
      setSelectedCaseStudy(findCaseStudyBySlug(params.get('case')));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  useEffect(() => {
    if (selectedCaseStudy || resumePdfOpen) return;
    const sectionIds: NavSection[] = ['work', 'about', 'playground', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -45% 0px', threshold: 0.05 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [selectedCaseStudy, resumePdfOpen]);

  if (resumePdfOpen) {
    return <ResumePdfPage onBack={closeResumePdf} />;
  }

  if (selectedCaseStudy) {
    return (
      <CaseStudyPage
        project={selectedCaseStudy}
        onBack={closeCaseStudyPage}
        onNavigateCaseStudy={openCaseStudyPage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--base)] text-[var(--primary)] relative transition-colors duration-200">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={openResumePdf}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection
          onJumpToAIBuilds={() => scrollToSection('ai-builds')}
          onJumpToExperience={() => handleNavigate('experience')}
        />
        <AboutMeSection />
        <TechStackSection />
        <SelectedWorkSection onSelectCaseStudy={openCaseStudyPage} />
        <BuildingWithAISection onSelectCaseStudy={openCaseStudyPage} />
        <CreativePlaygroundSection
          onJumpToContact={() => handleNavigate('contact')}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <FolderShowcaseSection onSelectCaseStudy={openCaseStudyPage} />
        <ExperienceCertificatesSection />
        <OutOfFrameSection />
        <RecommendationsSection />
      </main>

      <FooterContactSection
        onOpenResume={openResumePdf}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
