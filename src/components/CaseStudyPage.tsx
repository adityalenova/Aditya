import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Layers, Lock, Moon, Sun } from 'lucide-react';
import type { ThemeMode } from '../App';
import { CaseStudyProject, EXTRA_CASE_STUDIES, SELECTED_WORK } from '../data/portfolioData';
import { StaticPreview } from './InteractiveProjectPreviews';
import { GitHubMark } from './TechStackIcons';

interface CaseStudyPageProps {
  project: CaseStudyProject;
  onBack: () => void;
  onNavigateCaseStudy: (project: CaseStudyProject) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

function getDisplayDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

const ALL_CASE_STUDIES: CaseStudyProject[] = [
  ...SELECTED_WORK,
  ...Object.values(EXTRA_CASE_STUDIES),
];

export function CaseStudyPage({
  project,
  onBack,
  onNavigateCaseStudy,
  theme,
  onToggleTheme,
}: CaseStudyPageProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [secondaryImgFailed, setSecondaryImgFailed] = useState(false);
  const [showInteractiveStatic, setShowInteractiveStatic] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setImgFailed(false);
    setSecondaryImgFailed(false);
    setShowInteractiveStatic(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.id]);

  const currentIndex = ALL_CASE_STUDIES.findIndex((p) => p.id === project.id);
  const nextProject =
    ALL_CASE_STUDIES[(currentIndex >= 0 ? currentIndex + 1 : 0) % ALL_CASE_STUDIES.length];

  const isStatic =
    project.id === 'static-selected' ||
    project.id === 'static-case' ||
    project.slug === 'static-ev-navigator';
  const domain = getDisplayDomain(project.liveUrl);

  return (
    <div className="min-h-screen bg-[var(--base)] text-[var(--primary)] transition-colors duration-200">
      {/* Dedicated Sticky Case Study Top Bar */}
      <header className="sticky top-0 z-40 bg-[var(--base)]/90 backdrop-blur-xl border-b border-[var(--hairline)]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] text-xs sm:text-sm font-medium text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <span>Back to portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs text-[var(--secondary)] truncate">
            <span className="font-semibold text-[var(--accent)]">{project.shortTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="w-9 h-9 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] flex items-center justify-center text-[var(--accent)] cursor-pointer transition-colors shrink-0"
            >
              {isDark ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
            </button>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] text-xs font-medium text-[var(--primary)] transition-colors whitespace-nowrap shrink-0"
            >
              <GitHubMark className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white dark:hover:text-[#160F0C] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 shadow-[0_6px_18px_rgba(43,27,21,0.14)]"
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
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-semibold">
              <span>{project.shortTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{project.year}</span>
            </div>

            <h1 className="font-display text-[2.2rem] sm:text-[3.4rem] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--primary)] [text-wrap:balance]">
              {project.headline}
            </h1>

            <p className="text-base sm:text-[18.5px] leading-[1.68] text-[var(--secondary)]">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white dark:hover:text-[#160F0C] text-sm font-semibold transition-colors shadow-[0_12px_28px_rgba(43,27,21,0.16)]"
              >
                <span>Open live deployment</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--primary)] text-sm font-medium transition-colors"
              >
                <GitHubMark className="w-4 h-4" />
                <span>Inspect repository</span>
              </a>

              {isStatic && (
                <button
                  type="button"
                  onClick={() => setShowInteractiveStatic((v) => !v)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent-soft)] hover:bg-[var(--accent)]/20 border border-[var(--accent)]/35 text-[var(--accent)] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>{showInteractiveStatic ? 'Show live site capture' : 'Try interactive EV route planner'}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Animated Browser Showcase Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[28px] bg-gradient-to-br ${project.accentBackdrop} p-5 sm:p-8 shadow-[0_24px_56px_rgba(43,27,21,0.16)] dark:shadow-[0_28px_64px_rgba(0,0,0,0.48)]`}
          >
            {isStatic && showInteractiveStatic ? (
              <StaticPreview />
            ) : (
              <div className="rounded-[18px] overflow-hidden bg-[var(--surface)] border border-[var(--hairline)] shadow-2xl">
                <div className="bg-[var(--surface-raised)] px-4 py-3 border-b border-[var(--hairline)] flex items-center gap-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="max-w-xs mx-auto px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--hairline)] flex items-center justify-center gap-1.5 text-[11px] font-mono text-[var(--secondary)] truncate shadow-2xs">
                      <Lock className="w-2.5 h-2.5 text-[#5E9E6D] shrink-0" aria-hidden="true" />
                      <span className="truncate">{domain}</span>
                    </div>
                  </div>
                </div>

                {!imgFailed && project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-full aspect-[19/10] object-cover object-top bg-[#120D0B]"
                  />
                ) : (
                  <div className="w-full aspect-[19/10] flex flex-col items-center justify-center bg-[#120D0B] text-white p-8 text-center">
                    <Layers className="w-10 h-10 mb-3 text-white/75" aria-hidden="true" />
                    <span className="font-display text-lg font-semibold">{project.title}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* 4-Column Architectural Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-6 border-y border-[var(--hairline)]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[var(--primary)] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-[13px] font-medium text-[var(--accent)]">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Problem / Architecture / Outcome Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <h2 className="font-display text-lg font-bold text-[var(--primary)]">01. The Problem</h2>
                <p className="text-[15.5px] leading-[1.7] text-[var(--secondary)]">{project.problem}</p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[var(--hairline)]">
                <h2 className="font-display text-lg font-bold text-[var(--primary)]">03. Outcome</h2>
                <p className="text-[15.5px] leading-[1.7] text-[var(--secondary)]">{project.outcome}</p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[var(--hairline)]">
                <div className="text-xs font-mono uppercase tracking-[0.12em] text-[var(--accent)] font-semibold">
                  Core Stack
                </div>
                <p className="text-sm text-[var(--secondary)] leading-relaxed">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display text-lg font-bold text-[var(--primary)]">
                02. System Architecture &amp; Key Decisions
              </h2>
              <ul className="space-y-4">
                {project.architecture.map((step, i) => (
                  <li
                    key={step}
                    className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">
                        Step 0{i + 1}
                      </div>
                      <p className="text-[15px] leading-[1.65] text-[var(--secondary)]">{step}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Live Interface Capture */}
          {project.secondaryImage && !secondaryImgFailed && (
            <section className="space-y-4 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-bold text-[var(--primary)]">
                  Inside the Live Interface
                </h2>
                {project.secondaryImageCaption && (
                  <span className="text-xs text-[var(--secondary)]">{project.secondaryImageCaption}</span>
                )}
              </div>

              <div className="rounded-[22px] bg-[var(--surface-raised)] border border-[var(--hairline)] p-4 sm:p-6 shadow-[0_14px_34px_rgba(43,27,21,0.06)]">
                <div className="rounded-[14px] overflow-hidden bg-[var(--surface)] border border-[var(--hairline)] shadow-md">
                  <div className="bg-[var(--surface-raised)] px-4 py-2.5 border-b border-[var(--hairline)] flex items-center gap-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="max-w-xs mx-auto px-3 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--hairline)] text-[11px] font-mono text-[var(--secondary)] text-center truncate">
                        {domain}/issues
                      </div>
                    </div>
                  </div>
                  <img
                    src={project.secondaryImage}
                    alt={project.secondaryImageCaption || `${project.title} secondary view`}
                    referrerPolicy="no-referrer"
                    onError={() => setSecondaryImgFailed(true)}
                    className="w-full aspect-[16/10] object-cover object-top bg-[#120D0B]"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Next Case Study Cross-Page Navigation Card */}
          {nextProject && nextProject.id !== project.id && (
            <div className="pt-8 border-t border-[var(--hairline)]">
              <button
                type="button"
                onClick={() => onNavigateCaseStudy(nextProject)}
                className="w-full text-left p-6 sm:p-8 rounded-[26px] bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] hover:border-[var(--accent)]/45 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer group"
              >
                <div className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-semibold">
                    Next Case Study · {nextProject.category}
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                    {nextProject.title} — {nextProject.headline}
                  </div>
                </div>

                <span className="w-12 h-12 rounded-full bg-[var(--primary)] group-hover:bg-[var(--accent)] text-[var(--base)] group-hover:text-white dark:group-hover:text-[#160F0C] flex items-center justify-center shrink-0 transition-colors">
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
