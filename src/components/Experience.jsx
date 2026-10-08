import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Experience() {
  const exp = portfolioData.experience[0];
  const [activeTolerance, setActiveTolerance] = useState('0.002 mm');

  const metrologyTools = [
    { name: 'Micrometers & Vernier Calipers', tolerance: '± 0.001 mm', type: 'Linear Dimension' },
    { name: 'Dial Indicators & Bore Gauges', tolerance: '± 0.002 mm', type: 'Concentricity & Runout' },
    { name: 'Coordinate Measuring Machine (CMM)', tolerance: '± 0.0005 mm', type: '3D Coordinate Metrology' },
    { name: 'Surface Roughness Testers', tolerance: 'Ra 0.05 μm', type: 'Surface Finish Quality' },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#080c16]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Metrology & QA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industrial Exposure &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Metrology Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on precision manufacturing quality control, audit-compliant data traceability, and calibration at a premier automotive components manufacturer.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl cyber-glass border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-2xl shadow-lg shadow-emerald-950/40">
                ⚙
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-sans">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-emerald-300 mt-1">
                  <span className="font-semibold text-white">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                📅 {exp.period}
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono text-emerald-300 font-semibold">
                ✓ Automotive QA Certified
              </span>
            </div>
          </div>

          {/* Grid: Responsibilities & Interactive Metrology Instrument Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Responsibilities Column */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Key Responsibilities & Industry Standards
              </h4>

              <div className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed flex items-start gap-3 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-emerald-400 font-mono text-xs font-bold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills gained chips */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-2">Competencies & Domains Mastered:</div>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-800 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Metrology Tolerance Inspector Widget */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-slate-200">
                    PRECISION GAUGE SIMULATOR
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    ISO 10012 Traceability
                  </span>
                </div>

                <div className="my-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Selected Tolerance Standard</div>
                  <div className="text-2xl font-black font-mono text-emerald-400 mt-1 tracking-wider">
                    {activeTolerance}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    Zero-Defect Quality Control Pass
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">Inspected Metrology Instruments:</div>
                  {metrologyTools.map((tool) => (
                    <button
                      key={tool.name}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveTolerance(tool.tolerance);
                      }}
                      className={`w-full p-2.5 rounded-lg text-left text-xs font-mono transition-all flex items-center justify-between border ${
                        activeTolerance === tool.tolerance
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{tool.name}</div>
                        <div className="text-[10px] text-slate-400">{tool.type}</div>
                      </div>
                      <span className="font-bold font-mono text-emerald-400">{tool.tolerance}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 font-mono leading-relaxed">
                💡 Precision metrology instills the exact same discipline required in Data Science: obsessive verification, zero data loss, and strict traceability.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
