import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, CircuitBoard } from 'lucide-react';
import { HERO_AVATAR_URL, HERO_PROOF_STATS, PROFILE_LINKS } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

interface HeroSectionProps {
  onJumpToAIBuilds: () => void;
  onJumpToExperience: () => void;
}

interface OrgNode {
  id: string;
  name: string;
  angleDeg: number;
  ring: 'outer' | 'inner';
}

const ORBITING_ORGS: OrgNode[] = [
  { id: 'github', name: 'GitHub', angleDeg: 0, ring: 'outer' },
  { id: 'react', name: 'React', angleDeg: 60, ring: 'outer' },
  { id: 'typescript', name: 'TypeScript', angleDeg: 120, ring: 'outer' },
  { id: 'vercel', name: 'Vercel', angleDeg: 180, ring: 'outer' },
  { id: 'supabase', name: 'Supabase', angleDeg: 240, ring: 'outer' },
  { id: 'postgres', name: 'PostgreSQL', angleDeg: 300, ring: 'outer' },
  { id: 'anthropic', name: 'Anthropic', angleDeg: 35, ring: 'inner' },
  { id: 'gemini', name: 'Google AI', angleDeg: 125, ring: 'inner' },
  { id: 'openai', name: 'OpenAI', angleDeg: 215, ring: 'inner' },
  { id: 'linux', name: 'Open Source', angleDeg: 305, ring: 'inner' },
];

function OrgLogo({ id, className = 'w-4 h-4' }: { id: string; className?: string }) {
  switch (id) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill="#087EA4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.6" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path
            d="M7.2 11.2h5.2v1.4h-1.8V19H8.9v-6.4H7.2v-1.4Zm6.3 5.9c.5.4 1.2.7 2 .7.8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.4-1.1-1.3-.4-2.2-1-2.2-2.2 0-1.4 1.1-2.3 2.8-2.3.9 0 1.6.2 2.1.5l-.4 1.3c-.4-.2-1-.4-1.7-.4-.7 0-1.1.3-1.1.7 0 .5.4.7 1.4 1 1.4.5 2.2 1.1 2.2 2.3 0 1.4-1.1 2.4-3 2.4-1 0-1.9-.3-2.4-.6l.4-1.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 4 21 19.5H3L12 4Z" fill="currentColor" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path d="M13.3 21.2c-.5.6-1.5.2-1.5-.6V13h7.3c1.3 0 2 1.5 1.2 2.5l-7 5.7Z" fill="#3ECF8E" />
          <path d="M10.7 2.8c.5-.6 1.5-.2 1.5.6V11H4.9c-1.3 0-2-1.5-1.2-2.5l7-5.7Z" fill="#249361" />
        </svg>
      );
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="7" ry="3" stroke="#3B82F6" strokeWidth="1.8" />
          <path d="M5 6.5v5.5c0 1.66 3.13 3 7 3s7-1.34 7-3V6.5" stroke="#3B82F6" strokeWidth="1.8" />
          <path d="M5 12v5.5c0 1.66 3.13 3 7 3s7-1.34 7-3V12" stroke="#3B82F6" strokeWidth="1.8" />
        </svg>
      );
    case 'anthropic':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2.5v19M4.2 7l15.6 10M19.8 7L4.2 17M7.2 3.8l9.6 16.4M16.8 3.8L7.2 20.2M2.5 12h19"
            stroke="#D97757"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2.5C12 8.2 15.8 12 21.5 12C15.8 12 12 15.8 12 21.5C12 15.8 8.2 12 2.5 12C8.2 12 12 8.2 12 2.5Z"
            fill="#4F46E5"
          />
        </svg>
      );
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 2.2" />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'linux':
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="#C67848" strokeWidth="1.8" />
          <path d="M8.5 14.5c1.5-2 5.5-2 7 0M9.5 9.5h.01M14.5 9.5h.01" stroke="#C67848" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function HeroSection({ onJumpToAIBuilds, onJumpToExperience }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleStatScroll = (index: number) => {
    if (index === 0) onJumpToAIBuilds();
    else if (index === 2) document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
  };

  const outerOrgs = ORBITING_ORGS.filter((o) => o.ring === 'outer');
  const innerOrgs = ORBITING_ORGS.filter((o) => o.ring === 'inner');

  return (
    <section
      id="top"
      className="hero-radial relative pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 text-[var(--primary)] overflow-x-clip transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Executive Typography Matching Contribo Style */}
          <div className="lg:col-span-6 space-y-6 pt-2 lg:pt-4">
            <h1 className="font-display text-[2.75rem] sm:text-[3.65rem] lg:text-[4.15rem] xl:text-[4.45rem] font-extrabold tracking-[-0.035em] leading-[1.05] text-[var(--primary)] [text-wrap:balance]">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                I&rsquo;m Aditya, an
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                <span className="text-[var(--accent)]">Engineer</span> Who Ships.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] sm:text-[19px] leading-[1.6] text-[var(--secondary)] max-w-[520px]"
            >
              ECE undergraduate &amp; full-stack developer building{' '}
              <strong className="font-semibold text-[var(--primary)]">production AI systems</strong>{' '}
              and{' '}
              <strong className="font-semibold text-[var(--primary)]">open-source software</strong>{' '}
              from zero to live deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                type="button"
                onClick={onJumpToAIBuilds}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-[#160F0C] text-sm font-semibold transition-colors cursor-pointer shadow-[0_10px_24px_rgba(198,120,72,0.24)] whitespace-nowrap shrink-0"
              >
                <span>Explore AI Builds</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </motion.button>
              <motion.button
                type="button"
                onClick={onJumpToExperience}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--primary)] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Experience &amp; Certs</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted)]" aria-hidden="true" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Centerpiece: Aditya + Shoulder Kitten Surrounded by Moving Open-Source Orbits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative pt-2 lg:pt-3"
          >
            <div className="relative w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] lg:w-[448px] lg:h-[448px] flex items-center justify-center select-none">
              {/* Soft Copper Radial Halo */}
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full bg-radial from-[var(--accent)]/18 via-[var(--accent)]/5 to-transparent blur-2xl pointer-events-none"
              />

              {/* Outer Rotating Orbital Track */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-[var(--accent)]/30 pointer-events-none"
              >
                {outerOrgs.map((org) => (
                  <div
                    key={org.id}
                    style={{
                      transform: `rotate(${org.angleDeg}deg)`,
                    }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div
                      style={{
                        transform: `rotate(-${org.angleDeg}deg)`,
                      }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-auto"
                    >
                      <motion.div
                        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                        title={org.name}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] text-[var(--primary)] shadow-[0_8px_22px_rgba(43,27,21,0.12)] dark:shadow-[0_10px_26px_rgba(0,0,0,0.55)] flex items-center justify-center transition-colors cursor-default"
                      >
                        <OrgLogo id={org.id} className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Inner Counter-Rotating Orbital Track */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-10 sm:inset-12 rounded-full border border-[var(--hairline)] pointer-events-none"
              >
                {innerOrgs.map((org) => (
                  <div
                    key={org.id}
                    style={{
                      transform: `rotate(${org.angleDeg}deg)`,
                    }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div
                      style={{
                        transform: `rotate(-${org.angleDeg}deg)`,
                      }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-auto"
                    >
                      <motion.div
                        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
                        title={org.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--surface-raised)] border border-[var(--hairline)] hover:border-[var(--accent)] text-[var(--primary)] shadow-[0_6px_18px_rgba(43,27,21,0.1)] dark:shadow-[0_8px_22px_rgba(0,0,0,0.5)] flex items-center justify-center transition-colors cursor-default"
                      >
                        <OrgLogo id={org.id} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Center Medallion Portrait */}
              <Tilt3D maxTilt={6} scaleOnHover={1.02} glare={false} className="relative z-10">
                <div className="relative w-[192px] h-[192px] sm:w-[264px] sm:h-[264px] lg:w-[284px] lg:h-[284px] rounded-full bg-[#FAF8F5] border-2 border-[var(--hairline)] dark:border-[var(--accent)]/45 shadow-[0_24px_56px_rgba(43,27,21,0.14)] dark:shadow-[0_28px_68px_rgba(0,0,0,0.68)] overflow-hidden flex items-end justify-center pt-3">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -6, 0],
                            rotate: [-0.6, 0.6, -0.6],
                          }
                    }
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full h-full flex items-end justify-center"
                  >
                    {!imgFailed ? (
                      <img
                        src={HERO_AVATAR_URL}
                        alt={`${PROFILE_LINKS.name} with a kitten perched on his shoulder`}
                        referrerPolicy="no-referrer"
                        onError={() => setImgFailed(true)}
                        className="w-[92%] h-[95%] object-contain object-bottom mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#2B1B15]">
                        <CircuitBoard className="w-12 h-12 mb-2 text-[#C67848]" aria-hidden="true" />
                        <span className="font-display text-sm font-semibold">{PROFILE_LINKS.name}</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </Tilt3D>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4-Column Interactive Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 pt-7 border-t border-[var(--hairline)] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {HERO_PROOF_STATS.map((stat, idx) => {
            const externalHref =
              idx === 1 ? PROFILE_LINKS.linkedin : idx === 3 ? PROFILE_LINKS.githubPrimary : null;
            const inner = (
              <>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors tabular-nums">
                    {stat.value}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
                </div>
                <div className="text-xs sm:text-sm leading-snug text-[var(--secondary)] mt-1">{stat.label}</div>
              </>
            );

            if (externalHref) {
              return (
                <a
                  key={stat.label}
                  href={externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-left p-3.5 -m-2 rounded-2xl hover:bg-[var(--surface-raised)] transition-colors cursor-pointer block"
                >
                  {inner}
                </a>
              );
            }

            return (
              <button
                key={stat.label}
                type="button"
                onClick={() => handleStatScroll(idx)}
                className="group text-left p-3.5 -m-2 rounded-2xl hover:bg-[var(--surface-raised)] transition-colors cursor-pointer"
              >
                {inner}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
