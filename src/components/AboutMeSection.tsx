import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { ABOUT_COPY, HERO_FULLBODY_URL, PROFILE_LINKS } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export function AboutMeSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-t border-[var(--hairline)] bg-[var(--surface)] scroll-mt-20 transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Full-Body AI Character Polaroid (Archival Paper Well Keeps Dark Ink Crisp in Dark Mode) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Tilt3D maxTilt={7} scaleOnHover={1.015} className="w-full max-w-[380px]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full -rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 bg-[var(--surface-raised)] p-3.5 pb-6 rounded-[20px] border border-[var(--hairline)] shadow-[0_24px_60px_rgba(22,15,12,0.12)]"
              >
                <div className="relative aspect-[4/5.1] w-full overflow-hidden rounded-[12px] bg-[#FAF8F5] border border-[#E6DFD5] flex items-end justify-center">
                  {!imgFailed ? (
                    <img
                      src={HERO_FULLBODY_URL}
                      alt={PROFILE_LINKS.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-contain object-bottom p-2 mix-blend-multiply drop-shadow-[0_12px_20px_rgba(43,27,21,0.12)]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#5A4D46]">
                      <Compass className="w-10 h-10" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <div className="pt-4 flex items-center justify-between px-1 text-xs text-[var(--secondary)] font-mono tabular-nums">
                  <span>VNRVJIET · ECE</span>
                  <span>2026 — 2030</span>
                </div>
              </motion.div>
            </Tilt3D>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[var(--accent)]">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{ABOUT_COPY.kicker}</span>
            </div>

            <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] font-bold tracking-[-0.035em] leading-[1.06] text-[var(--primary)] [text-wrap:balance]">
              {ABOUT_COPY.title}
            </h2>

            <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.72] text-[var(--secondary)] max-w-[620px]">
              {ABOUT_COPY.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <span className="font-hand text-[42px] sm:text-[48px] font-bold leading-none text-[var(--accent)] select-none">
                {ABOUT_COPY.signature}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
