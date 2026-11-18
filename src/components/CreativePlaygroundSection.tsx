import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Moon,
  Pause,
  Play,
  Shuffle,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import type { ThemeMode } from '../App';
import { PLAYGROUND_CARDS, PlaygroundCard } from '../data/portfolioData';

interface CreativePlaygroundSectionProps {
  onJumpToContact: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

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

function getHostname(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

export function CreativePlaygroundSection({
  onJumpToContact,
  theme,
  onToggleTheme,
}: CreativePlaygroundSectionProps) {
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<'All' | PlaygroundCard['category']>('All');
  const [shuffledOrder, setShuffledOrder] = useState<string[]>(() =>
    PLAYGROUND_CARDS.map((c) => c.id)
  );
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState(VIBE_TRACKS[0].id);
  const [lightboxCard, setLightboxCard] = useState<PlaygroundCard | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleCards = useMemo(() => {
    const ordered = shuffledOrder
      .map((id) => PLAYGROUND_CARDS.find((c) => c.id === id))
      .filter((c): c is PlaygroundCard => Boolean(c));
    const filtered =
      activeCategory === 'All'
        ? ordered
        : ordered.filter((c) => c.category === activeCategory);
    return filtered.length > 0 ? filtered : ordered;
  }, [activeCategory, shuffledOrder]);

  useEffect(() => {
    setSpotlightIndex((prev) => (visibleCards.length > 0 ? prev % visibleCards.length : 0));
  }, [visibleCards.length, activeCategory]);

  useEffect(() => {
    if (!autoPlay || lightboxCard || visibleCards.length <= 1) return;
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % visibleCards.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [autoPlay, lightboxCard, visibleCards.length]);

  const handleShuffle = () => {
    setShuffledOrder((prev) => {
      const copy = [...prev];
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
    setSpotlightIndex(0);
  };

  const stepSpotlight = (delta: number) => {
    if (visibleCards.length === 0) return;
    setSpotlightIndex((prev) => (prev + delta + visibleCards.length) % visibleCards.length);
  };

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

  const activeSpotlight = visibleCards[spotlightIndex] || visibleCards[0];
  const currentVibe = VIBE_TRACKS.find((v) => v.id === selectedVibe) || VIBE_TRACKS[0];

  const markFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="playground"
      className="relative py-16 sm:py-24 border-t border-[var(--hairline)] contribo-grid text-[var(--primary)] scroll-mt-20 overflow-hidden transition-colors duration-200"
    >
      <div className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Top Studio Bar + Synced Light/Dark Theme Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10">
          <div className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-semibold">
            Playground Studio · Spotlight Deck
          </div>

          <div
            className="inline-flex items-center p-1 rounded-full bg-[var(--surface)] border border-[var(--hairline)] shadow-xs"
            role="group"
            aria-label="Sync portfolio light and dark theme"
          >
            <button
              type="button"
              onClick={() => {
                if (isDark) onToggleTheme();
              }}
              aria-pressed={!isDark}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                !isDark
                  ? 'bg-[var(--primary)] text-[var(--base)] shadow-xs'
                  : 'text-[var(--secondary)] hover:text-[var(--primary)]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (!isDark) onToggleTheme();
              }}
              aria-pressed={isDark}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isDark
                  ? 'bg-[var(--accent)] text-[#160F0C] font-semibold shadow-xs'
                  : 'text-[var(--secondary)] hover:text-[var(--primary)]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-8 sm:pb-10">
          <h2 className="font-display text-[2.4rem] sm:text-[3.4rem] font-bold tracking-[-0.035em] leading-none text-[var(--primary)]">
            Creative <span className="text-[var(--accent)]">Playground</span>
          </h2>
          <p className="text-sm sm:text-[15.5px] text-[var(--secondary)] leading-relaxed">
            Browse shipped deployments in the interactive Spotlight Deck — filter tracks, shuffle the sequence, or click any frame to inspect up close.
          </p>
        </div>

        {/* Spotlight Deck Controls Toolbar */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] p-3 sm:p-4 mb-6 shadow-[0_10px_28px_rgba(43,27,21,0.04)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.3)] flex flex-wrap items-center justify-between gap-3">
          {/* Category Filters */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--surface-raised)] border border-[var(--hairline)]"
            role="tablist"
            aria-label="Filter playground deployments"
          >
            {(['All', 'AI Products', 'Flagships'] as const).map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] font-semibold shadow-xs'
                      : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Deck Controls: Auto-Cycle + Shuffle */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setAutoPlay((p) => !p)}
              aria-pressed={autoPlay}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                autoPlay
                  ? 'bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--accent)] font-semibold'
                  : 'bg-[var(--surface-raised)] hover:bg-[var(--accent-soft)] border-[var(--hairline)] text-[var(--primary)]'
              }`}
            >
              {autoPlay ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />}
              <span>{autoPlay ? 'Auto-Cycle: On' : 'Auto-Cycle'}</span>
            </button>

            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--surface-raised)] hover:bg-[var(--accent-soft)] border border-[var(--hairline)] hover:border-[var(--accent)]/40 text-xs font-medium text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Shuffle className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
              <span>Shuffle Deck</span>
            </button>
          </div>
        </div>

        {/* SPOTLIGHT DECK VIEWPORT */}
        {activeSpotlight && (
          <div className="space-y-5">
            <div className="rounded-[24px] bg-[var(--surface)] border border-[var(--hairline)] overflow-hidden shadow-[0_22px_56px_rgba(43,27,21,0.08)] dark:shadow-[0_26px_64px_rgba(0,0,0,0.48)]">
              {/* Spotlight Browser Chrome Header */}
              <div className="px-5 py-3.5 bg-[var(--surface-raised)] border-b border-[var(--hairline)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[var(--accent)] tabular-nums shrink-0">
                    {String(spotlightIndex + 1).padStart(2, '0')} /{' '}
                    {String(visibleCards.length).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-display font-bold text-[var(--primary)] truncate">
                    {activeSpotlight.title}
                  </span>
                  <span className="hidden md:inline text-xs font-mono text-[var(--muted)] truncate">
                    · {getHostname(activeSpotlight.url)}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => stepSpotlight(-1)}
                    aria-label="Previous spotlight project"
                    className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepSpotlight(1)}
                    aria-label="Next spotlight project"
                    className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxCard(activeSpotlight)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] text-xs font-medium text-[var(--primary)] cursor-pointer whitespace-nowrap shrink-0 transition-colors"
                  >
                    <Expand className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span>Expand</span>
                  </button>
                  <a
                    href={activeSpotlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-[#160F0C] text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Main Spotlight Image Canvas */}
              <div
                onClick={() => setLightboxCard(activeSpotlight)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxCard(activeSpotlight);
                  }
                }}
                aria-label={`Inspect ${activeSpotlight.title} fullscreen`}
                className="relative aspect-[19/10] w-full bg-[#120D0B] overflow-hidden cursor-pointer group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpotlight.id}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    {!failedImages[activeSpotlight.id] ? (
                      <img
                        src={activeSpotlight.image}
                        alt={activeSpotlight.title}
                        referrerPolicy="no-referrer"
                        onError={() => markFailed(activeSpotlight.id)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-sm">
                        {activeSpotlight.title}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-5 py-4 flex items-end justify-between gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="text-white">
                    <div className="font-display font-bold text-base">{activeSpotlight.title}</div>
                    <div className="text-xs text-white/80">{activeSpotlight.subtitle}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--primary)] border border-[var(--hairline)] text-xs font-semibold shadow-md">
                    <Expand className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span>Inspect Fullscreen</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector Rail */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {visibleCards.map((card, idx) => {
                const isSelected = idx === spotlightIndex;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setSpotlightIndex(idx)}
                    className={`group rounded-xl overflow-hidden bg-[var(--surface)] border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/30 shadow-sm -translate-y-0.5'
                        : 'border-[var(--hairline)] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[19/10] w-full overflow-hidden bg-[#120D0B]">
                      {!failedImages[card.id] ? (
                        <img
                          src={card.image}
                          alt={card.title}
                          referrerPolicy="no-referrer"
                          onError={() => markFailed(card.id)}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-white/75 p-1">
                          {card.title}
                        </div>
                      )}
                    </div>
                    <div className="px-2 py-1.5 text-[11px] font-medium text-[var(--primary)] truncate">
                      {card.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Fluted Ribbed Philosophy Launcher */}
        <div className="mt-10 sm:mt-14 fluted-contribo rounded-[28px] p-3 sm:p-4 border border-[var(--hairline)]">
          <div className="rounded-[22px] bg-[var(--surface)] border border-[var(--hairline)] p-6 sm:p-9 shadow-[0_14px_34px_rgba(43,27,21,0.06)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3.5 flex-1">
                <div className="font-display text-lg sm:text-2xl font-bold tracking-tight text-[var(--primary)]">
                  NO MAP. JUST VIBES.{' '}
                  <span className="text-[var(--accent)]">LET&rsquo;S SHIP.</span>
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
                            ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] font-semibold shadow-xs'
                            : 'bg-[var(--surface-raised)] text-[var(--secondary)] border border-[var(--hairline)] hover:text-[var(--primary)]'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        <span>{track.label}</span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm max-w-xl text-[var(--secondary)] leading-relaxed">
                  {currentVibe.note}
                </p>
              </div>

              <button
                type="button"
                onClick={onJumpToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white dark:hover:text-[#160F0C] text-sm font-semibold transition-colors cursor-pointer self-start md:self-center whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contribo Lightbox Modal */}
      <AnimatePresence>
        {lightboxCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxCard(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[920px] rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 bg-[var(--surface-raised)] border-b border-[var(--hairline)] flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-display font-bold text-[var(--primary)] truncate">
                    {lightboxCard.title}
                  </div>
                  <div className="text-xs text-[var(--secondary)] truncate">
                    {lightboxCard.subtitle}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous screenshot"
                    className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next screenshot"
                    className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href={lightboxCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-[#160F0C] text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>Visit URL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setLightboxCard(null)}
                    aria-label="Close screenshot preview"
                    className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-[#120D0B]">
                <img
                  src={lightboxCard.image}
                  alt={lightboxCard.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
