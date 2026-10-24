export interface RolePitch {
  id: 'fullstack' | 'backend' | 'enterprise' | 'ai';
  label: string;
  badge: string;
  headline: string;
  subheadline: string;
  proofMetric: string;
  proofDetail: string;
  matchedSkills: string[];
  recommendedProject: string;
}

export interface StoryChapter {
  act: string;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  narrative: string;
  takeaway: string;
  metrics: string;
  tags: string[];
}

export interface PhysicsMentalModel {
  number: string;
  physicsLaw: string;
  engineeringEquivalent: string;
  story: string;
  codeImpact: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Cloud' | 'Enterprise & Banking';
  problemStatement: string;
  engineeringSolution: string;
  description: string;
  tags: string[];
  metrics: string;
  github?: string;
  live?: string;
  featured: boolean;
  highlights: string[];
  architecture: string[];
  interactiveType?: 'expense-engine' | 'cookit-ai' | 'banking-sql';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  description: string;
  skills: {
    name: string;
    level: string;
    percentage: number;
    icon: string;
    productionProof: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  storyContext: string;
  beforeAfter: {
    before: string;
    after: string;
    impact: string;
  }[];
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  details: string;
}

export interface InterviewQA {
  id: string;
  question: string;
  category: string;
  shortAnswer: string;
  deepAnswer: string;
  proofLink: string;
}

export const PERSONAL_INFO = {
  name: 'Hritik Kumar',
  displayName: 'Hritik Kumar',
  role: 'Full Stack Web Developer & Software Engineer',
  editorialTitle: 'From Physics First-Principles to Production Software.',
  tagline:
    'I turn complex business rules, 500k+ row banking datasets, and AI workflows into fast, reliable web applications.',
  status: 'Available for Immediate Shortlist • Full-Time & High-Impact Roles',
  email: 'hrithikk733@gmail.com',
  phone: '+91 8292289686',
  phoneDisplay: '+91 82922 89686',
  location: 'Patna, Bihar, India',
  github: 'https://github.com/hritikkk733',
  githubUsername: 'hritikkk733',
  linkedin: 'https://www.linkedin.com/in/hritik-coder',
  whatsapp: 'https://wa.me/918292289686',
  bio: `I am a Full-Stack Web Developer and Software Engineer with a B.Sc. in Physics (First Division) and 1+ year of production experience at Sanjivani Media and Technologies. 

Where most developers only see frameworks, my Physics background trained me to see systems, bottlenecks, and cause-and-effect. Whether I am engineering an 11-module Enterprise Expense Approval System in Next.js 16 & Prisma, optimizing MySQL banking queries for financial institutions, or integrating OpenAI APIs into serverless backends, I build software that is measurable, maintainable, and built for the real world.`,
};

export const ROLE_PITCHES: RolePitch[] = [
  {
    id: 'fullstack',
    label: 'Full-Stack (Next.js / React)',
    badge: '98% Role Match • Frontend + API + ORM',
    headline: 'I architect complete web products—from Prisma database schemas to fluid React 19 interfaces.',
    subheadline:
      'No hand-holding required. I have built multi-module SPAs with Next.js 16, TypeScript, Zustand, Radix UI, and dynamic backend engines.',
    proofMetric: '11-Module Enterprise App Built End-to-End',
    proofDetail: 'Dynamic Approval Rule Engine + RBAC + Audit Logs + Recharts Analytics',
    matchedSkills: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Zustand', 'Radix UI'],
    recommendedProject: 'expense-system',
  },
  {
    id: 'backend',
    label: 'Backend & SQL Performance',
    badge: '96% Role Match • APIs & Data Layer',
    headline: 'I diagnose slow queries, structure clean relational schemas, and build resilient REST APIs.',
    subheadline:
      'In production at Sanjivani Media & Technologies, I write and optimize complex MySQL queries and backend controllers for large-scale financial data.',
    proofMetric: '40%+ Faster Data Reporting Pipelines',
    proofDetail: 'Optimized multi-join MySQL queries & automated routine reporting workflows',
    matchedSkills: ['MySQL', 'Node.js', 'C# / ASP.NET', 'Prisma ORM', 'SQLite / PostgreSQL', 'REST APIs', 'Python'],
    recommendedProject: 'banking-dashboard',
  },
  {
    id: 'enterprise',
    label: 'FinTech & Enterprise Systems',
    badge: '97% Role Match • Banking & Workflows',
    headline: 'I understand real-world enterprise constraints: RBAC, audit trails, and zero-error financial reporting.',
    subheadline:
      'Currently building banking data analysis & regional hierarchy portals in production, where data accuracy and role security are non-negotiable.',
    proofMetric: 'Production Banking Analytics Experience',
    proofDetail: 'Working on financial institution dashboards, Circle/RO masters & dynamic reporting',
    matchedSkills: ['ASP.NET & C#', 'MySQL', 'Chart.js', 'Recharts', 'RBAC Security', 'Audit Trail Architecture'],
    recommendedProject: 'banking-dashboard',
  },
  {
    id: 'ai',
    label: 'AI & Serverless Product Engineer',
    badge: '95% Role Match • LLM Integration',
    headline: 'I turn raw OpenAI capabilities into deterministic, low-latency user products.',
    subheadline:
      'I build serverless Node.js backends on Vercel that transform user images and prompts into structured JSON responses with sub-2s latency.',
    proofMetric: '< 1.8s Serverless AI Response Pipeline',
    proofDetail: 'Built CooKit AI (SnapAI) with OpenAI Vision, structured JSON parsing & edge deployment',
    matchedSkills: ['OpenAI GPT API', 'Node.js', 'Vercel Serverless', 'Prompt Engineering', 'TypeScript', 'Python'],
    recommendedProject: 'cookit-ai',
  },
];

export const STATS = [
  { label: 'Production Experience', value: '1+ Yr', detail: 'At Sanjivani Media & Tech' },
  { label: 'Reporting Time Saved', value: '40%', detail: 'Via SQL & pipeline automation' },
  { label: 'End-to-End Systems', value: '10+', detail: 'Across FinTech, AI & SaaS' },
  { label: 'Physics Honours', value: '1st Div', detail: 'Patliputra University (2023)' },
];

export const PHYSICS_MENTAL_MODELS: PhysicsMentalModel[] = [
  {
    number: 'LAW 01',
    physicsLaw: 'First-Principles Decomposition',
    engineeringEquivalent: 'Root-Cause Debugging & System Design',
    story:
      'In Physics, you never memorize formulas blindly—you derive them from fundamental conservation laws. When a banking dashboard takes 4 seconds to load, I do not slap on a loading spinner; I inspect the SQL execution plan, index cardinality, and payload serialization.',
    codeImpact: 'Reduced multi-table financial report query times by over 40% in production.',
  },
  {
    number: 'LAW 02',
    physicsLaw: 'Entropy & Closed Systems',
    engineeringEquivalent: 'Strict Type-Safety & State Determinism',
    story:
      'Left alone, any physical system moves from order to disorder. Codebases do the same when business rules are scattered. I enforce low entropy using strict TypeScript interfaces, Prisma relational constraints, and centralized Zustand stores.',
    codeImpact: 'Zero runtime schema mismatches across 11 interconnected modules in the Expense Engine.',
  },
  {
    number: 'LAW 03',
    physicsLaw: 'Signal-to-Noise Ratio (SNR)',
    engineeringEquivalent: 'Executive Data Visualization & UX',
    story:
      'In experimental physics, raw sensor data is useless until you filter out the noise. When building dashboards for bank managers and executives, I transform thousands of raw ledger rows into clear Chart.js & Recharts visual narratives.',
    codeImpact: 'Enabled instant anomaly detection across regional banking circles & departmental budgets.',
  },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    act: 'CHAPTER I',
    year: '2018 – 2020',
    title: 'The Quantitative Foundation',
    subtitle: 'CBSE Matriculation (75%) & BSEB Intermediate in Science (74%)',
    location: 'Patna, Bihar',
    narrative:
      'Every engineer has an origin story. Mine started with an obsession for how equations could predict real-world outcomes. Securing First Division honors across both 10th and 12th boards in Mathematics and Science built the mental stamina required for complex problem solving.',
    takeaway: 'Developed strong discipline in mathematics, logic gates, and analytical reasoning.',
    metrics: 'First Division in both 10th & 12th Boards',
    tags: ['Mathematics', 'Physics', 'Logical Reasoning', 'First Division'],
  },
  {
    act: 'CHAPTER II',
    year: '2020 – 2023',
    title: 'The Physics Lens: Seeing the Invisible',
    subtitle: 'B.Sc. in Physics (Honours) — Patliputra University',
    location: 'Patna, Bihar',
    narrative:
      'While studying Physics at Patliputra University (graduating First Division with 70%), I realized that software engineering is applied physics inside a computer. Memory is space, CPU cycles are energy, network hops are friction. I began writing code to automate calculations and fell in love with full-stack web architecture.',
    takeaway: 'Graduated First Class while self-teaching algorithms, DOM architecture, and relational databases.',
    metrics: 'B.Sc. Physics • 70% First Class Honours',
    tags: ['Quantitative Modeling', 'Statistical Mechanics', 'Self-Taught Coder', 'Data Analysis'],
  },
  {
    act: 'CHAPTER III',
    year: '2023',
    title: 'The Engineering Forge',
    subtitle: 'Certified Software Developer — Sanjivani Vikas Foundation',
    location: 'Patna, Bihar',
    narrative:
      'To turn academic logic into industry-grade craftsmanship, I completed intensive software engineering training at Sanjivani Vikas Foundation. Here, I served as Lead Developer on an Enterprise Employee Registration System (C#, ASP.NET, MySQL) and built a Real-Time Event Ticketing Platform.',
    takeaway: 'Mastered full-stack MVC architecture, SQL schema design, and team Git workflows.',
    metrics: 'Shipped 2 Full-Stack Systems as Lead/Core Dev',
    tags: ['C#', 'ASP.NET', 'JavaScript', 'MySQL', 'Bootstrap', 'Git'],
  },
  {
    act: 'CHAPTER IV',
    year: '2023 – Present',
    title: 'In the Production Trenches',
    subtitle: 'Web Developer — Sanjivani Media and Technologies Pvt. Ltd.',
    location: 'Patna, Bihar',
    narrative:
      'Stepping into production software for financial institutions changed everything. I took ownership of banking data analysis dashboards, writing complex MySQL queries, building ASP.NET & JS modules, and automating reporting pipelines. Simultaneously, I mastered the modern TypeScript ecosystem—shipping Next.js 16, React 19, Prisma, and OpenAI-powered applications.',
    takeaway: 'Combining enterprise battle-testing (.NET/MySQL) with modern product velocity (Next.js/TS/AI).',
    metrics: '1+ Year Production Impact • 40% Efficiency Gain',
    tags: ['Next.js 16', 'TypeScript', 'ASP.NET', 'MySQL', 'Chart.js', 'OpenAI API', 'Prisma'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'expense-system',
    number: 'CASE STUDY 01',
    title: 'Enterprise Expense & Dynamic Approval Engine',
    subtitle: '11-Module Financial Workflow SPA with Rule-Driven Multi-Tier Approvals',
    category: 'Full-Stack',
    problemStatement:
      'Organizations struggle when expense approvals are hardcoded: a ₹1,500 cab receipt shouldn’t require CFO sign-off, while a ₹2,00,000 server purchase needs Manager → Finance → Director approval with category overrides.',
    engineeringSolution:
      'I engineered a Priority Rule Engine backed by Prisma ORM & SQLite/PostgreSQL where category-specific rules dynamically override default threshold rules, generating custom multi-step approval chains and immutable audit logs on every action.',
    description:
      'A complete enterprise financial workflow platform featuring 11 integrated modules: Executive Dashboard, Smart Expense Submission, Live Approval Chain Preview, Manager Approval Panel, Admin Rule Builder, User Hierarchy Manager, and Department Analytics.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Prisma ORM', 'Zustand', 'Recharts', 'Radix UI'],
    metrics: '11 Complete Modules • Dynamic Priority Rule Engine • Full Audit Trail',
    github: 'https://github.com/hritikkk733/expense',
    featured: true,
    interactiveType: 'expense-engine',
    highlights: [
      'Smart Approval Engine: Dynamically computes multi-level approver sequences based on Expense Category + Amount Thresholds.',
      'Complete RBAC & Hierarchy: Self-referencing User-Manager Prisma relations with distinct Employee, Manager, and Admin views.',
      'Executive Visual Analytics: Built interactive Recharts dashboards for monthly burn rate, department splits, and status velocity.',
      'Zero-Trust Auditability: Every rule edit, rejection, send-back, and approval writes an immutable record to the AuditLog table.',
    ],
    architecture: [
      'Presentation Layer: Next.js 16 App Router + React 19 + Radix UI primitives + Zustand navigation & session store',
      'Business Logic Layer: Priority Rule Resolver (Category Rules > Default Rules) + File Upload Validator',
      'Persistence Layer: Prisma ORM with 7 relational models (User, Expense, ExpenseCategory, ApprovalRule, ExpenseApproval, AuditLog, Notification)',
    ],
  },
  {
    id: 'cookit-ai',
    number: 'CASE STUDY 02',
    title: 'CooKit AI (SnapAI) — Serverless Culinary Intelligence',
    subtitle: 'AI Vision & Ingredient Recognition Engine Deployed on Vercel Edge',
    category: 'AI & Cloud',
    problemStatement:
      'Users stare at random ingredients in their fridge and waste food because traditional recipe apps require exact dish names rather than reasoning from available raw ingredients and dietary constraints.',
    engineeringSolution:
      'I built a stateless, serverless Node.js backend on Vercel that orchestrates OpenAI multimodal models with strict system prompts to parse raw ingredients or food snapshots into deterministic, structured recipe JSON in under 2 seconds.',
    description:
      'An AI-powered backend service for the CooKit mobile & web ecosystem that analyzes pantry ingredients, detects allergens, suggests smart substitutions, and generates step-by-step culinary instructions with macro-nutrient estimates.',
    tags: ['Node.js', 'Vercel Serverless', 'OpenAI API', 'REST API', 'Prompt Engineering', 'JSON Schema'],
    metrics: 'Sub-2s Cold-Start Latency • Deterministic JSON Output • Zero Idle Cost',
    github: 'https://github.com/hritikkk733/cookit-backend',
    featured: true,
    interactiveType: 'cookit-ai',
    highlights: [
      'Engineered resilient OpenAI API integration in `/api/analyze.js` with structured prompt templates to prevent hallucinated formats.',
      'Configured `vercel.json` serverless routing for instant horizontal scaling and zero server maintenance overhead.',
      'Built automatic dietary adaptation logic (Vegetarian, High-Protein, Low-Carb, Allergy-Safe substitutions).',
      'Designed clean REST contract consumed seamlessly by client frontends with comprehensive error recovery.',
    ],
    architecture: [
      'API Gateway: Vercel Serverless Functions (`api/analyze.js`) with CORS & payload sanitization',
      'Intelligence Layer: OpenAI GPT pipeline with deterministic JSON schema enforcement',
      'Response Contract: Standardized payload returning Dish Metadata, Prep Timeline, Macros, and Step-by-Step Instructions',
    ],
  },
  {
    id: 'banking-dashboard',
    number: 'CASE STUDY 03',
    title: 'Banking Analytics & Regional Hierarchy Portal',
    subtitle: 'High-Volume Financial Reporting & Master Administration Suite',
    category: 'Enterprise & Banking',
    problemStatement:
      'Financial institutions managing hundreds of regional circles, branches, and Business Correspondents (BC) faced slow report generation and fragmented Excel workflows that delayed executive decision-making.',
    engineeringSolution:
      'At Sanjivani Media & Technologies, I co-engineered responsive ASP.NET & JavaScript analytics portals backed by tuned MySQL queries and Chart.js visualizations—automating data aggregation and cutting reporting time by 40%.',
    description:
      'An enterprise banking intelligence platform supporting State/Circle/RO Master administration, transaction velocity tracking, billing & commission reconciliation, and dynamic multi-parameter financial reports.',
    tags: ['ASP.NET', 'C#', 'JavaScript', 'MySQL', 'Chart.js', 'Bootstrap', 'Syncfusion Grid'],
    metrics: '40%+ Faster Report Generation • 500k+ Dataset Query Optimization',
    featured: true,
    interactiveType: 'banking-sql',
    highlights: [
      'Architected interactive financial dashboards using Chart.js and Bootstrap to visualize regional KPIs, liquidity, and commission metrics.',
      'Wrote and optimized complex MySQL queries, joins, and aggregations to process large banking datasets without UI freezes.',
      'Built Master Administration modules (State Master, Circle/RO Master) with strict input validation and operational status controls.',
      'Automated repetitive data handling and reconciliation workflows, freeing analysts from manual spreadsheet compilation.',
    ],
    architecture: [
      'Frontend UI: Responsive Bootstrap + Custom CSS + Chart.js + Syncfusion Data Grids',
      'Application Server: C# / ASP.NET web controllers & business validation services',
      'Data Warehouse: MySQL relational tables with composite indexing for fast date-range & regional filtering',
    ],
  },
  {
    id: 'employee-reg',
    number: 'CASE STUDY 04',
    title: 'Enterprise Employee Onboarding & HR Registry',
    subtitle: 'Role-Based Staff Enrollment & Lifecycle Management System',
    category: 'Enterprise & Banking',
    problemStatement:
      'HR teams were losing hours to manual paper-based employee enrollment, inconsistent credential verification, and slow record lookups.',
    engineeringSolution:
      'Serving as Lead Developer, I designed a centralized C#, ASP.NET, and MySQL registration platform with structured validation and instant search.',
    description:
      'A streamlined HR data management application that digitizes employee onboarding, department assignment, document status tracking, and directory queries.',
    tags: ['C#', 'ASP.NET', 'MySQL', 'HTML5/CSS3', 'Bootstrap'],
    metrics: 'Lead Developer • Reduced HR Onboarding Turnaround from Days to Minutes',
    featured: false,
    highlights: [
      'Led end-to-end database schema design in MySQL and backend CRUD workflows in C# / ASP.NET.',
      'Created intuitive multi-step enrollment forms with real-time client & server validation.',
      'Delivered instant search and filtering for HR personnel to audit employee records effortlessly.',
    ],
    architecture: [
      'UI Layer: Bootstrap responsive forms & searchable data tables',
      'Backend: ASP.NET C# controllers with parameterized SQL queries',
      'Database: Normalized MySQL employee & department schema',
    ],
  },
  {
    id: 'ticketing-platform',
    number: 'CASE STUDY 05',
    title: 'Real-Time Event Ticketing & Customer Hub',
    subtitle: 'Interactive Event Booking & Live Inventory Platform',
    category: 'Full-Stack',
    problemStatement:
      'Event organizers needed a unified web platform to manage ticket tiers, prevent double-bookings, and give attendees instant booking status updates.',
    engineeringSolution:
      'Built an interactive ticketing application combining C#, JavaScript, and third-party API integrations for real-time availability and instant user feedback.',
    description:
      'A customer-facing and admin ticketing portal featuring live seat/tier selection, automated booking confirmation, and sales velocity tracking.',
    tags: ['C#', 'JavaScript', 'Bootstrap', 'HTML5/CSS3', 'REST APIs'],
    metrics: 'Real-Time Inventory Sync • Seamless Booking UX',
    featured: false,
    highlights: [
      'Engineered dynamic JavaScript UI that updates seat availability and pricing tiers in real time.',
      'Integrated third-party APIs for transaction notifications and customer communication.',
      'Built organizer analytics views to monitor ticket sales momentum.',
    ],
    architecture: [
      'Client: Interactive Vanilla JS + Bootstrap 5 responsive layout',
      'Server: C# backend handling concurrency & ticket allocation',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Modern Frontend & UI Engineering',
    subtitle: 'Pixel-perfect, accessible, reactive interfaces',
    description: 'I build interfaces that feel instantaneous, whether complex multi-tab enterprise forms or executive charts.',
    skills: [
      {
        name: 'Next.js 16 & React 19',
        level: 'Production Ready',
        percentage: 92,
        icon: 'Atom',
        productionProof: 'Used to build the 11-module Enterprise Expense SPA with App Router & Server/Client boundaries.',
      },
      {
        name: 'TypeScript & JavaScript (ES6+)',
        level: 'Advanced',
        percentage: 90,
        icon: 'FileCode',
        productionProof: 'Strict end-to-end typing across API payloads, Prisma models, and dynamic DOM dashboards.',
      },
      {
        name: 'Tailwind CSS v4 & Bootstrap',
        level: 'Expert',
        percentage: 95,
        icon: 'Palette',
        productionProof: 'Crafted responsive dark/light enterprise layouts and mobile-adaptive banking portals.',
      },
      {
        name: 'Zustand, Radix UI & Shadcn',
        level: 'Advanced',
        percentage: 90,
        icon: 'Layers',
        productionProof: 'Architected global state navigation and accessible dialog/select/tab primitives.',
      },
    ],
  },
  {
    title: 'Backend, APIs & Enterprise Core',
    subtitle: 'Polyglot server logic & business rule engines',
    description: 'Comfortable across both modern Node/TypeScript stacks and battle-tested enterprise C#/ASP.NET environments.',
    skills: [
      {
        name: 'Node.js & Next.js API Routes',
        level: 'Advanced',
        percentage: 89,
        icon: 'Server',
        productionProof: 'Built full CRUD, session auth, file upload validation, and priority approval engines.',
      },
      {
        name: 'C# & ASP.NET',
        level: 'Production Proven',
        percentage: 85,
        icon: 'Cpu',
        productionProof: 'Used daily at Sanjivani Media & Tech for banking analytics portals & HR registration systems.',
      },
      {
        name: 'Python & Automation Scripting',
        level: 'Proficient',
        percentage: 82,
        icon: 'Terminal',
        productionProof: 'Data parsing, backend utilities, and automating repetitive reporting tasks.',
      },
      {
        name: 'RESTful API & Serverless Edge',
        level: 'Advanced',
        percentage: 90,
        icon: 'Cloud',
        productionProof: 'Deployed low-latency serverless endpoints on Vercel and integrated 3rd-party APIs.',
      },
    ],
  },
  {
    title: 'Databases, SQL & Data Visualization',
    subtitle: 'High-speed queries & actionable charts',
    description: 'Where my Physics degree shines brightest: structuring relational data and surfacing visual insights.',
    skills: [
      {
        name: 'MySQL (Query Tuning & Joins)',
        level: 'Production Proven',
        percentage: 91,
        icon: 'Database',
        productionProof: 'Writing & debugging complex queries across large financial datasets at Sanjivani Media & Tech.',
      },
      {
        name: 'Prisma ORM & SQLite / PostgreSQL',
        level: 'Advanced',
        percentage: 90,
        icon: 'HardDrive',
        productionProof: 'Designed 7-model relational schema with self-relations (User-Manager) and audit logs.',
      },
      {
        name: 'Chart.js, Recharts & Syncfusion',
        level: 'Advanced',
        percentage: 92,
        icon: 'BarChart2',
        productionProof: 'Built interactive banking KPI dashboards, departmental burn charts, and data grids.',
      },
    ],
  },
  {
    title: 'AI Engineering & Developer Workflow',
    subtitle: 'LLM integration & clean shipping habits',
    description: 'Leveraging modern AI capabilities and disciplined version control to ship 3x faster.',
    skills: [
      {
        name: 'OpenAI API & Prompt Engineering',
        level: 'Advanced',
        percentage: 88,
        icon: 'Sparkles',
        productionProof: 'Built CooKit AI (SnapAI) ingredient & vision analyzer with structured JSON outputs.',
      },
      {
        name: 'Git, GitHub & Vercel CI/CD',
        level: 'Advanced',
        percentage: 92,
        icon: 'GitBranch',
        productionProof: 'Clean commit histories, modular branching, and automated cloud deployments.',
      },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Sanjivani Media and Technologies Private Limited',
    role: 'Web Developer / Software Engineer',
    duration: '2023 – Present',
    location: 'Patna, Bihar, India',
    type: 'Full-Time • Production Engineering',
    storyContext:
      'Joined as a full-stack Web Developer focused on financial institution portals, banking data analysis, and enterprise administration systems.',
    beforeAfter: [
      {
        before: 'Analysts spent hours manually compiling regional banking reports from raw database dumps.',
        after: 'Engineered automated dynamic reporting pipelines and interactive Chart.js dashboards.',
        impact: '40%+ reduction in report turnaround time',
      },
      {
        before: 'Complex multi-table MySQL queries caused sluggish page loads on large financial datasets.',
        after: 'Restructured SQL queries, optimized joins, and streamlined ASP.NET / JS data controllers.',
        impact: 'Sub-second dashboard filtering',
      },
      {
        before: 'Legacy desktop-only admin screens hindered field officers and regional managers.',
        after: 'Redesigned UI/UX with responsive Bootstrap & modern CSS layouts across all master modules.',
        impact: '100% mobile & tablet compatibility',
      },
    ],
    description: [
      'Architect and maintain banking data analysis projects, generating dynamic multi-parameter reports tailored to financial institutions.',
      'Develop and optimize full-stack web modules using C#, ASP.NET, modern JavaScript/TypeScript, and responsive CSS frameworks.',
      'Design and implement interactive executive dashboards using Chart.js and Syncfusion Grid to visualize transaction velocity and regional KPIs.',
      'Write, debug, and optimize complex MySQL queries to extract, aggregate, and reconcile large-scale financial datasets accurately.',
      'Collaborate directly with cross-functional domain teams to ensure 100% data integrity for billing, commission, and circle master hierarchies.',
      'Automate repetitive data handling and scheduled reporting tasks, significantly improving daily engineering and operational efficiency.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'C#', 'ASP.NET', 'MySQL', 'Chart.js', 'Syncfusion Grid', 'Bootstrap', 'Git & GitHub', 'REST APIs'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Physics',
    institution: 'Patliputra University, Patna',
    duration: '2020 – 2023',
    grade: 'First Division (70%)',
    details:
      'Graduated with First Class Honours. Trained in mathematical physics, statistical mechanics, and quantitative problem decomposition—forming the analytical bedrock of my software engineering career.',
  },
  {
    degree: 'Higher Secondary / Intermediate (12th — Science)',
    institution: 'Bihar School Examination Board (BSEB)',
    duration: '2018 – 2020',
    grade: 'First Division (74%)',
    details: 'Intensive focus on Physics, Chemistry, and Calculus/Mathematics with First Division distinction.',
  },
  {
    degree: 'Secondary School / Matriculation (10th)',
    institution: 'Central Board of Secondary Education (CBSE)',
    duration: 'Completed 2018',
    grade: 'First Division (75%)',
    details: 'Strong foundation in Science, Mathematics, and Computer Fundamentals.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Certified Software Developer',
    issuer: 'Sanjivani Vikas Foundation',
    date: 'Verified Credential',
    details:
      'Intensive hands-on certification covering Full-Stack Web Development (C#, ASP.NET, JavaScript, MySQL), Relational Database Architecture, and Production Project Delivery.',
  },
];

export const INTERVIEW_QA: InterviewQA[] = [
  {
    id: 'qa-physics',
    category: 'Mindset & Background',
    question: 'Why did you transition from a B.Sc. in Physics to Full-Stack Software Engineering?',
    shortAnswer: 'Physics taught me how to model complex systems; Software Engineering lets me build them for thousands of users.',
    deepAnswer:
      'In Physics, you learn to take a messy real-world phenomenon, isolate the governing variables, and express it as a clean mathematical system. When I started programming during my degree at Patliputra University, I realized software architecture is identical—except you get instant feedback. My Physics training is why I naturally gravitate toward complex business rule engines (like my dynamic Expense Approval Engine) and SQL query optimization rather than just surface-level styling.',
    proofLink: '#story',
  },
  {
    id: 'qa-bottleneck',
    category: 'Backend & SQL',
    question: 'Tell me about a real production bottleneck you diagnosed and solved.',
    shortAnswer: 'Optimized multi-table MySQL financial reporting queries at Sanjivani Media & Tech, cutting report time by 40%+.',
    deepAnswer:
      'While working on banking data analysis dashboards, regional performance reports were slowing down as transaction rows scaled into the hundreds of thousands. Instead of paginating away the problem, I profiled the underlying MySQL queries, eliminated redundant correlated subqueries, introduced targeted composite filtering, and streamlined payload serialization to Chart.js. Report generation dropped from several seconds to sub-second responsiveness.',
    proofLink: '#experience',
  },
  {
    id: 'qa-complex-logic',
    category: 'System Architecture',
    question: 'Walk me through the most complex business logic you have built from scratch.',
    shortAnswer: 'A Priority-Based Dynamic Approval Engine in Next.js 16 & Prisma that routes expenses across multi-tier hierarchies.',
    deepAnswer:
      'In my Enterprise Expense Management System, approval chains couldn’t be static. I designed a rule engine in TypeScript + Prisma where rules can be global (by amount range) or category-specific (e.g., Travel vs. Hardware). When an employee submits an expense, the engine evaluates category overrides first, falls back to default amount tiers, resolves the employee’s self-referencing manager tree, and generates sequential ExpenseApproval records with full AuditLog tracking.',
    proofLink: '#projects',
  },
  {
    id: 'qa-polyglot',
    category: 'Tech Stack Adaptability',
    question: 'You have worked with both C#/ASP.NET and Next.js/TypeScript/Node. How do you switch between them?',
    shortAnswer: 'Frameworks change syntax, but HTTP lifecycles, relational ACID properties, and state management remain universal.',
    deepAnswer:
      'Working in C# and ASP.NET at Sanjivani gave me deep respect for strong typing, structured MVC controllers, and enterprise security. When building in Next.js 16, React 19, and TypeScript, I bring that exact same architectural discipline—using Zod/TypeScript for strict contracts and Prisma for type-safe data access. Because I understand the underlying fundamentals, I can ramp up on any stack—Java, Go, Python, or .NET—in days.',
    proofLink: '#skills',
  },
  {
    id: 'qa-first30',
    category: 'Hiring & Onboarding',
    question: 'If we shortlist and hire you, what does your first 30 days on our engineering team look like?',
    shortAnswer: 'Week 1: Ship a bug fix to production. Week 2: Own a feature module. Day 30: Automate a team pain point.',
    deepAnswer:
      'In Week 1, I map your database schema, run the stack locally, read the PR history, and ship my first production bug fix or UI polish. By Week 2, I take full ownership of a feature ticket end-to-end (database migration → API route → frontend UI). By Day 30, I aim to identify and automate at least one recurring bottleneck—whether a slow SQL query, a flaky workflow, or a missing internal dashboard.',
    proofLink: '#shortlist',
  },
];
