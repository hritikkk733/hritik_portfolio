import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  X,
  Zap
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI & Cloud' | 'Enterprise & Banking'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & Cloud', 'Enterprise & Banking'] as const;

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Software & Innovative Solutions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real applications built with modern architectures, production-grade security, and dynamic rule engines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'
              }`}
            >
              {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-indigo-500/50 transition-all hover:-translate-y-1.5 group"
            >
              {/* Card Header Top Graphic Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Top Meta: Category + Featured Tag */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Highlight Pill */}
                {project.metrics && (
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{project.metrics}</span>
                  </div>
                )}

                {/* Key Bullet Highlights */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags Strip */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group-hover:underline cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-indigo-600 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* In-Depth Architecture Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
                    {selectedProject.category}
                  </span>
                  {selectedProject.metrics && (
                    <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      {selectedProject.metrics}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  System Overview
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Stack Breakdown */}
              {selectedProject.architecture && (
                <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Architecture & Data Flow
                  </h4>
                  <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {selectedProject.architecture.map((arch, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">➜</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Technical Achievements */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Technical Implementation Details
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {selectedProject.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-md shadow-indigo-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch App</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
