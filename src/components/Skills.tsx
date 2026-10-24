import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Cpu,
  FileCode,
  Palette,
  Terminal,
  Cloud,
  HardDrive,
  BarChart2,
  GitBranch,
  Atom
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const iconMap: Record<string, React.ElementType> = {
    Atom,
    FileCode,
    Palette,
    Cpu,
    Layers,
    Server,
    Terminal,
    Cloud,
    Database,
    HardDrive,
    BarChart2,
    Sparkles,
    GitBranch,
  };

  const displayedCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : [SKILL_CATEGORIES[activeTab]];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-100/60 dark:bg-slate-900/35 border-y border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>CHAPTER 04 // THE PRODUCTION ARSENAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Every Skill Backed by <span className="font-editorial italic font-normal text-indigo-500">Shipped Production Evidence.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Instead of arbitrary self-ratings, every technology in my stack below is paired with the exact system, database, or API where I proved it in action.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50'
              }`}
            >
              All Domains
            </button>
            
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Matrix */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.title} className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                  {category.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4 group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-200/50 dark:border-indigo-800/60">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Production Proof Callout */}
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono font-bold text-slate-800 dark:text-slate-200 text-[10px] uppercase block">
                            Production Proof:
                          </span>
                          <span>{skill.productionProof}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
