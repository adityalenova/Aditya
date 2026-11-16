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
      className="relative bg-white border-t border-[#EFECE6] pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden scroll-mt-20"
    >
      {/* Signature Burgundy & Sand Studio Illustration Anchored Seamlessly Bottom-Right */}
      {!imgFailed && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-full flex justify-end items-end"
        >
          <img
            src={FOOTER_MEADOW_URL}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full lg:w-[82%] h-full object-contain object-right-bottom mix-blend-multiply opacity-95 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_26%,black_60%)]"
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="max-w-xl space-y-6">
          <div className="space-y-1">
            <div className="font-hand text-[2.8rem] sm:text-[3.8rem] font-bold tracking-[-0.01em] leading-none text-[#7A1C24]">
              Adiós, Amigos!
            </div>
            <h2 className="font-display text-[2.1rem] sm:text-[3.1rem] font-bold tracking-[-0.035em] leading-[1.06] text-[#151413]">
              This was {PROFILE_LINKS.name}.
            </h2>
            <p className="text-sm sm:text-[15.5px] text-[#57534E] pt-1.5 max-w-md">
              Building applied AI tools &amp; embedded systems from Hyderabad — always open to ambitious teams, hackathons, and open-source builders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-sm font-medium transition-colors cursor-pointer shadow-[0_8px_20px_rgba(21,20,19,0.14)] whitespace-nowrap shrink-0"
            >
              {copiedEmail ? <Check className="w-4 h-4" aria-hidden="true" /> : null}
              <span>{copiedEmail ? 'Email copied!' : 'Email Me'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF9F7] hover:bg-[#EFECE6] border border-[#E6E3DD] text-[#151413] text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4 text-[#7A1C24]" aria-hidden="true" />
              <span>Resume</span>
            </button>
          </div>

          {/* Interactive Quick-Note Composer */}
          {composerOpen && (
            <form
              onSubmit={handleSendNote}
              className="max-w-md p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2DDD3] space-y-3 shadow-xl"
            >
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="font-mono text-[#151413]">{PROFILE_LINKS.email}</span>
                <span className="inline-flex items-center gap-1 text-[#059669] font-medium">
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
                        ? 'bg-[#7A1C24] text-white'
                        : 'bg-[#FAF9F7] text-[#57534E] hover:text-[#151413] border border-[#E6E3DD]'
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
                className="w-full px-3.5 py-2 rounded-xl bg-[#FAF9F7] border border-[#E6E3DD] text-xs text-[#151413] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#7A1C24]"
              />
              <textarea
                rows={2}
                value={quickNote}
                onChange={(e) => setQuickNote(e.target.value)}
                placeholder="What are we building together?"
                aria-label="Message"
                required
                className="w-full px-3.5 py-2 rounded-xl bg-[#FAF9F7] border border-[#E6E3DD] text-xs text-[#151413] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#7A1C24] resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#151413] hover:bg-[#7A1C24] text-white text-xs font-medium cursor-pointer transition-colors"
                >
                  <Send className="w-3 h-3" aria-hidden="true" />
                  <span>Open Mail</span>
                </button>
              </div>
            </form>
          )}

          {/* Navigation Links Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#57534E]">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#7A1C24] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="hover:text-[#7A1C24] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Work
            </button>
            <button
              type="button"
              onClick={() => onNavigate('experience')}
              className="hover:text-[#7A1C24] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Certificates
            </button>
            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#7A1C24] transition-colors whitespace-nowrap shrink-0"
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
              className="inline-flex items-center gap-1.5 hover:text-[#7A1C24] transition-colors whitespace-nowrap shrink-0"
            >
              <GitHubMark className="w-4 h-4 text-[#151413]" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile"
              className="inline-flex items-center gap-1 hover:text-[#7A1C24] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="font-bold text-[#151413]">𝕏</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-[#78716C]">
            © {new Date().getFullYear()} {PROFILE_LINKS.name} · VNRVJIET ECE · Hyderabad, India
          </div>
        </div>
      </div>
    </footer>
  );
}
