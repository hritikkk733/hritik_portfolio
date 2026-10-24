import React, { useState } from 'react';
import { 
  Atom, 
  ArrowRight, 
  GraduationCap, 
  CheckCircle2,
  Compass,
  Award
} from 'lucide-react';
import { STORY_CHAPTERS, PHYSICS_MENTAL_MODELS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeAct, setActiveAct] = useState<number>(3); // Default highlight on current Act IV

  return (
    <section id="story" className="py-20 lg:py-28 relative border-t border-slate-200/70 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Chapter Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>CHAPTER 01 // THE ORIGIN STORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            Why a <span className="font-editorial italic font-normal text-amber-500">Physics Honours</span> Graduate Writes Faster, Cleaner Software.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Anyone can watch a tutorial and copy a React component. But when a database table hits 500,000 rows or an approval workflow has 9 overlapping edge cases, syntax isn’t enough—you need <strong className="text-slate-900 dark:text-white">first-principles systems thinking</strong>.
          </p>
        </div>

        {/* Part 1: Interactive 4-Act Narrative Timeline */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                The 4 Acts of My Engineering Journey
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Click any chapter below to trace how I evolved from solving equations on paper to shipping production software.
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {STORY_CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.act}
                  onClick={() => setActiveAct(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeAct === idx
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  Act 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Column Interactive Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STORY_CHAPTERS.map((chapter, idx) => {
              const isSelected = activeAct === idx;
              return (
                <div
                  key={chapter.act}
                  onClick={() => setActiveAct(idx)}
                  className={`p-6 rounded-3xl transition-all cursor-pointer flex flex-col justify-between space-y-5 border ${
                    isSelected
                      ? 'bg-gradient-to-b from-amber-500/10 via-indigo-950/20 to-slate-900/90 border-amber-500/60 shadow-xl shadow-amber-500/5 scale-[1.01]'
                      : 'bg-white dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-400 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        {chapter.act}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-semibold">
                        {chapter.year}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {chapter.title}
                    </h4>

                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {chapter.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {chapter.narrative}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-700 dark:text-emerald-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{chapter.metrics}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {chapter.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: The 3 Physics Laws Behind My Code */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-500 font-bold flex items-center gap-1.5">
              <Atom className="w-4 h-4" />
              <span>Mental Models That Set Me Apart</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              How Physics Directly Translates to My Engineering Output
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PHYSICS_MENTAL_MODELS.map((model) => (
              <div
                key={model.number}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      {model.number}
                    </span>
                    <Atom className="w-5 h-5 text-indigo-400" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono text-slate-400 uppercase">
                      Physics Principle: {model.physicsLaw}
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{model.engineeringEquivalent}</span>
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {model.story}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5">
                    PRODUCTION PROOF:
                  </span>
                  <span className="text-slate-700 dark:text-slate-200 font-medium">
                    {model.codeImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Compact Verified Credentials Strip (Education + Certification) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
              <Award className="w-4 h-4" />
              <span>Verified Academic & Industry Credentials</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Consistent First-Division Track Record
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Every academic milestone and software certification completed with First Class distinction.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION.slice(0, 2).map((edu, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-indigo-500 font-bold">{edu.duration}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    {edu.grade}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>{edu.institution}</span>
                </div>
              </div>
            ))}

            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="sm:col-span-2 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-amber-500/10 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">{cert.title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-600 text-white">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {cert.issuer} — {cert.details}
                  </div>
                </div>
                <a href="#experience" className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 shrink-0 hover:underline">
                  <span>See Production Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
