import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { CaseStudyProject, SELECTED_WORK } from '../data/portfolioData';
import { RemixMusicPreview } from './InteractiveProjectPreviews';
import { GitHubMark } from './TechStackIcons';

interface CaseStudyPageProps {
  project: CaseStudyProject;
  onBack: () => void;
  onNavigateCaseStudy: (project: CaseStudyProject) => void;
}

function getDisplayDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

export function CaseStudyPage({ project, onBack, onNavigateCaseStudy }: CaseStudyPageProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [showInteractiveRemix, setShowInteractiveRemix] = useState(false);

  useEffect(() => {
    setImgFailed(false);
    setShowInteractiveRemix(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.id]);

  const currentIndex = SELECTED_WORK.findIndex((p) => p.id === project.id);
  const nextProject =
    SELECTED_WORK[(currentIndex >= 0 ? currentIndex + 1 : 0) % SELECTED_WORK.length];

  const isRemix = project.id === 'remix-selected' || project.slug === 'remix-music-ai';

  return (
    <div className="min-h-screen bg-white text-[#151413]">
      {/* Dedicated Sticky Case Study Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EFECE6]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E5E0D8] text-xs sm:text-sm font-medium text-[#151413] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-[#7A1C24]" aria-hidden="true" />
            <span>Back to portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs text-[#625E59] truncate">
            <span className="font-semibold text-[#7A1C24]">{project.shortTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E5E0D8] text-xs font-medium text-[#151413] transition-colors whitespace-nowrap shrink-0"
            >
              <GitHubMark className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Visit live site</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main className="py-12 sm:py-18">
        <article className="max-w-[1040px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-14">
          {/* Case Study Page Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[#7A1C24] font-semibold">
              <span>{project.shortTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{project.year}</span>
            </div>

            <h1 className="font-display text-[2.2rem] sm:text-[3.4rem] font-bold tracking-[-0.035em] leading-[1.08] text-[#151413] [text-wrap:balance]">
              {project.headline}
            </h1>

            <p className="text-base sm:text-[18.5px] leading-[1.68] text-[#57534E]">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-sm font-medium transition-colors shadow-[0_10px_24px_rgba(21,20,19,0.14)]"
              >
                <span>Open live deployment</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E5E0D8] text-[#151413] text-sm font-medium transition-colors"
              >
                <GitHubMark className="w-4 h-4" />
                <span>Inspect repository</span>
              </a>

              {isRemix && (
                <button
                  type="button"
                  onClick={() => setShowInteractiveRemix((v) => !v)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#9F1239]/10 hover:bg-[#9F1239]/15 border border-[#9F1239]/25 text-[#9F1239] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{showInteractiveRemix ? 'Show live site capture' : 'Try interactive audio deck'}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Animated Browser Showcase Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[28px] bg-gradient-to-br ${project.accentBackdrop} p-5 sm:p-8 shadow-[0_30px_75px_rgba(21,20,19,0.16)]`}
          >
            {isRemix && showInteractiveRemix ? (
              <RemixMusicPreview />
            ) : (
              <div className="rounded-[18px] overflow-hidden bg-white border border-black/10 shadow-2xl">
                <div className="bg-[#F6F5F2] px-4 py-3 border-b border-[#E8E4DC] flex items-center gap-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="max-w-xs mx-auto px-3 py-1 rounded-full bg-white border border-[#E5E2DC] text-[11px] font-mono text-[#57534E] text-center truncate">
                      {getDisplayDomain(project.liveUrl)}
                    </div>
                  </div>
                </div>

                {!imgFailed && project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-full aspect-[16/10] object-cover object-top bg-[#121215]"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] flex flex-col items-center justify-center bg-[#FAF9F7] text-[#151413] p-8 text-center">
                    <Layers className="w-10 h-10 mb-3 text-[#7A1C24]" aria-hidden="true" />
                    <span className="font-display text-lg font-semibold">{project.title}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* 4-Column Architectural Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-6 border-y border-[#EFECE6]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#151413] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-[13px] text-[#736E68]">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Problem / Architecture / Outcome Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <h2 className="font-display text-lg font-bold text-[#151413]">01. The Problem</h2>
                <p className="text-[15.5px] leading-[1.7] text-[#57534E]">{project.problem}</p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#EFECE6]">
                <h2 className="font-display text-lg font-bold text-[#151413]">03. Outcome</h2>
                <p className="text-[15.5px] leading-[1.7] text-[#57534E]">{project.outcome}</p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#EFECE6]">
                <div className="text-xs font-mono uppercase tracking-[0.12em] text-[#7A1C24] font-semibold">
                  Core Stack
                </div>
                <p className="text-sm text-[#4A4641] leading-relaxed">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display text-lg font-bold text-[#151413]">
                02. System Architecture &amp; Key Decisions
              </h2>
              <ul className="space-y-4">
                {project.architecture.map((step, i) => (
                  <li
                    key={step}
                    className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#EAE5DC] flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#7A1C24] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-[#736E68] uppercase tracking-wider">
                        Step 0{i + 1}
                      </div>
                      <p className="text-[15px] leading-[1.65] text-[#292524]">{step}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Case Study Cross-Page Navigation Card */}
          {nextProject && nextProject.id !== project.id && (
            <div className="pt-8 border-t border-[#EFECE6]">
              <button
                type="button"
                onClick={() => onNavigateCaseStudy(nextProject)}
                className="w-full text-left p-6 sm:p-8 rounded-[26px] bg-[#FAF9F7] hover:bg-[#F3EFE8] border border-[#E6E0D6] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
              >
                <div className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#7A1C24] font-semibold">
                    Next Case Study · {nextProject.category}
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#151413] group-hover:text-[#7A1C24] transition-colors">
                    {nextProject.title} — {nextProject.headline}
                  </div>
                </div>

                <span className="w-12 h-12 rounded-full bg-[#151413] group-hover:bg-[#7A1C24] text-white flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </button>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
