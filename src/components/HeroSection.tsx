import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Award, CircuitBoard, Sparkles } from 'lucide-react';
import { HERO_AVATAR_URL, HERO_PROOF_STATS, PROFILE_LINKS } from '../data/portfolioData';
import { TechStackDock } from './TechStackIcons';
import { Tilt3D } from './Tilt3D';

interface HeroSectionProps {
  onJumpToAIBuilds: () => void;
  onJumpToExperience: () => void;
}

export function HeroSection({ onJumpToAIBuilds, onJumpToExperience }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleStatScroll = (index: number) => {
    if (index === 0) onJumpToAIBuilds();
    else if (index === 1) document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    else if (index === 2) document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 bg-white text-[#151413] overflow-x-clip">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Animated Editorial Intro + Builder Stack */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                type="button"
                onClick={onJumpToAIBuilds}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F7] border border-[#EAE7E1] hover:border-[#7A1C24] shadow-[0_2px_10px_rgba(20,20,19,0.05)] text-xs sm:text-[13.5px] text-[#57534E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7A1C24]" aria-hidden="true" />
                <strong className="font-bold text-[#151413] tracking-tight">Building AI</strong>
              </motion.button>
            </motion.div>

            {/* Staggered Primary Headline with Animated Burgundy Underline */}
            <h1 className="font-display text-[2.65rem] sm:text-[3.45rem] lg:text-[3.9rem] xl:text-[4.25rem] font-bold tracking-[-0.04em] leading-[1.06] text-[#151413] [text-wrap:balance]">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                I&rsquo;m Aditya, an
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                engineer who{' '}
                <span className="relative inline-block text-[#7A1C24]">
                  ships.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 180 18"
                    className="absolute -bottom-1.5 left-0 w-full h-3.5 text-[#7A1C24] overflow-visible"
                    fill="none"
                  >
                    <motion.path
                      d="M3 12.5 C 48 4.5, 128 3.5, 177 10.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0.3 }}
                      animate={{ pathLength: 1, opacity: 0.85 }}
                      transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                </span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] sm:text-[17.5px] leading-[1.68] text-[#57534E] max-w-[540px]"
            >
              An ECE undergrad &amp; solo builder from Hyderabad, turning complex AI workflows and hardware ideas into{' '}
              <button
                type="button"
                onClick={onJumpToAIBuilds}
                className="font-semibold text-[#7A1C24] hover:text-[#5C131A] underline decoration-[#7A1C24]/35 underline-offset-4 cursor-pointer transition-colors"
              >
                live products.
              </button>{' '}
              It&rsquo;s how I prototype fast, verify real outputs, and ship with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 space-y-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  onClick={onJumpToAIBuilds}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-sm font-medium transition-colors cursor-pointer shadow-[0_10px_24px_rgba(21,20,19,0.16)] whitespace-nowrap shrink-0"
                >
                  <span>Explore AI Builds</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={onJumpToExperience}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E6E3DD] text-[#151413] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Experience &amp; Certs</span>
                </motion.button>
              </div>

              <div className="pt-1">
                <TechStackDock />
              </div>
            </motion.div>
          </div>

          {/* Right Large Animated Background-Free Cutout with Cat on Shoulder */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative"
          >
            <Tilt3D maxTilt={7} scaleOnHover={1.02} glare={false} className="w-full max-w-[540px]">
              <div className="relative flex flex-col items-center justify-end pt-2 pb-2 select-none">
                <motion.button
                  type="button"
                  onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                  animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06 }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD6] shadow-[0_10px_24px_rgba(21,20,19,0.08)] text-[11px] font-semibold text-[#151413] absolute bottom-20 right-0 z-20 cursor-pointer whitespace-nowrap"
                >
                  <Award className="w-3.5 h-3.5 text-[#7A1C24]" aria-hidden="true" />
                  <span>1st · Agentic Arena</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={onJumpToAIBuilds}
                  animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                  whileHover={{ scale: 1.06 }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7A1C24] text-white shadow-[0_12px_26px_rgba(122,28,36,0.24)] text-[11px] font-semibold absolute bottom-7 left-2 z-20 cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" aria-hidden="true" />
                  <span>10+ Live Apps</span>
                </motion.button>

                {/* Looping Animated Character Rig (GIF-like continuous motion, zero background) */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -10, 0],
                          scaleY: [1, 1.016, 1],
                          scaleX: [1, 0.994, 1],
                          rotate: [-0.8, 0.8, -0.8],
                        }
                  }
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -12 }}
                  style={{ transformOrigin: 'bottom center' }}
                  className="relative z-10 w-full flex justify-center cursor-pointer"
                >
                  {!imgFailed ? (
                    <img
                      src={HERO_AVATAR_URL}
                      alt={`${PROFILE_LINKS.name} with a kitten perched on his shoulder`}
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] h-auto max-h-[520px] object-contain mix-blend-multiply drop-shadow-[0_16px_26px_rgba(21,20,19,0.1)]"
                    />
                  ) : (
                    <div className="w-72 h-72 flex flex-col items-center justify-center text-[#151413]">
                      <CircuitBoard className="w-14 h-14 mb-3 text-[#7A1C24]" aria-hidden="true" />
                      <span className="font-display text-sm font-semibold">{PROFILE_LINKS.name}</span>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  aria-hidden="true"
                  animate={shouldReduceMotion ? undefined : { scale: [1, 0.88, 1], opacity: [0.85, 0.55, 0.85] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-60 h-3 rounded-full bg-[#151413]/12 blur-md -mt-2"
                />
              </div>
            </Tilt3D>
          </motion.div>
        </div>

        {/* Bottom 4-Column Interactive Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 pt-8 border-t border-[#ECEAE4] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {HERO_PROOF_STATS.map((stat, idx) => {
            const isExternal = idx === 3;
            const inner = (
              <>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#151413] group-hover:text-[#7A1C24] transition-colors tabular-nums">
                    {stat.value}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6C2BC] group-hover:text-[#7A1C24] opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
                </div>
                <div className="text-xs sm:text-sm leading-snug text-[#625E59] mt-1">{stat.label}</div>
              </>
            );

            if (isExternal) {
              return (
                <a
                  key={stat.label}
                  href={PROFILE_LINKS.githubPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-left p-3.5 -m-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors cursor-pointer block"
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
                className="group text-left p-3.5 -m-2 rounded-2xl hover:bg-[#FAF9F7] transition-colors cursor-pointer"
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
