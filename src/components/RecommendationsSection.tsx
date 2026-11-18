import React, { useState } from 'react';
import { AlignLeft, ListChecks, Quote } from 'lucide-react';
import { RECOMMENDATIONS } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export function RecommendationsSection() {
  const [highlightMode, setHighlightMode] = useState<Record<string, boolean>>({
    'rec-cyrus': false,
    'rec-agent-arena': true,
    'rec-civic': false,
  });
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  const allHighlighted = Object.values(highlightMode).every(Boolean);

  const toggleHighlight = (id: string, value: boolean) => {
    setHighlightMode((prev) => ({ ...prev, [id]: value }));
  };

  const toggleAll = (value: boolean) => {
    setHighlightMode({
      'rec-cyrus': value,
      'rec-agent-arena': value,
      'rec-civic': value,
    });
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--hairline)] bg-[var(--surface-raised)]/45 overflow-hidden transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
            Collaborators &amp; Teammates
          </div>
          <h2 className="font-display text-[2.1rem] sm:text-[2.95rem] font-bold tracking-[-0.03em] text-[var(--primary)] [text-wrap:balance]">
            What it&rsquo;s like to work with me?
          </h2>

          <div className="pt-1">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[var(--surface)] border border-[var(--hairline)]">
              <button
                type="button"
                onClick={() => toggleAll(false)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  !allHighlighted
                    ? 'bg-[var(--primary)] text-[var(--base)] shadow-xs'
                    : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                }`}
              >
                Full Quotes
              </button>
              <button
                type="button"
                onClick={() => toggleAll(true)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  allHighlighted
                    ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] font-semibold shadow-xs'
                    : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                }`}
              >
                Key Highlights
              </button>
            </div>
          </div>
        </div>

        {/* 3 Interactive 3D Testimonial Cards with Soft Copper Radial Glow */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] rounded-full bg-radial from-[var(--accent)]/14 via-[var(--accent)]/5 to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8 items-center">
            {RECOMMENDATIONS.map((rec, idx) => {
              const isHighlighted = !!highlightMode[rec.id];
              const isCenter = idx === 1;
              const showAvatar = rec.avatar && !failedAvatars[rec.id];

              return (
                <div
                  key={rec.id}
                  className={`flex flex-col items-start gap-3 ${isCenter ? 'lg:-mt-6' : ''}`}
                >
                  <Tilt3D maxTilt={4.5} scaleOnHover={1.01} className="w-full">
                    <article className="w-full rounded-[24px] bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)]/40 transition-colors shadow-[0_18px_45px_rgba(43,27,21,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-7 space-y-5">
                      <div className="flex items-center justify-between gap-2">
                        <Quote className="w-6 h-6 text-[var(--accent)]/45 rotate-180" aria-hidden="true" />

                        <div
                          className="inline-flex items-center gap-0.5 p-1 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)]"
                          role="group"
                          aria-label={`Toggle quote highlights for ${rec.author}`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleHighlight(rec.id, false)}
                            title="Full quote"
                            aria-label="Show full quote"
                            aria-pressed={!isHighlighted}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                              !isHighlighted
                                ? 'bg-[var(--surface)] text-[var(--primary)] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--primary)]'
                            }`}
                          >
                            <AlignLeft className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleHighlight(rec.id, true)}
                            title="Highlight key takeaways"
                            aria-label="Highlight key takeaways"
                            aria-pressed={isHighlighted}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                              isHighlighted
                                ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] shadow-xs'
                                : 'text-[var(--muted)] hover:text-[var(--primary)]'
                            }`}
                          >
                            <ListChecks className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <p className="text-[14.5px] sm:text-[15px] leading-[1.68] text-[var(--primary)]">
                        {rec.segments.map((seg, sIdx) => {
                          if (!isHighlighted) {
                            return <span key={sIdx}>{seg.text}</span>;
                          }
                          if (seg.highlight) {
                            return (
                              <mark
                                key={sIdx}
                                className="bg-[var(--accent-soft)] text-[var(--accent)] border-b border-[var(--accent)]/40 px-1 py-0.5 rounded-[3px] font-medium"
                              >
                                {seg.text}
                              </mark>
                            );
                          }
                          return (
                            <span key={sIdx} className="text-[var(--muted)] transition-colors">
                              {seg.text}
                            </span>
                          );
                        })}
                      </p>

                      <div className="pt-2 text-xs text-[var(--secondary)] border-t border-[var(--hairline)]">
                        {rec.contextLabel}
                      </div>
                    </article>
                  </Tilt3D>

                  <div className="inline-flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] shadow-xs ml-2">
                    {showAvatar ? (
                      <div className="w-11 h-11 rounded-xl overflow-hidden border border-[var(--hairline)] bg-[var(--surface-raised)] shrink-0">
                        <img
                          src={rec.avatar}
                          alt={rec.author}
                          referrerPolicy="no-referrer"
                          onError={() => setFailedAvatars((prev) => ({ ...prev, [rec.id]: true }))}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <span
                        className={`w-11 h-11 rounded-xl ${rec.accentBg} text-white font-display font-bold text-sm flex items-center justify-center shrink-0`}
                      >
                        {rec.initials}
                      </span>
                    )}
                    <div className="pr-2">
                      <div className="text-sm font-semibold text-[var(--primary)] leading-tight">
                        {rec.author}
                      </div>
                      <div className="text-xs text-[var(--secondary)] mt-0.5">
                        {rec.role} · {rec.org}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:text-base font-medium text-[var(--primary)]">
          <span>Fast Execution</span>
          <span className="text-[var(--accent)]" aria-hidden="true">·</span>
          <span>Full-Stack Ownership</span>
          <span className="text-[var(--accent)]" aria-hidden="true">·</span>
          <span>Hardware-to-AI Curiosity</span>
        </div>
      </div>
    </section>
  );
}
