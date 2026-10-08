import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#080c16]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 shadow-lg shadow-purple-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              EDUCATION
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Academic Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-300 to-cyan-400">
              Journey
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Exceptional academic consistency across postgraduate and undergraduate institutions, combining applied AI research with rigorous engineering foundations.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={edu.degree}
              onMouseEnter={() => soundFx.playHover()}
              className="p-8 rounded-3xl cyber-glass border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 text-purple-300 border border-purple-800">
                    {edu.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 font-mono mb-4">
                  {edu.institution}
                </div>

                {/* Grade badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-300">
                    {edu.grade}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">(Academic Honors)</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <div className="text-xs font-mono text-slate-300 font-semibold mb-2">Key Highlights:</div>
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Key Achievements Banner */}
        {/* <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 text-xl">🏆</span>
            <div>
              <h3 className="text-lg font-bold text-white font-mono">
                Certifications & Key Achievements
              </h3>
              <p className="text-xs text-slate-400">Validated milestones from resume record</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioData.certificationsAndAchievements.map((item, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <div className="text-xs font-mono font-bold text-cyan-300">{item.title}</div>
                </div>
                <div className="text-[11px] font-mono text-purple-300 mb-1">{item.org}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
