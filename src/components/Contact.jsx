import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Contact({ onOpenResume }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    soundFx.playSuccess();
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    soundFx.playClick();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      soundFx.playSuccess();
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0f1d]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              CONTACT
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-[11px] font-mono text-slate-400">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Collaborate on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Data & AI Innovations
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind or interested in hiring? Drop me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl cyber-glass border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-sans mb-1">Contact Details</h3>
                <p className="text-xs text-slate-400">
                  Feel free to reach out via phone, email, or social profiles anytime.
                </p>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg">
                    ✉
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-white group-hover:text-cyan-400 transition-colors break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 text-xs font-mono transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 text-lg">
                    📞
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Direct Phone</div>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-white group-hover:text-emerald-400 transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 text-xs font-mono transition-colors flex-shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 text-lg">
                  📍
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-mono font-semibold text-white">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-center flex flex-col items-center justify-center gap-1 group"
                >
                  <span className="text-sm font-bold text-white group-hover:text-cyan-400 font-mono">LinkedIn ↗</span>
                  <span className="text-[10px] text-slate-400 font-mono">{portfolioData.personal.linkedinHandle}</span>
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-purple-400 hover:bg-purple-500/10 transition-all text-center flex flex-col items-center justify-center gap-1 group"
                >
                  <span className="text-sm font-bold text-white group-hover:text-purple-400 font-mono">GitHub ↗</span>
                  <span className="text-[10px] text-slate-400 font-mono">{portfolioData.personal.githubHandle}</span>
                </a>
              </div>

              {/* <div className="pt-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenResume();
                  }}
                  className="w-full py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <span>📄 View Official Resume PDF</span>
                </button>
              </div> */}
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl cyber-glass border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white font-sans mb-1">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Looking for an AI & Data Science strategist? Drop a note below:
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3 animate-fadeIn">
                  <span className="text-4xl">🚀</span>
                  <h4 className="text-lg font-bold text-emerald-300 font-mono">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! Cheran G K will get back to you promptly at the provided email.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold font-mono text-xs hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Opportunity / AI Strategy Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block mb-1.5">
                      Project Details or Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Discuss project requirements, role details, or collaboration ideas..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold font-mono text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
