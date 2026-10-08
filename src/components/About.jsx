import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Star Schema & Data Architecture",
      icon: "📊",
      badge: "Power BI & ETL",
      description:
        "Architecting robust multi-table schemas (up to 12-table star schemas) that transform raw, disorganized transactional silos into high-performance analytical data models.",
      points: [
        "Normalization vs denormalization trade-offs",
        "DAX calculations & automated Power Query ETL",
        "Single-source-of-truth for executive KPIs"
      ]
    },
    {
      title: "Advanced SQL & Relational Analysis",
      icon: "⚡",
      badge: "MySQL & Window Functions",
      description:
        "Extracting deep operational insights across complex relational databases using window functions (RANK, LAG, LEAD), multi-table joins, and aggregate filtering.",
      points: [
        "Patient flow & clinic volume profiling",
        "Comparative statistical analysis across departments",
        "Query optimization & index-friendly queries"
      ]
    },
    {
      title: "AI Strategy & Digital Transformation",
      icon: "🤖",
      badge: "MBA AI & Data Science",
      description:
        "Formulating 4-tier AI maturity models linking machine learning adoption with tangible enterprise operational efficiency and customer satisfaction outcomes.",
      points: [
        "AI maturity stage auditing",
        "Bridging engineering teams with C-suite executives",
        "Cost-benefit analysis of AI automation"
      ]
    },
    {
      title: "Precision Metrology & Industrial QA",
      icon: "🎯",
      badge: "Roots Industries Experience",
      description:
        "Calibrating micro-precision industrial instruments, upholding strict ISO/automotive metrology compliance, and preventing defect propagation with statistical process control.",
      points: [
        "Traceability & calibration record integrity",
        "Micrometer, vernier caliper & CMM inspection",
        "Root cause defect analysis & zero-defect culture"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080c16]">
      {/* Background cyber accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              ABOUT
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Profile & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Cheran GK{' '}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Strategic AI Acumen
            </span> */}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
Discover my journey, career vision, core competencies, and passion for modern software development.
          </p>
        </div>

        {/* Career Objective Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 mb-16 shadow-xl relative overflow-hidden group">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Career Objective & Mission
              </span>
              <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed italic">
                "{portfolioData.personal.careerObjective}"
              </p>
            </div>
            <div className="flex-shrink-0 flex md:flex-col gap-3">
              {/* <div className="text-center px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <div className="text-2xl font-bold font-mono text-cyan-400">9.00</div>
                <div className="text-[11px] text-slate-400 uppercase">MBA CGPA</div>
              </div> */}
              {/* <div className="text-center px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <div className="text-2xl font-bold font-mono text-purple-400">8.98</div>
                <div className="text-[11px] text-slate-400 uppercase">B.E. CGPA</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* 4 Strategic Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              onMouseEnter={() => {
                setActivePillar(idx);
                soundFx.playHover();
              }}
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                activePillar === idx
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-400/60 shadow-xl shadow-cyan-950/40 -translate-y-2'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    {pillar.icon}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-sans">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{pillar.description}</p>
              </div>

              <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
