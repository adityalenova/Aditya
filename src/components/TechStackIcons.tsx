import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TECH_STACK, TechTool } from '../data/portfolioData';

export function GitHubMark({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function BrandGlyph({ id }: { id: string }) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill="#087EA4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path
            d="M7.2 11.2h5.2v1.4h-1.8V19H8.9v-6.4H7.2v-1.4Zm6.3 5.9c.5.4 1.2.7 2 .7.8 0 1.3-.3 1.3-.8 0-.5-.4-.7-1.4-1.1-1.3-.4-2.2-1-2.2-2.2 0-1.4 1.1-2.3 2.8-2.3.9 0 1.6.2 2.1.5l-.4 1.3c-.4-.2-1-.4-1.7-.4-.7 0-1.1.3-1.1.7 0 .5.4.7 1.4 1 1.4.5 2.2 1.1 2.2 2.3 0 1.4-1.1 2.4-3 2.4-1 0-1.9-.3-2.4-.6l.4-1.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path
            d="M12 6.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98.99 2.11 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.66 14.49 6.5 12 6.5ZM7 12.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98.99 2.11 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35-.98-.99-2.11-2.15-4.6-2.15Z"
            fill="#0EA5E9"
          />
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path
            d="M12 2.5v19M4.2 7l15.6 10M19.8 7L4.2 17M7.2 3.8l9.6 16.4M16.8 3.8L7.2 20.2M2.5 12h19"
            stroke="#D97757"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path
            d="M12 2.5C12 8.2 15.8 12 21.5 12C15.8 12 12 15.8 12 21.5C12 15.8 8.2 12 2.5 12C8.2 12 12 8.2 12 2.5Z"
            fill="url(#geminiGrad)"
          />
          <defs>
            <linearGradient id="geminiGrad" x1="2.5" y1="2.5" x2="21.5" y2="21.5">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 2.2" />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path d="M13.3 21.2c-.5.6-1.5.2-1.5-.6V13h7.3c1.3 0 2 1.5 1.2 2.5l-7 5.7Z" fill="#3ECF8E" />
          <path d="M10.7 2.8c.5-.6 1.5-.2 1.5.6V11H4.9c-1.3 0-2-1.5-1.2-2.5l7-5.7Z" fill="#249361" />
        </svg>
      );
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="7" ry="3" stroke="#3B82F6" strokeWidth="1.7" />
          <path d="M5 6.5v5.5c0 1.66 3.13 3 7 3s7-1.34 7-3V6.5" stroke="#3B82F6" strokeWidth="1.7" />
          <path d="M5 12v5.5c0 1.66 3.13 3 7 3s7-1.34 7-3V12" stroke="#3B82F6" strokeWidth="1.7" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path d="M20.5 5.2 12.4 20a.6.6 0 0 1-1 0L3.5 5.2a.6.6 0 0 1 .65-.88l7.85 1.4 7.85-1.4a.6.6 0 0 1 .65.88Z" fill="#F59E0B" />
          <path d="M14.8 3.5 9.8 11.4l2.7-.5-1.2 5.4 4.9-7.4-2.8.5 1.4-5.9Z" fill="#7C3AED" />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path d="M12 4 21 19.5H3L12 4Z" fill="currentColor" />
        </svg>
      );
    case 'github':
    default:
      return (
        <span className="w-7 h-7 rounded-full bg-[#181717] text-white flex items-center justify-center shadow-xs">
          <GitHubMark className="w-4 h-4" />
        </span>
      );
  }
}

export function TechStackDock() {
  const [activeTool, setActiveTool] = useState<TechTool>(TECH_STACK[0]);

  return (
    <div className="pt-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3.5 min-h-[22px]">
        <span className="text-sm font-medium text-[var(--secondary)]">My builder stack</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTool.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.14 }}
            className="text-xs text-[var(--secondary)] truncate max-w-full sm:max-w-[360px]"
          >
            <strong className="font-semibold text-[var(--accent)]">{activeTool.name}</strong>
            <span className="mx-1.5 text-[var(--muted)]" aria-hidden="true">·</span>
            <span>{activeTool.role}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center gap-2.5" role="list" aria-label="Technology stack">
        {TECH_STACK.map((tool) => {
          const isActive = activeTool.id === tool.id;
          return (
            <motion.button
              key={tool.id}
              type="button"
              whileHover={{ y: -3, scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              onMouseEnter={() => setActiveTool(tool)}
              onFocus={() => setActiveTool(tool)}
              onClick={() => setActiveTool(tool)}
              aria-label={`${tool.name}: ${tool.role}`}
              className={`group relative w-11 h-11 rounded-full flex items-center justify-center bg-[var(--surface)] text-[var(--primary)] border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                isActive
                  ? 'border-[var(--accent)] shadow-[0_8px_18px_var(--accent-soft)]'
                  : 'border-[var(--hairline)] hover:border-[var(--muted)] shadow-xs'
              }`}
            >
              <BrandGlyph id={tool.id} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
