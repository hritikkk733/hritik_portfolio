export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'AI & Cloud' | 'Enterprise & Banking';
  tags: string[];
  metrics?: string;
  github?: string;
  live?: string;
  featured: boolean;
  highlights: string[];
  architecture?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    percentage: number;
    icon: string;
    highlight?: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
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

export const PERSONAL_INFO = {
  name: 'Hritik Kumar',
  displayName: 'Hritik Kumar',
  role: 'Full Stack Web Developer & Software Engineer',
  tagline: 'Crafting responsive, high-performance web applications, intelligent AI integrations, and scalable enterprise architectures.',
  status: 'Open to Full-Time Roles & High-Impact Projects',
  email: 'hrithikk733@gmail.com',
  phone: '+91 8292289686',
  phoneDisplay: '+91 82922 89686',
  location: 'Patna, Bihar, India',
  github: 'https://github.com/hritikkk733',
  githubUsername: 'hritikkk733',
  linkedin: 'https://www.linkedin.com/in/hritik-coder',
  whatsapp: 'https://wa.me/918292289686',
  bio: `I am a detail-oriented, passionate Full-Stack Web Developer and Software Engineer with solid hands-on experience in building scalable web applications, real-time data dashboards, AI-powered backends, and enterprise workflow solutions. 

With a strong analytical foundation holding a B.Sc. in Physics (First Class) from Patliputra University, I combine mathematical problem-solving with cutting-edge web technologies like React, Next.js, TypeScript, Node.js, Python, and SQL databases. I thrive in transforming complex business requirements into intuitive, elegant, and secure digital products.`,
};

export const STATS = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Core Technologies', value: '15+' },
  { label: 'Query & Workflow Speedup', value: '40%' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, pixel-perfect user interfaces with modern frameworks.',
    skills: [
      { name: 'React.js / Next.js', level: 'Advanced', percentage: 92, icon: 'Atom', highlight: 'App Router, Server Actions, SSR' },
      { name: 'TypeScript / JavaScript', level: 'Advanced', percentage: 90, icon: 'FileCode', highlight: 'ES6+, Type Safety, Generics' },
      { name: 'Tailwind CSS', level: 'Expert', percentage: 95, icon: 'Palette', highlight: 'Modern v4, Glassmorphism, Micro-animations' },
      { name: 'Zustand & Context API', level: 'Proficient', percentage: 88, icon: 'Cpu', highlight: 'Global State Management' },
      { name: 'Radix UI & Shadcn/UI', level: 'Advanced', percentage: 92, icon: 'Layout', highlight: 'Accessible Headless Components' },
      { name: 'Bootstrap & HTML5/CSS3', level: 'Expert', percentage: 94, icon: 'Code', highlight: 'Cross-browser responsive styling' },
    ],
  },
  {
    title: 'Backend & Server Architecture',
    description: 'Designing scalable RESTful APIs, microservices, and serverless backends.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', percentage: 88, icon: 'Server', highlight: 'RESTful APIs, Middleware, JWT Auth' },
      { name: 'Python', level: 'Proficient', percentage: 82, icon: 'Terminal', highlight: 'Data Processing, Scripting, Automation' },
      { name: 'C# & ASP.NET', level: 'Proficient', percentage: 80, icon: 'Layers', highlight: 'Enterprise solutions, MVC, Business Logic' },
      { name: 'Vercel Serverless', level: 'Advanced', percentage: 86, icon: 'Cloud', highlight: 'Edge Functions, Instant Scaling' },
      { name: 'REST API Design', level: 'Advanced', percentage: 90, icon: 'Network', highlight: 'Clean standards, Rate Limiting, OpenAPI' },
    ],
  },
  {
    title: 'Databases & ORM',
    description: 'Structuring relational schemas, writing high-performance queries, and data pipelines.',
    skills: [
      { name: 'Prisma ORM', level: 'Advanced', percentage: 90, icon: 'Database', highlight: 'Data modeling, Migrations, Relations' },
      { name: 'MySQL', level: 'Advanced', percentage: 88, icon: 'Table', highlight: 'Complex queries, Indexing, Optimization' },
      { name: 'PostgreSQL / SQLite', level: 'Proficient', percentage: 85, icon: 'HardDrive', highlight: 'Relational data modeling, ACID' },
      { name: 'Data Reporting & Aggregation', level: 'Advanced', percentage: 87, icon: 'BarChart2', highlight: 'Banking & Financial metrics pipelines' },
    ],
  },
  {
    title: 'AI, Analytics & Developer Tools',
    description: 'Leveraging AI capabilities, rich visual dashboards, and streamlined developer workflows.',
    skills: [
      { name: 'OpenAI API & AI Integration', level: 'Proficient', percentage: 85, icon: 'Sparkles', highlight: 'GPT-4o, Prompt Engineering, Vision' },
      { name: 'Recharts & Chart.js', level: 'Advanced', percentage: 88, icon: 'PieChart', highlight: 'Interactive data visualization & trends' },
      { name: 'Git & GitHub Workflows', level: 'Advanced', percentage: 90, icon: 'GitBranch', highlight: 'Branching, CI/CD, Team collaboration' },
      { name: 'Postman & API Testing', level: 'Advanced', percentage: 88, icon: 'CheckCircle', highlight: 'Endpoint testing, mocking, assertions' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'expense-system',
    title: 'Enterprise Expense & Dynamic Approval System',
    subtitle: 'Comprehensive financial workflow platform with dynamic multi-tier approval rules',
    description: 'A full-stack, enterprise-grade Expense Management application featuring a custom rule engine for dynamic approval chains, role-based security, automated audit logging, receipt validations, and comprehensive analytical reporting.',
    category: 'Full-Stack',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'SQLite', 'Zustand', 'Recharts', 'Radix UI'],
    metrics: 'Dynamic multi-level approval rules engine + automated audit log',
    github: 'https://github.com/hritikkk733/expense',
    featured: true,
    highlights: [
      'Engineered dynamic smart approval engine where expense category + threshold amount dynamically generates approver sequence (Manager, Finance, Director).',
      'Implemented 11 comprehensive modules including Dashboard, Submit Expense, My Expenses, Approval Panel, Admin Users, Rules Builder, and Audit Logs.',
      'Interactive executive dashboards visualizing departmental breakdown, monthly spending curves, and status distributions via Recharts.',
      'Role-Based Access Control (RBAC) securely separating Employee, Manager, and Administrator permissions with full audit trail.',
    ],
    architecture: [
      'Frontend: Next.js 16 App Router + Tailwind CSS + Radix UI + Zustand',
      'Backend: Next.js REST API routes + dynamic rules execution engine',
      'Database: Prisma ORM with relational schema (Users, Expenses, ApprovalRules, AuditLogs)',
    ],
  },
  {
    id: 'cookit-ai',
    title: 'CooKit AI – Smart Culinary Assistant & Recipe Analyzer',
    subtitle: 'AI-driven recipe generator and ingredient recognition engine',
    description: 'An AI-powered culinary companion backend that allows users to snap or list available ingredients to receive customized recipes, dietary adaptations, step-by-step cooking techniques, and nutritional breakdowns in seconds.',
    category: 'AI & Cloud',
    tags: ['Node.js', 'Vercel Serverless', 'OpenAI API', 'REST API', 'JavaScript'],
    metrics: 'Sub-2s response latency with serverless function architecture',
    github: 'https://github.com/hritikkk733/cookit-backend',
    featured: true,
    highlights: [
      'Integrated OpenAI Vision & Language models to analyze food images and extract pantry ingredient lists.',
      'Built serverless REST API endpoints deployed on Vercel for high availability and zero idle-cost scaling.',
      'Structured JSON output formatting for consistent frontend rendering of preparation times, difficulty, and nutritional values.',
      'Handled dietary restrictions, allergy warnings, and automated ingredient substitutes.',
    ],
    architecture: [
      'Runtime: Node.js serverless functions on Vercel',
      'AI Integration: OpenAI GPT-4 API with prompt engineering & JSON schema validation',
      'Security: API rate-limiting and secure environment key isolation',
    ],
  },
  {
    id: 'banking-dashboard',
    title: 'Banking Analytics & Dynamic Reporting Engine',
    subtitle: 'High-performance financial metric reporting suite for financial institutions',
    description: 'An interactive enterprise reporting platform built for banking operations to visualize liquidity, transaction flows, and critical financial metrics with high query performance across large datasets.',
    category: 'Enterprise & Banking',
    tags: ['ASP.NET', 'C#', 'JavaScript', 'Chart.js', 'Bootstrap', 'MySQL'],
    metrics: 'Optimized complex query execution across 500k+ financial records',
    featured: true,
    highlights: [
      'Developed and optimized full-stack software modules using C#, ASP.NET, and modern JavaScript.',
      'Designed responsive financial dashboards using Chart.js to visualize daily transaction trends, loan portfolios, and risk indices.',
      'Wrote and fine-tuned complex MySQL queries, subqueries, and indexes to extract and aggregate critical data in real time.',
      'Streamlined automated reporting workflows, reducing manual report compilation time for banking analysts by over 40%.',
    ],
  },
  {
    id: 'employee-reg',
    title: 'Enterprise Employee Registration & Lifecycle System',
    subtitle: 'Secure HR enrollment and document management platform',
    description: 'A complete employee onboarding and credential administration platform facilitating paperless onboarding, document tracking, profile management, and granular permission handling.',
    category: 'Enterprise & Banking',
    tags: ['C#', 'ASP.NET', 'MySQL', 'REST APIs', 'Bootstrap'],
    metrics: 'Streamlined onboarding turnaround time from days to minutes',
    featured: false,
    highlights: [
      'Led the development of a user-friendly system for employee enrollment, verification, and profile management.',
      'Constructed role-based authentication and secure data models using MySQL and ASP.NET.',
      'Delivered responsive, clean administrative UI with real-time field validation and file attachments.',
    ],
  },
  {
    id: 'ticketing-platform',
    title: 'Real-Time Event Ticketing & Reservation Platform',
    subtitle: 'Interactive booking application with live seating & status updates',
    description: 'An event ticketing platform enabling users to browse upcoming events, choose reserved seating, process transactions, and receive instant digital tickets with QR verification.',
    category: 'Full-Stack',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'MySQL'],
    metrics: 'Instant confirmation & real-time inventory synchronization',
    featured: false,
    highlights: [
      'Engineered interactive event discovery and seat selection interface with live availability indicators.',
      'Connected payment gateway endpoints and simulated confirmation flows with real-time UI status updates.',
      'Created an administrative backend for event organizers to monitor ticket sales velocity and attendance rates.',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Sanjivani Media and Technologies Private Limited',
    role: 'Web Developer / Software Engineer',
    duration: '2023 – Present',
    location: 'Patna, Bihar, India',
    type: 'Full-Time',
    description: [
      'Work on enterprise banking data analysis projects, generating dynamic multi-parameter reports and tailored financial software solutions.',
      'Develop and optimize full-stack software applications using modern JavaScript/TypeScript, ASP.NET, and C#.',
      'Design and implement interactive data dashboards using Chart.js, Recharts, and Bootstrap/Tailwind to visualize mission-critical metrics.',
      'Write, test, and optimize complex queries and stored procedures in MySQL to extract, aggregate, and manage large-scale datasets efficiently.',
      'Collaborate closely with cross-functional product and domain teams to ensure high data precision and actionable business intelligence.',
      'Significantly improve dashboard UI/UX by implementing responsive mobile-first layouts, accessible components, and smooth micro-interactions.',
      'Actively automate routine data workflows and reporting schedules, driving substantial efficiency gains across technical operations.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'C#', 'ASP.NET', 'MySQL', 'Chart.js', 'Bootstrap', 'REST APIs', 'Git'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Physics',
    institution: 'Patliputra University',
    duration: '2020 – 2023',
    grade: 'First Division (70%)',
    details: 'Rigorous training in quantitative reasoning, mathematical modeling, analytical problem decomposition, and statistical mechanics.',
  },
  {
    degree: 'Higher Secondary / Intermediate (12th)',
    institution: 'Bihar School Examination Board (BSEB)',
    duration: '2018 – 2020',
    grade: 'First Division (74%)',
    details: 'Physics, Chemistry, and Mathematics curriculum with emphasis on problem solving.',
  },
  {
    degree: 'Secondary School / Matriculation (10th)',
    institution: 'Central Board of Secondary Education (CBSE)',
    duration: 'Completed 2018',
    grade: 'First Division (75%)',
    details: 'Foundational education in Computer Fundamentals, Science, and Mathematics.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Certified Software Developer',
    issuer: 'Sanjivani Vikas Foundation',
    date: 'Certified',
    details: 'Comprehensive professional training in Full-Stack Web Development, OOP, Relational Databases, and Industry-standard software engineering practices.',
  },
];
