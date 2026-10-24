import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
  isShortlisted: boolean;
  onShortlistClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  setIsDarkMode,
  onOpenResume,
  isShortlisted,
  onShortlistClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

      const sections = ['hero', 'story', 'experience', 'projects', 'skills', 'shortlist', 'contact'];
      const scrollPos = window.scrollY + 240;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '00', label: 'Prologue', href: '#hero' },
    { num: '01', label: 'Origin Story', href: '#story' },
    { num: '02', label: 'In The Trenches', href: '#experience' },
    { num: '03', label: 'Live Proof', href: '#projects' },
    { num: '04', label: 'Arsenal', href: '#skills' },
    { num: '05', label: 'Interview Room', href: '#shortlist' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode
            ? 'bg-[#07090E]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/30 py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top Story Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Editorial Brand Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-base text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  Hritik Kumar
                </span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-semibold">
                  Dossier
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                Physics Honours → Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Chapter Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-900/90 border border-slate-300/60 dark:border-slate-800/90 backdrop-blur-md">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? 'text-amber-400 dark:text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls (Interviewer Fast-Track) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle theme"
              title={isDarkMode ? 'Switch to Editorial Paper Mode' : 'Switch to Dark Cinema Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* 1-Page ATS Resume Preview */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>ATS Resume</span>
            </button>

            {/* One-Click Shortlist Candidate CTA */}
            <button
              onClick={onShortlistClick}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md ${
                isShortlisted
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-amber-500/20 hover:scale-[1.02]'
              }`}
            >
              {isShortlisted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Shortlisted ✓</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Shortlist Hritik</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Story Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2">
            Story Chapters
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                <span className="font-mono text-xs text-amber-500">{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>ATS Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onShortlistClick();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-indigo-600 text-white cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isShortlisted ? 'Shortlisted ✓' : 'Shortlist Me'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
