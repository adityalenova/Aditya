import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Headphones, Footprints, Film, Mic } from 'lucide-react';
import { OUT_OF_FRAME_ITEMS } from '../data/portfolioData';

function HobbyFallbackIcon({ id }: { id: string }) {
  const cls = 'w-8 h-8 text-[var(--accent)]';
  if (id === 'oof-sneakers') return <Footprints className={cls} aria-hidden="true" />;
  if (id === 'oof-music') return <Headphones className={cls} aria-hidden="true" />;
  if (id === 'oof-video') return <Film className={cls} aria-hidden="true" />;
  return <Mic className={cls} aria-hidden="true" />;
}

export function OutOfFrameSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="out-of-frame"
      className="py-16 sm:py-24 border-t border-[var(--hairline)] bg-[var(--surface)] scroll-mt-20 transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16"
        >
          <h2 className="font-display text-[2.45rem] sm:text-[3.5rem] font-bold tracking-[-0.035em] leading-none text-[var(--primary)]">
            Out of Frame
          </h2>
          <p className="text-sm sm:text-[16px] text-[var(--secondary)] font-medium tracking-tight">
            Sneaker collector <span className="mx-1.5 text-[var(--accent)]">|</span> Music listener{' '}
            <span className="mx-1.5 text-[var(--accent)]">|</span> Video editing &amp; creator craft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {OUT_OF_FRAME_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-[24px] bg-[var(--surface-raised)] hover:bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)]/45 p-5 flex flex-col justify-between transition-all duration-200 shadow-[0_10px_28px_rgba(43,27,21,0.04)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.34)] hover:shadow-[0_22px_45px_rgba(43,27,21,0.1)]"
            >
              {/* Archival warm paper cutout well keeps dark-ink sketches legible in dark mode */}
              <div className="aspect-[4/3] w-full rounded-[16px] bg-[#FAF8F5] border border-[var(--hairline)] overflow-hidden flex items-center justify-center p-3">
                {!failedImages[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <HobbyFallbackIcon id={item.id} />
                )}
              </div>

              <div className="pt-4 space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--accent)] font-semibold">
                  {item.kicker}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-[var(--secondary)]">
                  {item.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-14 sm:mt-16 pt-10 border-t border-[var(--hairline)] max-w-2xl mx-auto text-center space-y-2.5"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
            And I Quote
          </div>
          <p className="font-display text-[1.75rem] sm:text-[2.4rem] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--primary)] [text-wrap:balance]">
            <span className="text-[var(--accent)]">Design</span> something that{' '}
            <span className="text-[var(--accent)]">has a reason</span> for being.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
