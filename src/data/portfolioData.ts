import heroCharacterImg from '../assets/images/hero_aditya_character_1794828353483.jpg';
import heroFullBodyImg from '../assets/images/hero_aditya_fullbody_1794836493877.jpg';
import hobbySneakerImg from '../assets/images/hobby_sneaker_stack_1794836494684.jpg';
import hobbyMusicImg from '../assets/images/hobby_music_headphones_1794836494712.jpg';
import hobbyVideoImg from '../assets/images/hobby_video_editing_1794836495710.jpg';
import hobbyCreatorImg from '../assets/images/hobby_creator_studio_1794836495154.jpg';
import footerStudioImg from '../assets/images/footer_aditya_studio_1794831924681.jpg';
import avatarSubhranshu from '../assets/images/avatar_subhranshu_dash_1794835060566.jpg';
import avatarKarthikeya from '../assets/images/avatar_karthikeya_varma_1794835061948.jpg';
import avatarRohan from '../assets/images/avatar_rohan_kulkarni_1794835062875.jpg';

export interface TechTool {
  id: string;
  name: string;
  role: string;
  category: 'Frontend' | 'AI & Models' | 'Backend & Infra';
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyProject {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'AI Systems' | 'Developer Tools' | 'Brand & Studio' | 'Civic & Health';
  year: string;
  headline: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  accentBackdrop: string;
  liveUrl: string;
  repoUrl: string;
  stack: string[];
  metrics: ProjectMetric[];
  problem: string;
  architecture: string[];
  outcome: string;
}

export interface AIBuildProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  previewType?: 'static' | 'remix';
  iconBg: string;
  iconType: 'health' | 'shield' | 'bolt' | 'music' | 'learn';
  liveUrl: string;
  repoUrl: string;
  eventLabel: string;
  caseStudyId?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  issuerAccent: string;
  issuerLogo?: string;
  date: string;
  sortOrder: number;
  category: 'AI & Coding' | 'Hackathons' | 'VNRVJIET';
  credentialId?: string;
  skills: string[];
  credentialDetail: string;
  image?: string;
  verifyUrl?: string;
  featured?: boolean;
}

export interface PlaygroundCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

export interface RecommendationItem {
  id: string;
  author: string;
  role: string;
  org: string;
  initials: string;
  avatar?: string;
  accentBg: string;
  contextLabel: string;
  segments: { text: string; highlight?: boolean }[];
}

export const HERO_CHARACTER_URL = heroCharacterImg;
export const HERO_FULLBODY_URL = heroFullBodyImg;
export const HERO_AVATAR_URL = '/assets/aistudio/Screenshot_2026-11-16_at_18.00.16_83569ebb.png';
export const FOOTER_MEADOW_URL = footerStudioImg;

export const OUT_OF_FRAME_ITEMS = [
  {
    id: 'oof-sneakers',
    kicker: 'Sneaker Rotation',
    title: 'Sneaker Collection',
    caption: 'Obsessed with retro court silhouettes, crisp leather panels, and color-blocked drops.',
    image: hobbySneakerImg,
  },
  {
    id: 'oof-music',
    kicker: 'Audio & Vinyl',
    title: 'Music Listening',
    caption: 'Always wired into Telugu indie, hip-hop instrumentals, and ambient late-night stems.',
    image: hobbyMusicImg,
  },
  {
    id: 'oof-video',
    kicker: 'Pacing & Cuts',
    title: 'Video Editing',
    caption: 'Cutting tight visual rhythm, sound design sweeps, and cinema color timelines.',
    image: hobbyVideoImg,
  },
  {
    id: 'oof-creator',
    kicker: 'Storytelling',
    title: 'Content Creator Craft',
    caption: 'Scripting launch reels and turning weekend AI experiments into watchable builds.',
    image: hobbyCreatorImg,
  },
];

export const PROFILE_LINKS = {
  name: 'Aditya Duggirala',
  email: 'aditya.duggirala@gmail.com',
  githubPrimary: 'https://github.com/adityalenova',
  githubSecondary: 'https://github.com/adityaduggiralaonein-dot',
  linkedin: 'https://www.linkedin.com/in/iadityaoffl/',
  twitter: 'https://x.com/iaditya_offical',
  location: 'Hyderabad, India',
  university: 'VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)',
  degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
};

export const TECH_STACK: TechTool[] = [
  { id: 'react', name: 'React 19', role: 'Component architecture & responsive interactive interfaces', category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', role: 'Strict end-to-end type safety across UI and API routes', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', role: 'Design tokens, fluid typography, and rapid layout polish', category: 'Frontend' },
  { id: 'claude', name: 'Claude API', role: 'Deep code reasoning, structured synthesis, and agent loops', category: 'AI & Models' },
  { id: 'gemini', name: 'Google Gemini', role: 'Multimodal diagnostics, fast indexing, and semantic matching', category: 'AI & Models' },
  { id: 'openai', name: 'OpenAI', role: 'Task-specific model routing and evaluation workflows', category: 'AI & Models' },
  { id: 'supabase', name: 'Supabase', role: 'Auth, row-level security, and real-time persistence', category: 'Backend & Infra' },
  { id: 'postgres', name: 'Neon Postgres', role: 'Serverless relational indexing for 40k+ open-source records', category: 'Backend & Infra' },
  { id: 'vite', name: 'Vite', role: 'Instant local bundling and rapid prototype iteration', category: 'Frontend' },
  { id: 'vercel', name: 'Vercel', role: 'Zero-friction edge deployments and preview branches', category: 'Backend & Infra' },
  { id: 'github', name: 'GitHub', role: 'Open-source workflows, PKCE auth, and CI automation', category: 'Backend & Infra' },
];

export const HERO_PROOF_STATS = [
  { value: '10+', label: 'Live AI & Full-Stack Apps Shipped' },
  { value: '40,017', label: 'Open Issues Indexed in cyrus.ai' },
  { value: '1st Place', label: 'Agentic Arena · CONVERGENCE 2k26' },
  { value: '1,035+', label: 'GitHub Developer Followers' },
];

export const ABOUT_COPY = {
  kicker: 'ABOUT ME',
  title: 'a little about myself',
  paragraphs: [
    'My journey started at the intersection of hardware circuits and late-night software experiments. As an Electronics & Communication Engineering (ECE) undergrad at VNRVJIET in Hyderabad, I spend my days learning signals and silicon—and my nights shipping full-stack AI products solo.',
    'From building Nirogi AI after two real family medical scares to indexing 40,017 open-source issues in cyrus.ai, I am drawn to problems where complex AI routing, clean product UX, and real-world constraints meet. I route work between Claude, GPT, and Gemini depending on what the job demands, then trust nothing until it runs live on a real URL.',
  ],
  signature: 'Aditya.',
};

export const FOLDER_CARDS = [
  {
    id: 'folder-cyrus',
    title: 'cyrus.ai',
    subtitle: 'Open-Source Discovery',
    image: '/assets/collected/shot-cyrus-home.png',
    caseStudyId: 'cyrus',
  },
  {
    id: 'folder-genesis',
    title: 'Genesis',
    subtitle: 'Autonomous Research AI',
    image: '/assets/collected/live-genesis.png',
    caseStudyId: 'genesis',
  },
  {
    id: 'folder-nirogi',
    title: 'Nirogi AI',
    subtitle: '12 Preventive Health Tools',
    image: '/assets/collected/live-nirogi.png',
    caseStudyId: 'nirogi-case',
  },
  {
    id: 'folder-spectre',
    title: 'Spectre',
    subtitle: 'Crime Intelligence',
    image: '/assets/collected/live-spectre.png',
    caseStudyId: 'spectre-case',
  },
];

export const FOLDER_CAPABILITIES = [
  'AI SYSTEMS',
  'FULL-STACK',
  'PRODUCT UX',
  'GEN AI ROUTING',
  'ECE & CIRCUITS',
  'CIVIC TECH',
  'RAPID PROTOTYPING',
];

export const SELECTED_WORK: CaseStudyProject[] = [
  {
    id: 'cyrus',
    slug: 'cyrus-ai',
    title: 'cyrus.ai',
    shortTitle: 'cyrus.ai',
    category: 'Developer Tools',
    year: '2026',
    headline: 'Indexing 40,017 open issues and 8,754 mentored projects in cyrus.ai',
    summary:
      'Built an open-source contribution platform on Next.js 16 and Neon Postgres with 364 organization profiles, real GitHub PKCE + Google OIDC sign-in, and a 1,528-repo agent-skills catalog. Featured on Product Hunt.',
    image: '/assets/collected/shot-cyrus-home.png',
    imageAlt: 'Official live screenshot of cyrus.ai open-source contribution discovery platform',
    accentBackdrop: 'from-[#1D4ED8] to-[#1E3A8A]',
    liveUrl: 'https://cyrus-agent.vercel.app',
    repoUrl: 'https://github.com/adityalenova/cyrus',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Neon Postgres', 'GitHub PKCE', 'Google OIDC'],
    metrics: [
      { label: 'Real Open Issues', value: '40,017' },
      { label: 'Mentored Archive', value: '8,754' },
      { label: 'Organizations', value: '364' },
      { label: 'Agent-Skill Repos', value: '1,528' },
    ],
    problem:
      'Developers trying to break into open source or apply to mentored programs (GSoC, LFX, Outreachy) waste weeks combing through stale repositories, broken issue filters, and fragmented program archives.',
    architecture: [
      'Engineered an automated snapshot and ingestion pipeline tracking 33.8M+ combined repository stars across 364 vetted organizations.',
      'Designed a fast Neon Postgres schema supporting instant filtering across 40,017 live issues and 8,754 historical mentored project entries.',
      'Implemented dual authentication via GitHub PKCE and Google OIDC so contributors can bookmark tracks and sync workflows securely.',
      'Added a curated 1,528-repository agent-skills catalog tailored for modern AI-assisted coding workflows.',
    ],
    outcome:
      'Launched publicly on Product Hunt, earned 38+ GitHub stars out of the gate, and gave first-time contributors a single fast surface to discover real issues worth solving.',
  },
  {
    id: 'genesis',
    slug: 'genesis-research-loop',
    title: 'Genesis',
    shortTitle: 'Genesis',
    category: 'AI Systems',
    year: '2026',
    headline: 'Engineering an always-on multi-model AI research loop in Genesis',
    summary:
      'An autonomous research orchestration system that pulls context from prior runs and live literature, routes each step to the right model (Claude, GPT, or Gemini), executes in a sandbox, and requires human sign-off.',
    image: '/assets/collected/live-genesis.png',
    imageAlt: 'Official live screenshot of Genesis autonomous multi-model AI research platform',
    accentBackdrop: 'from-[#1F5C5B] to-[#123A3A]',
    liveUrl: 'https://genesis-researchai.vercel.app/',
    repoUrl: 'https://github.com/adityalenova/genesis',
    stack: ['TypeScript', 'React', 'Claude API', 'Google Gemini', 'OpenAI', 'Sandboxed Execution'],
    metrics: [
      { label: 'Model Routing', value: '3 Engines' },
      { label: 'Verification Gate', value: 'Human Sign-Off' },
      { label: 'Execution Mode', value: 'Sandboxed' },
      { label: 'Audit Trail', value: 'Full Exchange Log' },
    ],
    problem:
      'Single-model AI prompts hallucinate citations, lose long-horizon context, and mix planning with unverified execution—making autonomous research unreliable for serious engineering.',
    architecture: [
      'Built a context memory layer that retrieves findings from prior runs alongside live technical literature before starting any synthesis step.',
      'Implemented task-based model routing: assigning architectural reasoning, rapid extraction, or verification to whichever frontier model performs best for that step.',
      'Isolated code and hypothesis checks inside a deterministic sandbox so claims are tested against real outputs rather than text plausibility.',
      'Enforced an immutable exchange log with an explicit human sign-off gate before any research loop closes out.',
    ],
    outcome:
      'Turned fragmented multi-tab prompting into a reproducible, auditable research workflow anchored around one core engineering rule: verify everything before closing.',
  },
  {
    id: 'remix-selected',
    slug: 'remix-music-ai',
    title: 'RemixMusicAI',
    shortTitle: 'RemixMusicAI',
    category: 'Brand & Studio',
    year: '2026',
    headline: '224 credit-safe royalty-free tracks in an instant browser remix studio',
    summary:
      'Aggregates royalty-free tracks across English, Hindi, Telugu, and instrumental genres into a high-contrast dark studio where creators discover charts, stream clean stems, and credit artists cleanly without desktop DAWs.',
    image: '/assets/collected/live-remix.png',
    imageAlt: 'Official live screenshot of RemixMusicAI credit-safe music discovery and remix studio',
    accentBackdrop: 'from-[#9F1239] to-[#4C0519]',
    liveUrl: 'https://remix-musicai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/remix-musicai',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Multi-Language Indexing'],
    metrics: [
      { label: 'Royalty-Free Catalog', value: '224 Tracks' },
      { label: 'Languages Indexed', value: '4 Regions' },
      { label: 'Studio Runtime', value: 'Zero DAW' },
      { label: 'Source Attribution', value: 'Auto-Credited' },
    ],
    problem:
      'Video editors and independent creators waste hours hunting for copyright-safe background stems across Hindi, Telugu, and English moods without clear artist attribution records.',
    architecture: [
      'Engineered an indexed track catalog spanning Pixabay Music, Free Music Archive, Incompetech, Chosic, and creator stem packs with instant mood and genre filters.',
      'Built low-latency browser deck controls using Web Audio synthesis previews, waveform bars, and playlist persistence.',
      'Added one-click source attribution badges so creators credit original composers accurately on YouTube, Reels, and launch films.',
    ],
    outcome:
      'Shipped a cohesive music studio combining dark-aurora visual polish with practical copyright clarity for modern content creators.',
  },
  {
    id: 'raakha-selected',
    slug: 'raakha-grace',
    title: 'Raakha Grace',
    shortTitle: 'Raakha Grace',
    category: 'Brand & Studio',
    year: '2026',
    headline: 'Crafting an editorial luxury jewellery storefront for Raakha Grace',
    summary:
      'Designed and engineered a warm heirloom D2C storefront for handcrafted Indian jewellery light on the skin, complete with signature lotus brand identity, collection filtering, interactive concierge FAQ, and pan-India checkout flows.',
    image: '/assets/collected/live-raakha.png',
    imageAlt: 'Official live screenshot of Raakha Grace handcrafted jewellery e-commerce website',
    accentBackdrop: 'from-[#4A2C22] to-[#271510]',
    liveUrl: 'https://raakhagracecrafted.vercel.app/',
    repoUrl: 'https://github.com/adityalenova',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Cormorant Garamond', 'Outfit', 'Vercel'],
    metrics: [
      { label: 'Brand Identity', value: 'Lotus Crest' },
      { label: 'Shipping Coverage', value: 'All India' },
      { label: 'Typography System', value: 'Editorial Serif' },
      { label: 'Hosting Stack', value: 'Vercel Edge' },
    ],
    problem:
      'Artisanal Indian jewellery brands frequently suffer from cluttered marketplace templates that strip away tactile warmth, material storytelling, and gifting presentation.',
    architecture: [
      'Paired Cormorant Garamond editorial headings with clean Outfit geometric UI typography over warm blush-cream (#FBE6DD) and espresso-umber ink surfaces.',
      'Built custom responsive navigation trays, live product card hover reveals, interactive FAQ knowledge lookup, and first-order gifting modal touches.',
      'Tuned font preloads and asset compression for rapid mobile-first browsing across pan-India networks.',
    ],
    outcome:
      'Delivered a calm, conversion-focused luxury digital flagship on Vercel celebrating handcrafted lightweight pieces.',
  },
  {
    id: 'nirogi-selected',
    slug: 'nirogi-ai',
    title: 'Nirogi AI',
    shortTitle: 'Nirogi AI',
    category: 'Civic & Health',
    year: '2026',
    headline: 'Unifying 12 preventive healthcare AI tools for every Indian household',
    summary:
      'Born from two real family medical scares, Nirogi AI packages MedGuard drug checks, HeartSense screening, SugarSense Indian glycemic food index, and ScanIQ report synthesis—free, zero appointments, and accessible without English fluency.',
    image: '/assets/collected/live-nirogi.png',
    imageAlt: 'Official live screenshot of Nirogi AI preventive health operating system',
    accentBackdrop: 'from-[#065F46] to-[#022C22]',
    liveUrl: 'https://nirogi-healthai.lovable.app',
    repoUrl: 'https://github.com/adityalenova/nirogi-healthai',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'ElevenLabs Voice', 'Lovable'],
    metrics: [
      { label: 'AI Health Tools', value: '12 Suites' },
      { label: 'Access Cost', value: '100% Free' },
      { label: 'Voice Narration', value: 'Multilingual' },
      { label: 'Screening Target', value: '< 5 mins' },
    ],
    problem:
      'Preventive conditions—like long-term painkiller toxicity or silent cardiac defects—often go undetected across Indian households until emergencies occur due to cost, appointment friction, and language barriers.',
    architecture: [
      'Modularized 12 focused diagnostic workflows including MedGuard (drug interactions), HeartSense (silent cardiac screening), SugarSense (Indian glycemic food index), SkinScan, and ScanIQ (X-Ray/MRI/report summarizer).',
      'Integrated voice-guided SenseCheck narration so non-English or low-literacy users can navigate vision and hearing checks independently.',
      'Built MedVerify batch lookup cross-referencing CDSCO recall and expiry records.',
    ],
    outcome:
      'Submitted to India Runs by Redrob AI (Track 2: Everyday AI Innovator) as a practical blueprint for preventive rural-to-metro healthcare.',
  },
  {
    id: 'spectre-selected',
    slug: 'spectre-crimeai',
    title: 'Spectre AI',
    shortTitle: 'Spectre AI',
    category: 'Civic & Health',
    year: '2026',
    headline: 'Turning raw FIR logs into geospatial crime intelligence for KSP Datathon',
    summary:
      'Built for Karnataka State Police (KSP Datathon 2026), pairing tactical crime sector mapping with Indian police hierarchy command views and real-time alert pipelines.',
    image: '/assets/collected/live-spectre.png',
    imageAlt: 'Official live screenshot of Spectre CrimeWatch AI intelligence dashboard',
    accentBackdrop: 'from-[#18181B] to-[#09090B]',
    liveUrl: 'https://spectre-crimeai.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/spectre-crimeai',
    stack: ['React', 'TypeScript', 'Google Maps API', 'Resend', 'Gateway Alerts', 'Cloud Auth'],
    metrics: [
      { label: 'Hackathon', value: 'KSP Datathon' },
      { label: 'Mapping', value: 'Geospatial' },
      { label: 'Role Hierarchy', value: 'Indian Police' },
      { label: 'Alert Pipeline', value: 'Real-Time' },
    ],
    problem:
      'Law enforcement analysts deal with fragmented spreadsheets and delayed incident feeds, making rapid cross-sector pattern recognition difficult during active operations.',
    architecture: [
      'Constructed a dark-canvas tactical map overlay highlighting high-density sector clusters and chronological incident timelines.',
      'Modeled Indian police rank profiles (Commissioner, IG, DSP, Inspector) to scope operational views and dispatch permissions.',
      'Wired automated email notifications via Resend and real-time alert dispatch triggers.',
    ],
    outcome:
      'Delivered an end-to-end civic intelligence prototype ready for Hack2Skill & KSP Datathon 2026 evaluation.',
  },
];

export const AI_BUILD_PROJECTS: AIBuildProject[] = [
  {
    id: 'spectre',
    title: 'Spectre — CrimeWatch AI',
    tagline: 'Geospatial crime analytics for Karnataka State Police',
    description:
      'Built for Hack2Skill & KSP Datathon 2026, Spectre transforms raw FIR logs into a dark tactical intelligence surface with geospatial sector mapping, chronological timelines, and rank-tailored officer command workflows.',
    highlights: [
      'Engineered specifically for Karnataka State Police (KSP Datathon 2026)',
      'Interactive geospatial sector heatmaps & chronological incident timelines',
      'Rank-aware officer dashboard with real-time gateway alerting',
    ],
    image: '/assets/collected/live-spectre.png',
    imageAlt: 'Official live screenshot of Spectre CrimeWatch AI intelligence dashboard',
    iconBg: 'bg-[#1F2937]',
    iconType: 'shield',
    liveUrl: 'https://spectre-crimeai.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/spectre-crimeai',
    eventLabel: 'KSP Datathon 2026',
    caseStudyId: 'spectre-case',
  },
  {
    id: 'static',
    title: 'Static — EV, Fuel & Solar Navigator',
    tagline: 'Multi-stop clean mobility & highway planner across India',
    description:
      'Helps EV and hybrid drivers plan intercity Indian highway trips with live charger gun specs (120V/240V/DC fast), vehicle garage profiles, AI-scored range risk factors, highway amenities, and solar storage sizing.',
    highlights: [
      'Calculates stop-by-stop range risk based on current battery & charger output',
      'Maps EV, CNG, fuel stations & verified highway pitstops across India',
      'Includes personal EV garage & solar panel energy storage calculator',
    ],
    image: '/assets/collected/live-static.png',
    imageAlt: 'Official live screenshot of Static EV and solar route planner featuring vehicle telemetry',
    iconBg: 'bg-[#16A34A]',
    iconType: 'bolt',
    liveUrl: 'https://static-chargepoint.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/static-chargepoint',
    eventLabel: 'Clean Mobility AI',
  },
  {
    id: 'beyondhuman',
    title: 'BeyondHuman — Adaptive Health & Workout AI',
    tagline: 'Intelligent training splits, nutrition tracking & coaching flows',
    description:
      'A personal fitness and nutrition operating system combining adaptive hypertrophy programming, daily recovery metrics, and conversational meal analysis inside a clean responsive web workspace.',
    highlights: [
      'Dynamic progressive-overload workout scheduling with muscle recovery focus',
      'AI-assisted calorie & macro estimation tuned for Indian home-cooked meals',
      'Built with React, TypeScript & modern state persistence',
    ],
    image: '/assets/collected/live-beyondhuman.png',
    imageAlt: 'Official live screenshot of BeyondHuman adaptive health and workout AI application',
    iconBg: 'bg-[#2563EB]',
    iconType: 'health',
    liveUrl: 'https://beyondhuman-healthai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/beyondhuman-healthai',
    eventLabel: 'Health & Fitness AI',
  },
  {
    id: 'remix',
    title: 'RemixMusicAI — Browser Remix Studio',
    tagline: 'Non-copyright track discovery & instant stem remixing',
    description:
      'Aggregates royalty-free tracks across English, Hindi, Telugu, and instrumental genres into a fluid dark-aurora studio where creators build playlists, track artist leaderboards, and preview remixes without a desktop DAW.',
    highlights: [
      'Multi-language discovery across English, Hindi, Telugu & mood filters',
      'Zero-DAW browser playback with source attribution & creator leaderboards',
      'Dynamic visual studio built with React & TypeScript',
    ],
    image: '/assets/collected/live-remix.png',
    imageAlt: 'Official live screenshot of RemixMusicAI credit-safe music discovery and remix studio',
    previewType: 'remix',
    iconBg: 'bg-[#E11D48]',
    iconType: 'music',
    liveUrl: 'https://remix-musicai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/remix-musicai',
    eventLabel: 'Audio & Creator Tech',
  },
  {
    id: 'davinci',
    title: 'DaVinci Canvas — Generative Creative Studio',
    tagline: 'Unified multi-model image & visual synthesis workspace',
    description:
      'Brings Frontier vision and generative image workflows into one creator-first canvas so designers explore styles, iterate compositions, and export clean visual assets fast.',
    highlights: [
      'Curated model selector spanning multi-engine prompt synthesis workflows',
      'High-contrast gallery layout focused cleanly on generated outputs',
      'Live deployed frontend built with React, TypeScript & Tailwind CSS',
    ],
    image: '/assets/collected/live-davinci.png',
    imageAlt: 'Official live screenshot of DaVinci Canvas generative creative AI studio',
    iconBg: 'bg-[#6D28D9]',
    iconType: 'learn',
    liveUrl: 'https://davinci-creativeai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/davinci-creativeai',
    eventLabel: 'Generative AI Studio',
  },
];

export const EXTRA_CASE_STUDIES: Record<string, CaseStudyProject> = {
  'nirogi-case': {
    id: 'nirogi-case',
    slug: 'nirogi-ai',
    title: 'Nirogi AI',
    shortTitle: 'Nirogi AI',
    category: 'Civic & Health',
    year: '2026',
    headline: 'Designing a 12-tool preventive health OS accessible to every Indian household',
    summary:
      'Inspired by two real family medical emergencies that went undetected too long, Nirogi AI brings 12 free AI screening tools into one intuitive interface—no doctor appointment or English proficiency required.',
    image: '/assets/collected/live-nirogi.png',
    imageAlt: 'Official live screenshot of Nirogi AI preventive health operating system',
    accentBackdrop: 'from-[#065F46] to-[#022C22]',
    liveUrl: 'https://nirogi-healthai.lovable.app',
    repoUrl: 'https://github.com/adityalenova/nirogi-healthai',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'ElevenLabs Voice', 'Lovable'],
    metrics: [
      { label: 'AI Health Tools', value: '12 Suites' },
      { label: 'Access Cost', value: '100% Free' },
      { label: 'Voice Narration', value: 'Multilingual' },
      { label: 'Screening Target', value: '< 5 mins' },
    ],
    problem:
      'Preventive conditions—like long-term painkiller toxicity or silent cardiac defects—often go undetected across Indian households until emergencies occur due to cost, appointment friction, and language barriers.',
    architecture: [
      'Modularized 12 focused diagnostic workflows including MedGuard (drug interactions), HeartSense (silent cardiac screening), SugarSense (Indian glycemic food index), SkinScan, and ScanIQ (X-Ray/MRI/report summarizer).',
      'Integrated voice-guided SenseCheck narration so non-English or low-literacy users can navigate vision and hearing checks independently.',
      'Built MedVerify batch lookup cross-referencing CDSCO recall and expiry records.',
    ],
    outcome:
      'Submitted to India Runs by Redrob AI (Track 2: Everyday AI Innovator) as a practical blueprint for preventive rural-to-metro healthcare.',
  },
  'spectre-case': {
    id: 'spectre-case',
    slug: 'spectre-crimeai',
    title: 'Spectre (CrimeWatch AI)',
    shortTitle: 'Spectre',
    category: 'Civic & Health',
    year: '2026',
    headline: 'Turning raw incident logs into real-time crime intelligence for KSP Datathon',
    summary:
      'Built for Karnataka State Police (KSP Datathon 2026 & Hack2Skill), Spectre pairs dark geospatial crime mapping with officer-rank workflows and automated gateway alerts.',
    image: '/assets/collected/live-spectre.png',
    imageAlt: 'Official live screenshot of Spectre CrimeWatch AI',
    accentBackdrop: 'from-[#18181B] to-[#09090B]',
    liveUrl: 'https://spectre-crimeai.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/spectre-crimeai',
    stack: ['React', 'TypeScript', 'Google Maps API', 'Resend', 'Gateway Alerts', 'Cloud Auth'],
    metrics: [
      { label: 'Hackathon', value: 'KSP Datathon' },
      { label: 'Mapping', value: 'Geospatial' },
      { label: 'Role Hierarchy', value: 'Indian Police' },
      { label: 'Alert Pipeline', value: 'Real-Time' },
    ],
    problem:
      'Law enforcement analysts deal with fragmented spreadsheets and delayed incident feeds, making rapid cross-sector pattern recognition difficult during active operations.',
    architecture: [
      'Constructed a dark-canvas tactical map overlay highlighting high-density sector clusters and chronological incident timelines.',
      'Modeled Indian police rank profiles (Commissioner, IG, DSP, Inspector) to scope operational views and dispatch permissions.',
      'Wired automated email notifications via Resend and real-time alert dispatch triggers.',
    ],
    outcome:
      'Delivered an end-to-end civic intelligence prototype ready for Hack2Skill & KSP Datathon 2026 evaluation.',
  },
};

export const PLAYGROUND_CARDS: PlaygroundCard[] = [
  {
    id: 'pg-cyrus-home',
    title: 'cyrus.ai · Discovery',
    subtitle: '40,017 open issues indexed',
    image: '/assets/collected/shot-cyrus-home.png',
    url: 'https://cyrus-agent.vercel.app',
  },
  {
    id: 'pg-genesis',
    title: 'Genesis · Research AI',
    subtitle: 'Autonomous multi-model loop',
    image: '/assets/collected/live-genesis.png',
    url: 'https://genesis-researchai.vercel.app/',
  },
  {
    id: 'pg-nirogi',
    title: 'Nirogi AI',
    subtitle: 'Preventive Health OS',
    image: '/assets/collected/live-nirogi.png',
    url: 'https://nirogi-healthai.lovable.app',
  },
  {
    id: 'pg-spectre',
    title: 'Spectre',
    subtitle: 'Karnataka Police AI',
    image: '/assets/collected/live-spectre.png',
    url: 'https://spectre-crimeai.lovable.app',
  },
  {
    id: 'pg-static',
    title: 'Static',
    subtitle: 'EV & Solar Route AI',
    image: '/assets/collected/live-static.png',
    url: 'https://static-chargepoint.lovable.app',
  },
  {
    id: 'pg-beyondhuman',
    title: 'BeyondHuman',
    subtitle: 'Adaptive Fitness AI',
    image: '/assets/collected/live-beyondhuman.png',
    url: 'https://beyondhuman-healthai.lovable.app/',
  },
  {
    id: 'pg-davinci',
    title: 'DaVinci Canvas',
    subtitle: 'Generative Image Studio',
    image: '/assets/collected/live-davinci.png',
    url: 'https://davinci-creativeai.lovable.app/',
  },
  {
    id: 'pg-remix',
    title: 'RemixMusicAI',
    subtitle: 'Browser Remix Studio',
    image: '/assets/collected/live-remix.png',
    url: 'https://remix-musicai.lovable.app/',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-solo-builder',
    role: 'AI Product Builder & Webstack Developer',
    organization: 'Independent Studio · Duggirala Works',
    location: 'Hyderabad, India',
    period: '2025 — Present',
    type: 'Full-Stack & Applied AI',
    summary:
      'Solo product engineer designing, building, and shipping consumer SaaS and India-first AI platforms from zero to production URLs.',
    highlights: [
      'Shipped 10+ live full-stack web apps including cyrus.ai, Genesis, Nirogi AI, Spectre, Static, BeyondHuman, and RemixMusicAI.',
      'Architected multi-model workflows routing between Claude API, Google Gemini, and OpenAI with Supabase and Neon Postgres backends.',
    ],
  },
  {
    id: 'exp-cyrus',
    role: 'Creator & Lead Maintainer',
    organization: 'cyrus.ai · Product Hunt Featured',
    location: 'Open Source',
    period: '2026 — Present',
    type: 'Developer Platform',
    summary:
      'Built an open-source contribution platform indexing 40,017 real open issues, 8,754 mentored program projects, and 364 organizations.',
    highlights: [
      'Implemented GitHub PKCE & Google OIDC authentication over Next.js 16, TypeScript, and Neon Postgres.',
      'Launched on Product Hunt and grew community adoption to 38+ GitHub stars and 1,035+ GitHub followers.',
    ],
  },
  {
    id: 'exp-vnrvjiet',
    role: 'B.Tech Undergraduate — Electronics & Communication Engineering (ECE)',
    organization: 'VNR Vignana Jyothi Institute of Engineering & Technology',
    location: 'Bachupally, Hyderabad',
    period: '2026 — 2030',
    type: 'Engineering & Hardware',
    summary:
      'Pursuing Electronics & Communication Engineering while winning national technical symposium tracks and building AI hardware/software prototypes.',
    highlights: [
      'Won 1st Place in Agentic Arena at CONVERGENCE 2k26 (VNRVJIET 27th National Level Technical Symposium).',
      'Built & demoed applied AI prototypes across CSI VJ Hackathon, IEI Project Contest, Turing Hut Coding Contest, and Certified Web Portfolio Practitioner (CWPP) honors.',
    ],
  },
  {
    id: 'exp-hackathons',
    role: 'Civic & National Hackathon Engineer',
    organization: 'KSP Datathon · Hack2Skill · Redrob AI · CSI · IEI',
    location: 'India',
    period: '2026',
    type: 'Competitive Prototyping',
    summary:
      'Rapidly translated institutional and civic briefs into working production prototypes under strict hackathon mandates.',
    highlights: [
      'Developed Spectre crime-pattern intelligence for Karnataka State Police (KSP Datathon 2026 / Hack2Skill).',
      'Submitted Nirogi AI (12 preventive health tools) for India Runs by Redrob AI — Track 2 Ideathon.',
    ],
  },
];

// Chronological Certificates Timeline verified directly from LinkedIn & Convergence physical awards
export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-claude-cowork',
    title: 'Claude Academy: Introduction to Claude Cowork',
    issuer: 'Anthropic',
    issuerShort: 'A\\',
    issuerAccent: 'bg-[#151413] text-white',
    issuerLogo: '/assets/collected/logos/logo-anthropic.png',
    date: 'Nov 2026',
    sortOrder: 1,
    category: 'AI & Coding',
    credentialId: 'd5587fa8501a9243040d54e5585baacc',
    skills: ['Claude Code', 'Claude Cowork'],
    credentialDetail: 'Completed Anthropic certification on collaborative agentic workflows and Claude Cowork delegation.',
    image: '/assets/collected/cert-claude-cowork.png',
    verifyUrl: 'https://verify.skilljar.com/c/d5587fa8501a9243040d54e5585baacc',
  },
  {
    id: 'cert-claude-101',
    title: 'Claude Academy: Claude 101',
    issuer: 'Anthropic',
    issuerShort: 'A\\',
    issuerAccent: 'bg-[#151413] text-white',
    issuerLogo: '/assets/collected/logos/logo-anthropic.png',
    date: 'Nov 2026',
    sortOrder: 2,
    category: 'AI & Coding',
    credentialId: '8e7004bca7fb36e8f27aedd0b2a1d42c',
    skills: ['Artificial Intelligence (AI)', 'Intelligent Agents'],
    credentialDetail: 'Verified foundational training in structured prompting, model capabilities, and intelligent agent patterns.',
    image: '/assets/collected/cert-claude-101.png',
    verifyUrl: 'https://verify.skilljar.com/c/8e7004bca7fb36e8f27aedd0b2a1d42c',
  },
  {
    id: 'cert-coddy-c',
    title: 'C Fundamentals — Coddy',
    issuer: 'Coddy',
    issuerShort: 'C',
    issuerAccent: 'bg-[#2563EB] text-white',
    issuerLogo: '/assets/collected/logos/logo-coddy.png',
    date: 'Nov 2026',
    sortOrder: 3,
    category: 'AI & Coding',
    credentialId: '4TjOQ2-c-0xW5Z9',
    skills: ['C (Programming Language)', 'Memory & Pointers'],
    credentialDetail: 'Verified completion of C language syntax, control flow, memory fundamentals, and systems exercises.',
    image: '/assets/collected/cert-coddy-c.png',
    verifyUrl: 'https://coddy.tech/certifications/4TjOQ2-c-0xW5Z9',
  },
  {
    id: 'cert-vj-hackathon',
    title: 'Certificate of Participation in VJ Hackathon 2026',
    issuer: 'Computer Society of India, VNR VJIET',
    issuerShort: 'CSI',
    issuerAccent: 'bg-[#1E40AF] text-white',
    issuerLogo: '/assets/collected/logos/logo-csi.png',
    date: 'Oct 2026',
    sortOrder: 4,
    category: 'Hackathons',
    credentialId: '511f0058-d3f1-4dd2-920f-0bdf2142a18a',
    skills: ['Vibe Coding', 'Front-End Development'],
    credentialDetail: 'Engineered and demoed an end-to-end rapid software prototype at CSI VNRVJIET flagship hackathon.',
    image: '/assets/collected/cert-vj-hackathon.png',
    verifyUrl: 'https://unstop.com/certificate-preview/511f0058-d3f1-4dd2-920f-0bdf2142a18a',
  },
  {
    id: 'cert-iei-project',
    title: 'Certificate of Participation in Convergence 2k26: Project Contest',
    issuer: 'The Institution of Engineers (India) [IEI]',
    issuerShort: 'IEI',
    issuerAccent: 'bg-[#312E81] text-white',
    issuerLogo: '/assets/collected/logos/logo-iei.png',
    date: 'Oct 2026',
    sortOrder: 5,
    category: 'Hackathons',
    credentialId: '2a211894-7356-4ef6-83dd-607244bc00a9',
    skills: ['Vibe Coding', 'Prompt Engineering'],
    credentialDetail: 'Presented applied AI project architecture before the IEI VNRVJIET engineering jury at Convergence 2k26.',
    image: '/assets/collected/cert-iei-project.png',
    verifyUrl: 'https://unstop.com/certificate-preview/2a211894-7356-4ef6-83dd-607244bc00a9',
  },
  {
    id: 'cert-turinghut-coding',
    title: 'Certificate of Participation in Coding Contest Convergence 2K26',
    issuer: 'Turing Hut · VNRVJIET',
    issuerShort: 'TH',
    issuerAccent: 'bg-[#065F46] text-white',
    issuerLogo: '/assets/collected/logos/logo-turinghut.svg',
    date: 'Oct 2026',
    sortOrder: 6,
    category: 'Hackathons',
    credentialId: 'df3991ac-2dde-4584-acd9-a8288394ce63',
    skills: ['Vibe Coding', 'Coding Experience'],
    credentialDetail: 'Competed in algorithmic & speed coding tracks hosted by Turing Hut at VNRVJIET Convergence 2K26.',
    image: '/assets/collected/cert-turinghut.png',
    verifyUrl: 'https://unstop.com/certificate-preview/df3991ac-2dde-4584-acd9-a8288394ce63',
  },
  {
    id: 'cert-vjdq-software',
    title: 'Certificate of Participation in Software Hackathon Convergence 2k26',
    issuer: 'VJ DATA QUESTERS',
    issuerShort: 'DQ',
    issuerAccent: 'bg-[#0F766E] text-white',
    issuerLogo: '/assets/collected/logos/logo-vjdq.png',
    date: 'Oct 2026',
    sortOrder: 7,
    category: 'Hackathons',
    skills: ['Rapid Prototyping', 'Applied AI'],
    credentialDetail: 'Built and shipped a live software solution under timed hackathon evaluation with VJ Data Questers.',
  },
  {
    id: 'cert-agent-arena',
    title: 'Certificate of Achievement in Convergence 2k26: Agentic Arena (1st Place)',
    issuer: 'Krithomedh VNRVJIET · 27th National Technical Symposium',
    issuerShort: '1st',
    issuerAccent: 'bg-[#7A1C24] text-white',
    issuerLogo: '/assets/collected/logos/logo-krithomedh.png',
    date: 'Sep 2026',
    sortOrder: 8,
    category: 'VNRVJIET',
    credentialId: '1st Place Winner · CONVERGENCE 2k26',
    skills: ['GitHub', 'Visual Studio Code', 'Autonomous Agents'],
    credentialDetail: 'Secured 1st Place in the Agentic Arena competition conducted during CONVERGENCE 2k26 (18–19 Sept 2026).',
    image: '/assets/collected/cert-agentarena.jpg',
    featured: true,
  },
  {
    id: 'cert-simusolve',
    title: 'SimuSolve Challenge — Convergence 2k26',
    issuer: 'VNRVJIET · 27th National Level Technical Symposium',
    issuerShort: 'SS',
    issuerAccent: 'bg-[#334155] text-white',
    issuerLogo: '/assets/collected/logos/logo-krithomedh.png',
    date: 'Sep 2026',
    sortOrder: 9,
    category: 'VNRVJIET',
    credentialId: 'CONVERGENCE 2k26 · VNRVJIET',
    skills: ['Simulation Modeling', 'Engineering Problem Solving'],
    credentialDetail: 'Official certificate of participation for analytical simulation challenges at CONVERGENCE 2k26.',
    image: '/assets/collected/cert-simusolve.png',
  },
  {
    id: 'cert-top100',
    title: 'TOP 100 Coders',
    issuer: 'Krithomedh VNRVJIET',
    issuerShort: '100',
    issuerAccent: 'bg-[#1D4ED8] text-white',
    issuerLogo: '/assets/collected/logos/logo-krithomedh.png',
    date: '2026',
    sortOrder: 10,
    category: 'VNRVJIET',
    skills: ['Coding Experience', 'C (Programming Language)'],
    credentialDetail: 'Recognized among the Top 100 programmers across VNRVJIET coding rankings hosted by Krithomedh.',
    image: '/assets/collected/cert-top100.png',
  },
  {
    id: 'cert-cwpp',
    title: 'Certified Web Portfolio Practitioner (CWPP)',
    issuer: 'VJ DATA QUESTERS',
    issuerShort: 'DQ',
    issuerAccent: 'bg-[#0D9488] text-white',
    issuerLogo: '/assets/collected/logos/logo-vjdq.png',
    date: '2026',
    sortOrder: 11,
    category: 'VNRVJIET',
    skills: ['Front-End Development', 'Project Portfolio Management'],
    credentialDetail: 'Awarded for engineering quality, visual architecture, and live web portfolio execution.',
  },
];

export const RECOMMENDATIONS: RecommendationItem[] = [
  {
    id: 'rec-cyrus',
    author: 'Subhranshu Dash',
    role: 'Open-Source Contributor',
    org: 'cyrus.ai',
    initials: 'SD',
    avatar: avatarSubhranshu,
    accentBg: 'bg-[#1D4ED8]',
    contextLabel: 'Collaborated on cyrus.ai (TypeScript + Neon Postgres)',
    segments: [
      { text: 'Working alongside Aditya on cyrus.ai was effortless. ' },
      { text: 'He moves from database schema design to a working full-stack and Neon Postgres interface faster than anyone I have teamed with, ', highlight: true },
      { text: 'and keeps every PR clean, typed, and focused on what actually helps first-time open-source contributors.' },
    ],
  },
  {
    id: 'rec-agent-arena',
    author: 'Karthikeya Varma',
    role: 'Hackathon Teammate · ECE Cohort',
    org: 'VNRVJIET',
    initials: 'KV',
    avatar: avatarKarthikeya,
    accentBg: 'bg-[#7A1C24]',
    contextLabel: 'Teamed up at CONVERGENCE 2k26 · Agentic Arena',
    segments: [
      { text: 'I would strongly recommend Aditya for any AI engineering team. ' },
      { text: 'He consistently ships complete, verifiable products with remarkable turnaround speed—winning 1st place at Agentic Arena came down to his calm execution under pressure. ', highlight: true },
      { text: 'He switches effortlessly between hardware thinking, prompt routing, and sharp React interfaces, ' },
      { text: 'and never signs off on an AI workflow until it has been tested against real outputs.', highlight: true },
    ],
  },
  {
    id: 'rec-civic',
    author: 'Rohan Kulkarni',
    role: 'Product Reviewer · Hackathon Peer',
    org: 'KSP Datathon',
    initials: 'RK',
    avatar: avatarRohan,
    accentBg: 'bg-[#059669]',
    contextLabel: 'Reviewed Spectre & Nirogi AI builds',
    segments: [
      { text: 'What stands out most about Aditya is product empathy. ' },
      { text: 'Whether designing preventive healthcare for non-English households or police intelligence dashboards, he refuses to ship generic templates and obsesses over real users.', highlight: true },
    ],
  },
];

export const RESUME_SUMMARY = {
  headline: 'ECE Undergrad & Solo AI Product Builder',
  location: 'Hyderabad, Telangana, India',
  education: {
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)',
    degree: 'B.Tech — Electronics & Communication Engineering (ECE) · 2026 — 2030',
    focus: 'Embedded Systems, Signal Processing, Full-Stack Web & Applied AI Engineering',
  },
  rule: 'Demo beats deck. Prototype → Deploy → Listen → Iterate.',
  flagshipBuilds: [
    'cyrus.ai — Open-source discovery platform indexing 40,017 issues & 8,754 mentored projects (Next.js 16, Neon Postgres)',
    'Genesis — Multi-model AI research loop routing Claude, GPT & Gemini with sandboxed verification',
    'Nirogi AI — 12 free preventive healthcare AI tools built for metro-to-village accessibility',
    'Spectre — Geospatial crime analytics platform built for KSP Datathon 2026',
    'Static — Multi-stop EV, fuel & solar highway navigator built for India',
  ],
};
