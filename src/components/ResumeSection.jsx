import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ResumeSection({ onOpenModal }) {
  const [viewMode, setViewMode] = useState('document'); // 'document' | 'interactive'
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const handleCopySummary = () => {
    soundFx.playSuccess();
    const summaryText = `CHERAN G K\nAI & Data Science Specialist | Business & Data Analyst\nEmail: ${portfolioData.personal.email}\nPhone: ${portfolioData.personal.phone}\nLocation: ${portfolioData.personal.location}\nLinkedIn: ${portfolioData.personal.linkedin}\nGitHub: ${portfolioData.personal.github}\n\nCAREER OBJECTIVE:\n${portfolioData.personal.careerObjective}\n\nEDUCATION:\n- MBA (AI & Data Science), SRM University, CGPA: 9.00/10.00\n- B.E., Bannari Amman Institute of Technology, CGPA: 8.98/10.00\n\nEXPERIENCE:\nCalibration & Metrology Trainee, Roots Industries India Pvt. Ltd. (2024-2025)\n\nKEY PROJECTS:\n1. TrendKart Sales Analysis (Excel, Power Query, 30.6% MoM decline diagnosed)\n2. HealthPlus Healthcare Database (MySQL, Window Functions, 5 Tables)\n3. AeroHome Manufacturing Dashboard (Power BI, 12-Table Star Schema)\n4. AI & Data Science Digital Transformation Dissertation (SRM University)\n\nSKILLS:\nPython, SQL, MySQL, Power BI, Tableau, Advanced Excel, Digital Transformation Strategy`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#070b15]">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              RESUME
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">ATS Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Official{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Resume & Credentials
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            View the official resume document of Cheran GK.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl cyber-glass border border-slate-800 mb-8 max-w-5xl mx-auto">
          {/* View Mode Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">Format:</span>
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-700/80">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode('document');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${viewMode === 'document'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                📄 ATS Document View
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode('interactive');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${viewMode === 'interactive'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                ⚡ Interactive Summary
              </button>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* <button
              onClick={handleCopySummary}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <span>{copied ? '✓ Copied to Clipboard' : '📋 Copy Text'}</span>
            </button> */}

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Download PDF</span>
            </button>

            {onOpenModal && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenModal();
                }}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                title="Open in Popup Modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* View Mode 1: Authentic ATS Document Format */}
        {viewMode === 'document' ? (
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-white text-slate-900 font-sans p-6 sm:p-12 transition-all">

            {/* Document Header */}
            <div className="text-center border-b-2 border-slate-900 pb-5 mb-5">
              <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-950 uppercase font-serif">
                {portfolioData.personal.name}
              </h1>
              <div className="text-xs text-slate-700 font-medium mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
                <span className="font-semibold text-slate-900">{portfolioData.personal.phone}</span>
                <span>|</span>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-blue-700 hover:underline">
                  {portfolioData.personal.email}
                </a>
                <span>|</span>
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="text-xs text-slate-700 font-medium mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1">
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  {portfolioData.personal.linkedin}
                </a>
                <span>|</span>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  {portfolioData.personal.github}
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-1.5 font-serif">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed text-justify">
                {portfolioData.personal.careerObjective}
              </p>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                EDUCATION
              </h2>
              <div className="space-y-2 text-xs text-slate-800">
                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>MBA – Artificial Intelligence & Data Science</span>
                    <span>Jun 2024 – Jun 2026</span>
                  </div>
                  <div className="flex justify-between text-slate-700 italic">
                    <span>SRM University</span>
                    <span className="font-semibold text-slate-900 not-italic">CGPA: 9.00 / 10.00</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>Bachelor of Engineering</span>
                    <span>Jun 2020 – Jun 2024</span>
                  </div>
                  <div className="flex justify-between text-slate-700 italic">
                    <span>Bannari Amman Institute of Technology</span>
                    <span className="font-semibold text-slate-900 not-italic">CGPA: 8.98 / 10.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                WORK EXPERIENCE
              </h2>
              <div className="text-xs text-slate-800">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Calibration & Metrology Trainee</span>
                  <span>2024 – 2025</span>
                </div>
                <div className="italic text-slate-700 mb-1.5">
                  Roots Industries India Pvt. Ltd., Coimbatore
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-800">
                  <li>Calibrated and maintained precision measuring instruments per quality and metrology standards.</li>
                  <li>Maintained calibration records ensuring traceability and compliance with industry standards.</li>
                  <li>Supported the QA team in manufacturing quality control processes and data documentation.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                PROJECTS
              </h2>
              <div className="space-y-3.5 text-xs text-slate-800">
                {/* TrendKart */}
                <div>
                  <div className="font-bold text-slate-900">TrendKart Fashion Sales Analysis Dashboard</div>
                  <div className="italic text-slate-600 mb-1">Excel, Power Query, PivotTables</div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    <li>Cleaned and profiled 3,000 transaction records across 6 linked tables — using VLOOKUP, IF, and COUNTIF formulas to flag duplicate invoices, missing IDs, and mixed formats — reflecting strong attention to detail.</li>
                    <li>Built an interactive Excel dashboard with PivotTables, PivotCharts, slicers, and KPI cards to compare monthly sales, profit, and channel performance.</li>
                    <li>Applied analytical thinking and problem-solving to diagnose a 30.6% month-over-month sales decline, then communicated findings and recovery recommendations in simple, clear language for business stakeholders.</li>
                  </ul>
                </div>

                {/* HealthPlus */}
                <div>
                  <div className="font-bold text-slate-900">HealthPlus Healthcare Database Analysis</div>
                  <div className="italic text-slate-600 mb-1">MySQL, SQL</div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    <li>Queried a 5-table relational healthcare database using SELECT, WHERE, JOIN, GROUP BY, ORDER BY, HAVING, and aggregate functions to analyze member demand and clinic performance.</li>
                    <li>Applied window functions and basic statistical comparisons (RANK, LAG, LEAD, averages) to rank specialists and compare consultation fees across specializations.</li>
                    <li>Used problem-solving skills to identify the top 5 clinics by consultation volume and break down revenue contribution across consultation, lab, and medicine services.</li>
                  </ul>
                </div>

                {/* AeroHome */}
                <div>
                  <div className="font-bold text-slate-900">AeroHome Manufacturing Analytics Dashboard</div>
                  <div className="italic text-slate-600 mb-1">Power BI, Power Query</div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    <li>Cleaned and modeled a 12-table manufacturing dataset (production, quality, downtime, purchase orders) into a star schema for Power BI reporting.</li>
                    <li>Built dashboards tracking production output, defect rates, downtime causes, and supplier lead-time performance to support clear, data-driven decision-making.</li>
                    <li>Proactively learned new Power BI and data-modeling techniques to independently deliver production-ready dashboards, showing willingness to learn and initiative.</li>
                  </ul>
                </div>

                {/* Dissertation */}
                <div>
                  <div className="font-bold text-slate-900">A Study on AI and Data Science in Digital Transformation Strategies</div>
                  <div className="italic text-slate-600 mb-1">MBA Dissertation | SRM University</div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5">
                    <li>Investigated how organisations leverage AI and data science to accelerate digital transformation.</li>
                    <li>Analysed case studies of AI-driven strategies to improve operational efficiency and customer experience.</li>
                    <li>Proposed a framework linking AI maturity levels with digital transformation outcomes using primary research.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                SKILLS
              </h2>
              <div className="space-y-1 text-xs text-slate-800">
                <div><strong className="text-slate-900">Programming:</strong> Python (Basic), SQL</div>
                <div><strong className="text-slate-900">Data Tools:</strong> Power BI, Tableau</div>
                <div><strong className="text-slate-900">Databases:</strong> MySQL</div>
                <div><strong className="text-slate-900">Business Skills:</strong> Data-Driven Strategy, Digital Transformation, Business Analytics</div>
                <div><strong className="text-slate-900">Tools:</strong> MS Excel (IF, SUMIF, COUNTIF, VLOOKUP, XLOOKUP, SUM, AVERAGE, COUNT, MAX, MIN, Pivot Tables)</div>
                <div><strong className="text-slate-900">Soft Skills:</strong> Problem Solving, Team Collaboration, Communication, Attention to Detail</div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-400 pb-0.5 mb-2 font-serif">
                CERTIFICATIONS & ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800">
                <li>MBA – Artificial Intelligence & Data Science | SRM University (Expected Jun 2026)</li>
                <li>Strong academic performance: CGPA 9.00 (MBA) and 8.98 (B.E.)</li>
                <li>Industry exposure in Calibration & Metrology at a leading automotive components manufacturer.</li>
              </ul>
            </div>
          </div>
        ) : (
          /* View Mode 2: Interactive Cyber Timeline & Key Highlights */
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl cyber-glass border border-cyan-500/40 text-center">
                <div className="text-3xl font-extrabold font-mono text-cyan-400">9.00</div>
                <div className="text-xs font-mono text-white mt-1">MBA CGPA (SRM Univ)</div>
                <div className="text-[11px] text-slate-400 mt-1">AI & Data Science Specialization</div>
              </div>
              <div className="p-6 rounded-2xl cyber-glass border border-purple-500/40 text-center">
                <div className="text-3xl font-extrabold font-mono text-purple-400">8.98</div>
                <div className="text-xs font-mono text-white mt-1">B.E. CGPA (Bannari Amman)</div>
                <div className="text-[11px] text-slate-400 mt-1">Quantitative Systems Engineering</div>
              </div>
              <div className="p-6 rounded-2xl cyber-glass border border-emerald-500/40 text-center">
                <div className="text-3xl font-extrabold font-mono text-emerald-400">100%</div>
                <div className="text-xs font-mono text-white mt-1">Quality & Traceability</div>
                <div className="text-[11px] text-slate-400 mt-1">Roots Industries Metrology QA</div>
              </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Executive Profile</div>
                <h4 className="text-lg font-bold text-white">Cheran G K</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {portfolioData.personal.careerObjective}
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
                  <div>📍 {portfolioData.personal.location}</div>
                  <div>✉ {portfolioData.personal.email}</div>
                  <div>📞 {portfolioData.personal.phone}</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-purple-400 font-bold uppercase">Core Analytical Toolkit</div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Power BI', 'SQL Window Functions', 'MySQL', 'Python', '12-Table Star Schema', 'Tableau', 'Excel PivotTables', 'VLOOKUP / XLOOKUP', 'Metrology QA', 'Digital Transformation'].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <button
                    onClick={handlePrint}
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition-colors"
                  >
                    Download Official PDF Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
