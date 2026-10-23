import React from 'react';
import { 
  Zap, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Languages, 
  Briefcase,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Zap,
      title: 'Performance-First Engineering',
      desc: 'Architecting fast, lightweight applications with optimized SQL queries, dynamic server-side rendering, and efficient client states.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: BrainCircuit,
      title: 'Analytical & Mathematical Foundation',
      desc: 'Leveraging a B.Sc. in Physics to approach software development with deep quantitative logic, systematic debugging, and algorithmic structure.',
      color: 'from-indigo-500 to-cyan-500',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Reliability',
      desc: 'Building with role-based access control, comprehensive audit trails, strict TypeScript type-safety, and dependable schema migrations.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Sparkles,
      title: 'Modern AI & Innovation',
      desc: 'Integrating OpenAI models, prompt architectures, and intelligent automation into practical consumer and business workflows.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const quickFacts = [
    { label: 'Full Name', value: PERSONAL_INFO.name, icon: Code2 },
    { label: 'Current Role', value: 'Web Developer @ Sanjivani Media & Tech', icon: Briefcase },
    { label: 'Degree', value: 'B.Sc. in Physics (First Class, 70%)', icon: GraduationCap },
    { label: 'Location', value: PERSONAL_INFO.location, icon: MapPin },
    { label: 'Spoken Languages', value: 'English, Hindi', icon: Languages },
    { label: 'Work Mode', value: 'Full-Time / Remote / On-Site', icon: CheckCircle2 },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Analytical Rigor with Modern Web Engineering
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A developer who loves crafting robust full-stack applications, scalable backend APIs, and intuitive user experiences.
          </p>
        </div>

        {/* Top Split: Bio Story + Quick Facts Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am <span className="font-semibold text-slate-900 dark:text-white">Hritik Kumar</span>, a dedicated Full Stack Web Developer and Software Engineer currently engineering data-driven solutions at <span className="font-medium text-indigo-600 dark:text-indigo-400">Sanjivani Media and Technologies</span> in Patna, India.
            </p>
            <p>
              My journey into programming began from a deep curiosity about computational systems during my <span className="font-semibold text-slate-900 dark:text-white">Bachelor of Science in Physics</span> at Patliputra University. Studying mathematical physics and quantitative mechanics taught me how to break massive, chaotic problems into elegant, well-ordered component steps.
            </p>
            <p>
              Today, I channel that analytical mindset into building modern enterprise platforms like <span className="font-medium text-slate-900 dark:text-white">multi-level financial approval engines</span>, banking analytics dashboards with interactive Chart.js visualizations, and <span className="font-medium text-slate-900 dark:text-white">AI-powered culinary apps</span> powered by OpenAI and serverless backends.
            </p>
            <p>
              Whether structuring robust relational schemas in <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">MySQL</span> / <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Prisma</span>, writing type-safe frontend components in <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Next.js & TypeScript</span>, or designing RESTful endpoints, I obsess over code quality, maintainability, and end-user delight.
            </p>
          </div>

          {/* Right Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xl shadow-indigo-950/5 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
                Quick Snapshot
              </h3>

              <div className="space-y-3.5 divide-y divide-slate-200/70 dark:divide-slate-800/80">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className={`flex items-start gap-3 ${idx > 0 ? 'pt-3.5' : ''}`}>
                      <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {fact.label}
                        </div>
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Ready to contribute immediately to forward-thinking teams.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
