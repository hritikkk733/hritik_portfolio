import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Database, 
  Play, 
  BarChart3
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [queryMode, setQueryMode] = useState<'optimized' | 'legacy'>('optimized');
  const [selectedCircle, setSelectedCircle] = useState<'ALL' | 'PATNA' | 'MUZAFFARPUR'>('ALL');

  const circleData = {
    ALL: {
      txCount: '5,42,890',
      volume: '₹48.6 Cr',
      activeBCs: '1,240 Active',
      bars: [78, 85, 64, 92, 88, 96],
      months: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    PATNA: {
      txCount: '2,84,110',
      volume: '₹26.4 Cr',
      activeBCs: '610 Active',
      bars: [82, 88, 74, 95, 91, 98],
      months: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    MUZAFFARPUR: {
      txCount: '1,62,450',
      volume: '₹14.2 Cr',
      activeBCs: '380 Active',
      bars: [68, 72, 60, 84, 79, 89],
      months: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
  };

  const currentCircle = circleData[selectedCircle];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>CHAPTER 02 // IN THE PRODUCTION TRENCHES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            500,000+ Financial Rows & <span className="font-editorial italic font-normal text-indigo-500">Zero Room for Error.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tutorial apps don’t have angry analysts waiting on Monday-morning banking reports. At <strong className="text-slate-900 dark:text-white">Sanjivani Media and Technologies Pvt. Ltd.</strong>, I learned what production engineering really means.
          </p>
        </div>

        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="space-y-10">
            
            {/* Main Role Banner Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-8">
              
              {/* Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {exp.duration}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left lg:text-right shrink-0">
                  <div className="text-2xl font-extrabold font-mono text-amber-600 dark:text-amber-400">
                    40%+ Faster
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Data Handling & Report Turnaround
                  </div>
                </div>
              </div>

              {/* Before vs After Impact Cards */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                  <span>The Engineering Delta (Before vs. After My Contributions)</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {exp.beforeAfter.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/90 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="text-xs space-y-1">
                          <span className="font-mono font-bold text-rose-500 uppercase text-[10px] block">
                            ✗ THE CHALLENGE BEFORE
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.before}
                          </p>
                        </div>

                        <div className="text-xs space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                          <span className="font-mono font-bold text-emerald-500 uppercase text-[10px] block">
                            ✓ WHAT I ENGINEERED
                          </span>
                          <p className="text-slate-900 dark:text-slate-200 font-medium leading-relaxed">
                            {item.after}
                          </p>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-between">
                        <span>IMPACT:</span>
                        <span>{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive SQL & Banking Dashboard Simulator */}
              <div className="p-6 rounded-3xl bg-[#0B0F17] text-slate-100 border border-slate-800 space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                      <Database className="w-4 h-4" />
                      <span>INTERACTIVE SIMULATOR // MY BANKING ANALYTICS & SQL OPTIMIZATION WORK</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Toggle between the legacy query and my optimized MySQL + Chart.js pipeline to see how I improved regional banking reports:
                    </p>
                  </div>

                  {/* Mode Switcher */}
                  <div className="flex items-center gap-2 self-start lg:self-auto">
                    <button
                      onClick={() => setQueryMode('legacy')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                        queryMode === 'legacy'
                          ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/25'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      Legacy Query (4,120ms)
                    </button>
                    <button
                      onClick={() => setQueryMode('optimized')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        queryMode === 'optimized'
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      <Play className="w-3 h-3" />
                      <span>Hritik's Tuned SQL (380ms)</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: SQL Execution Plan View */}
                  <div className="lg:col-span-6 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>MYSQL EXECUTION TELEMETRY</span>
                      <span className={queryMode === 'optimized' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {queryMode === 'optimized' ? '⚡ 380 ms (INDEXED)' : '🐢 4,120 ms (FULL TABLE SCAN)'}
                      </span>
                    </div>

                    <pre className="p-3.5 rounded-2xl bg-[#06090F] border border-slate-800/90 text-[11px] leading-relaxed overflow-x-auto text-slate-300">
{queryMode === 'optimized'
  ? `-- Hritik's Optimized Regional Aggregation (380ms)
SELECT c.circle_name, COUNT(t.id) AS tx_count, SUM(t.amount)
FROM bc_transactions t
USE INDEX (idx_circle_txdate_status)
INNER JOIN ro_circle_master c ON t.circle_id = c.id
WHERE t.tx_date >= '2026-05-01' AND t.status = 'SETTLED'
GROUP BY c.circle_name;`
  : `-- Legacy Unoptimized Report Query (4,120ms)
SELECT * FROM bc_transactions t
WHERE t.circle_id IN (
  SELECT id FROM ro_circle_master WHERE status != 'INACTIVE'
)
-- Warning: Full table scan across 5,42,890 rows!`}
                    </pre>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] text-slate-500">ROWS SCANNED</div>
                        <div className={`font-bold ${queryMode === 'optimized' ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {queryMode === 'optimized' ? '14,200' : '5,42,890'}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] text-slate-500">INDEX STRATEGY</div>
                        <div className="font-bold text-cyan-400">
                          {queryMode === 'optimized' ? 'Composite B-Tree' : 'None (Filesort)'}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] text-slate-500">ANALYST WAIT</div>
                        <div className="font-bold text-amber-400">
                          {queryMode === 'optimized' ? 'Instant (<0.4s)' : '4.1 Seconds'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Simulated Live Chart.js Banking Dashboard */}
                  <div className="lg:col-span-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <span>Regional Circle Master KPI Preview</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {(['ALL', 'PATNA', 'MUZAFFARPUR'] as const).map((c) => (
                          <button
                            key={c}
                            onClick={() => setSelectedCircle(c)}
                            className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-colors cursor-pointer ${
                              selectedCircle === c
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-[10px] text-slate-500 block">SETTLED TXNS</span>
                        <span className="text-white font-bold">{currentCircle.txCount}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-[10px] text-slate-500 block">VOLUME</span>
                        <span className="text-emerald-400 font-bold">{currentCircle.volume}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                        <span className="text-[10px] text-slate-500 block">BC AGENTS</span>
                        <span className="text-amber-400 font-bold">{currentCircle.activeBCs}</span>
                      </div>
                    </div>

                    {/* Visual Bar Chart */}
                    <div className="pt-2">
                      <div className="h-24 flex items-end justify-between gap-2 px-2">
                        {currentCircle.bars.map((val, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-slate-800 rounded-t-lg h-20 flex items-end overflow-hidden">
                              <div
                                className={`w-full rounded-t-lg transition-all duration-500 ${
                                  queryMode === 'optimized'
                                    ? 'bg-gradient-to-t from-indigo-600 to-emerald-400'
                                    : 'bg-rose-500/60'
                                }`}
                                style={{ height: `${val}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">
                              {currentCircle.months[i]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Engineering Deliverables & Stack */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-start">
                <div className="lg:col-span-8 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Production Responsibilities at {exp.company}:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400">
                    Daily Production Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
