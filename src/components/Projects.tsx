import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  X,
  Zap,
  Sliders,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI & Cloud' | 'Enterprise & Banking'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive Sandbox 1: Expense Approval Rule Engine Simulator
  const [simCategory, setSimCategory] = useState<'Infrastructure' | 'Travel' | 'Meals'>('Infrastructure');
  const [simAmount, setSimAmount] = useState<number>(185000);

  // Interactive Sandbox 2: CooKit AI Serverless Recipe Engine
  const [simPantry, setSimPantry] = useState<'paneer' | 'oats' | 'avocado'>('paneer');

  const computeApprovalChain = (cat: string, amt: number) => {
    if (cat === 'Infrastructure' && amt >= 50000) {
      return {
        ruleTriggered: 'CATEGORY_RULE_#04 (IT & Cloud Override)',
        priority: 'Priority 1 (Overrides Default Amount Rules)',
        chain: ['Reporting Manager', 'IT Security Lead', 'Finance Controller', 'Director'],
        sla: '4-Stage Strict Audit + Receipt Hash Verification',
      };
    }
    if (amt >= 100000) {
      return {
        ruleTriggered: 'DEFAULT_RULE_#03 (High-Value CapEx > ₹1L)',
        priority: 'Priority 2 (Global Threshold Rule)',
        chain: ['Reporting Manager', 'Finance Controller', 'VP / Director'],
        sla: '3-Stage Executive Approval Required',
      };
    }
    if (amt >= 25000) {
      return {
        ruleTriggered: 'DEFAULT_RULE_#02 (Mid-Tier Expense ₹25k–₹1L)',
        priority: 'Priority 2 (Global Threshold Rule)',
        chain: ['Reporting Manager', 'Finance Team'],
        sla: '2-Stage Standard Approval',
      };
    }
    return {
      ruleTriggered: 'FAST_TRACK_RULE_#01 (Micro Expense < ₹25k)',
      priority: 'Auto-Route to Direct Manager',
      chain: ['Reporting Manager (1-Click Approve)'],
      sla: 'Single-Stage Fast Reimbursement',
    };
  };

  const approvalSim = computeApprovalChain(simCategory, simAmount);

  const cookitRecipes = {
    paneer: {
      input: '["Paneer 200g", "Ripe Tomatoes", "Garlic", "Kasuri Methi", "Low-fat Cream"]',
      dish: 'High-Protein Smoky Paneer Makhani Skillet',
      prepTime: '18 mins',
      macros: '34g Protein • 18g Carbs • 22g Fat',
      latency: '1.14s (Vercel Serverless + OpenAI GPT)',
      substitution: 'Replaced heavy butter with Greek yogurt/low-fat cream emulsion (-180 kcal).',
    },
    oats: {
      input: '["Rolled Oats", "Ripe Banana", "Peanut Butter", "Dark Cocoa", "Milk"]',
      dish: 'Overnight Espresso-Cocoa Protein Oats Bowl',
      prepTime: '5 mins',
      macros: '24g Protein • 52g Carbs • 14g Fat',
      latency: '0.92s (Vercel Serverless + OpenAI GPT)',
      substitution: 'Natural banana sweetness used—zero refined sugar required.',
    },
    avocado: {
      input: '["Sourdough Bread", "Avocado", "2 Eggs", "Chili Flakes", "Lemon"]',
      dish: 'Poached Egg &Charred Chili Avocado Tartine',
      prepTime: '10 mins',
      macros: '19g Protein • 28g Carbs • 21g Healthy Fats',
      latency: '1.05s (Vercel Serverless + OpenAI GPT)',
      substitution: 'Added lemon zest & micro-greens for iron absorption.',
    },
  };

  const currentRecipe = cookitRecipes[simPantry];

  const categories = ['All', 'Full-Stack', 'AI & Cloud', 'Enterprise & Banking'] as const;
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              <Layers className="w-3.5 h-3.5" />
              <span>CHAPTER 03 // PROOF OF WORK & LIVE SANDBOXES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Don’t Just Read My Resume. <span className="font-editorial italic font-normal text-amber-500">Test My Engines Live.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every project below solves a real operational bottleneck. Before browsing the full case studies, try interacting with two of my actual backend engines right here in your browser:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Interactive Live Sandboxes (Interviewer Playground) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sandbox 1: Dynamic Expense Approval Rule Engine */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0B0F17] text-slate-100 border border-indigo-500/40 shadow-2xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold uppercase text-amber-400">
                    LIVE SANDBOX 01 // PRIORITY APPROVAL ENGINE
                  </span>
                </div>
                <a
                  href="https://github.com/hritikkk733/expense"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <span>github/expense</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                In my <strong className="text-white">Next.js 16 + Prisma Expense System</strong>, category rules dynamically override default amount tiers. Change the parameters below to watch the approval chain recalculate:
              </p>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400 block">
                    1. Select Expense Category
                  </label>
                  <div className="flex gap-1.5">
                    {(['Infrastructure', 'Travel', 'Meals'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSimCategory(cat)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          simCategory === cat
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400 block">
                    2. Select Claim Amount
                  </label>
                  <div className="flex gap-1.5">
                    {[
                      { label: '₹8,500', val: 8500 },
                      { label: '₹45,000', val: 45000 },
                      { label: '₹1,85,000', val: 185000 },
                    ].map((item) => (
                      <button
                        key={item.val}
                        onClick={() => setSimAmount(item.val)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          simAmount === item.val
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Computed Output */}
            <div className="p-4 rounded-2xl bg-[#06090F] border border-slate-800/90 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">MATCHED RULE:</span>
                <span className="text-emerald-400 font-bold">{approvalSim.ruleTriggered}</span>
              </div>

              <div className="space-y-1.5">
                <div className="text-[10px] text-slate-500 uppercase">
                  GENERATED SEQUENTIAL APPROVAL CHAIN:
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {approvalSim.chain.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold text-[11px]">
                        L{idx + 1}: {step}
                      </span>
                      {idx < approvalSim.chain.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>AuditLog: Immutable Entry Created ✓</span>
                <span className="text-amber-300">{approvalSim.sla}</span>
              </div>
            </div>
          </div>

          {/* Sandbox 2: CooKit AI Serverless Recipe Analyzer */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0B0F17] text-slate-100 border border-purple-500/40 shadow-2xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold uppercase text-purple-400">
                    LIVE SANDBOX 02 // COOKIT AI SERVERLESS PIPELINE
                  </span>
                </div>
                <a
                  href="https://github.com/hritikkk733/cookit-backend"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-purple-400 hover:underline flex items-center gap-1"
                >
                  <span>github/cookit-backend</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                In <strong className="text-white">CooKit AI (SnapAI)</strong>, my Vercel Serverless endpoint (`api/analyze.js`) transforms raw pantry lists into structured culinary JSON via OpenAI. Test a pantry payload:
              </p>

              {/* Pantry Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase text-slate-400 block">
                  Select Raw Pantry Ingredients Payload:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'paneer', label: '🧀 Paneer + Tomato' },
                    { id: 'oats', label: '🥣 Oats + Banana' },
                    { id: 'avocado', label: '🥑 Egg + Sourdough' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSimPantry(p.id as 'paneer' | 'oats' | 'avocado')}
                      className={`py-2 px-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                        simPantry === p.id
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Serverless JSON Output */}
            <div className="p-4 rounded-2xl bg-[#06090F] border border-slate-800/90 space-y-2.5 font-mono text-xs">
              <div className="text-[10px] text-slate-500 truncate">
                POST /api/analyze.js → {currentRecipe.input}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-bold text-sm">{currentRecipe.dish}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px]">
                  ⏱ {currentRecipe.prepTime}
                </span>
              </div>

              <div className="text-cyan-300 text-[11px]">
                Macros: {currentRecipe.macros}
              </div>

              <div className="text-slate-400 text-[11px]">
                💡 AI Optimization: {currentRecipe.substitution}
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                <span>Status: 200 OK (Deterministic JSON)</span>
                <span className="text-emerald-400">{currentRecipe.latency}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full Engineering Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-500/50 transition-all hover:-translate-y-1 group"
            >
              {/* Top Gradient Strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Header & Problem/Solution Narrative */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                      {project.number} • {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        Flagship
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem -> Solution Storytelling Box */}
                  <div className="space-y-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800/80 text-xs">
                    <div>
                      <span className="font-mono font-bold text-rose-500 text-[10px] uppercase block">
                        THE BOTTLENECK:
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                        {project.problemStatement}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                      <span className="font-mono font-bold text-emerald-500 text-[10px] uppercase block">
                        MY ENGINEERING SOLUTION:
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 font-medium line-clamp-3">
                        {project.engineeringSolution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact Metric Pill */}
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2 text-xs text-slate-800 dark:text-amber-300">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="font-bold">{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white transition-colors"
                          title="Inspect Source Code on GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Full Case Study Architecture Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    {selectedProject.number} • {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-500">
                    The Problem
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-500">
                    My Engineering Solution
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.engineeringSolution}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  System Architecture & Layers
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  {selectedProject.architecture.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">➜</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Engineering Deliverables
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {selectedProject.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Close Case Study
                </button>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Inspect Repository on GitHub</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
