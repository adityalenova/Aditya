import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Layers, Lock } from 'lucide-react';
import { CaseStudyProject, SELECTED_WORK } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

interface SelectedWorkSectionProps {
  onSelectCaseStudy: (project: CaseStudyProject) => void;
}

const FILTERS: ('All' | CaseStudyProject['category'])[] = [
  'All',
  'Developer Tools',
  'AI Systems',
  'Brand & Studio',
  'Civic & Health',
];

const CARD_THEMES: Record<string, { bg: string; badge: string }> = {
  cyrus: { bg: 'bg-[#1D4ED8]', badge: 'bg-[#1E40AF]' },
  genesis: { bg: 'bg-[#7A1C24]', badge: 'bg-[#5F131A]' },
  'remix-selected': { bg: 'bg-[#9F1239]', badge: 'bg-[#7E0D2C]' },
  'raakha-selected': { bg: 'bg-[#4A2C22]', badge: 'bg-[#382018]' },
  'nirogi-selected': { bg: 'bg-[#065F46]', badge: 'bg-[#044A36]' },
  'spectre-selected': { bg: 'bg-[#18181B]', badge: 'bg-[#101013]' },
};

function getDisplayDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

export function SelectedWorkSection({ onSelectCaseStudy }: SelectedWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | CaseStudyProject['category']>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects =
    activeFilter === 'All' ? SELECTED_WORK : SELECTED_WORK.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-16 sm:py-24 scroll-mt-20 border-t border-[#EFECE6] bg-white">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-12">
          <h2 className="font-display text-[2.45rem] sm:text-[3.5rem] font-bold tracking-[-0.035em] text-[#151413] leading-none">
            Selected Work
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-[16px] text-[#57534E]">
            <span>Real builds, live websites, engineered and shipped using</span>
            <span className="inline-flex items-center gap-1.5" aria-hidden="true">
              <span className="w-6 h-6 rounded-md bg-[#087EA4] text-white text-[11px] font-bold flex items-center justify-center">⚛</span>
              <span className="w-6 h-6 rounded-md bg-[#D97757] text-white text-[11px] font-bold flex items-center justify-center">Ai</span>
              <span className="w-6 h-6 rounded-md bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">✦</span>
              <span className="w-6 h-6 rounded-md bg-[#151413] text-white text-[10px] font-bold flex items-center justify-center">▲</span>
            </span>
          </div>

          <div className="pt-2 flex justify-center">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-full bg-[#F4F3F0] border border-[#EAE7E1]"
              role="tablist"
              aria-label="Filter selected work"
            >
              {FILTERS.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      active ? 'bg-[#7A1C24] text-white shadow-xs' : 'text-[#625E59] hover:text-[#151413]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Saturated Website Template Cards with Animated Opening Browsers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {visibleProjects.map((project, index) => {
            const theme = CARD_THEMES[project.id] || { bg: 'bg-[#7A1C24]', badge: 'bg-[#5F131A]' };
            const domain = getDisplayDomain(project.liveUrl);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <Tilt3D maxTilt={4} scaleOnHover={1.012} glare={false}>
                  <div
                    className={`relative rounded-[28px] ${theme.bg} p-5 sm:p-7 pb-8 text-white shadow-[0_26px_58px_rgba(21,20,19,0.14)] ring-1 ring-inset ring-white/10 overflow-hidden`}
                  >
                    {/* Header Row Inside Frame */}
                    <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                      <div>
                        <h3 className="font-display text-lg sm:text-[21px] font-bold tracking-tight text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/75 line-clamp-1 mt-0.5">
                          {project.metrics[0]?.value} · {project.metrics[0]?.label}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${theme.badge} text-[11px] text-white/90 font-medium border border-white/10 whitespace-nowrap shrink-0`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Animated Opening Browser Template Frame */}
                    <motion.div
                      initial={{ y: 26, opacity: 0.35, scaleY: 0.88 }}
                      whileInView={{ y: 0, opacity: 1, scaleY: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, delay: 0.08 + (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: 'bottom center' }}
                      onClick={() => onSelectCaseStudy(project)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectCaseStudy(project);
                        }
                      }}
                      aria-label={`Open full case study page for ${project.title}`}
                      className="relative rounded-[16px] overflow-hidden bg-white text-[#151413] shadow-[0_24px_55px_rgba(0,0,0,0.3)] border border-black/10 cursor-pointer transition-transform duration-300 group-hover:-translate-y-1.5"
                    >
                      {/* Realistic Browser Chrome Bar */}
                      <div className="bg-[#F6F5F2] px-3.5 py-2.5 border-b border-[#E8E4DC] flex items-center gap-2.5">
                        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>

                        <div className="hidden sm:flex items-center gap-0.5 text-[#A8A29E]" aria-hidden="true">
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="max-w-[240px] mx-auto px-3 py-1 rounded-full bg-white border border-[#E5E2DC] flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#4A4641] truncate shadow-2xs">
                            <Lock className="w-2.5 h-2.5 text-[#059669] shrink-0" aria-hidden="true" />
                            <span className="truncate">{domain}</span>
                          </div>
                        </div>

                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-[#7A1C24] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          Read page
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </div>

                      {/* Webpage Viewport with Smooth Glide & Reveal */}
                      <div className="relative aspect-[16/10.4] w-full overflow-hidden bg-[#121215]">
                        {!failedImages[project.id] && project.image ? (
                          <img
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            referrerPolicy="no-referrer"
                            onError={() => setFailedImages((prev) => ({ ...prev, [project.id]: true }))}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center">
                            <Layers className="w-8 h-8 mb-2 opacity-80" aria-hidden="true" />
                            <span className="font-display font-semibold">{project.title}</span>
                          </div>
                        )}

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </motion.div>

                    {/* Overlapping Bottom Pill Controls: Live Site + Separate Case Study Page */}
                    <div className="relative z-20 -mt-5 flex items-center justify-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF9F7] text-[#151413] text-xs sm:text-[13px] font-semibold shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                      >
                        <span>View live site</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#7A1C24]" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#151413]/92 hover:bg-[#151413] text-white text-xs font-medium shadow-[0_10px_24px_rgba(0,0,0,0.24)] border border-white/15 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Open case study</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </Tilt3D>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
