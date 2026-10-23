import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Cpu,
  FileCode,
  Palette,
  Terminal,
  Cloud,
  Network,
  Table,
  HardDrive,
  BarChart2,
  PieChart,
  GitBranch,
  Atom,
  Layout
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const iconMap: Record<string, React.ElementType> = {
    Atom,
    FileCode,
    Palette,
    Cpu,
    Layout,
    Code: Code2,
    Server,
    Terminal,
    Layers,
    Cloud,
    Network,
    Database,
    Table,
    HardDrive,
    BarChart2,
    Sparkles,
    PieChart,
    GitBranch,
    CheckCircle,
  };

  const displayedCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : [SKILL_CATEGORIES[activeTab]];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Core Proficiencies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A comprehensive toolbox refined through production applications, client deliverables, and enterprise solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start sm:self-auto">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>

                      {/* Highlight description / badge */}
                      {skill.highlight && (
                        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                          ⚡ {skill.highlight}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow & Architecture Tools Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-gradient-to-r from-indigo-900/20 via-purple-900/10 to-slate-900/20 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Need a custom stack or enterprise integration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Experienced in adapting swiftly to new frameworks, libraries, APIs, and cloud services.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all shrink-0"
          >
            Discuss Technical Requirements
          </a>
        </div>

      </div>
    </section>
  );
};
