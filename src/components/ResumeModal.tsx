import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  GraduationCap,
  Award,
  Code2
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_CATEGORIES, 
  EDUCATION, 
  CERTIFICATIONS 
} from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
HRITIK KUMAR
Full Stack Web Developer & Software Engineer
Patna, Bihar, India | Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFILE SUMMARY
Detail-oriented and highly motivated Full Stack Web Developer with solid hands-on experience in building scalable web applications, real-time data dashboards, AI-powered backends, and enterprise workflow solutions. 

EXPERIENCE
Web Developer | Sanjivani Media and Technologies Pvt Ltd (2023 - Present)
- Developing and optimizing software applications using C#, ASP.NET, JavaScript, and modern frameworks.
- Designing interactive financial dashboards using Chart.js to visualize key metrics.
- Writing and debugging complex queries in MySQL to extract, process, and manage large datasets.
- Automating data handling and reporting tasks, achieving 40%+ operational time savings.

KEY PROJECTS
1. Enterprise Expense & Dynamic Approval System
- Next.js 16, TypeScript, Tailwind CSS, Prisma ORM, SQLite, Zustand, Radix UI, Recharts
- Dynamic multi-level approval rules engine based on category and amount thresholds.
- Full role-based access control (Admin, Manager, Employee) and automated audit logs.

2. CooKit AI - Smart Culinary Assistant & Recipe Analyzer
- Node.js, Vercel Serverless, OpenAI API, RESTful APIs
- Instant ingredient recognition and dietary customization with sub-2s response time.

3. Banking Analytics & Dynamic Reporting Engine
- ASP.NET, C#, JavaScript, MySQL, Chart.js, Bootstrap
- High-performance financial metric reporting suite tracking liquidity and transaction velocity.

EDUCATION
- B.Sc. in Physics | Patliputra University (2020 - 2023) | First Division (70%)
- Intermediate (12th) | BSEB (2018 - 2020) | First Division (74%)
- Matriculation (10th) | CBSE (2018) | First Division (75%)

CERTIFICATIONS
- Certified Software Developer | Sanjivani Vikas Foundation
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    onShowToast('Resume copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 text-slate-800 dark:text-slate-100 print:max-h-none print:shadow-none print:border-none print:text-black print:p-0">
        
        {/* Header Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Code2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-slate-500">
                Print, save as PDF, or copy to clipboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Content */}
        <div className="space-y-8 font-sans print:space-y-6">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 pb-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-700">
              {PERSONAL_INFO.role}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-700 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phoneDisplay}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-800">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </h2>

            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{exp.role}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-500 dark:text-slate-400">{exp.duration} | {exp.location}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Featured Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    {proj.title}
                  </div>
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    [{proj.tags.slice(0, 5).join(', ')}]
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                  {proj.description}
                </p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-600 dark:text-slate-400 print:text-slate-700">
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">
                    {cat.title}:
                  </span>{' '}
                  <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    {edu.degree} — {edu.grade}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {edu.institution} ({edu.duration})
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-900/50 pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h2>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white print:text-black">
                    {cert.title}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
