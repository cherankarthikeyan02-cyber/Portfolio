import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const excelFormulas = [
    { name: 'XLOOKUP / VLOOKUP', purpose: 'Dynamic multi-table referencing & invoice reconciliation' },
    { name: 'COUNTIF / COUNTIFS', purpose: 'Deduplicating duplicate IDs & anomaly detection' },
    { name: 'SUMIF / SUMIFS', purpose: 'Conditional revenue aggregation across product channels' },
    { name: 'PivotTables & Slicers', purpose: 'Interactive executive reporting & drill-down metrics' },
    { name: 'Nested IF / IFS', purpose: 'Multi-condition tier classification & validation logic' },
    { name: 'MIN / MAX / AVERAGE', purpose: 'Statistical baseline and outlier bounds profiling' },
  ];

  const skillCategories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'programming', label: 'Programming & SQL' },
    { id: 'bi', label: 'Data & BI Tools' },
    { id: 'db', label: 'Databases' },
    { id: 'business', label: 'Strategy & Analytics' },
    { id: 'excel', label: 'Excel Mastery' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0f1d]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 shadow-lg shadow-purple-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              SKILLS
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tools, Technologies
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Domain Expertise
            </span> */}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proficiencies across modern data pipelines, SQL window functions, business intelligence modeling, and executive strategy.
          </p>
        </div>

        {/* Filter Bar & Search */}


        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Programming & Databases */}
          {(activeCategory === 'all' || activeCategory === 'programming' || activeCategory === 'db') && (
            <div className="p-6 rounded-2xl cyber-glass border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 text-base">💻</span>
                  <h3 className="font-bold text-white font-mono text-sm">Programming & Databases</h3>
                </div>
                <span className="text-[10px] font-mono text-cyan-400">Core Querying</span>
              </div>

              <div className="space-y-4">
                {portfolioData.skills.programming.map((p) => (
                  <div key={p.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{p.name}</span>
                      <span className="text-cyan-400">{p.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400" style={{ width: `${p.level}%` }} />
                    </div>
                    <div className="text-[11px] text-slate-400">{p.note}</div>
                  </div>
                ))}

                {portfolioData.skills.databases.map((db) => (
                  <div key={db.name} className="space-y-1.5 pt-1 border-t border-slate-800/80">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{db.name}</span>
                      <span className="text-purple-400">{db.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${db.level}%` }} />
                    </div>
                    <div className="text-[11px] text-slate-400">{db.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Intelligence & Data Tools */}
          {(activeCategory === 'all' || activeCategory === 'bi') && (
            <div className="p-6 rounded-2xl cyber-glass border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-purple-950 border border-purple-800 text-purple-400 text-base">📊</span>
                  <h3 className="font-bold text-white font-mono text-sm">BI & Visualization</h3>
                </div>
                <span className="text-[10px] font-mono text-purple-400">Dashboards</span>
              </div>

              <div className="space-y-4">
                {portfolioData.skills.dataTools.map((dt) => (
                  <div key={dt.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{dt.name}</span>
                      <span className="text-purple-400">{dt.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" style={{ width: `${dt.level}%` }} />
                    </div>
                    <div className="text-[11px] text-slate-400">{dt.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Strategy & Analytics */}

        </div>

        {/* Specialized Spotlight: Excel Formulas & Advanced Tools (Resume Highlight) */}
        {(activeCategory === 'all' || activeCategory === 'excel') && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Excel Spreadsheet Intermediate
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Microsoft Excel Formula Architecture & Modeling
                </h3>
              </div>
              {/* <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono text-xs">
                3,000+ Records Verified
              </span> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {excelFormulas.map((formula) => (
                <div
                  key={formula.name}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-xs font-mono font-bold text-cyan-300">{formula.name}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{formula.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills Badges */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Core Professional & Interpersonal Competencies
          </div>
          <div className="flex flex-wrap gap-2.5">
            {portfolioData.skills.softSkills.map((soft) => (
              <span
                key={soft}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2 hover:border-cyan-400 transition-colors"
              >
                <span className="text-cyan-400">✦</span>
                <span>{soft}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
