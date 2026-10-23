import React from 'react';
import { GraduationCap, Award, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A solid analytical education paired with verified software engineering certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              Academic Background
            </h3>

            <div className="space-y-5">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <span className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <Award className="w-5 h-5" />
              </span>
              Certifications & Training
            </h3>

            <div className="space-y-5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-purple-500/40 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        Professional Qualification
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {cert.details}
                  </p>
                </div>
              ))}

              {/* Verified Competencies Highlight Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/40 border border-indigo-500/20 space-y-3 text-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Verified Engineering Attributes
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>High Mathematical & Algorithmic Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Complex Relational Query Optimization (MySQL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Full-Stack Modern Web Applications (React, Next.js, Node.js)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>AI Model Integration & Prompt Design (OpenAI GPT)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
