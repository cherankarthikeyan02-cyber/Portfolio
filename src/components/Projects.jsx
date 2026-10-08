import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [interactiveTab, setInteractiveTab] = useState('demo');

  // TrendKart demo state
  const [trendKartChannel, setTrendKartChannel] = useState('All');
  const [showDuplicatesCleaned, setShowDuplicatesCleaned] = useState(true);

  // HealthPlus demo state
  const [sqlRunning, setSqlRunning] = useState(false);
  const [sqlExecuted, setSqlExecuted] = useState(true);
  const [sqlFunctionMode, setSqlFunctionMode] = useState('RANK');

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'excel', label: 'Excel & BI' },
    { id: 'sql', label: 'SQL & Database' },
    { id: 'powerbi', label: 'Power BI & Star Schema' },
    { id: 'ai', label: 'AI Strategy & Research' },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'excel') return p.tools.some((t) => t.includes('Excel') || t.includes('Pivot'));
    if (activeFilter === 'sql') return p.tools.some((t) => t.includes('SQL') || t.includes('MySQL'));
    if (activeFilter === 'powerbi') return p.tools.some((t) => t.includes('Power BI') || t.includes('Star'));
    if (activeFilter === 'ai') return p.id === 'dissertation';
    return true;
  });

  const handleOpenModal = (project) => {
    soundFx.playClick();
    setSelectedProject(project);
    setInteractiveTab('demo');
  };

  const handleCloseModal = () => {
    soundFx.playClick();
    setSelectedProject(null);
  };

  // Run simulated SQL query
  const handleExecuteSql = () => {
    soundFx.playClick();
    setSqlRunning(true);
    setTimeout(() => {
      setSqlRunning(false);
      setSqlExecuted(true);
      soundFx.playSuccess();
    }, 600);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0f1d]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Case Studies & Demos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Data &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Analytics Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed case studies with real problem-solving diagnostics, multi-table schemas, SQL window functions, and interactive simulated dashboards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveFilter(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-2xl cyber-glass border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Subtle neon gradient top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1} // CASE STUDY
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-purple-300 mb-4">{project.subtitle}</p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-left"
                    >
                      <div className="text-sm font-bold font-mono text-cyan-400">{value}</div>
                      <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold font-mono uppercase tracking-wider bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-950"
                >
                  <span>Launch Interactive Simulator</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal / Simulator Window */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div
            className="w-full max-w-4xl max-h-[90vh] bg-[#0c1324] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Title bar */}
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-slate-700" />
                <div>
                  <h4 className="text-sm font-bold font-mono text-white">
                    {selectedProject.title}
                  </h4>
                  <div className="text-[10px] text-cyan-400 font-mono">
                    SIMULATION ENVIRONMENT // {selectedProject.category}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setInteractiveTab('demo');
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      interactiveTab === 'demo'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Interactive Simulator
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setInteractiveTab('details');
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      interactiveTab === 'details'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Technical Methodology
                  </button>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {interactiveTab === 'details' ? (
                /* Technical Methodology Breakdown */
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
                      Full Case Study Execution
                    </h5>
                    <div className="space-y-3">
                      {selectedProject.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed flex items-start gap-3"
                        >
                          <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold">
                            #{dIdx + 1}
                          </span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2">
                      Tools & Technologies Deployed
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Simulator Views */
                <div>
                  {/* PROJECT 1: TrendKart Fashion Sales Dashboard */}
                  {selectedProject.id === 'trendkart' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <div className="text-xs font-mono text-slate-400 uppercase">
                              Channel Filter Slicer (Interactive)
                            </div>
                            <div className="flex gap-2 mt-1">
                              {['All', 'Online Marketplace', 'Direct Retail', 'Wholesale B2B'].map((ch) => (
                                <button
                                  key={ch}
                                  onClick={() => {
                                    soundFx.playClick();
                                    setTrendKartChannel(ch);
                                  }}
                                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                                    trendKartChannel === ch
                                      ? 'bg-cyan-500 text-slate-950 font-bold'
                                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                  }`}
                                >
                                  {ch}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-300">Clean Duplicate Invoices:</span>
                            <button
                              onClick={() => {
                                soundFx.playClick();
                                setShowDuplicatesCleaned(!showDuplicatesCleaned);
                              }}
                              className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                                showDuplicatesCleaned
                                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-700'
                                  : 'bg-rose-950/60 text-rose-400 border-rose-700'
                              }`}
                            >
                              {showDuplicatesCleaned ? '✓ VLOOKUP/IF Cleaned' : '⚠ Raw Duplicates Present'}
                            </button>
                          </div>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                            <div className="text-xs font-mono text-slate-400">Total Profiled Revenue</div>
                            <div className="text-xl font-bold font-mono text-white mt-1">
                              {trendKartChannel === 'Direct Retail' ? '$98,200' : trendKartChannel === 'Online Marketplace' ? '$142,500' : '$316,500'}
                            </div>
                            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Across 3,000 Verified Rows</div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                            <div className="text-xs font-mono text-slate-400">MoM Performance Diagnostic</div>
                            <div className="text-xl font-bold font-mono text-rose-400 mt-1">
                              {trendKartChannel === 'Direct Retail' ? '-30.6% Decline' : '+8.4% Average'}
                            </div>
                            <div className="text-[10px] text-rose-300 font-mono mt-0.5">
                              {trendKartChannel === 'Direct Retail' ? 'Root Cause: Logistics Bottleneck' : 'Channels Averaged'}
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                            <div className="text-xs font-mono text-slate-400">Data Integrity Status</div>
                            <div className="text-xl font-bold font-mono text-cyan-400 mt-1">
                              {showDuplicatesCleaned ? '100% Validated' : '142 Flags Found'}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                              {showDuplicatesCleaned ? 'COUNTIF formula deduplicated' : 'Awaiting formula execution'}
                            </div>
                          </div>
                        </div>

                        {/* Channel breakdown bars */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-mono text-slate-300">Sales Share by Channel:</div>
                          {selectedProject.interactiveDemo.channels.map((c) => (
                            <div key={c.name} className="space-y-1">
                              <div className="flex justify-between text-xs font-mono">
                                <span className="text-slate-300">{c.name}</span>
                                <span className={c.growth.startsWith('-') ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                                  {c.revenue} ({c.growth})
                                </span>
                              </div>
                              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${
                                    c.growth.startsWith('-') ? 'bg-rose-500' : 'bg-cyan-400'
                                  }`}
                                  style={{ width: c.share }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 2: HealthPlus Healthcare Database Analysis */}
                  {selectedProject.id === 'healthplus' && (
                    <div className="space-y-4">
                      {/* SQL Code Runner Box */}
                      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
                        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                          <span className="text-slate-400">MySQL 8.0 // clinic_analytics.sql</span>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400">Function:</span>
                            {['RANK', 'DENSE_RANK', 'LAG'].map((fn) => (
                              <button
                                key={fn}
                                onClick={() => {
                                  soundFx.playClick();
                                  setSqlFunctionMode(fn);
                                }}
                                className={`px-2 py-0.5 rounded text-[10px] ${
                                  sqlFunctionMode === fn
                                    ? 'bg-cyan-500 text-slate-950 font-bold'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {fn}()
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 text-slate-300 overflow-x-auto leading-relaxed whitespace-pre font-mono">
                          {selectedProject.interactiveDemo.sampleQuery.replace('RANK()', `${sqlFunctionMode}()`)}
                        </div>

                        <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">
                            Relational Database: 5 linked tables (clinics, patients, appointments, doctors, billings)
                          </span>
                          <button
                            onClick={handleExecuteSql}
                            disabled={sqlRunning}
                            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                          >
                            {sqlRunning ? (
                              <>
                                <span className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                                <span>Executing...</span>
                              </>
                            ) : (
                              <>
                                <span>▶ Run Query</span>
                                <span className="text-[10px] opacity-75">(14ms)</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Query Output Result Table */}
                      {sqlExecuted && (
                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden">
                          <div className="px-4 py-2 border-b border-slate-800 flex justify-between text-xs font-mono">
                            <span className="text-cyan-400 font-bold">Query Results (Top 5 Clinics by Revenue)</span>
                            <span className="text-slate-400">5 rows returned in 0.014s</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs font-mono">
                              <thead className="bg-slate-800/80 text-slate-300">
                                <tr>
                                  <th className="p-2.5">Rank</th>
                                  <th className="p-2.5">Clinic Name</th>
                                  <th className="p-2.5">Total Visits</th>
                                  <th className="p-2.5">Total Revenue</th>
                                  <th className="p-2.5">Primary Specialization</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800 text-slate-200">
                                {selectedProject.interactiveDemo.results.map((r) => (
                                  <tr key={r.rank} className="hover:bg-slate-800/40">
                                    <td className="p-2.5 text-cyan-400 font-bold">#{r.rank}</td>
                                    <td className="p-2.5 font-medium">{r.clinic}</td>
                                    <td className="p-2.5 text-slate-300">{r.visits}</td>
                                    <td className="p-2.5 text-emerald-400 font-bold">{r.rev}</td>
                                    <td className="p-2.5 text-purple-300">{r.topDept}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* PROJECT 3: AeroHome Manufacturing Analytics Dashboard */}
                  {selectedProject.id === 'aerohome' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                          Star Schema Architecture (12 Manufacturing Tables)
                        </div>

                        {/* Star Schema Interactive Diagram */}
                        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
                          {/* Center Fact Table */}
                          <div className="p-3.5 rounded-xl bg-cyan-500/20 border-2 border-cyan-400 text-center shadow-lg shadow-cyan-500/20 z-10">
                            <div className="text-[10px] font-mono text-cyan-300 uppercase">Fact Table</div>
                            <div className="text-sm font-bold font-mono text-white">Fact_ManufacturingProduction</div>
                            <div className="text-[10px] text-slate-400">Keys: DateID, LineID, SupplierID, DowntimeID</div>
                          </div>

                          {/* Orbiting Dimension Tables */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-6">
                            {[
                              { name: 'Dim_DowntimeCauses', icon: '⏱', desc: 'Mechanical, Electrical, Shift' },
                              { name: 'Dim_QualityDefects', icon: '🔍', desc: 'PPM Defect Classification' },
                              { name: 'Dim_Suppliers', icon: '🚚', desc: 'Vendor Lead-Time Variance' },
                              { name: 'Dim_AssemblyLines', icon: '⚙', desc: 'Throughput & Line Speed' },
                              { name: 'Dim_PurchaseOrders', icon: '📦', desc: 'Procurement Cycle Tracking' },
                              { name: 'Dim_ShiftCalendar', icon: '📅', desc: 'Work Shifts & Timestamps' },
                            ].map((dim) => (
                              <div
                                key={dim.name}
                                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-center hover:border-cyan-400 transition-colors"
                              >
                                <div className="text-base">{dim.icon}</div>
                                <div className="text-xs font-mono font-bold text-slate-200">{dim.name}</div>
                                <div className="text-[10px] text-slate-400">{dim.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Telemetry metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {selectedProject.interactiveDemo.liveMetrics.map((m) => (
                            <div key={m.name} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                              <div className="text-xs font-mono text-slate-400">{m.name}</div>
                              <div className="text-lg font-bold font-mono text-cyan-400 mt-1">{m.val}</div>
                              <div className="text-[10px] font-mono text-emerald-400">{m.status}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 4: AI & Data Science Digital Transformation Dissertation */}
                  {selectedProject.id === 'dissertation' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                          The 4-Tier AI Maturity Model Framework (SRM University MBA Research)
                        </div>
                        <p className="text-xs text-slate-300">
                          Cheran's proprietary synthesis linking enterprise data maturity with verifiable digital transformation ROI.
                        </p>

                        <div className="space-y-3">
                          {selectedProject.interactiveDemo.levels.map((lvl, lIdx) => (
                            <div
                              key={lvl.stage}
                              className={`p-3.5 rounded-xl border transition-all ${
                                lIdx === 3
                                  ? 'bg-gradient-to-r from-purple-950/40 via-cyan-950/40 to-slate-900 border-cyan-400/60 shadow-lg'
                                  : 'bg-slate-950 border-slate-800'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-mono font-bold text-cyan-300">{lvl.stage}</span>
                                <span className="text-[10px] font-mono text-purple-400">
                                  {lIdx === 3 ? 'Target Horizon' : `Phase 0${lIdx + 1}`}
                                </span>
                              </div>
                              <div className="text-xs text-slate-300 font-mono">{lvl.focus}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Candidate: Cheran G K (SRM MBA AI & Data Science)</span>
              <button
                onClick={handleCloseModal}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
