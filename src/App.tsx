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
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyProject, EXTRA_CASE_STUDIES, SELECTED_WORK } from './data/portfolioData';

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
  const [activeSection, setActiveSection] = useState<NavSection>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyProject | null>(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return findCaseStudyBySlug(params.get('case'));
  });
  const [resumeOpen, setResumeOpen] = useState(false);

  const openCaseStudyPage = (project: CaseStudyProject) => {
    setSelectedCaseStudy(project);
    const url = new URL(window.location.href);
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
    if (selectedCaseStudy) return;
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
  }, [selectedCaseStudy]);

  if (selectedCaseStudy) {
    return (
      <CaseStudyPage
        project={selectedCaseStudy}
        onBack={closeCaseStudyPage}
        onNavigateCaseStudy={openCaseStudyPage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#151413] relative">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
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
        <CreativePlaygroundSection onJumpToContact={() => handleNavigate('contact')} />
        <FolderShowcaseSection onSelectCaseStudy={openCaseStudyPage} />
        <ExperienceCertificatesSection />
        <OutOfFrameSection />
        <RecommendationsSection />
      </main>

      <FooterContactSection
        onOpenResume={() => setResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
