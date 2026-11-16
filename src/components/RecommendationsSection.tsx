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
    <section className="py-16 sm:py-24 border-t border-[#EFECE6] bg-white overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.12em] uppercase text-[#7A1C24]">
            Collaborators &amp; Teammates
          </div>
          <h2 className="font-display text-[2.1rem] sm:text-[2.95rem] font-bold tracking-[-0.03em] text-[#151413] [text-wrap:balance]">
            What it&rsquo;s like to work with me?
          </h2>

          {/* Interactive Global Key-Highlights Switcher */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#FAF9F7] border border-[#E7E5E0]">
              <button
                type="button"
                onClick={() => toggleAll(false)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  !allHighlighted ? 'bg-white text-[#151413] shadow-xs' : 'text-[#625E59] hover:text-[#151413]'
                }`}
              >
                Full Quotes
              </button>
              <button
                type="button"
                onClick={() => toggleAll(true)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  allHighlighted ? 'bg-[#7A1C24] text-white shadow-xs' : 'text-[#625E59] hover:text-[#151413]'
                }`}
              >
                Key Highlights
              </button>
            </div>
          </div>
        </div>

        {/* 3 Interactive 3D Testimonial Cards with Soft Burgundy-Sand Radial Glow */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] rounded-full bg-radial from-[#7A1C24]/10 via-[#EFE5DC]/50 to-transparent blur-3xl pointer-events-none"
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
                    <article className="w-full rounded-[24px] bg-white border border-[#E7E5E0] hover:border-[#7A1C24]/30 transition-colors shadow-[0_18px_45px_rgba(20,20,19,0.06)] p-6 sm:p-7 space-y-5">
                      <div className="flex items-center justify-between gap-2">
                        <Quote className="w-6 h-6 text-[#7A1C24]/40 rotate-180" aria-hidden="true" />

                        {/* Per-Card Full Quote vs Highlights Toggle */}
                        <div
                          className="inline-flex items-center gap-0.5 p-1 rounded-lg bg-[#FAF9F7] border border-[#E6E3DD]"
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
                                ? 'bg-white text-[#151413] shadow-xs'
                                : 'text-[#78716C] hover:text-[#151413]'
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
                                ? 'bg-[#7A1C24] text-white shadow-xs'
                                : 'text-[#78716C] hover:text-[#151413]'
                            }`}
                          >
                            <ListChecks className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <p className="text-[14.5px] sm:text-[15px] leading-[1.68] text-[#292524]">
                        {rec.segments.map((seg, sIdx) => {
                          if (!isHighlighted) {
                            return <span key={sIdx}>{seg.text}</span>;
                          }
                          if (seg.highlight) {
                            return (
                              <mark
                                key={sIdx}
                                className="bg-[#7A1C24]/10 text-[#7A1C24] border-b border-[#7A1C24]/35 px-1 py-0.5 rounded-[3px] font-medium"
                              >
                                {seg.text}
                              </mark>
                            );
                          }
                          return (
                            <span key={sIdx} className="text-[#A8A29E] transition-colors">
                              {seg.text}
                            </span>
                          );
                        })}
                      </p>

                      <div className="pt-2 text-xs text-[#78716C] border-t border-[#F0EDE6]">
                        {rec.contextLabel}
                      </div>
                    </article>
                  </Tilt3D>

                  {/* Author Lockup with Real Human Portrait Avatar */}
                  <div className="inline-flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#FAF9F7] border border-[#E7E5E0] shadow-xs ml-2">
                    {showAvatar ? (
                      <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#E2DDD4] bg-[#EFECE6] shrink-0">
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
                      <div className="text-sm font-semibold text-[#151413] leading-tight">
                        {rec.author}
                      </div>
                      <div className="text-xs text-[#78716C] mt-0.5">
                        {rec.role} · {rec.org}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom 3-Trait Summary Strip */}
        <div className="mt-14 pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:text-base font-medium text-[#292524]">
          <span>Fast Execution</span>
          <span className="text-[#7A1C24]" aria-hidden="true">·</span>
          <span>Full-Stack Ownership</span>
          <span className="text-[#7A1C24]" aria-hidden="true">·</span>
          <span>Hardware-to-AI Curiosity</span>
        </div>
      </div>
    </section>
  );
}
