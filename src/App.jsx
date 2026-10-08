import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { soundFx } from './utils/audio';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Sticky Navigation with Particular Section Anchors */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        isMuted={isMuted}
        onToggleMute={toggleMute}
      />

      {/* Main Content Particular Sections */}
      <main>
        {/* 1. 3D Interactive Hero */}
        <Hero3D onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. PARTICULAR SECTION: ABOUT */}
        <About />

        {/* 3. PARTICULAR SECTION: SKILLS */}
        <Skills />

        {/* 4. PARTICULAR SECTION: PROJECTS */}
        <Projects />

        {/* Professional Experience Showcase (Roots Industries Metrology) */}
        <Experience />

        {/* 5. PARTICULAR SECTION: EDUCATION */}
        <Education />

        {/* 6. PARTICULAR SECTION: RESUME */}
        <ResumeSection onOpenModal={() => setResumeModalOpen(true)} />

        {/* 7. PARTICULAR SECTION: CONTACT */}
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* ATS Printable Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </div>
  );
}
