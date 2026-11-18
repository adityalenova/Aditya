import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import type { ThemeMode } from '../App';

export type NavSection = 'work' | 'about' | 'experience' | 'playground' | 'contact';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenResume: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: NavSection; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'playground', label: 'Playground' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({
  activeSection,
  onNavigate,
  onOpenResume,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 32, restDelta: 0.001 });
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 bg-[var(--base)]/90 backdrop-blur-xl border-b border-[var(--hairline)] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Clean Single-Line Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-lg sm:text-[19px] font-bold tracking-tight text-[var(--primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
        >
          Aditya Duggirala
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[var(--surface-raised)] border border-[var(--hairline)]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActivePill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 bg-[var(--surface)] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.08)] border border-[var(--hairline)]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle Switcher + Primary Resume CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            className="inline-flex items-center p-1 rounded-full bg-[var(--surface-raised)] border border-[var(--hairline)] shrink-0"
            role="group"
            aria-label="Color theme switcher"
          >
            <button
              type="button"
              onClick={() => {
                if (isDark) onToggleTheme();
              }}
              aria-label="Switch to light theme"
              aria-pressed={!isDark}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                !isDark
                  ? 'bg-[var(--surface)] text-[var(--accent)] shadow-xs border border-[var(--hairline)]'
                  : 'text-[var(--muted)] hover:text-[var(--primary)]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (!isDark) onToggleTheme();
              }}
              aria-label="Switch to dark theme"
              aria-pressed={isDark}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                isDark
                  ? 'bg-[var(--surface)] text-[var(--accent)] shadow-xs border border-[var(--hairline)]'
                  : 'text-[var(--muted)] hover:text-[var(--primary)]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors shadow-[0_6px_18px_rgba(43,27,21,0.14)] cursor-pointer"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Compact Mobile Nav Strip */}
      <nav
        aria-label="Mobile section links"
        className="flex lg:hidden items-center justify-center gap-2 px-3 pb-2.5 overflow-x-auto text-xs font-medium text-[var(--secondary)]"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`px-3 py-1 rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === item.id
                ? 'bg-[var(--accent)] text-white font-semibold'
                : 'hover:text-[var(--primary)]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Smooth Copper Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-[2px] w-full bg-[var(--accent)]"
      />
    </header>
  );
}
