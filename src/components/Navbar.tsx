import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { PROFILE_LINKS } from '../data/portfolioData';
import { GitHubMark } from './TechStackIcons';

export type NavSection = 'work' | 'about' | 'experience' | 'playground' | 'contact';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS: { id: NavSection; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'playground', label: 'Playground' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate, onOpenResume }: NavbarProps) {
  const [collabActive, setCollabActive] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 32, restDelta: 0.001 });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EFECE6]/80">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setCollabActive((prev) => !prev)}
          className="flex items-center gap-3 shrink-0 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151413] rounded-full pr-2 text-left"
          aria-pressed={collabActive}
          title="Toggle collaboration status"
        >
          <span
            className={`w-10 h-6 rounded-full p-0.5 transition-colors flex items-center shrink-0 ${
              collabActive ? 'bg-[#4D8B55] justify-end' : 'bg-[#D6D3CD] justify-start'
            }`}
            aria-hidden="true"
          >
            <span className="w-5 h-5 rounded-full bg-white shadow-xs transition-transform" />
          </span>
          <span className="text-[12.5px] sm:text-[13.5px] leading-tight text-[#151413] font-medium max-w-[175px]">
            {collabActive ? 'Open for any collaborations & offers' : 'Building AI'}
          </span>
        </button>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#F5F4F1] border border-[#EAE7E1]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive ? 'text-[#151413]' : 'text-[#625E59] hover:text-[#151413]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActivePill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 bg-white rounded-full shadow-[0_1px_4px_rgba(20,20,19,0.08)] border border-[#E6E3DD]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-[10px] border border-[#EAE7E1] bg-white hover:border-[#7A1C24] hover:text-[#7A1C24] flex items-center justify-center text-[#151413] transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE_LINKS.githubPrimary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-[10px] border border-[#EAE7E1] bg-white hover:border-[#7A1C24] hover:text-[#7A1C24] flex items-center justify-center text-[#151413] transition-colors"
            >
              <GitHubMark className="w-[18px] h-[18px]" />
            </a>
            <a
              href={PROFILE_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter profile"
              className="w-10 h-10 rounded-[10px] border border-[#EAE7E1] bg-white hover:border-[#7A1C24] hover:text-[#7A1C24] flex items-center justify-center text-[#151413] transition-colors font-display text-sm font-bold"
            >
              𝕏
            </a>
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#111111] hover:bg-[#7A1C24] text-white text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors shadow-[0_6px_16px_rgba(17,17,17,0.14)] cursor-pointer"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile section links"
        className="flex lg:hidden items-center justify-center gap-2 px-3 pb-2.5 overflow-x-auto text-xs font-medium text-[#625E59]"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`px-3 py-1 rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === item.id
                ? 'bg-[#7A1C24] text-white font-semibold'
                : 'hover:text-[#151413]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Smooth Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-[2px] w-full bg-[#7A1C24]"
      />
    </header>
  );
}
