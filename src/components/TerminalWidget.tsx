import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalWidget: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const initialHistory: HistoryItem[] = [
    {
      command: 'hritik --status',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-emerald-400 font-semibold flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            System Online • Ready to Collaborate
          </div>
          <div className="text-slate-400">
            Welcome to <span className="text-indigo-400 font-medium">Hritik Kumar's</span> interactive developer environment.
          </div>
          <div className="text-slate-500 pt-1">
            Type a command or click one of the pills below:
          </div>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);

  const commandList = [
    'cat bio.json',
    'hritik.skills()',
    'hritik.projects()',
    'hritik.contact()',
    'clear',
  ];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output: React.ReactNode;

    switch (trimmed.toLowerCase()) {
      case 'help':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <div className="text-indigo-400 font-semibold mb-1">Available commands:</div>
            <div>• <span className="text-cyan-300">cat bio.json</span> - View developer profile & summary</div>
            <div>• <span className="text-cyan-300">hritik.skills()</span> - Inspect core tech stack</div>
            <div>• <span className="text-cyan-300">hritik.projects()</span> - Pinned production applications</div>
            <div>• <span className="text-cyan-300">hritik.experience()</span> - Current work & role details</div>
            <div>• <span className="text-cyan-300">hritik.contact()</span> - Direct communication channels</div>
            <div>• <span className="text-cyan-300">clear</span> - Clear the terminal output</div>
          </div>
        );
        break;

      case 'cat bio.json':
        output = (
          <pre className="text-[11px] leading-relaxed text-indigo-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 font-mono overflow-x-auto">
{`{
  "name": "Hritik Kumar",
  "title": "Full Stack Web Developer & Software Engineer",
  "location": "Patna, Bihar, India",
  "degree": "B.Sc. in Physics (First Class) - Patliputra Univ",
  "currentRole": "Web Developer @ Sanjivani Media & Tech",
  "specialties": ["Next.js", "React", "TypeScript", "Node.js", "Python", "MySQL", "OpenAI"],
  "focus": "High-performance enterprise dashboards & AI apps",
  "status": "Available for opportunities"
}`}
          </pre>
        );
        break;

      case 'hritik.skills()':
        output = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <div>
              <span className="text-emerald-400 font-semibold">Frontend:</span> React 19, Next.js (App Router), TypeScript, Tailwind CSS, Zustand, Radix UI, Bootstrap
            </div>
            <div>
              <span className="text-indigo-400 font-semibold">Backend:</span> Node.js, Express, Python, C# / ASP.NET, Next.js API Routes, Serverless Functions
            </div>
            <div>
              <span className="text-cyan-400 font-semibold">Databases:</span> MySQL, PostgreSQL, SQLite, Prisma ORM, Query Optimization
            </div>
            <div>
              <span className="text-purple-400 font-semibold">AI & Tools:</span> OpenAI GPT API, Recharts, Chart.js, Git/GitHub, Postman, Vercel
            </div>
          </div>
        );
        break;

      case 'hritik.projects()':
        output = (
          <div className="text-xs space-y-2 text-slate-300">
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-amber-400 font-bold">1. Enterprise Expense Management</span>
              <div className="text-slate-400 text-[11px]">Dynamic multi-tier rule approval engine, RBAC, Next.js 16, Prisma, Recharts.</div>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-amber-400 font-bold">2. CooKit AI Assistant</span>
              <div className="text-slate-400 text-[11px]">Node.js + Vercel serverless + OpenAI API ingredient & recipe engine.</div>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-amber-400 font-bold">3. Banking Analytics Dashboard</span>
              <div className="text-slate-400 text-[11px]">High-performance financial visualization & query optimization in MySQL.</div>
            </div>
          </div>
        );
        break;

      case 'hritik.experience()':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <div className="text-emerald-400 font-semibold">Web Developer • Sanjivani Media & Technologies (2023 - Present)</div>
            <div className="text-slate-400">• Developing full-stack enterprise solutions with JavaScript, ASP.NET & SQL.</div>
            <div className="text-slate-400">• Crafting dynamic banking reporting dashboards and data visualization tools.</div>
            <div className="text-slate-400">• Automated data handling pipelines driving 40%+ operational efficiency gains.</div>
          </div>
        );
        break;

      case 'hritik.contact()':
      case 'contact.info()':
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></div>
            <div>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-cyan-400">{PERSONAL_INFO.phoneDisplay}</a></div>
            <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 underline">linkedin.com/in/hritik-coder</a></div>
            <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-indigo-400 underline">github.com/hritikkk733</a></div>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Command not recognized: "{trimmed}". Type <span className="text-indigo-300 underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const bodyRef = useRef<HTMLDivElement>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/40 border border-slate-700/60 dark:border-slate-800 bg-slate-900/90 backdrop-blur-xl text-slate-100 font-mono transition-all">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            hritik@workspace:~ (zsh)
          </span>
        </div>

        <button
          onClick={copyEmail}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50"
          title="Copy email to clipboard"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied!' : 'Copy Email'}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div ref={bodyRef} className="p-4 h-72 sm:h-80 overflow-y-auto space-y-3 font-mono text-left text-xs sm:text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 text-xs">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400 font-medium">hritik@macbook</span>
              <span className="text-slate-500">:~$</span>
              <span className="text-slate-200 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1 text-xs">
          <span className="text-emerald-400 font-bold">➜</span>
          <span className="text-cyan-400 font-medium">hritik@macbook</span>
          <span className="text-slate-500">:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or click pills below..."
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1 rounded bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
            title="Execute command"
          >
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Quick Action Suggestion Pills */}
      <div className="px-3.5 py-2.5 bg-slate-950/70 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          Quick:
        </span>
        {commandList.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/70 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-300 border border-slate-700/40 hover:border-indigo-500/50 transition-all flex items-center gap-1"
          >
            <Play className="w-2 h-2 text-indigo-400" />
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
