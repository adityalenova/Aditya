import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, ExternalLink, Printer, X } from 'lucide-react';
import { CERTIFICATES, PROFILE_LINKS, RESUME_SUMMARY, TECH_STACK } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[780px] max-h-[90vh] overflow-y-auto bg-white rounded-[28px] border border-[#E7E5E0] shadow-2xl text-[#151413]"
          >
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-6 sm:px-8 py-5 border-b border-[#EFECE6] flex items-center justify-between gap-4">
              <div>
                <h2 id="resume-modal-title" className="font-display text-lg font-bold text-[#151413]">
                  {PROFILE_LINKS.name} — Resume
                </h2>
                <p className="text-xs text-[#78716C]">{RESUME_SUMMARY.headline} · {RESUME_SUMMARY.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111111] hover:bg-[#7A1C24] text-xs font-medium text-white transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Print / PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  className="w-9 h-9 rounded-full bg-[#F4F3F0] hover:bg-[#EAE7E1] flex items-center justify-center text-[#151413] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-7">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EFECE6] text-sm text-[#57534E]">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 font-medium text-[#7A1C24] hover:underline cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Email copied' : PROFILE_LINKS.email}</span>
                  </button>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE_LINKS.githubPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#151413]"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#151413]"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
                <span className="text-xs font-mono text-[#78716C]">Rule: {RESUME_SUMMARY.rule}</span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display text-base font-bold text-[#151413]">Education</h3>
                <div className="text-[15px] font-semibold text-[#151413]">{RESUME_SUMMARY.education.institution}</div>
                <div className="text-sm text-[#57534E]">{RESUME_SUMMARY.education.degree}</div>
                <div className="text-xs text-[#78716C]">{RESUME_SUMMARY.education.focus}</div>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-base font-bold text-[#151413]">Flagship Engineering &amp; AI Builds</h3>
                <ul className="space-y-2">
                  {RESUME_SUMMARY.flagshipBuilds.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-[#57534E] flex items-start gap-2.5">
                      <span className="text-[#7A1C24] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-base font-bold text-[#151413]">Honors &amp; Verified Certificates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CERTIFICATES.slice(0, 6).map((cert) => (
                    <div key={cert.id} className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#E7E5E0]">
                      <div className="text-sm font-semibold text-[#151413]">{cert.title}</div>
                      <div className="text-xs text-[#78716C] mt-0.5">{cert.issuer} · {cert.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#EFECE6]">
                <h3 className="font-display text-base font-bold text-[#151413]">Core Stack</h3>
                <p className="text-sm text-[#57534E]">
                  {TECH_STACK.map((t) => t.name).join(' · ')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
