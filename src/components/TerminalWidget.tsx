import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, Copy, Check, ShieldCheck } from 'lucide-react';
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
      command: 'shortlist --evaluate --candidate="Hritik Kumar"',
      output: (
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              CANDIDATE VERDICT: STRONG SHORTLIST
            </span>
            <span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">SCORE: 97/100</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-300">
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-500 block text-[10px]">PRODUCTION EXP</span>
              <span className="text-amber-400 font-semibold">✓ 1+ Yr @ Sanjivani Tech</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-500 block text-[10px]">ANALYTICAL CORE</span>
              <span className="text-indigo-400 font-semibold">✓ B.Sc. Physics (1st Div)</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-500 block text-[10px]">MODERN STACK</span>
              <span className="text-cyan-400 font-semibold">✓ Next.js 16, TS, Prisma</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-500 block text-[10px]">ENTERPRISE DB</span>
              <span className="text-emerald-400 font-semibold">✓ MySQL & ASP.NET Core</span>
            </div>
          </div>
          <div className="text-slate-400 text-[11px]">
            Click any command below to audit my story, benchmarks, or architecture:
          </div>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);

  const commandList = [
    'story --origin',
    'benchmark --sql',
    'inspect --engine',
    'hire --memo',
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
            <div className="text-amber-400 font-semibold mb-1">Interviewer Audit Commands:</div>
            <div>• <span className="text-cyan-300">story --origin</span> — How Physics trained me to debug systems</div>
            <div>• <span className="text-cyan-300">benchmark --sql</span> — My 40% faster banking query optimization</div>
            <div>• <span className="text-cyan-300">inspect --engine</span> — Inside my 11-module Expense Rule Engine</div>
            <div>• <span className="text-cyan-300">hire --memo</span> — Generate a copyable recruiter evaluation note</div>
            <div>• <span className="text-cyan-300">clear</span> — Reset console</div>
          </div>
        );
        break;

      case 'story --origin':
        output = (
          <div className="text-xs space-y-1.5 text-slate-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
            <div className="text-amber-400 font-bold">From Quantum Equations to Clean Architecture:</div>
            <p className="text-slate-300 leading-relaxed">
              "Studying Physics at Patliputra University (First Division, 70%) taught me First-Principles Thinking. When a web app lags or a financial report fails, I don't guess—I isolate the bottleneck across the SQL execution plan, API payload, and React render cycle."
            </p>
          </div>
        );
        break;

      case 'benchmark --sql':
        output = (
          <div className="text-xs space-y-1.5 font-mono bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
            <div className="text-indigo-400 font-bold">Production Banking Report Benchmark (MySQL):</div>
            <div className="flex items-center justify-between text-rose-400">
              <span>Legacy Correlated Subquery:</span>
              <span>4,120 ms (Slow)</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>Hritik's Indexed Pipeline:</span>
              <span>380 ms (10.8x Faster)</span>
            </div>
            <div className="text-slate-400 text-[11px] pt-1">
              Result: Automated dynamic financial reports & saved 40%+ analyst time at Sanjivani Media & Tech.
            </div>
          </div>
        );
        break;

      case 'inspect --engine':
        output = (
          <pre className="text-[11px] leading-relaxed text-cyan-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 font-mono overflow-x-auto">
{`// Priority Approval Engine (Next.js 16 + Prisma)
const rule = await resolveApprovalChain({
  category: "Infrastructure",
  amount: 185000, // ₹1,85,000
   Priority: "CATEGORY_OVERRIDE > DEFAULT_TIER"
});
// Output Chain => ["Team Manager", "Finance Head", "Director"]
// AuditLog     => Immutable record written ✓`}
          </pre>
        );
        break;

      case 'hire --memo':
        output = (
          <div className="text-xs space-y-1.5 bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-500/30 text-slate-200">
            <div className="text-amber-400 font-bold">Recruiter Evaluation Memo:</div>
            <div>• <span className="text-slate-400">Candidate:</span> Hritik Kumar ({PERSONAL_INFO.location})</div>
            <div>• <span className="text-slate-400">Experience:</span> 1+ Yr Production Web Dev @ Sanjivani Media & Tech</div>
            <div>• <span className="text-slate-400">Stack:</span> Next.js 16, React 19, TS, Node, ASP.NET/C#, MySQL, OpenAI</div>
            <div>• <span className="text-slate-400">Direct Contact:</span> {PERSONAL_INFO.phoneDisplay} | {PERSONAL_INFO.email}</div>
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
          <div className="text-xs text-amber-300">
            Executed "{trimmed}". Try <span className="underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for interviewer audit commands.
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

  const copyRecruiterSummary = () => {
    const summary = `Candidate Shortlist Note: Hritik Kumar | Full-Stack Developer (1+ Yr Exp @ Sanjivani Media & Tech) | B.Sc. Physics (1st Div) | Stack: Next.js, React, TypeScript, Node.js, C#/ASP.NET, MySQL, Prisma, OpenAI | Contact: ${PERSONAL_INFO.email} / ${PERSONAL_INFO.phoneDisplay}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/70 dark:border-slate-800 bg-[#0B0F17] text-slate-100 font-mono transition-all">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#06090F] border-b border-slate-800/90 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
            interviewer-audit@hritik-dossier:~
          </span>
        </div>

        <button
          onClick={copyRecruiterSummary}
          className="flex items-center gap-1.5 text-[11px] text-amber-300 hover:text-white transition-colors px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 cursor-pointer"
          title="Copy 1-paragraph Recruiter Evaluation Note"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Memo Copied!' : 'Copy Shortlist Memo'}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div ref={bodyRef} className="p-4 h-80 sm:h-88 overflow-y-auto space-y-3.5 font-mono text-left text-xs">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-400 text-xs">
              <span className="text-amber-400 font-bold">❯</span>
              <span className="text-cyan-400 font-medium">audit</span>
              <span className="text-slate-600">$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
            </div>
            <div className="pl-3 border-l-2 border-slate-800">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1 text-xs">
          <span className="text-amber-400 font-bold">❯</span>
          <span className="text-cyan-400 font-medium">audit</span>
          <span className="text-slate-600">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or click an audit command below..."
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 transition-colors cursor-pointer"
            title="Run audit command"
          >
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Quick Action Suggestion Pills */}
      <div className="px-3.5 py-2.5 bg-[#06090F] border-t border-slate-800/90 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          Audit CLI:
        </span>
        {commandList.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 hover:bg-indigo-600/30 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-1 cursor-pointer"
          >
            <Play className="w-2 h-2 text-amber-400" />
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
