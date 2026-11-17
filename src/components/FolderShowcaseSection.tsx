import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FolderOpen, Layers } from 'lucide-react';
import {
  CaseStudyProject,
  EXTRA_CASE_STUDIES,
  FOLDER_CAPABILITIES,
  FOLDER_CARDS,
  SELECTED_WORK,
} from '../data/portfolioData';

interface FolderShowcaseSectionProps {
  onSelectCaseStudy: (project: CaseStudyProject) => void;
}

export function FolderShowcaseSection({ onSelectCaseStudy }: FolderShowcaseSectionProps) {
  const [folderOpen, setFolderOpen] = useState(false);
  const [focusedCardId, setFocusedCardId] = useState<string>(FOLDER_CARDS[0].id);

  const openCardStudy = (caseStudyId: string) => {
    const found =
      SELECTED_WORK.find((p) => p.id === caseStudyId) || EXTRA_CASE_STUDIES[caseStudyId];
    if (found) onSelectCaseStudy(found);
  };

  const activeCard = FOLDER_CARDS.find((c) => c.id === focusedCardId) || FOLDER_CARDS[0];
  const activeStudy =
    SELECTED_WORK.find((p) => p.id === activeCard.caseStudyId) ||
    EXTRA_CASE_STUDIES[activeCard.caseStudyId];

  return (
    <section className="py-16 sm:py-24 border-t border-[#EFECE6] bg-white overflow-x-clip">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Title + Interactive Project Index */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#7A1C24]">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Engineering Vault</span>
          </div>

          <h2 className="font-display text-[2.3rem] sm:text-[3.4rem] font-bold tracking-[-0.035em] leading-[1.05] text-[#151413] [text-wrap:balance]">
            <span className="text-[#7A1C24]">Delivering</span> Impactful
            <br />
            Solutions.
          </h2>

          {/* Interactive Selector Tabs to Fan & Focus Specific Shipped Products */}
          <div className="pt-2 flex justify-center">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-full bg-[#FAF9F7] border border-[#E6E2DA]"
              role="tablist"
              aria-label="Inspect folder projects"
            >
              {FOLDER_CARDS.map((card, i) => {
                const isSelected = focusedCardId === card.id;
                return (
                  <button
                    key={card.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setFocusedCardId(card.id);
                      setFolderOpen(true);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#7A1C24] text-white shadow-xs'
                        : 'text-[#625E59] hover:text-[#151413]'
                    }`}
                  >
                    <span className="font-mono opacity-75 mr-1.5">0{i + 1}</span>
                    {card.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive 3D Hinged Folder Stage */}
        <div
          className="relative max-w-[900px] mx-auto pt-16 sm:pt-24"
          style={{ perspective: '1300px' }}
          onMouseEnter={() => setFolderOpen(true)}
          onMouseLeave={() => setFolderOpen(false)}
        >
          {/* Authentic Folder Tab Notch on Top-Left */}
          <div className="inline-flex items-center gap-2 ml-6 px-5 py-2 rounded-t-[16px] bg-[#ECE8DF] border border-b-0 border-[#DCD6CA] text-[11px] font-mono tracking-wider uppercase text-[#57534E]">
            <FolderOpen className="w-3.5 h-3.5 text-[#7A1C24]" aria-hidden="true" />
            <span>Shipped Archive · {FOLDER_CARDS.length} Live Systems</span>
          </div>

          <div className="relative rounded-[28px] rounded-tl-[10px] bg-gradient-to-b from-[#EDE9E0] to-[#E5E0D5] border border-[#DBD5C9] shadow-[0_32px_75px_rgba(21,20,19,0.1)] pt-8 px-4 sm:px-8 pb-4">
            {/* Fanned Layered Cards Popping Out Cleanly from Inside the Folder */}
            <div className="relative h-[165px] sm:h-[220px] flex items-end justify-center">
              {FOLDER_CARDS.map((card, idx) => {
                const count = FOLDER_CARDS.length;
                const mid = (count - 1) / 2;
                const stepOffset = idx - mid;
                const xPercent = stepOffset * 32;
                const rotateDeg = stepOffset * 3.8;
                const isFocused = focusedCardId === card.id;
                const baseLift = folderOpen ? -48 - (idx % 2) * 12 : -8;
                const finalLift = folderOpen && isFocused ? baseLift - 22 : baseLift;

                return (
                  <motion.button
                    key={card.id}
                    type="button"
                    onMouseEnter={() => setFocusedCardId(card.id)}
                    onClick={() => openCardStudy(card.caseStudyId)}
                    animate={{
                      y: finalLift,
                      rotate: folderOpen ? rotateDeg * 1.15 : rotateDeg,
                      scale: folderOpen && isFocused ? 1.07 : 1,
                      x: `${xPercent}%`,
                    }}
                    whileHover={{ y: finalLift - 12, scale: 1.09, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    style={{ zIndex: isFocused ? 35 : 10 + idx }}
                    className={`absolute bottom-0 w-[142px] sm:w-[218px] aspect-[19/10] rounded-2xl overflow-hidden bg-[#121215] shadow-[0_22px_48px_rgba(20,20,19,0.22)] cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1C24] border-[3px] ${
                      isFocused ? 'border-[#7A1C24] ring-2 ring-[#7A1C24]/25' : 'border-white'
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/92 via-black/60 to-transparent p-3 text-left transition-opacity ${
                        isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white flex items-center justify-between">
                        <span>{card.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#F8B4B8]" aria-hidden="true" />
                      </div>
                      <div className="text-[10.5px] text-white/80">{card.subtitle}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* 3D Tilting Frosted Folder Front Flap with Active Project Readout */}
            <motion.div
              onClick={() => setFolderOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFolderOpen((prev) => !prev);
                }
              }}
              animate={{
                rotateX: folderOpen ? -12 : 0,
                y: folderOpen ? 4 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              style={{ transformOrigin: 'bottom center' }}
              aria-label="Toggle folder showcase cards"
              className="relative z-40 -mx-4 sm:-mx-8 -mb-4 rounded-[26px] bg-white/92 backdrop-blur-xl border-t border-white shadow-[0_-14px_36px_rgba(21,20,19,0.08)] p-7 sm:p-10 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-3">
                  <p className="font-display text-[1.45rem] sm:text-[1.85rem] font-semibold tracking-[-0.025em] leading-[1.2] text-[#151413]">
                    Full-Stack AI Systems for builders who refuse to settle for{' '}
                    <span className="font-hand text-[2.2rem] sm:text-[2.6rem] font-bold text-[#7A1C24] inline-block -rotate-2 ml-1">
                      Average.
                    </span>
                  </p>

                  {activeStudy && (
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#EFECE6]">
                      <div className="text-xs text-[#57534E]">
                        <span className="font-semibold text-[#151413]">{activeCard.title}</span>
                        <span className="mx-1.5 text-[#C6C2BC]" aria-hidden="true">·</span>
                        <span>{activeStudy.metrics[0]?.value} {activeStudy.metrics[0]?.label}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openCardStudy(activeCard.caseStudyId);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1C24] hover:underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Inspect {activeCard.title} architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="md:col-span-5 flex flex-wrap gap-2 justify-start md:justify-end">
                  {FOLDER_CAPABILITIES.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF9F7] border border-[#E5E0D6] text-[11px] font-medium tracking-[0.05em] text-[#3F3C38]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
