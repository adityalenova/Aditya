import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Layers, Monitor, Server } from 'lucide-react';

interface StackItem {
  name: string;
  level: 1 | 2 | 3;
  usedIn: string;
}

interface StackGroup {
  label: string;
  items: StackItem[];
}

interface StackTier {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'monitor' | 'server' | 'database' | 'cpu';
  groups: StackGroup[];
}

const STACK_TIERS: StackTier[] = [
  {
    id: 'interface',
    title: 'Interface',
    subtitle: 'What people touch',
    description: 'Web and interactive front ends that feel quick, tactile, and deliberate.',
    icon: 'monitor',
    groups: [
      {
        label: 'WEB',
        items: [
          { name: 'React 19', level: 3, usedIn: 'cyrus.ai, Nirogi AI, Spectre, Static & this portfolio' },
          { name: 'TypeScript', level: 3, usedIn: 'Strict end-to-end types across every client & API route' },
          { name: 'Tailwind CSS', level: 3, usedIn: 'Custom light/dark gallery tokens & responsive layouts' },
          { name: 'Vite', level: 2, usedIn: 'Zero-latency HMR and rapid prototype bundling' },
        ],
      },
      {
        label: 'INTERACTION',
        items: [
          { name: 'Motion / Spring UI', level: 3, usedIn: '3D tilt cards, vault showcases & scroll choreography' },
          { name: 'Three.js', level: 2, usedIn: 'Spatial scenes and interactive hardware visualization' },
        ],
      },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    subtitle: 'What does the work',
    description: 'APIs, orchestrators, and edge runtimes that stay fast, validated, and in sync.',
    icon: 'server',
    groups: [
      {
        label: 'FRAMEWORKS',
        items: [
          { name: 'Node.js', level: 3, usedIn: 'API proxies, ingestion pipelines & tool servers' },
          { name: 'Express.js', level: 2, usedIn: 'RESTful backend services and OAuth token handlers' },
          { name: 'FastAPI', level: 2, usedIn: 'Python AI inference endpoints & hackathon microservices' },
        ],
      },
      {
        label: 'INTERFACES',
        items: [
          { name: 'REST APIs', level: 3, usedIn: 'Structured JSON contracts & model routing gateways' },
          { name: 'WebSockets', level: 2, usedIn: 'Live gateway alerts & real-time collaborative updates' },
        ],
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'What remembers',
    description: 'The right store, relational index, and identity layer for the shape of the data.',
    icon: 'database',
    groups: [
      {
        label: 'RELATIONAL & CLOUD',
        items: [
          { name: 'Neon Postgres', level: 3, usedIn: '40,017 open issues & 8,754 mentored projects in cyrus.ai' },
          { name: 'Supabase', level: 3, usedIn: 'Row-level security, real-time sync & user records' },
          { name: 'Firebase', level: 2, usedIn: 'Cloud state persistence & hackathon prototyping' },
        ],
      },
      {
        label: 'IDENTITY & AUTH',
        items: [
          { name: 'GitHub PKCE', level: 3, usedIn: 'Secure OAuth sign-in & repository bookmarking' },
          { name: 'Google OIDC', level: 2, usedIn: 'Frictionless one-tap contributor authentication' },
        ],
      },
    ],
  },
  {
    id: 'ai-hardware',
    title: 'AI & Edge',
    subtitle: 'What reasons & ships',
    description: 'Multi-model routing paired with ECE hardware fundamentals and instant deployment.',
    icon: 'cpu',
    groups: [
      {
        label: 'FRONTIER MODELS',
        items: [
          { name: 'Claude API', level: 3, usedIn: 'Genesis research reasoning & structured code loops' },
          { name: 'Google Gemini', level: 3, usedIn: 'Multimodal health screening & fast indexing' },
          { name: 'OpenAI', level: 2, usedIn: 'Task-routed classification & evaluation checks' },
        ],
      },
      {
        label: 'SYSTEMS & DEPLOY',
        items: [
          { name: 'Embedded C', level: 2, usedIn: 'VNRVJIET ECE labs, microcontrollers & low-level logic' },
          { name: 'Vercel', level: 3, usedIn: 'Edge deployments for cyrus.ai & Genesis' },
          { name: 'GitHub CI', level: 3, usedIn: 'Automated snapshots, PR checks & releases' },
        ],
      },
    ],
  },
];

function TierIcon({ type }: { type: StackTier['icon'] }) {
  const cls = 'w-5 h-5 text-white dark:text-[#160F0C]';
  if (type === 'monitor') return <Monitor className={cls} aria-hidden="true" />;
  if (type === 'server') return <Server className={cls} aria-hidden="true" />;
  if (type === 'database') return <Database className={cls} aria-hidden="true" />;
  return <Cpu className={cls} aria-hidden="true" />;
}

export function TechStackSection() {
  const [selectedTool, setSelectedTool] = useState<{ name: string; usedIn: string }>({
    name: 'React 19',
    usedIn: 'cyrus.ai, Nirogi AI, Spectre, Static & this portfolio',
  });

  return (
    <section
      id="stack"
      className="py-16 sm:py-24 border-t border-[var(--hairline)] bg-[var(--surface-raised)]/40 scroll-mt-20 transition-colors duration-200"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header + Live Tool Spotlight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Architecture &amp; Stack</span>
            </div>
            <h2 className="font-display text-[2.2rem] sm:text-[2.9rem] font-bold tracking-[-0.03em] leading-[1.06] text-[var(--primary)] [text-wrap:balance]">
              How everything I build fits together.
            </h2>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] shadow-[0_6px_20px_rgba(43,27,21,0.04)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.3)] max-w-md w-full">
            <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
              In Production · {selectedTool.name}
            </div>
            <div className="text-xs sm:text-[13px] text-[var(--secondary)] mt-1 leading-snug">
              {selectedTool.usedIn}
            </div>
          </div>
        </div>

        {/* Connected Vertical Tier Architecture Stack */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[var(--accent)]/35 via-[var(--hairline)] to-[var(--accent)]/30"
          />

          <div className="relative space-y-6 sm:space-y-8">
            {STACK_TIERS.map((tier, idx) => {
              const totalCount = tier.groups.reduce((acc, g) => acc + g.items.length, 0);

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.42, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 rounded-[24px] overflow-hidden bg-[var(--surface)] border border-[var(--hairline)] shadow-[0_14px_40px_rgba(43,27,21,0.05)] dark:shadow-[0_18px_46px_rgba(0,0,0,0.36)] hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Identity Rail */}
                    <div className="lg:col-span-4 relative p-6 sm:p-7 bg-[var(--surface-raised)]/70 border-b lg:border-b-0 lg:border-r border-[var(--hairline)] flex flex-col justify-center min-h-[152px]">
                      <span
                        className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[var(--surface)] border border-[var(--hairline)] text-[11px] font-mono font-semibold text-[var(--accent)] flex items-center justify-center shadow-xs tabular-nums"
                        title={`${totalCount} technologies in ${tier.title}`}
                      >
                        {totalCount}
                      </span>

                      <div className="flex items-center gap-4 pr-8">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] shadow-[0_10px_24px_rgba(198,120,72,0.28)] border border-[var(--accent)]/30 flex items-center justify-center shrink-0">
                          <TierIcon type={tier.icon} />
                        </div>

                        <div>
                          <h3 className="font-display text-xl sm:text-[22px] font-bold tracking-[-0.02em] text-[var(--primary)]">
                            {tier.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[var(--secondary)] mt-0.5">
                            {tier.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Categorized Capabilities Pane */}
                    <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-center gap-5 bg-[var(--surface)]">
                      <p className="text-sm sm:text-[15.5px] text-[var(--secondary)] leading-relaxed">
                        {tier.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {tier.groups.map((group) => (
                          <div key={group.label} className="space-y-2.5">
                            <div className="flex items-center gap-3">
                              <span className="text-[10.5px] font-mono font-semibold tracking-[0.14em] text-[var(--accent)] uppercase whitespace-nowrap shrink-0">
                                {group.label}
                              </span>
                              <span className="h-px flex-1 bg-[var(--hairline)]" aria-hidden="true" />
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {group.items.map((item) => {
                                const isSelected = selectedTool.name === item.name;
                                return (
                                  <button
                                    key={item.name}
                                    type="button"
                                    onMouseEnter={() => setSelectedTool({ name: item.name, usedIn: item.usedIn })}
                                    onClick={() => setSelectedTool({ name: item.name, usedIn: item.usedIn })}
                                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                                      isSelected
                                        ? 'bg-[var(--accent)] text-white dark:text-[#160F0C] border-[var(--accent)] font-semibold shadow-[0_6px_16px_rgba(198,120,72,0.24)]'
                                        : 'bg-[var(--surface-raised)] hover:bg-[var(--accent-soft)] text-[var(--primary)] border-[var(--hairline)]'
                                    }`}
                                  >
                                    <span>{item.name}</span>
                                    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
                                      {Array.from({ length: item.level }).map((_, dotIdx) => (
                                        <span
                                          key={dotIdx}
                                          className={`w-1 h-1 rounded-full ${
                                            isSelected ? 'bg-current opacity-85' : 'bg-[var(--accent)]'
                                          }`}
                                        />
                                      ))}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
