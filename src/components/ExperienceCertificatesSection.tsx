import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Award, Briefcase, ChevronDown, ExternalLink, Eye, ShieldCheck, Trophy, X } from 'lucide-react';
import {
  CERTIFICATES,
  CertificateItem,
  EXPERIENCES,
  PROFILE_LINKS,
} from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

const CERT_FILTERS: ('All' | CertificateItem['category'])[] = ['All', 'AI & Coding', 'Hackathons', 'VNRVJIET'];

function OrganizationSeal({
  cert,
  size = 'md',
}: {
  cert: CertificateItem;
  size?: 'sm' | 'md';
}) {
  const [logoError, setLogoError] = useState(false);
  const dim = size === 'sm' ? 'w-6 h-6' : 'w-10 h-10 sm:w-11 sm:h-11';

  if (cert.issuerLogo && !logoError) {
    return (
      <span
        className={`${dim} rounded-full bg-white border border-[var(--hairline)] shadow-[0_6px_16px_rgba(43,27,21,0.08)] flex items-center justify-center overflow-hidden p-1 shrink-0`}
      >
        <img
          src={cert.issuerLogo}
          alt={`${cert.issuer} official logo`}
          referrerPolicy="no-referrer"
          onError={() => setLogoError(true)}
          className="w-full h-full object-contain rounded-full"
        />
      </span>
    );
  }

  return (
    <span
      className={`${dim} rounded-full flex items-center justify-center text-[10px] sm:text-xs font-display font-bold shadow-xs shrink-0 ${cert.issuerAccent}`}
    >
      {cert.issuerShort}
    </span>
  );
}

export function ExperienceCertificatesSection() {
  const [certFilter, setCertFilter] = useState<'All' | CertificateItem['category']>('All');
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [expandedExpId, setExpandedExpId] = useState<string>(EXPERIENCES[0].id);

  const featuredCert = CERTIFICATES.find((c) => c.featured);
  const visibleCerts =
    certFilter === 'All' ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === certFilter);

  useEffect(() => {
    if (!activeCert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeCert]);

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-t border-[var(--hairline)] bg-[var(--base)] scroll-mt-20 transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 space-y-24">
        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--accent)]">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              <span>EXPERIENCE &amp; EDUCATION</span>
            </div>
            <h2 className="font-display text-[2rem] sm:text-[2.65rem] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--primary)] [text-wrap:balance]">
              Built across hackathons, open source, and ECE labs.
            </h2>
            <p className="text-[15.5px] leading-relaxed text-[var(--secondary)]">
              Every role—from solo full-stack builder to VNRVJIET undergraduate engineer—centers on turning ambiguous problems into live, verified deployments.
            </p>
            <div className="pt-2">
              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4"
              >
                <span>View full LinkedIn profile</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
            {EXPERIENCES.map((exp) => {
              const isOpen = expandedExpId === exp.id;
              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => setExpandedExpId(exp.id)}
                  className="py-6 sm:py-7 space-y-3 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedExpId(isOpen ? '' : exp.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer group"
                  >
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-[var(--secondary)] mt-0.5">
                        {exp.organization} · {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] shrink-0 tabular-nums">
                      <span>{exp.period} · {exp.type}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--accent)] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  <p className="text-[15px] leading-relaxed text-[var(--secondary)]">{exp.summary}</p>

                  {isOpen && (
                    <ul className="space-y-1.5 pt-1">
                      {exp.highlights.map((hl) => (
                        <li key={hl} className="text-sm text-[var(--secondary)] flex items-start gap-2">
                          <span className="text-[var(--accent)] font-bold mt-0.5">·</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates Timeline with Real Official Logos */}
        <div id="certificates" className="space-y-10 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--accent)]">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                <span>CERTIFICATES &amp; VERIFIED CREDENTIALS</span>
              </div>
              <h2 className="font-display text-[2rem] sm:text-[2.65rem] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--primary)]">
                Credential timeline across organizations.
              </h2>
            </div>

            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-[var(--surface-raised)] border border-[var(--hairline)]"
              role="tablist"
              aria-label="Filter certificates"
            >
              {CERT_FILTERS.map((cat) => {
                const active = certFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCertFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      active
                        ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] font-semibold'
                        : 'text-[var(--secondary)] hover:text-[var(--primary)]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Convergence 2k26 1st Place Achievement Spotlight in 3D */}
          {featuredCert && featuredCert.image && (
            <Tilt3D maxTilt={4} scaleOnHover={1.008}>
              <div className="rounded-[24px] bg-[var(--surface)] border border-[var(--hairline)] shadow-[0_24px_60px_rgba(43,27,21,0.08)] dark:shadow-[0_26px_64px_rgba(0,0,0,0.45)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <button
                    type="button"
                    onClick={() => setActiveCert(featuredCert)}
                    className="lg:col-span-6 relative group bg-[var(--surface-raised)] overflow-hidden cursor-pointer text-left h-full"
                  >
                    <img
                      src={featuredCert.image}
                      alt={featuredCert.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full max-h-[340px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--surface)] text-[var(--primary)] border border-[var(--hairline)] text-xs font-semibold shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                        Inspect full certificate
                      </span>
                    </span>
                  </button>

                  <div className="lg:col-span-6 p-7 sm:p-10 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-[var(--accent)]">
                        <Trophy className="w-4 h-4" aria-hidden="true" />
                        <span>Featured Achievement · {featuredCert.date}</span>
                      </div>
                      <OrganizationSeal cert={featuredCert} size="md" />
                    </div>

                    <h3 className="font-display text-2xl sm:text-[1.85rem] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--primary)]">
                      1st Place — Agentic Arena, CONVERGENCE 2k26
                    </h3>

                    <p className="text-[15px] leading-relaxed text-[var(--secondary)]">
                      Awarded the Certificate of Achievement at VNRVJIET&rsquo;s 27th National Level Annual Technical Symposium (hosted by Krithomedh VNRVJIET, Sept 18–19, 2026).
                    </p>

                    <div className="text-xs font-mono text-[var(--muted)] pt-1">
                      Issued by {featuredCert.issuer} · Skills: {featuredCert.skills.join(' · ')}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveCert(featuredCert)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white dark:hover:text-[#160F0C] text-xs font-medium transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Open high-res certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3D>
          )}

          {/* Chronological Timeline with Official Organization Logos */}
          <div className="relative pl-6 sm:pl-8">
            <div
              aria-hidden="true"
              className="absolute left-[19px] sm:left-[21px] top-4 bottom-4 w-px bg-[var(--hairline)]"
            />

            <div className="space-y-5">
              {visibleCerts.map((cert) => (
                <article key={cert.id} className="relative pl-10 sm:pl-12 group">
                  <div className="absolute left-0 top-5 ring-4 ring-[var(--base)] rounded-full transition-transform duration-200 group-hover:scale-110">
                    <OrganizationSeal cert={cert} size="md" />
                  </div>

                  <Tilt3D maxTilt={3} scaleOnHover={1.006} glare={false}>
                    <div className="rounded-[20px] bg-[var(--surface)] border border-[var(--hairline)] group-hover:border-[var(--accent)]/45 transition-colors p-5 sm:p-6 shadow-[0_4px_20px_rgba(43,27,21,0.03)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] group-hover:shadow-[0_14px_34px_rgba(43,27,21,0.08)]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                        <div className="space-y-2 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[var(--muted)]">
                            <span className="font-mono font-semibold text-[var(--primary)] tabular-nums">{cert.date}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-medium text-[var(--accent)] inline-flex items-center gap-1.5">
                              {cert.issuer}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="text-[var(--secondary)]">{cert.category}</span>
                          </div>

                          <h3 className="font-display text-lg sm:text-[1.2rem] font-bold text-[var(--primary)] leading-snug">
                            {cert.title}
                          </h3>

                          <p className="text-sm text-[var(--secondary)] leading-relaxed">{cert.credentialDetail}</p>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-[var(--secondary)]">
                            {cert.credentialId && (
                              <span className="inline-flex items-center gap-1.5 font-mono text-[var(--primary)]">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#5E9E6D]" aria-hidden="true" />
                                ID: {cert.credentialId}
                              </span>
                            )}
                            {cert.skills.length > 0 && (
                              <span>
                                <strong className="font-medium text-[var(--primary)]">Skills:</strong> {cert.skills.join(' · ')}
                              </span>
                            )}
                          </div>

                          {(cert.verifyUrl || cert.image) && (
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                              {cert.verifyUrl && (
                                <a
                                  href={cert.verifyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:text-[var(--accent)] underline decoration-[var(--hairline)] underline-offset-4"
                                >
                                  <span>Verify official credential</span>
                                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                              )}
                              {cert.image && (
                                <button
                                  type="button"
                                  onClick={() => setActiveCert(cert)}
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline underline-offset-4 cursor-pointer"
                                >
                                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                                  <span>Inspect certificate card</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>

                        {cert.image && (
                          <button
                            type="button"
                            onClick={() => setActiveCert(cert)}
                            aria-label={`Inspect certificate image for ${cert.title}`}
                            className="relative w-full md:w-[210px] aspect-[16/9] rounded-xl overflow-hidden border border-[var(--hairline)] bg-[var(--surface-raised)] shrink-0 cursor-pointer group/thumb shadow-xs"
                          >
                            <img
                              src={cert.image}
                              alt={cert.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-[1.05]"
                            />
                            <span className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/25 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity px-2.5 py-1 rounded-full bg-[var(--surface)] text-[var(--primary)] border border-[var(--hairline)] text-[11px] font-medium shadow-sm">
                                Zoom
                              </span>
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Tilt3D>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* High-Res Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && activeCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[820px] rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] overflow-hidden shadow-2xl"
            >
              <div className="px-5 py-4 bg-[var(--surface-raised)] border-b border-[var(--hairline)] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <OrganizationSeal cert={activeCert} size="sm" />
                  <div className="min-w-0">
                    <div className="font-display font-bold text-[var(--primary)] truncate">{activeCert.title}</div>
                    <div className="text-xs text-[var(--secondary)] truncate">
                      {activeCert.issuer} · {activeCert.date}
                      {activeCert.credentialId ? ` · ID: ${activeCert.credentialId}` : ''}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {activeCert.verifyUrl && (
                    <a
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-[#160F0C] text-xs font-semibold transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveCert(null)}
                    aria-label="Close certificate lightbox"
                    className="w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--hairline)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] cursor-pointer transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-[var(--base)] p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
