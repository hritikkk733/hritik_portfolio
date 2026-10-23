import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2, TrendingUp } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Impact
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Delivering high-stakes software solutions for enterprise clients and financial organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-indigo-500/50 transition-all group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      <Building2 className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Accomplishments Bullets */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
                  Key Responsibilities & Deliverables
                </h4>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400 mr-2">
                  Applied Tech:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
