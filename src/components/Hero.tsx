import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  FileText, 
  Mail, 
  MapPin, 
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Target,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO, ROLE_PITCHES, STATS } from '../data/portfolioData';
import { TerminalWidget } from './TerminalWidget';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  isShortlisted: boolean;
  onShortlistClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  isShortlisted,
  onShortlistClick,
}) => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const currentPitch = ROLE_PITCHES[selectedRoleIndex];

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-34 lg:pb-24 overflow-hidden bg-grid-pattern">
      {/* Ambient Cinema Glows */}
      <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-indigo-600/15 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Dossier Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80 dark:border-slate-800/80 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold">
              CHAPTER 00 // PROLOGUE
            </span>
            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
              CANDIDATE DOSSIER: HRITIK KUMAR • B.Sc. PHYSICS (1st DIV) → FULL-STACK ENGINEER
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Immediate Interviews ({PERSONAL_INFO.location})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Storytelling Narrative & Role-Lens Switcher */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Editorial Headline */}
            <div className="space-y-3">
              <p className="font-editorial italic text-xl sm:text-2xl text-amber-600 dark:text-amber-400">
                “Most developers only see syntax. Physics taught me how systems behave under pressure.”
              </p>
              
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I’m <span className="gradient-text">Hritik Kumar</span>.{' '}
                <span className="block mt-1 text-slate-800 dark:text-slate-200">
                  I engineer software that survives real-world scale.
                </span>
              </h1>
            </div>

            {/* Interactive Hiring Manager Role-Lens Switcher */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border-2 border-indigo-500/30 dark:border-indigo-500/40 shadow-xl shadow-indigo-950/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <Target className="w-4 h-4 text-amber-500" />
                  <span>Interviewer Lens: What role are you hiring for?</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold self-start sm:self-auto">
                  {currentPitch.badge}
                </span>
              </div>

              {/* Role Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {ROLE_PITCHES.map((pitch, idx) => (
                  <button
                    key={pitch.id}
                    onClick={() => setSelectedRoleIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedRoleIndex === idx
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                        : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {pitch.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Pitch Content */}
              <div className="space-y-3 pt-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  “{currentPitch.headline}”
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentPitch.subheadline}
                </p>

                {/* Proof Callout Bar */}
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-start sm:items-center gap-2 text-xs">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-amber-300">
                        {currentPitch.proofMetric}:
                      </span>{' '}
                      <span className="text-slate-700 dark:text-slate-300">
                        {currentPitch.proofDetail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Matched Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Matched Stack:</span>
                  {currentPitch.matchedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary Interviewer Conversion CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onShortlistClick}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-lg hover:-translate-y-0.5 ${
                  isShortlisted
                    ? 'bg-emerald-600 text-white shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-amber-500/25'
                }`}
              >
                {isShortlisted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Resume Shortlisted (Memo Copied!)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Shortlist My Resume (1-Click Kit)</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-800 hover:border-amber-500/60 transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>View 1-Page ATS Resume</span>
              </button>

              <a
                href="#story"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl font-semibold text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Read My Story</span>
                <ArrowDownRight className="w-4 h-4 text-amber-500" />
              </a>
            </div>

            {/* Direct Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
                  title="WhatsApp Direct"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-1.5 font-mono">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interviewer Evaluation Console */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:justify-end space-y-4">
            <TerminalWidget />

            {/* Subtle Interviewer Tip below console */}
            <div className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400">
                ⏱️ Short on time? Jump straight to the <strong className="text-slate-900 dark:text-white">60-Second Interview Room</strong>
              </span>
              <a
                href="#shortlist"
                className="px-3 py-1 rounded-lg bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-colors shrink-0 ml-2"
              >
                Jump ↓
              </a>
            </div>
          </div>

        </div>

        {/* Evidence Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-left hover:border-amber-500/40 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
