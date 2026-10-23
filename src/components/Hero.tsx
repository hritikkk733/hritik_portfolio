import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { TerminalWidget } from './TerminalWidget';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const titles = [
    'Full Stack Web Developer',
    'Next.js & React Specialist',
    'AI & Backend Engineer',
    'Enterprise Software Builder',
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        currentFullTitle.substring(0, displayedText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const techBadges = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Node.js',
    'Python',
    'Prisma ORM',
    'Tailwind CSS',
    'MySQL',
    'OpenAI API',
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 border border-slate-700/70 dark:border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="gradient-text">{PERSONAL_INFO.displayName}</span>
              </h1>
              
              {/* Typewriter Subtitle */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                  {displayedText}
                  <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-indigo-500 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I develop modern, high-performance web applications, dynamic reporting engines, and AI-driven platforms. Backed by a strong analytical background in Physics and production experience with enterprise data systems, I turn complex challenges into scalable, elegant software.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/60 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 transition-all hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-1">
                Connect:
              </span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-indigo-600 hover:border-transparent transition-all shadow-sm"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-rose-600 hover:border-transparent transition-all shadow-sm"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all shadow-sm"
                title="Direct WhatsApp Message"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>

            {/* Tech Badges Horizontal Strip */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium mr-1.5">
                  Core Stack:
                </span>
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:text-indigo-500 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Developer Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full">
              <TerminalWidget />
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-center hover:border-indigo-500/40 transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
