import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Moon, Sun, X } from 'lucide-react';
import { PLAYGROUND_CARDS, PlaygroundCard } from '../data/portfolioData';

interface CreativePlaygroundSectionProps {
  onJumpToContact: () => void;
}

const CARD_POSITIONS = [
  'top-4 left-[4%] -rotate-6 hidden lg:block',
  'top-0 left-[22%] rotate-3 hidden md:block',
  'top-2 right-[22%] -rotate-3 hidden md:block',
  'top-6 right-[4%] rotate-6 hidden lg:block',
  'bottom-14 left-[2%] rotate-3 hidden lg:block',
  'bottom-2 left-[19%] -rotate-4 hidden sm:block',
  'bottom-0 right-[18%] rotate-3 hidden sm:block',
  'bottom-12 right-[3%] -rotate-6 hidden lg:block',
];

export function CreativePlaygroundSection({ onJumpToContact }: CreativePlaygroundSectionProps) {
  const [isNightStudio, setIsNightStudio] = useState(true);
  const [lightboxCard, setLightboxCard] = useState<PlaygroundCard | null>(null);

  return (
    <section
      id="playground"
      className={`py-16 sm:py-24 border-t scroll-mt-20 overflow-hidden transition-colors duration-300 ${
        isNightStudio
          ? 'border-[#242429] bg-[#0B0B0E] text-white'
          : 'border-[#EFECE6] bg-[#FAF7F2] text-[#151413]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-12 sm:pb-16">
          <div
            className={`flex items-center gap-2.5 text-xs tracking-[0.14em] transition-colors ${
              isNightStudio ? 'text-[#E5E2DC] font-medium' : 'text-[#8C8780]'
            }`}
          >
            <Moon className={`w-4 h-4 ${isNightStudio ? 'text-[#F59E0B]' : 'text-[#A8A29E]'}`} aria-hidden="true" />
            <span>THE NIGHT IS MY STUDIO</span>
          </div>

          <div
            className={`inline-flex items-center p-1 rounded-full border transition-colors ${
              isNightStudio ? 'bg-[#18181D] border-white/10' : 'bg-[#ECE9E2] border-[#DEDAD2]'
            }`}
            role="group"
            aria-label="Playground studio atmosphere switcher"
          >
            <button
              type="button"
              onClick={() => setIsNightStudio(true)}
              aria-pressed={isNightStudio}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-[0.08em] transition-all cursor-pointer ${
                isNightStudio
                  ? 'bg-white text-[#151413] shadow-sm'
                  : 'text-[#625E59] hover:text-[#151413]'
              }`}
            >
              NIGHT
            </button>
            <button
              type="button"
              onClick={() => setIsNightStudio(false)}
              aria-pressed={!isNightStudio}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-[0.08em] transition-all cursor-pointer ${
                !isNightStudio
                  ? 'bg-[#151413] text-white shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              DAY
            </button>
          </div>

          <div
            className={`flex items-center gap-2.5 text-xs tracking-[0.14em] transition-colors ${
              !isNightStudio ? 'text-[#151413] font-medium' : 'text-[#A1A1AA]'
            }`}
          >
            <Sun className={`w-4 h-4 ${!isNightStudio ? 'text-[#D97706]' : 'text-[#FBBF24]'}`} aria-hidden="true" />
            <span>DAYLIGHT BRINGS IDEAS TO REALITY</span>
          </div>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[540px] flex items-center justify-center py-12">
          {PLAYGROUND_CARDS.slice(0, 8).map((card, idx) => (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => setLightboxCard(card)}
              whileHover={{ scale: 1.09, rotate: 0, zIndex: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`absolute w-[170px] sm:w-[215px] aspect-[16/10] rounded-xl overflow-hidden border cursor-pointer group ${
                CARD_POSITIONS[idx]
              } ${
                isNightStudio
                  ? 'border-white/15 bg-[#15151A] shadow-[0_18px_45px_rgba(0,0,0,0.55)]'
                  : 'border-[#DFDBD3] bg-white shadow-[0_18px_40px_rgba(21,20,19,0.1)]'
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="block text-[11px] font-semibold text-white truncate">{card.title}</span>
                <span className="block text-[10px] text-white/75 truncate">{card.subtitle}</span>
              </span>
            </motion.button>
          ))}

          <div
            className={`relative z-20 text-center px-7 py-8 rounded-3xl backdrop-blur-sm transition-colors ${
              isNightStudio ? 'bg-[#0B0B0E]/82' : 'bg-[#FAF7F2]/88 border border-[#E8E4DC]'
            }`}
          >
            <h2
              className={`font-display text-[2.75rem] sm:text-[4.2rem] font-bold tracking-[-0.03em] leading-none ${
                isNightStudio ? 'text-white' : 'text-[#151413]'
              }`}
            >
              Creative{' '}
              <span className="font-hand text-[3.7rem] sm:text-[5.5rem] font-bold text-[#EF4444] inline-block -rotate-3 ml-1">
                Playground
              </span>
            </h2>
            <p className={`text-sm mt-4 max-w-md mx-auto ${isNightStudio ? 'text-[#A1A1AA]' : 'text-[#57534E]'}`}>
              Official screenshots &amp; live interfaces collected directly from my deployed apps—click any frame to inspect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 lg:hidden">
          {PLAYGROUND_CARDS.slice(0, 6).map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => setLightboxCard(card)}
              className={`rounded-xl overflow-hidden border text-left cursor-pointer ${
                isNightStudio ? 'border-white/10 bg-[#15151A]' : 'border-[#E5E2DC] bg-white'
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover object-top"
              />
              <div className="p-2">
                <div className={`text-xs font-medium truncate ${isNightStudio ? 'text-white' : 'text-[#151413]'}`}>
                  {card.title}
                </div>
                <div className={`text-[10px] truncate ${isNightStudio ? 'text-[#A1A1AA]' : 'text-[#625E59]'}`}>
                  {card.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className={`mt-16 sm:mt-24 rounded-[28px] p-8 sm:p-16 lg:p-20 flex items-center justify-center border transition-colors ${
            isNightStudio ? 'fluted-backdrop border-white/10' : 'fluted-backdrop-day border-[#DCD8CF]'
          }`}
        >
          <div className="w-full max-w-[540px] rounded-[24px] bg-[#F4F3F0] text-[#151413] p-8 sm:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/60 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                <div>NO MAP.</div>
                <div>JUST VIBES.</div>
                <div className="text-[#DC2626]">LET&rsquo;S SHIP.</div>
              </div>

              <button
                type="button"
                onClick={onJumpToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-sm font-medium transition-colors self-start sm:self-center cursor-pointer"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxCard(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[920px] rounded-2xl bg-[#15151A] border border-white/15 overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4">
                <div>
                  <div className="font-display font-semibold text-white">{lightboxCard.title}</div>
                  <div className="text-xs text-[#A1A1AA]">{lightboxCard.subtitle}</div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={lightboxCard.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#151413] text-xs font-medium hover:bg-[#F4F3F0]"
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
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
