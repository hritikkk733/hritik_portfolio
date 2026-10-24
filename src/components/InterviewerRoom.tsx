import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Check, 
  FileText, 
  MessageSquare, 
  ChevronDown, 
  PhoneCall, 
  Mail, 
  Award,
  ClipboardCheck
} from 'lucide-react';
import { INTERVIEW_QA, PERSONAL_INFO } from '../data/portfolioData';

interface InterviewerRoomProps {
  onOpenResume: () => void;
  isShortlisted: boolean;
  onShortlistClick: () => void;
  onShowToast: (msg: string) => void;
}

export const InterviewerRoom: React.FC<InterviewerRoomProps> = ({
  onOpenResume,
  isShortlisted,
  onShortlistClick,
  onShowToast,
}) => {
  const [openQuestionId, setOpenQuestionId] = useState<string>(INTERVIEW_QA[0].id);
  const [copiedMemo, setCopiedMemo] = useState(false);

  const checklistItems = [
    {
      label: 'Real Production Experience (1+ Yr)',
      detail: 'Web Developer @ Sanjivani Media & Technologies (Banking & Enterprise Portals)',
    },
    {
      label: 'Quantitative & First-Principles Mindset',
      detail: 'B.Sc. in Physics (First Division, 70%) — Patliputra University',
    },
    {
      label: 'Modern Full-Stack + Enterprise Polyglot',
      detail: 'Next.js 16, React 19, TypeScript, Prisma, Node.js + C#, ASP.NET, MySQL',
    },
    {
      label: 'Verified Complex Architecture Delivery',
      detail: '11-Module Dynamic Approval Rule Engine + Serverless OpenAI Backend',
    },
    {
      label: 'Zero-Friction Onboarding & Communication',
      detail: 'Fluent in English & Hindi • Available Immediately for Full-Time Roles',
    },
  ];

  const handleCopyShortlistMemo = () => {
    const memo = `✅ CANDIDATE SHORTLIST EVALUATION MEMO
• Candidate: Hritik Kumar (${PERSONAL_INFO.location})
• Role Fit: Full Stack Web Developer / Software Engineer
• Production Exp: 1+ Year @ Sanjivani Media and Technologies Pvt. Ltd.
• Education: B.Sc. in Physics (First Division, 70%) — Patliputra University
• Core Stack: Next.js 16, React 19, TypeScript, Node.js, Prisma, C#, ASP.NET, MySQL, OpenAI API
• Key Proof: Built 11-module Enterprise Expense Approval System & optimized 500k+ row MySQL banking reports (40% faster).
• Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phoneDisplay} | GitHub: ${PERSONAL_INFO.github}`;

    navigator.clipboard.writeText(memo);
    setCopiedMemo(true);
    onShortlistClick();
    onShowToast('Candidate Shortlisted! Evaluation memo copied for your team/ATS.');
    setTimeout(() => setCopiedMemo(false), 3000);
  };

  return (
    <section id="shortlist" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/10 via-indigo-600/10 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>CHAPTER 05 // THE INTERVIEWER'S DECISION ROOM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            Everything You Need to <span className="font-editorial italic font-normal text-emerald-500">Shortlist My Resume</span> in 60 Seconds.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I know reviewing dozens of resumes is exhausting. Below are my direct answers to the 5 questions technical interviewers ask me most—plus a one-click evaluation kit for your hiring team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 7 Cols: Interactive Pre-Interview Q&A */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                <span>Pre-Interview Technical Q&A (Click Any Question)</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">5 High-Signal Answers</span>
            </div>

            <div className="space-y-3.5">
              {INTERVIEW_QA.map((item, idx) => {
                const isOpen = openQuestionId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'bg-white dark:bg-slate-900 border-amber-500/50 shadow-lg'
                        : 'bg-slate-50/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setOpenQuestionId(isOpen ? '' : item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                            Q0{idx + 1} • {item.category}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug pt-0.5">
                          “{item.question}”
                        </h4>
                      </div>

                      <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform shrink-0 mt-1 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 space-y-3 border-t border-slate-100 dark:border-slate-800/80">
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-slate-900 dark:text-amber-300">
                          TL;DR: {item.shortAnswer}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.deepAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 5 Cols: The 60-Second Shortlist Kit Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B0F17] to-slate-950 text-white border-2 border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Top Corner Stamp */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    CANDIDATE EVALUATION SCORECARD
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-0.5">
                    Why Hritik Is a High-Conviction Hire
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="space-y-3">
                {checklistItems.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {c.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {c.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Shortlist Action Button */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleCopyShortlistMemo}
                  className={`w-full py-4 px-5 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    isShortlisted || copiedMemo
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25'
                      : 'bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-amber-500/25 hover:scale-[1.01]'
                  }`}
                >
                  {copiedMemo || isShortlisted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Shortlisted! Evaluation Memo Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Shortlist Hritik & Copy ATS Memo</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Clicking above copies a formatted evaluation summary for your Slack / ATS & triggers celebration confetti.
                </p>
              </div>

              {/* Secondary Recruiter Fast-Actions */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800">
                <button
                  onClick={onOpenResume}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Print / Save Resume</span>
                </button>

                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp Hritik</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Interview Invitation — Shortlisted from Portfolio')}`}
                  className="col-span-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Interview Invite ({PERSONAL_INFO.email})</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
