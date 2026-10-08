import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Footer({ onOpenResume }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST (Erode)'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060913] border-t border-slate-800/80 text-slate-400 font-sans overflow-hidden">
      {/* Background glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#080c16] rounded-xl flex items-center justify-center font-mono font-bold text-cyan-400">
                  C
                </div>
              </div>
              <span className="text-lg font-bold text-white font-mono tracking-wider">
                {portfolioData.personal.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              MBA in AI & Data Science (SRM University, 9.00 CGPA) & B.E. (Bannari Amman Inst., 8.98 CGPA). Specializing in star-schema data modeling, SQL analytics, and digital transformation strategy.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Data Analyst & AI Strategy Roles</span>
            </div>

            <div className="text-xs font-mono text-slate-500">
              🕒 Current Local Time: <span className="text-slate-300 font-bold">{time}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Fast Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {['home', 'about', 'skills', 'projects', 'education', 'resume', 'contact'].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => soundFx.playClick()}
                    className="hover:text-cyan-400 transition-colors uppercase font-mono tracking-wider"
                  >
                    // {sec}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenResume();
                  }}
                  className="hover:text-cyan-400 transition-colors uppercase font-mono tracking-wider text-left text-cyan-400"
                >
                  // View Resume PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Contact & Links
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <span className="text-slate-500">Email: </span>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-slate-200 hover:text-cyan-400">
                  {portfolioData.personal.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500">Phone: </span>
                <a href={`tel:${portfolioData.personal.phone}`} className="text-slate-200 hover:text-emerald-400">
                  {portfolioData.personal.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-500">LinkedIn: </span>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                  linkedin.com/in/k-cheran
                </a>
              </div>
              <div>
                <span className="text-slate-500">GitHub: </span>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">
                  github.com/cherankarthikeyan02-cyber
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
              >
                <span>↑ Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Three.js 3D WebGL</span>
            <span>•</span>
            <span>React.js + Tailwind CSS</span>
            <span>•</span>
            <span className="text-cyan-400">Responsive Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
