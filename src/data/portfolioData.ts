import heroCharacterImg from '../assets/images/hero_aditya_character_1794828353483.jpg';
import heroFullBodyImg from '../assets/images/hero_aditya_fullbody_1794836493877.jpg';
import hobbySneakerImg from '../assets/images/hobby_sneaker_stack_1794836494684.jpg';
import hobbyMusicImg from '../assets/images/hobby_music_headphones_1794836494712.jpg';
import hobbyVideoImg from '../assets/images/hobby_video_editing_1794836495710.jpg';
import hobbyCreatorImg from '../assets/images/hobby_creator_studio_1794836495154.jpg';
import avatarSubhranshu from '../assets/images/avatar_subhranshu_dash_1794835060566.jpg';
import avatarKarthikeya from '../assets/images/avatar_karthikeya_varma_1794835061948.jpg';
import avatarRohan from '../assets/images/avatar_rohan_kulkarni_1794835062875.jpg';
import heroCatAvatarImg from '../assets/images/hero_aditya_cat_shoulder_1794878555947.jpg';

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
  secondaryImage?: string;
  secondaryImageCaption?: string;
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
  previewType?: 'static';
  logoUrl?: string;
  logoBg?: string;
  iconBg: string;
  iconType: 'health' | 'shield' | 'bolt' | 'learn';
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
  category: 'AI Products' | 'Flagships';
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
export const HERO_AVATAR_URL = heroCatAvatarImg;
export const FOOTER_MEADOW_URL = '/assets/collected/footer-aditya-nobg.png';

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
  headline: 'DESIGNER & DEVELOPER | UI/UX | BUILDING SOLUTIONS THAT SCALE',
  email: 'adityaduggiralaone.in@gmail.com',
  portfolio: 'https://adityaduggiralame.lovable.app',
  githubPrimary: 'https://github.com/adityalenova',
  githubSecondary: 'https://github.com/adityaduggiralaonein-dot',
  linkedin: 'https://www.linkedin.com/in/iadityaoffl/',
  twitter: 'https://x.com/iaditya_offical',
  location: 'Hyderabad, India',
  university: 'VNR Vignana Jyothi Institute of Engineering & Technology (VNRVJIET)',
  degree: 'B.E., Electrical, Electronics & Communications Engineering',
  resumePdfUrl: '/assets/aistudio/Aditya_Duggirala_Professional_Resume-4_86511f4c.pdf',
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
  { value: '500+', label: 'Connections on LinkedIn' },
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
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.49.40_590a5e89.png',
    caseStudyId: 'genesis',
  },
  {
    id: 'folder-nirogi',
    title: 'Nirogi AI',
    subtitle: '9 Preventive AI Tools',
    image: '/assets/collected/live-nirogi.png',
    caseStudyId: 'nirogi-selected',
  },
  {
    id: 'folder-spectre',
    title: 'Spectre',
    subtitle: 'Crime Intelligence',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.12_976a74ad.png',
    caseStudyId: 'spectre-selected',
  },
  {
    id: 'folder-raakha',
    title: 'Raakha Grace',
    subtitle: 'Handcrafted Jewellery D2C',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.48.23_8c52280f.png',
    caseStudyId: 'raakha-selected',
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
    id: 'raakha-selected',
    slug: 'raakha-grace',
    title: 'Raakha Grace',
    shortTitle: 'Raakha Grace',
    category: 'Brand & Studio',
    year: '2026',
    headline: 'Crafting an editorial luxury jewellery storefront for Raakha Grace',
    summary:
      'Designed and engineered a warm heirloom D2C storefront for handcrafted Indian jewellery light on the skin, complete with signature lotus brand identity, collection filtering, interactive concierge FAQ, and pan-India checkout flows.',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.48.23_8c52280f.png',
    imageAlt: 'Official live hero screenshot of Raakha Grace handcrafted jewellery website',
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
    headline: 'Nine free preventive-healthcare AI tools built for everyday Indian households',
    summary:
      'Built for the Redrob × Hack2skill hackathon, Nirogi AI delivers nine free preventive-healthcare tools in one clear interface: medicine safety checks, skin scan, meal & sugar analysis, cancer, diabetes & heart-risk screening, scan/report reader, and medicine verification.',
    image: '/assets/collected/live-nirogi.png',
    imageAlt: 'Official live hero screenshot of Nirogi AI preventive health operating system',
    accentBackdrop: 'from-[#065F46] to-[#022C22]',
    liveUrl: 'https://nirogi-healthai.lovable.app',
    repoUrl: 'https://github.com/adityalenova/nirogi-healthai',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'Supabase', 'Lovable'],
    metrics: [
      { label: 'AI Health Tools', value: '9 Suites' },
      { label: 'Access Cost', value: '100% Free' },
      { label: 'Hackathon', value: 'Redrob × H2S' },
      { label: 'Screening Flow', value: '< 5 mins' },
    ],
    problem:
      'Preventive conditions—like painkiller interactions, skin anomalies, glycemic spikes, or silent cardiac risks—often go undetected across households due to diagnostic cost, complex medical reports, and language barriers.',
    architecture: [
      'Modularized 9 focused AI tools covering medicine safety checks, skin scan, meal & sugar analysis, cancer/diabetes/heart-risk screening, and CDSCO-aware medicine verification.',
      'Built an intelligent scan and lab-report reader translating medical jargon into calm, plain-language action steps.',
      'Designed accessible mobile-first cards so family members can run a screening in minutes without clinical literacy.',
    ],
    outcome:
      'Built for Redrob × Hack2skill as an everyday preventive-healthcare companion connecting early risk signals to timely medical guidance.',
  },
  {
    id: 'static-selected',
    slug: 'static-ev-navigator',
    title: 'Static',
    shortTitle: 'Static',
    category: 'Civic & Health',
    year: '2026',
    headline: 'Planning multi-stop Indian EV highway routes with live charger specs & GPS rerouting',
    summary:
      'EV, fuel, and solar trip planner for India featuring chargers, fuel stations, and highway food stops along the route, AI range risk scoring, and in-app GPS navigation with voice and live rerouting.',
    image: '/assets/collected/live-static-cropped.png',
    imageAlt: 'Official live hero screenshot of Static EV and solar route planner featuring vehicle telemetry',
    accentBackdrop: 'from-[#166534] to-[#052E16]',
    liveUrl: 'https://static-chargepoint.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/static-chargepoint',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'AI Risk Scoring', 'In-App Voice GPS', 'Solar Sizing'],
    metrics: [
      { label: 'Navigation', value: 'Voice GPS' },
      { label: 'Route Stops', value: 'EV + Fuel + Food' },
      { label: 'Energy Planner', value: 'EV + Solar' },
      { label: 'Coverage', value: 'Indian Highways' },
    ],
    problem:
      'Intercity EV drivers across India struggle with unreliable charger compatibility data, unexpected range anxiety on highway stretches, and fragmented discovery of fuel and highway food stops.',
    architecture: [
      'Built an interactive multi-stop highway checkpoint planner scoring battery state-of-charge (SoC) risk across every leg.',
      'Added in-app GPS navigation with voice guidance, live rerouting, and verified highway EV, fuel, and food pitstops.',
      'Integrated a solar panel and home battery energy sizing calculator tailored for everyday EV charging.',
    ],
    outcome:
      'Shipped a practical clean-mobility SaaS companion uniting live route navigation, charger transparency, and solar autonomy.',
  },
  {
    id: 'beyondhuman-selected',
    slug: 'beyondhuman-health',
    title: 'BeyondHuman',
    shortTitle: 'BeyondHuman',
    category: 'AI Systems',
    year: '2026',
    headline: 'Adaptive hypertrophy splits and Indian meal macro intelligence in BeyondHuman',
    summary:
      'A personal fitness and nutrition operating system combining adaptive hypertrophy programming, daily recovery metrics, and conversational meal analysis tuned for Indian home-cooked food.',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.41_981fd069.png',
    imageAlt: 'Official live hero screenshot of BeyondHuman adaptive health and workout AI application',
    accentBackdrop: 'from-[#1D4ED8] to-[#172554]',
    liveUrl: 'https://beyondhuman-healthai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/beyondhuman-healthai',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Adaptive Training Engine', 'Meal Macro AI'],
    metrics: [
      { label: 'Training Splits', value: 'Progressive' },
      { label: 'Nutrition AI', value: 'Indian Meals' },
      { label: 'Recovery Loop', value: 'Muscle Readiness' },
      { label: 'Platform', value: 'Web OS' },
    ],
    problem:
      'Mainstream fitness apps default to Western food databases and rigid cookie-cutter workout templates that ignore daily recovery and regional Indian meals.',
    architecture: [
      'Engineered progressive-overload workout scheduling that adjusts volume and muscle group focus based on recovery feedback.',
      'Built conversational macro and calorie estimation tuned for home-cooked Indian dishes and daily staples.',
      'Designed a calm, zero-clutter responsive dashboard keeping active sets and nutrition targets one tap away.',
    ],
    outcome:
      'Delivered a focused personal health OS uniting intelligent training progression with realistic nutrition tracking.',
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
      'AI crime-intelligence platform for Karnataka State Police (KSP Datathon 2026): crime trend engine, hotspot detection and maps, 0–100 risk scoring, plain-English AI briefings, real-time alert engine, and printable district reports.',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.12_976a74ad.png',
    imageAlt: 'Official live hero screenshot of Spectre CrimeWatch AI intelligence dashboard',
    accentBackdrop: 'from-[#18181B] to-[#09090B]',
    liveUrl: 'https://spectre-crimeai.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/spectre-crimeai',
    stack: ['React', 'TypeScript', 'Google Maps API', '0–100 Risk Scoring', 'Plain-English Briefings', 'Alert Engine'],
    metrics: [
      { label: 'Hackathon', value: 'KSP Datathon' },
      { label: 'Risk Engine', value: '0–100 Score' },
      { label: 'Output Formats', value: 'District Reports' },
      { label: 'Alert Pipeline', value: 'Real-Time' },
    ],
    problem:
      'Law enforcement analysts deal with fragmented spreadsheets and delayed incident feeds, making rapid cross-sector pattern recognition and district-level reporting difficult during active operations.',
    architecture: [
      'Constructed a crime trend engine with hotspot detection maps and automated 0–100 sector risk scoring.',
      'Generated plain-English AI briefings tailored to officer ranks alongside printable district intelligence reports.',
      'Wired automated alert dispatches and real-time threshold notifications.',
    ],
    outcome:
      'Delivered an end-to-end civic intelligence prototype built for Karnataka State Police & KSP Datathon 2026 evaluation.',
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
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.49.40_590a5e89.png',
    imageAlt: 'Official live hero screenshot of Genesis autonomous multi-model AI research platform',
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
];

export const AI_BUILD_PROJECTS: AIBuildProject[] = [
  {
    id: 'nirogi',
    title: 'Nirogi AI — Preventive Health OS',
    tagline: 'Nine free preventive-healthcare AI tools (Redrob × Hack2skill)',
    description:
      'Free preventive-healthcare platform featuring nine focused AI tools: medicine safety checks, skin scan, meal and sugar analysis, cancer, diabetes and heart-risk screening, scan/report reader, and medicine verification.',
    highlights: [
      'Nine AI screening suites from medicine safety checks to report summaries',
      'Built for non-English & metro-to-village accessibility with zero paywalls',
      'Developed during the Redrob × Hack2skill Hackathon',
    ],
    image: '/assets/collected/live-nirogi.png',
    imageAlt: 'Official live screenshot of Nirogi AI preventive health operating system',
    iconBg: 'bg-[#065F46]',
    iconType: 'health',
    liveUrl: 'https://nirogi-healthai.lovable.app',
    repoUrl: 'https://github.com/adityalenova/nirogi-healthai',
    eventLabel: 'Redrob × Hack2skill',
    caseStudyId: 'nirogi-selected',
  },
  {
    id: 'static',
    title: 'Static — EV, Fuel & Solar Navigator',
    tagline: 'Multi-stop clean mobility & in-app GPS highway planner across India',
    description:
      'EV, fuel, and solar trip planner for India mapping chargers, fuel stations, and highway food stops along the route with AI risk scoring and in-app GPS navigation with voice and live rerouting.',
    highlights: [
      'AI range risk scoring with charger specs, fuel stations & highway food stops',
      'In-app GPS navigation featuring voice turn-by-turn & live rerouting',
      'Includes personal EV garage & solar panel energy storage calculator',
    ],
    image: '/assets/collected/live-static-cropped.png',
    imageAlt: 'Official live screenshot of Static EV and solar route planner featuring vehicle telemetry',
    previewType: 'static',
    logoUrl: '/assets/collected/logos/app-static.png',
    logoBg: 'bg-[#0C0E12]',
    iconBg: 'bg-[#16A34A]',
    iconType: 'bolt',
    liveUrl: 'https://static-chargepoint.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/static-chargepoint',
    eventLabel: 'Clean Mobility SaaS',
    caseStudyId: 'static-selected',
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
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.41_981fd069.png',
    imageAlt: 'Official live screenshot of BeyondHuman adaptive health and workout AI application',
    logoUrl: '/assets/collected/logos/app-beyondhuman.svg',
    logoBg: 'bg-[#0D1117]',
    iconBg: 'bg-[#2563EB]',
    iconType: 'health',
    liveUrl: 'https://beyondhuman-healthai.lovable.app/',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/beyondhuman-healthai',
    eventLabel: 'Health & Fitness AI',
    caseStudyId: 'beyondhuman-selected',
  },
  {
    id: 'spectre',
    title: 'Spectre — CrimeWatch AI',
    tagline: 'AI crime-intelligence platform for Karnataka State Police',
    description:
      'Built for KSP Datathon 2026 (Karnataka State Police), featuring a crime trend engine, hotspot detection and maps, 0–100 risk scoring, plain-English AI briefings, an alert engine, and printable district reports.',
    highlights: [
      'Crime trend engine, hotspot maps & 0–100 automated sector risk scoring',
      'Plain-English AI briefings, alert triggers & printable district reports',
      'Engineered for Karnataka State Police (KSP Datathon 2026)',
    ],
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.12_976a74ad.png',
    imageAlt: 'Official live screenshot of Spectre CrimeWatch AI intelligence dashboard',
    logoUrl: '/assets/collected/logos/app-spectre.png',
    logoBg: 'bg-[#0E110E]',
    iconBg: 'bg-[#1F2937]',
    iconType: 'shield',
    liveUrl: 'https://spectre-crimeai.lovable.app',
    repoUrl: 'https://github.com/adityaduggiralaonein-dot/spectre-crimeai',
    eventLabel: 'KSP Datathon 2026',
    caseStudyId: 'spectre-selected',
  },
  {
    id: 'genesis-build',
    title: 'Genesis — Autonomous Research Loop',
    tagline: 'Multi-model orchestration across Claude, GPT & Gemini',
    description:
      'An always-on research engine that gathers context from prior runs, routes tasks to the strongest model, validates outputs inside a sandbox, and tracks full audit trails before human sign-off.',
    highlights: [
      'Routes synthesis, code validation & critique across 3 frontier AI families',
      'Deterministic sandbox execution before any hypothesis closes',
      'Immutable exchange log built for reproducible technical research',
    ],
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.49.40_590a5e89.png',
    imageAlt: 'Official live screenshot of Genesis autonomous multi-model AI research platform',
    logoUrl: '/assets/collected/logos/app-genesis.png',
    logoBg: 'bg-[#0F1114]',
    iconBg: 'bg-[#1F5C5B]',
    iconType: 'learn',
    liveUrl: 'https://genesis-researchai.vercel.app/',
    repoUrl: 'https://github.com/adityalenova/genesis',
    eventLabel: 'Autonomous Agents',
    caseStudyId: 'genesis',
  },
];

export const EXTRA_CASE_STUDIES: Record<string, CaseStudyProject> = {
  cyrus: {
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
    secondaryImage: '/assets/collected/shot-cyrus-issues.png',
    secondaryImageCaption: 'cyrus.ai Live Issues Explorer indexing 40,017 open issues across 290+ active repositories',
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
};

export const PLAYGROUND_CARDS: PlaygroundCard[] = [
  {
    id: 'pg-raakha',
    title: 'Raakha Grace · Flagship',
    subtitle: 'Handcrafted luxury jewellery',
    category: 'Flagships',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.48.23_8c52280f.png',
    url: 'https://raakhagracecrafted.vercel.app/',
  },
  {
    id: 'pg-nirogi',
    title: 'Nirogi AI',
    subtitle: '9 Preventive Healthcare Tools',
    category: 'AI Products',
    image: '/assets/collected/live-nirogi.png',
    url: 'https://nirogi-healthai.lovable.app',
  },
  {
    id: 'pg-static',
    title: 'Static',
    subtitle: 'EV & Solar Route AI',
    category: 'AI Products',
    image: '/assets/collected/live-static-cropped.png',
    url: 'https://static-chargepoint.lovable.app',
  },
  {
    id: 'pg-beyondhuman',
    title: 'BeyondHuman',
    subtitle: 'Adaptive Fitness AI',
    category: 'AI Products',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.41_981fd069.png',
    url: 'https://beyondhuman-healthai.lovable.app/',
  },
  {
    id: 'pg-spectre',
    title: 'Spectre',
    subtitle: 'Karnataka Police AI',
    category: 'AI Products',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.46.12_976a74ad.png',
    url: 'https://spectre-crimeai.lovable.app',
  },
  {
    id: 'pg-genesis',
    title: 'Genesis · Research AI',
    subtitle: 'Autonomous multi-model loop',
    category: 'AI Products',
    image: '/assets/aistudio/Screenshot_2026-11-16_at_20.49.40_590a5e89.png',
    url: 'https://genesis-researchai.vercel.app/',
  },
  {
    id: 'pg-cyrus-home',
    title: 'cyrus.ai · Discovery',
    subtitle: '40,017 open issues indexed',
    category: 'Flagships',
    image: '/assets/collected/shot-cyrus-home.png',
    url: 'https://cyrus-agent.vercel.app',
  },
  {
    id: 'pg-cyrus-issues',
    title: 'cyrus.ai · Issues Explorer',
    subtitle: '290+ active open-source repos',
    category: 'Flagships',
    image: '/assets/collected/shot-cyrus-issues.png',
    url: 'https://cyrus-agent.vercel.app/issues',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-swoc',
    role: 'Project Administrator',
    organization: 'Social Winter of Code (SWOC)',
    location: 'Remote, India',
    period: 'Nov 2026 — Present',
    type: 'Open Source Leadership',
    summary:
      'Administer open-source projects across SWOC, supporting contributors and maintainers through GitHub and Git workflows.',
    highlights: [
      'Review repository readiness, issue triage, and contributor onboarding workflows across active program tracks.',
      'Coordinate pull-request reviews and maintainer communication using GitHub and Git.',
    ],
  },
  {
    id: 'exp-nsoc',
    role: 'Project Administrator',
    organization: 'Nexus Spring of Code (NSoC)',
    location: 'Remote, India',
    period: 'Oct 2026 — Present',
    type: 'Open Source Leadership',
    summary:
      'Manage open-source projects and contributor workflows, overseeing repositories and pull requests.',
    highlights: [
      'Coordinate repository standards, contribution guidelines, and PR merge pipelines for participating student engineers.',
      'Guide new open-source contributors from issue discovery through clean code reviews.',
    ],
  },
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
      'Shipped live full-stack web apps including cyrus.ai, Genesis, Nirogi AI, Spectre, Static, BeyondHuman, NXTGEN AI, and Raakha Grace.',
      'Architected multi-model workflows routing between Claude API, Google Gemini, and OpenAI with Supabase and Postgres backends.',
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
    role: 'B.E., Electrical, Electronics & Communications Engineering',
    organization: 'VNR Vignana Jyothi Institute of Engineering & Technology (VNRVJIET)',
    location: 'Hyderabad, India',
    period: '2026 — 2030',
    type: 'Engineering & Hardware',
    summary:
      'Pursuing Electronics & Communication Engineering while winning national technical symposium tracks and building AI hardware/software prototypes.',
    highlights: [
      'Won 1st Place in Agentic Arena at CONVERGENCE 2k26 (Krithomedh, VNRVJIET · Sep 2026).',
      'Active across CSI VJ Hackathon, IEI Project Contest, Turing Hut Coding Contest, Top 100 Coders 3.0, and Simulink Challenge.',
    ],
  },
  {
    id: 'exp-hackathons',
    role: 'Civic & National Hackathon Engineer',
    organization: 'KSP Datathon · Redrob × Hack2skill · iQOO · CSI · IEI',
    location: 'India',
    period: '2026',
    type: 'Competitive Prototyping',
    summary:
      'Rapidly translated institutional and civic briefs into working production prototypes under strict hackathon mandates.',
    highlights: [
      'Developed Spectre crime-pattern intelligence for Karnataka State Police (KSP Datathon 2026).',
      'Built Nirogi AI (9 free preventive health tools) for Redrob × Hack2skill and NXTGEN AI for the iQOO Hackathon.',
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
    issuerAccent: 'bg-[#C67848] text-white',
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
    title: 'Simulink Challenge — MATLAB Coding (Convergence 2k26)',
    issuer: 'VNRVJIET · 27th National Level Technical Symposium',
    issuerShort: 'ML',
    issuerAccent: 'bg-[#334155] text-white',
    issuerLogo: '/assets/collected/logos/logo-krithomedh.png',
    date: 'Sep 2026',
    sortOrder: 9,
    category: 'VNRVJIET',
    credentialId: 'CONVERGENCE 2k26 · VNRVJIET',
    skills: ['MATLAB', 'Simulink', 'Simulation Modeling'],
    credentialDetail: 'Official certificate of participation for MATLAB & Simulink simulation challenges at CONVERGENCE 2k26.',
    image: '/assets/collected/cert-simusolve.png',
  },
  {
    id: 'cert-top100',
    title: 'Top 100 Coders 3.0',
    issuer: 'Krithomedh, VNRVJIET',
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
    id: 'cert-hacktoberfest',
    title: 'Certificate of Perfection — Hacktoberfest 2026',
    issuer: 'Hacktoberfest',
    issuerShort: 'HF',
    issuerAccent: 'bg-[#7C3AED] text-white',
    date: 'Oct 2026',
    sortOrder: 11,
    category: 'AI & Coding',
    skills: ['Open-Source Collaboration', 'Git & GitHub'],
    credentialDetail: 'Awarded Certificate of Perfection for verified merged pull requests during Hacktoberfest 2026.',
  },
  {
    id: 'cert-cwpp',
    title: 'Portfolio Making — VJ Data Questers',
    issuer: 'VJ DATA QUESTERS',
    issuerShort: 'DQ',
    issuerAccent: 'bg-[#0D9488] text-white',
    issuerLogo: '/assets/collected/logos/logo-vjdq.png',
    date: '2026',
    sortOrder: 12,
    category: 'VNRVJIET',
    skills: ['Web Interface Design', 'Front-End Development'],
    credentialDetail: 'Recognized for engineering quality, visual architecture, and live web portfolio execution.',
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
    accentBg: 'bg-[#C67848]',
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
  headline: 'DESIGNER & DEVELOPER | UI/UX | BUILDING SOLUTIONS THAT SCALE',
  location: 'Hyderabad, India',
  pdfUrl: '/assets/aistudio/Aditya_Duggirala_Professional_Resume-4_86511f4c.pdf',
  profile:
    'Electronics & Communication Engineering student building at the intersection of technology and creativity. Developer, designer and AI explorer with hands-on experience in front-end development, UI/UX prototyping and open-source program administration. Driven by curiosity and innovation.',
  experience: [
    {
      role: 'Project Administrator',
      org: 'Social Winter of Code (SWOC)',
      period: 'Nov 2026 – Present · Remote, India',
      bullet: 'Administer open-source projects, supporting contributors and maintainers using GitHub and Git.',
    },
    {
      role: 'Project Administrator',
      org: 'Nexus Spring of Code (NSoC)',
      period: 'Oct 2026 – Present · Remote, India',
      bullet: 'Manage open-source projects and contributor workflows, including repositories and pull requests.',
    },
  ],
  education: [
    {
      title: 'B.E., Electrical, Electronics & Communications Engineering',
      institution: 'VNR Vignana Jyothi Institute of Engineering & Technology (VNRVJIET)',
      detail: 'ECE Undergraduate · Hyderabad, India',
    },
    {
      title: 'Class 12',
      institution: 'Sri Chaitanya College of Education',
      detail: 'Grade: 97%',
    },
  ],
  flagshipBuilds: [
    {
      title: 'Nirogi AI – Hackathon (Redrob × Hack2skill)',
      description:
        'Free preventive-healthcare platform with nine AI tools: medicine safety checks, skin scan, meal and sugar analysis, cancer, diabetes and heart-risk screening, scan/report reader and medicine verification.',
      url: 'https://nirogi-healthai.lovable.app',
      displayUrl: 'nirogi-healthai.lovable.app',
    },
    {
      title: 'Spectre – KSP Datathon 2026 (Karnataka State Police)',
      description:
        'AI crime-intelligence platform for law enforcement: crime trend engine, hotspot detection and maps, 0–100 risk scoring, plain-English AI briefings, alert engine and printable district reports.',
      url: 'https://spectre-crimeai.lovable.app',
      displayUrl: 'spectre-crimeai.lovable.app',
    },
    {
      title: 'Static EV Charge – SaaS Product',
      description:
        'EV, fuel and solar trip planner for India: chargers, fuel stations and highway food stops along the route, AI risk scoring, and in-app GPS navigation with voice and live rerouting.',
      url: 'https://static-chargepoint.lovable.app',
      displayUrl: 'static-chargepoint.lovable.app',
    },
    {
      title: 'NXTGEN AI – iQOO Hackathon',
      description:
        'Learning platform that helps curious people turn the world into a learning space (“Learn in motion”).',
      url: 'https://nxtgen-eduai.vercel.app',
      displayUrl: 'nxtgen-eduai.vercel.app',
    },
    {
      title: 'Cyrus AI – SaaS Product',
      description:
        'Open-source contribution program platform that helps contributors find their next contribution.',
      url: 'https://cyrus-agent.vercel.app',
      displayUrl: 'cyrus-agent.vercel.app',
    },
  ],
  skills: {
    design: 'Web Interface Design, User Interface Prototyping, UI/UX',
    development: 'Web & Front-End Development, Python, TypeScript, JavaScript, HTML, C, MATLAB, Simulink',
    tools: 'GitHub, Git, VS Code, Lovable, Figma, Supabase, PostgreSQL, Vercel, Deno',
    aiAndOther: 'Claude, Gemini & OpenAI APIs, Prompt Engineering, Vibe Coding, Open-Source Collaboration, Project Management',
  },
  achievements: [
    '1st Place – Certificate of Achievement, Convergence 2k26: Agentic Arena – Krithomedh, VNRVJIET · Sep 2026',
    'Certificate of Perfection – Hacktoberfest · 2026',
  ],
  courseCompletions: [
    'Certificate of Completion – Claude Academy: Introduction to Claude Cowork – Anthropic · Nov 2026',
    'Certificate of Completion – Claude Academy: Claude 101 – Anthropic · Nov 2026',
    'Certificate of Completion – C Fundamentals – Coddy · Nov 2026',
  ],
  participation: [
    'Certificate of Participation – Top 100 Coders 3.0 – Krithomedh, VNRVJIET · 2026',
    'Certificate of Participation – Coding Contest Convergence 2K26 – Turing Hut · Oct 2026',
    'Certificate of Participation – Convergence 2k26: Project Contest – The Institution of Engineers (India) · Oct 2026',
    'Certificate of Participation – Software Hackathon Convergence 2k26 – VJ Data Questers · Sep 2026',
    'Certificate of Participation – VJ Hackathon 2026 – Computer Society of India, VNRVJIET · Oct 2026',
    'Certificate of Participation – Portfolio Making – VJ Data Questers',
    'Certificate of Participation – Simulink Challenge – MATLAB Coding · Sep 2026',
  ],
  declaration: {
    statement: 'I hereby declare that the information furnished above is true and correct to the best of my knowledge and belief.',
    place: 'Hyderabad',
    date: '12 November 2026',
  },
};
