import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Download, ExternalLink, FileText, Loader2, Printer, X } from 'lucide-react';
import { PROFILE_LINKS, RESUME_SUMMARY } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'pdf' | 'formatted'>('pdf');
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // Fetch PDF inside the same-origin preview session into a local Blob URL so
  // clicking Resume opens the exact PDF directly without triggering a proxy 403 error.
  useEffect(() => {
    if (!open) return;
    let objectUrl: string | null = null;
    let cancelled = false;

    const loadPdf = async () => {
      setPdfLoading(true);
      setPdfError(false);
      try {
        const res = await fetch(RESUME_SUMMARY.pdfUrl, { credentials: 'include' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buffer = await res.arrayBuffer();
        const pdfBlob = new Blob([buffer], { type: 'application/pdf' });
        objectUrl = URL.createObjectURL(pdfBlob);
        if (!cancelled) {
          setBlobUrl(objectUrl);
          setPdfLoading(false);
        }
      } catch {
        if (!cancelled) {
          setPdfError(true);
          setPdfLoading(false);
        }
      }
    };

    void loadPdf();

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
      setBlobUrl(null);
    };
  }, [open]);

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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs"
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
            className="w-full max-w-[940px] max-h-[92vh] flex flex-col overflow-hidden rounded-[26px] bg-white border border-[#E7E5E0] text-[#151413] shadow-[0_32px_70px_rgba(21,20,19,0.3)]"
          >
            {/* Header Bar */}
            <div className="bg-white px-5 sm:px-7 py-4 border-b border-[#EFECE6] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div>
                <h2 id="resume-modal-title" className="font-display text-base sm:text-lg font-bold text-[#151413]">
                  {PROFILE_LINKS.name} — Resume
                </h2>
                <p className="text-[11px] sm:text-xs font-medium text-[#7A1C24]">
                  {RESUME_SUMMARY.headline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="inline-flex items-center p-0.5 rounded-full bg-[#F4F3F0] border border-[#E7E5E0]"
                  role="tablist"
                  aria-label="Resume display mode"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'pdf'}
                    onClick={() => setViewMode('pdf')}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      viewMode === 'pdf'
                        ? 'bg-[#7A1C24] text-white'
                        : 'text-[#625E59] hover:text-[#151413]'
                    }`}
                  >
                    <FileText className="w-3 h-3" aria-hidden="true" />
                    <span>PDF</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'formatted'}
                    onClick={() => setViewMode('formatted')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      viewMode === 'formatted'
                        ? 'bg-[#7A1C24] text-white'
                        : 'text-[#625E59] hover:text-[#151413]'
                    }`}
                  >
                    Summary
                  </button>
                </div>

                {viewMode === 'formatted' && (
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E6E3DD] text-xs font-medium text-[#151413] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Print</span>
                  </button>
                )}

                <a
                  href={blobUrl || RESUME_SUMMARY.pdfUrl}
                  download="Aditya_Duggirala_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  className="w-9 h-9 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E6E3DD] flex items-center justify-center text-[#151413] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {viewMode === 'pdf' ? (
                <div className="p-4 sm:p-6 space-y-3 h-full">
                  {pdfLoading ? (
                    <div className="w-full h-[72vh] rounded-2xl border border-[#E7E5E0] bg-[#FAF9F7] flex flex-col items-center justify-center gap-3 text-sm text-[#57534E]">
                      <Loader2 className="w-6 h-6 text-[#7A1C24] animate-spin" aria-hidden="true" />
                      <span>Loading resume PDF…</span>
                    </div>
                  ) : blobUrl && !pdfError ? (
                    <iframe
                      src={`${blobUrl}#view=FitH`}
                      title="Aditya Duggirala Official Resume PDF"
                      className="w-full h-[75vh] rounded-2xl border border-[#E7E5E0] bg-[#FAF9F7]"
                    />
                  ) : (
                    <div className="w-full h-[72vh] rounded-2xl border border-[#E7E5E0] bg-[#FAF9F7] flex flex-col items-center justify-center gap-4 p-6 text-center">
                      <FileText className="w-10 h-10 text-[#7A1C24]" aria-hidden="true" />
                      <div className="space-y-1 max-w-md">
                        <div className="font-display font-bold text-[#151413]">
                          Inline PDF viewer unavailable on this browser
                        </div>
                        <p className="text-xs text-[#57534E]">
                          Download the PDF directly or switch to the clean interactive Summary tab.
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={RESUME_SUMMARY.pdfUrl}
                          download="Aditya_Duggirala_Resume.pdf"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#151413] text-white text-xs font-semibold"
                        >
                          <Download className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Download PDF</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setViewMode('formatted')}
                          className="px-4 py-2 rounded-full bg-white border border-[#E7E5E0] text-xs font-medium text-[#151413] cursor-pointer"
                        >
                          Open Summary View
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 sm:p-8 space-y-7">
                  {/* Contact Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EFECE6] text-xs sm:text-sm text-[#57534E]">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span>{RESUME_SUMMARY.location}</span>
                      <span aria-hidden="true">·</span>
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
                        href={PROFILE_LINKS.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[#151413]"
                      >
                        <span>adityaduggiralame.lovable.app</span>
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
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="space-y-1.5">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Profile
                    </h3>
                    <p className="text-sm leading-relaxed text-[#3F3B37]">{RESUME_SUMMARY.profile}</p>
                  </div>

                  {/* Experience */}
                  <div className="space-y-3">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Experience
                    </h3>
                    <div className="space-y-3">
                      {RESUME_SUMMARY.experience.map((exp) => (
                        <div key={exp.org} className="p-4 rounded-2xl bg-[#FAF9F7] border border-[#EFECE6] space-y-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <div className="text-sm font-semibold text-[#151413]">
                              {exp.role} <span className="text-[#7A1C24]">|</span> {exp.org}
                            </div>
                            <span className="text-xs font-mono text-[#625E59] tabular-nums">{exp.period}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">• {exp.bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Education
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {RESUME_SUMMARY.education.map((edu) => (
                        <div key={edu.institution} className="p-4 rounded-2xl bg-[#FAF9F7] border border-[#EFECE6] space-y-1">
                          <div className="text-sm font-semibold text-[#151413]">{edu.title}</div>
                          <div className="text-xs text-[#4A4641]">{edu.institution}</div>
                          <div className="text-xs font-medium text-[#7A1C24] pt-0.5 tabular-nums">{edu.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects & Featured Work */}
                  <div className="space-y-3">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Projects &amp; Featured Work
                    </h3>
                    <div className="space-y-2.5">
                      {RESUME_SUMMARY.flagshipBuilds.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-2xl bg-[#FAF9F7] border border-[#EFECE6] space-y-1"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <div className="text-sm font-semibold text-[#151413]">{item.title}</div>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-[#7A1C24] hover:underline"
                            >
                              <span>{item.displayUrl}</span>
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            </a>
                          </div>
                          <p className="text-xs sm:text-sm leading-relaxed text-[#4A4641]">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2.5">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#EFECE6]">
                        <span className="font-semibold text-[#151413]">Design: </span>
                        <span className="text-[#4A4641]">{RESUME_SUMMARY.skills.design}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#EFECE6]">
                        <span className="font-semibold text-[#151413]">Development: </span>
                        <span className="text-[#4A4641]">{RESUME_SUMMARY.skills.development}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#EFECE6]">
                        <span className="font-semibold text-[#151413]">Tools: </span>
                        <span className="text-[#4A4641]">{RESUME_SUMMARY.skills.tools}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#EFECE6]">
                        <span className="font-semibold text-[#151413]">AI &amp; Other: </span>
                        <span className="text-[#4A4641]">{RESUME_SUMMARY.skills.aiAndOther}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Achievements */}
                  <div className="space-y-4">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#7A1C24]">
                      Certifications &amp; Achievements
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm text-[#3F3B37]">
                      <div>
                        <div className="font-semibold text-[#151413] mb-1">Achievements</div>
                        <ul className="space-y-1">
                          {RESUME_SUMMARY.achievements.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-[#7A1C24] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-semibold text-[#151413] mb-1">Course Completions</div>
                        <ul className="space-y-1">
                          {RESUME_SUMMARY.courseCompletions.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-[#7A1C24] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-semibold text-[#151413] mb-1">Participation</div>
                        <ul className="space-y-1">
                          {RESUME_SUMMARY.participation.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-[#7A1C24] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Declaration Footer */}
                  <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs text-[#625E59]">
                    <div className="space-y-1 max-w-md">
                      <p>{RESUME_SUMMARY.declaration.statement}</p>
                      <p className="font-mono">
                        Place: {RESUME_SUMMARY.declaration.place} · Date: {RESUME_SUMMARY.declaration.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-hand text-2xl font-bold text-[#7A1C24] leading-none">
                        {PROFILE_LINKS.name}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#151413] mt-1">
                        {PROFILE_LINKS.name}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
