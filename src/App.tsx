import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { InterviewerRoom } from './components/InterviewerRoom';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default to Dark Cinema Mode for storytelling impact
    }
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleShortlistCandidate = () => {
    setIsShortlisted(true);

    const memo = `✅ CANDIDATE SHORTLIST EVALUATION MEMO
• Candidate: Hritik Kumar (${PERSONAL_INFO.location})
• Role Fit: Full Stack Web Developer / Software Engineer
• Production Exp: 1+ Year @ Sanjivani Media and Technologies Pvt. Ltd.
• Education: B.Sc. in Physics (First Division, 70%) — Patliputra University
• Core Stack: Next.js 16, React 19, TypeScript, Node.js, Prisma, C#, ASP.NET, MySQL, OpenAI API
• Key Proof: Built 11-module Enterprise Expense Approval System & optimized 500k+ row MySQL banking reports (40% faster).
• Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phoneDisplay} | GitHub: ${PERSONAL_INFO.github}`;

    try {
      navigator.clipboard.writeText(memo);
    } catch {
      // Clipboard fallback
    }

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }

    showToast('Hritik Kumar shortlisted! Recruiter evaluation memo copied to clipboard 🎉');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#07090E] text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
      {/* Chapter Navigation & Shortlist Bar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)}
        isShortlisted={isShortlisted}
        onShortlistClick={handleShortlistCandidate}
      />

      {/* Storytelling Chapters */}
      <main>
        {/* Chapter 00: Prologue & Interactive Role-Lens Pitch */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          isShortlisted={isShortlisted}
          onShortlistClick={handleShortlistCandidate}
        />

        {/* Chapter 01: Origin Story & Physics-to-Code Mental Models */}
        <About />

        {/* Chapter 02: In the Trenches & Interactive Banking SQL Benchmark */}
        <Experience />

        {/* Chapter 03: Proof of Work & Live Engine Sandboxes */}
        <Projects />

        {/* Chapter 04: The Production Arsenal */}
        <Skills />

        {/* Chapter 05: The Interviewer's Decision Room & 60-Second Shortlist Kit */}
        <InterviewerRoom 
          onOpenResume={() => setIsResumeOpen(true)}
          isShortlisted={isShortlisted}
          onShortlistClick={handleShortlistCandidate}
          onShowToast={showToast}
        />

        {/* Epilogue: Direct Interview Scheduling & Contact Hub */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable 1-Page ATS Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        onShowToast={showToast} 
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}

export default App;
