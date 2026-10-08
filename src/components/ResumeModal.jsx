import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Cheran_GK_Resume.pdf (Verified Document)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Resume"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:m-0 selection:bg-cyan-100">
          
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-950 uppercase font-serif">
              CHERAN G K
            </h1>
            <div className="text-xs text-slate-700 font-medium mt-1.5 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>+91 6380731719</span>
              <span>•</span>
              <a href="mailto:cherankarthikeyan02@gmail.com" className="text-blue-700 underline">
                cherankarthikeyan02@gmail.com
              </a>
              <span>•</span>
              <span>Erode, Tamil Nadu</span>
            </div>
            <div className="text-xs text-slate-700 font-medium mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <a href="https://www.linkedin.com/in/k-cheran" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                www.linkedin.com/in/k-cheran
              </a>
              <span>•</span>
              <a href="https://www.github.com/cherankarthikeyan02-cyber" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                www.github.com/cherankarthikeyan02-cyber
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-serif">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              Motivated MBA graduate specialising in AI & Data Science, seeking to leverage analytical expertise and business acumen to drive data-driven decision-making and digital transformation.
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              EDUCATION
            </h2>
            
            <div className="space-y-2.5 text-xs text-slate-800">
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
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              WORK EXPERIENCE
            </h2>

            <div className="text-xs text-slate-800">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Calibration & Metrology Trainee</span>
                <span>2024 – 2025</span>
              </div>
              <div className="italic text-slate-700 mb-1.5">Roots Industries India Pvt. Ltd., Coimbatore</div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-800">
                <li>Calibrated and maintained precision measuring instruments per quality and metrology standards.</li>
                <li>Maintained calibration records ensuring traceability and compliance with industry standards.</li>
                <li>Supported the QA team in manufacturing quality control processes and data documentation.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              PROJECTS
            </h2>

            <div className="space-y-3 text-xs text-slate-800">
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
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800">
              <li>MBA – Artificial Intelligence & Data Science | SRM University (Expected Jun 2026)</li>
              <li>Strong academic performance: CGPA 9.00 (MBA) and 8.98 (B.E.)</li>
              <li>Industry exposure in Calibration & Metrology at a leading automotive components manufacturer.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Format: Standard Corporate / ATS-Compliant Layout</span>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
