import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Moon,
  Pause,
  Play,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import {
  FOOTER_MEADOW_URL,
  HERO_AVATAR_URL,
  HERO_CHARACTER_URL,
  HERO_FULLBODY_URL,
  OUT_OF_FRAME_ITEMS,
  PLAYGROUND_CARDS,
  PlaygroundCard,
} from '../data/portfolioData';

interface CreativePlaygroundSectionProps {
  onJumpToContact: () => void;
}

const ORBITAL_BUBBLES = [
  {
    id: 'orb-1',
    image: HERO_AVATAR_URL,
    alt: 'Aditya with kitten portrait',
    posClass: 'hidden md:block top-[11%] left-[6%] lg:left-[12%] w-20 h-20 lg:w-24 lg:h-24',
    delay: 0,
  },
  {
    id: 'orb-2',
    image: OUT_OF_FRAME_ITEMS[0].image,
    alt: 'Sneaker collection craft',
    posClass: 'hidden lg:block top-[5%] left-[27%] w-20 h-20',
    delay: 0.4,
  },
  {
    id: 'orb-3',
    image: HERO_CHARACTER_URL,
    alt: 'Aditya builder portrait',
    posClass: 'hidden md:block top-[3%] left-1/2 -translate-x-1/2 w-20 h-20',
    delay: 0.8,
  },
  {
    id: 'orb-4',
    image: OUT_OF_FRAME_ITEMS[1].image,
    alt: 'Audio & music studio',
    posClass: 'hidden lg:block top-[6%] right-[27%] w-20 h-20',
    delay: 1.1,
  },
  {
    id: 'orb-5',
    image: OUT_OF_FRAME_ITEMS[3].image,
    alt: 'Creator studio setup',
    posClass: 'hidden md:block top-[12%] right-[6%] lg:right-[12%] w-20 h-20 lg:w-24 lg:h-24',
    delay: 0.6,
  },
  {
    id: 'orb-6',
    image: OUT_OF_FRAME_ITEMS[2].image,
    alt: 'Video editing workstation',
    posClass: 'hidden xl:block top-[42%] left-[2.5%] w-20 h-20',
    delay: 1.4,
  },
  {
    id: 'orb-7',
    image: HERO_FULLBODY_URL,
    alt: 'Aditya full-length sketch',
    posClass: 'hidden xl:block top-[40%] right-[2.5%] w-20 h-20',
    delay: 0.9,
  },
  {
    id: 'orb-8',
    image: FOOTER_MEADOW_URL,
    alt: 'Studio desk illustration',
    posClass: 'hidden xl:block bottom-[26%] right-[3.5%] w-16 h-16',
    delay: 1.7,
  },
];

const VIBE_TRACKS = [
  {
    id: 'agents',
    label: 'AI Agents',
    note: 'Multi-model routing across Claude, Gemini & OpenAI with deterministic verification.',
  },
  {
    id: 'saas',
    label: 'Full-Stack SaaS',
    note: 'React, TypeScript, Supabase & Neon Postgres systems engineered for live production.',
  },
  {
    id: 'ux',
    label: 'Product Design',
    note: 'High-craft interfaces, tactile micro-interactions, and editorial typography.',
  },
];

export function CreativePlaygroundSection({ onJumpToContact }: CreativePlaygroundSectionProps) {
  const [isNightStudio, setIsNightStudio] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [fastSpeed, setFastSpeed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | PlaygroundCard['category']>('All');
  const [selectedVibe, setSelectedVibe] = useState(VIBE_TRACKS[0].id);
  const [lightboxCard, setLightboxCard] = useState<PlaygroundCard | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleCards = useMemo(() => {
    const filtered =
      activeCategory === 'All'
        ? PLAYGROUND_CARDS
        : PLAYGROUND_CARDS.filter((c) => c.category === activeCategory);
    return filtered.length > 0 ? filtered : PLAYGROUND_CARDS;
  }, [activeCategory]);

  // Build 3 staggered rows with enough items to loop seamlessly across wide viewports
  const rows = useMemo(() => {
    const base = visibleCards;
    const row1 = [...base, ...base];
    const rotated2 = [...base.slice(3), ...base.slice(0, 3)];
    const row2 = [...rotated2, ...rotated2];
    const rotated3 = [...base.slice(5), ...base.slice(0, 5)];
    const row3 = [...rotated3, ...rotated3];
    return [row1, row2, row3];
  }, [visibleCards]);

  const stepLightbox = (delta: number) => {
    if (!lightboxCard || visibleCards.length === 0) return;
    const idx = visibleCards.findIndex((c) => c.id === lightboxCard.id);
    if (idx < 0) return;
    const nextIdx = (idx + delta + visibleCards.length) % visibleCards.length;
    setLightboxCard(visibleCards[nextIdx]);
  };

  useEffect(() => {
    if (!lightboxCard) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxCard(null);
      else if (e.key === 'ArrowRight') stepLightbox(1);
      else if (e.key === 'ArrowLeft') stepLightbox(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxCard, visibleCards]);

  const currentVibe = VIBE_TRACKS.find((v) => v.id === selectedVibe) || VIBE_TRACKS[0];

  const rowDurations = fastSpeed ? ['22s', '26s', '20s'] : ['36s', '42s', '34s'];

  return (
    <section
      id="playground"
      className={`relative py-20 sm:py-28 border-t scroll-mt-20 overflow-hidden transition-colors duration-300 ${
        isNightStudio
          ? 'playground-grid-night border-[#13296B] text-white'
          : 'playground-grid-day border-[#E7E2D8] text-[#151413]'
      }`}
    >
      {/* Floating Orbital Portrait & Studio Circles (Inspired by Showcase Arc Layout) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {ORBITAL_BUBBLES.map((bubble) => (
          <motion.div
            key={bubble.id}
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5.5 + bubble.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bubble.delay,
            }}
            className={`absolute rounded-full overflow-hidden border-2 shadow-[0_14px_34px_rgba(0,0,0,0.32)] ${
              isNightStudio ? 'border-white/25 bg-[#091B57]' : 'border-white bg-white'
            } ${bubble.posClass}`}
          >
            <img
              src={bubble.image}
              alt={bubble.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Top Atmosphere Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-10 sm:pb-14">
          <div
            className={`flex items-center gap-2 text-xs tracking-[0.14em] ${
              isNightStudio ? 'text-white/80 font-medium' : 'text-[#625E59]'
            }`}
          >
            <Moon className={`w-4 h-4 ${isNightStudio ? 'text-[#D9F959]' : 'text-[#8C8780]'}`} aria-hidden="true" />
            <span>THE NIGHT IS MY STUDIO</span>
          </div>

          <div
            className={`inline-flex items-center p-1 rounded-full border backdrop-blur-sm ${
              isNightStudio ? 'bg-[#040E34]/80 border-white/15' : 'bg-white/90 border-[#DEDAD2]'
            }`}
            role="group"
            aria-label="Playground studio atmosphere switcher"
          >
            <button
              type="button"
              onClick={() => setIsNightStudio(true)}
              aria-pressed={isNightStudio}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-[0.08em] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                isNightStudio ? 'bg-[#D9F959] text-[#05123D] shadow-sm' : 'text-[#625E59] hover:text-[#151413]'
              }`}
            >
              NIGHT
            </button>
            <button
              type="button"
              onClick={() => setIsNightStudio(false)}
              aria-pressed={!isNightStudio}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-[0.08em] transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                !isNightStudio ? 'bg-[#151413] text-white shadow-sm' : 'text-white/75 hover:text-white'
              }`}
            >
              DAY
            </button>
          </div>

          <div
            className={`flex items-center gap-2 text-xs tracking-[0.14em] ${
              !isNightStudio ? 'text-[#151413] font-medium' : 'text-white/60'
            }`}
          >
            <Sun className={`w-4 h-4 ${!isNightStudio ? 'text-[#D97706]' : 'text-[#FBBF24]'}`} aria-hidden="true" />
            <span>DAYLIGHT BRINGS IDEAS TO REALITY</span>
          </div>
        </div>

        {/* Centerpiece Header Right Above the Moving Marquee Container */}
        <div className="text-center max-w-2xl mx-auto pt-4 sm:pt-8 pb-7 sm:pb-9 space-y-2.5">
          <h2
            className={`font-display text-[2.45rem] sm:text-[3.5rem] font-bold tracking-[-0.035em] leading-none ${
              isNightStudio ? 'text-[#D9F959]' : 'text-[#7A1C24]'
            }`}
          >
            Creative Playground
          </h2>
          <p className={`text-sm sm:text-[15.5px] ${isNightStudio ? 'text-[#C7D4FF]' : 'text-[#57534E]'}`}>
            Look at what&rsquo;s shipping live — moving templates straight from my deployments. Hover to pause or click any frame.
          </p>
        </div>

        {/* Translucent Rounded Marquee Box with Soft Left/Right Edge Fades (Matching Uploaded Reference) */}
        <div
          className={`max-w-[960px] mx-auto rounded-[24px] border p-4 sm:p-6 transition-colors ${
            isNightStudio
              ? 'bg-[#040D2E]/82 border-white/12 shadow-[0_28px_80px_rgba(2,7,26,0.62)] backdrop-blur-md'
              : 'bg-white/88 border-[#E2DDD4] shadow-[0_24px_64px_rgba(21,20,19,0.1)] backdrop-blur-md'
          }`}
        >
          <div className="space-y-4 sm:space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            {rows.map((rowCards, rowIndex) => {
              const isReverse = rowIndex === 1;
              return (
                <div key={rowIndex} className="marquee-row overflow-hidden py-1">
                  <div
                    className={`flex w-max gap-4 sm:gap-5 ${
                      isReverse ? 'animate-marquee-right' : 'animate-marquee-left'
                    } ${isPaused ? 'marquee-paused' : ''}`}
                    style={{ '--marquee-duration': rowDurations[rowIndex] } as React.CSSProperties}
                  >
                    {rowCards.map((card, cardIdx) => (
                      <button
                        key={`${card.id}-r${rowIndex}-${cardIdx}`}
                        type="button"
                        onClick={() => setLightboxCard(card)}
                        className={`group relative w-[200px] sm:w-[238px] shrink-0 rounded-2xl overflow-hidden border text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] cursor-pointer ${
                          isNightStudio
                            ? 'bg-[#0A1847] border-white/14 hover:border-[#D9F959]/75 shadow-[0_12px_28px_rgba(0,0,0,0.35)]'
                            : 'bg-white border-[#E4E0D8] hover:border-[#7A1C24]/60 shadow-[0_10px_24px_rgba(21,20,19,0.08)]'
                        }`}
                      >
                        <div className="aspect-[19/10] w-full overflow-hidden bg-[#080F29]">
                          {!failedImages[card.id] ? (
                            <img
                              src={card.image}
                              alt={card.title}
                              referrerPolicy="no-referrer"
                              onError={() => setFailedImages((prev) => ({ ...prev, [card.id]: true }))}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-white/75 p-3 text-center">
                              {card.title}
                            </div>
                          )}
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div
                              className={`text-[11.5px] font-semibold truncate ${
                                isNightStudio ? 'text-white' : 'text-[#151413]'
                              }`}
                            >
                              {card.title}
                            </div>
                            <div
                              className={`text-[10px] truncate ${
                                isNightStudio ? 'text-[#9EB2F0]' : 'text-[#625E59]'
                              }`}
                            >
                              {card.subtitle}
                            </div>
                          </div>
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              isNightStudio ? 'text-[#D9F959]' : 'text-[#7A1C24]'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Marquee Controls Bar */}
        <div className="max-w-[960px] mx-auto mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter moving templates">
            {(['All', 'AI Products', 'Flagships'] as const).map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? isNightStudio
                        ? 'bg-[#D9F959] text-[#05123D] font-semibold'
                        : 'bg-[#7A1C24] text-white'
                      : isNightStudio
                        ? 'bg-[#040E34]/75 border border-white/12 text-[#C7D4FF] hover:text-white'
                        : 'bg-white border border-[#DEDAD2] text-[#57534E] hover:text-[#151413]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isNightStudio
                  ? 'bg-[#040E34]/85 border-white/15 text-white hover:border-[#D9F959]/60'
                  : 'bg-white border-[#DEDAD2] text-[#151413] hover:bg-[#FAF9F7]'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#D9F959]" aria-hidden="true" /> : <Pause className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{isPaused ? 'Resume flow' : 'Pause flow'}</span>
            </button>

            <button
              type="button"
              onClick={() => setFastSpeed((f) => !f)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isNightStudio
                  ? 'bg-[#040E34]/85 border-white/15 text-white hover:border-[#D9F959]/60'
                  : 'bg-white border-[#DEDAD2] text-[#151413] hover:bg-[#FAF9F7]'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-[#D9F959]" aria-hidden="true" />
              <span>Speed: {fastSpeed ? 'Brisk' : 'Smooth'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Interactive Philosophy Card */}
        <div
          className={`max-w-[960px] mx-auto mt-10 sm:mt-14 rounded-[24px] border p-6 sm:p-9 transition-colors ${
            isNightStudio
              ? 'bg-[#040D2E]/88 border-white/12 text-white'
              : 'bg-white/95 border-[#E2DDD4] text-[#151413] shadow-[0_18px_48px_rgba(21,20,19,0.06)]'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="font-display text-lg sm:text-2xl font-bold tracking-tight">
                NO MAP. JUST VIBES.{' '}
                <span className={isNightStudio ? 'text-[#D9F959]' : 'text-[#7A1C24]'}>LET&rsquo;S SHIP.</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {VIBE_TRACKS.map((track) => {
                  const active = selectedVibe === track.id;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setSelectedVibe(track.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        active
                          ? isNightStudio
                            ? 'bg-[#D9F959] text-[#05123D] font-semibold'
                            : 'bg-[#7A1C24] text-white'
                          : isNightStudio
                            ? 'bg-white/8 text-[#C7D4FF] hover:bg-white/14'
                            : 'bg-[#FAF9F7] text-[#57534E] border border-[#E2DFD7] hover:text-[#151413]'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      <span>{track.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className={`text-xs sm:text-sm max-w-xl ${isNightStudio ? 'text-[#B4C3F5]' : 'text-[#57534E]'}`}>
                {currentVibe.note}
              </p>
            </div>

            <button
              type="button"
              onClick={onJumpToContact}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors cursor-pointer self-start md:self-center whitespace-nowrap shrink-0 ${
                isNightStudio
                  ? 'bg-[#D9F959] hover:bg-white text-[#05123D]'
                  : 'bg-[#151413] hover:bg-[#7A1C24] text-white'
              }`}
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* High-Res Template Lightbox Modal */}
      <AnimatePresence>
        {lightboxCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/82 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxCard(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[920px] rounded-2xl bg-[#0B1740] border border-white/15 overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-display font-semibold text-white truncate">{lightboxCard.title}</div>
                  <div className="text-xs text-[#B4C3F5] truncate">{lightboxCard.subtitle}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous screenshot"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next screenshot"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href={lightboxCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D9F959] text-[#05123D] text-xs font-semibold hover:bg-white whitespace-nowrap shrink-0"
                  >
                    <span>Visit URL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setLightboxCard(null)}
                    aria-label="Close screenshot preview"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <img
                src={lightboxCard.image}
                alt={lightboxCard.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain bg-[#040B24]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
