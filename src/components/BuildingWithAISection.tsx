import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2, GraduationCap, HeartPulse, ShieldAlert, Zap } from 'lucide-react';
import { AI_BUILD_PROJECTS, AIBuildProject, CaseStudyProject, EXTRA_CASE_STUDIES, SELECTED_WORK } from '../data/portfolioData';
import { ContributionMatrix } from './ContributionMatrix';
import { StaticPreview } from './InteractiveProjectPreviews';
import { GitHubMark } from './TechStackIcons';
import { Tilt3D } from './Tilt3D';

interface BuildingWithAISectionProps {
  onSelectCaseStudy: (project: CaseStudyProject) => void;
}

function AppBadgeIcon({
  logoUrl,
  logoBg,
  type,
  bg,
  title,
}: {
  logoUrl?: string;
  logoBg?: string;
  type: AIBuildProject['iconType'];
  bg: string;
  title: string;
}) {
  const [logoError, setLogoError] = useState(false);
  const iconClass = 'w-5 h-5 text-white';

  if (logoUrl && !logoError) {
    return (
      <div
        className={`w-12 h-12 rounded-[14px] ${logoBg || 'bg-[#111216]'} border border-black/10 p-1.5 flex items-center justify-center shadow-[0_8px_20px_rgba(20,20,19,0.14)] shrink-0 overflow-hidden`}
      >
        <img
          src={logoUrl}
          alt={`${title} official logo`}
          referrerPolicy="no-referrer"
          onError={() => setLogoError(true)}
          className="w-full h-full object-contain rounded-[8px]"
        />
      </div>
    );
  }

  return (
    <div className={`w-12 h-12 rounded-[14px] ${bg} flex items-center justify-center shadow-[0_6px_16px_rgba(20,20,19,0.12)] shrink-0`}>
      {type === 'health' && <HeartPulse className={iconClass} aria-hidden="true" />}
      {type === 'shield' && <ShieldAlert className={iconClass} aria-hidden="true" />}
      {type === 'bolt' && <Zap className={iconClass} aria-hidden="true" />}
      {type === 'learn' && <GraduationCap className={iconClass} aria-hidden="true" />}
    </div>
  );
}

export function BuildingWithAISection({ onSelectCaseStudy }: BuildingWithAISectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [interactiveStatic, setInteractiveStatic] = useState(false);

  return (
    <section id="ai-builds" className="py-16 sm:py-24 border-t border-[#EFECE6] bg-white scroll-mt-20">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mb-14 sm:mb-18">
          <div className="space-y-2">
            <h2 className="font-display text-[2.2rem] sm:text-[2.85rem] font-bold tracking-[-0.03em] text-[#151413] leading-none">
              Building with AI
            </h2>
            <p className="text-[15px] text-[#625E59]">
              Applied AI products, clean mobility tools, and interactive creative workspaces.
            </p>
          </div>
          <ContributionMatrix />
        </div>

        <div className="space-y-16 sm:space-y-24">
          {AI_BUILD_PROJECTS.map((item, idx) => {
            const linkedCaseStudy = item.caseStudyId
              ? SELECTED_WORK.find((p) => p.id === item.caseStudyId) || EXTRA_CASE_STUDIES[item.caseStudyId]
              : undefined;

            const showInteractive = item.id === 'static' && interactiveStatic;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Tilt3D
                    maxTilt={4.5}
                    scaleOnHover={1.012}
                    glare={!showInteractive}
                  >
                    <div className="rounded-[22px] overflow-hidden bg-[#0B0D12] shadow-[0_24px_54px_rgba(15,23,42,0.13)] border border-[#E7E5E0]">
                      {item.id === 'static' && interactiveStatic ? (
                        <StaticPreview />
                      ) : !failedImages[item.id] && item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          referrerPolicy="no-referrer"
                          onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                          className="w-full aspect-[19/10] object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full aspect-[19/10] flex flex-col items-center justify-center text-white p-8">
                          <AppBadgeIcon
                            logoUrl={item.logoUrl}
                            logoBg={item.logoBg}
                            type={item.iconType}
                            bg={item.iconBg}
                            title={item.title}
                          />
                          <span className="font-display text-lg font-semibold mt-4">{item.title}</span>
                        </div>
                      )}
                    </div>
                  </Tilt3D>
                </div>

                <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3.5">
                    <AppBadgeIcon
                      logoUrl={item.logoUrl}
                      logoBg={item.logoBg}
                      type={item.iconType}
                      bg={item.iconBg}
                      title={item.title}
                    />
                    <div className="text-xs font-medium text-[#736E68]">
                      <span>{item.eventLabel}</span>
                      <span className="mx-1.5" aria-hidden="true">·</span>
                      <span>{item.tagline}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-[1.75rem] sm:text-[2.1rem] font-bold tracking-[-0.025em] leading-[1.15] text-[#151413] [text-wrap:balance]">
                    {item.title}
                  </h3>

                  <p className="text-[15.5px] sm:text-[16.5px] leading-[1.68] text-[#57534E]">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-1">
                    {item.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2.5 text-[14.5px] sm:text-[15px] text-[#3F3C38]">
                        <CheckCircle2 className="w-4 h-4 text-[#A8A29E] shrink-0 mt-1" aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Launch app</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#57534E] hover:text-[#151413] transition-colors whitespace-nowrap shrink-0"
                    >
                      <GitHubMark className="w-4 h-4" />
                      <span>Source</span>
                    </a>

                    {linkedCaseStudy && (
                      <button
                        type="button"
                        onClick={() => onSelectCaseStudy(linkedCaseStudy)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#7A1C24] hover:text-[#5E131A] underline underline-offset-4 decoration-[#7A1C24]/30 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Architecture page</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}

                    {item.id === 'static' && (
                      <button
                        type="button"
                        onClick={() => setInteractiveStatic((prev) => !prev)}
                        className="text-sm font-medium text-[#16A34A] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {interactiveStatic ? 'Show official shot' : 'Try interactive planner'}
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
