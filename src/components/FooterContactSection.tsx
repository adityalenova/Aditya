import React, { useState } from 'react';
import { Check, Copy, Download, Linkedin, Send } from 'lucide-react';
import { FOOTER_MEADOW_URL, PROFILE_LINKS } from '../data/portfolioData';
import { NavSection } from './Navbar';
import { GitHubMark } from './TechStackIcons';

interface FooterContactSectionProps {
  onOpenResume: () => void;
  onNavigate: (section: NavSection) => void;
}

const TOPIC_PROMPTS = [
  'AI Product Collaboration',
  'Full-Stack / ECE Internship',
  'Open Source · cyrus.ai',
];

export function FooterContactSection({ onOpenResume, onNavigate }: FooterContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(TOPIC_PROMPTS[0]);
  const [senderName, setSenderName] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const [imgFailed, setImgFailed] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_LINKS.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
    setComposerOpen((prev) => !prev);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickNote.trim()) return;
    const subject = encodeURIComponent(
      senderName.trim()
        ? `${selectedTopic} — message from ${senderName.trim()}`
        : `${selectedTopic} — saw your portfolio`
    );
    const body = encodeURIComponent(quickNote.trim());
    window.location.href = `mailto:${PROFILE_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative bg-[var(--base)] border-t border-[var(--hairline)] pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden scroll-mt-20 transition-colors duration-200"
    >
      <div className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Contact, Quick-Note Composer & Links */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <div className="font-hand text-[2.8rem] sm:text-[3.8rem] font-bold tracking-[-0.01em] leading-none text-[var(--accent)]">
                Adiós, Amigos!
              </div>
              <h2 className="font-display text-[2.1rem] sm:text-[3.1rem] font-bold tracking-[-0.035em] leading-[1.06] text-[var(--primary)]">
                This was {PROFILE_LINKS.name}.
              </h2>
              <p className="text-sm sm:text-[15.5px] text-[var(--secondary)] pt-1.5 max-w-md">
                Building applied AI tools &amp; embedded systems from Hyderabad — always open to ambitious teams, hackathons, and open-source builders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--base)] hover:text-white dark:hover:text-[#160F0C] text-sm font-semibold transition-colors cursor-pointer shadow-[0_12px_28px_rgba(43,27,21,0.18)] whitespace-nowrap shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4" aria-hidden="true" /> : null}
                <span>{copiedEmail ? 'Email copied!' : 'Email Me'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--primary)] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                <span>Resume</span>
              </button>
            </div>

            {/* Interactive Quick-Note Composer */}
            {composerOpen && (
              <form
                onSubmit={handleSendNote}
                className="max-w-md p-4 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] shadow-[0_18px_40px_rgba(43,27,21,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-[var(--secondary)]">
                  <span className="font-mono text-[var(--primary)]">{PROFILE_LINKS.email}</span>
                  <span className="inline-flex items-center gap-1 text-[var(--accent)] font-medium">
                    <Copy className="w-3 h-3" aria-hidden="true" /> Copied
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {TOPIC_PROMPTS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                        selectedTopic === topic
                          ? 'bg-[var(--accent)] text-white dark:text-[#160F0C]'
                          : 'bg-[var(--surface-raised)] text-[var(--secondary)] hover:text-[var(--primary)] border border-[var(--hairline)]'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name or team"
                  aria-label="Your name or team"
                  className="w-full px-3.5 py-2 rounded-xl bg-[var(--surface-raised)] border border-[var(--hairline)] text-xs text-[var(--primary)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <textarea
                  rows={2}
                  value={quickNote}
                  onChange={(e) => setQuickNote(e.target.value)}
                  placeholder="What are we building together?"
                  aria-label="Message"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-[var(--surface-raised)] border border-[var(--hairline)] text-xs text-[var(--primary)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:text-[#160F0C] text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <Send className="w-3 h-3" aria-hidden="true" />
                    <span>Open Mail</span>
                  </button>
                </div>
              </form>
            )}

            {/* Navigation Links Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[var(--secondary)]">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => onNavigate('work')}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => onNavigate('experience')}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Certificates
              </button>
              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
              >
                <span className="w-4 h-4 rounded-[3px] bg-[#0A66C2] text-white flex items-center justify-center">
                  <Linkedin className="w-2.5 h-2.5" aria-hidden="true" />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE_LINKS.githubPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
              >
                <GitHubMark className="w-4 h-4 text-[var(--primary)]" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                className="inline-flex items-center gap-1 hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
              >
                <span className="font-bold text-[var(--primary)]">𝕏</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} {PROFILE_LINKS.name} · VNRVJIET ECE · Hyderabad, India
            </div>
          </div>

          {/* Right Column: Editorial Studio Illustration with Transparent Background */}
          {!imgFailed && (
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px]">
                <img
                  src={FOOTER_MEADOW_URL}
                  alt="Aditya Duggirala working at his studio desk"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.22)]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
