import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export default function Hero3D({ onOpenResume }) {
  const mountRef = useRef(null);
  const [activeModel, setActiveModel] = useState('sphere'); // 'sphere' | 'torus' | 'cube'
  const [colorTheme, setColorTheme] = useState('cyan'); // 'cyan' | 'purple' | 'emerald'
  const [isRotating, setIsRotating] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const sceneElementsRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    soundFx.playSuccess();
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  // Initialize and run Three.js 3D Interactive Canvas
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c16, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Geometry generators
    const createCoreMesh = (type, colorHex) => {
      let geom;
      if (type === 'sphere') {
        geom = new THREE.IcosahedronGeometry(1.6, 2);
      } else if (type === 'torus') {
        geom = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 20);
      } else {
        geom = new THREE.BoxGeometry(1.8, 1.8, 1.8, 4, 4, 4);
      }

      const mat = new THREE.MeshStandardMaterial({
        color: colorHex,
        wireframe: true,
        roughness: 0.2,
        metalness: 0.8,
        emissive: colorHex,
        emissiveIntensity: 0.35,
      });

      const mesh = new THREE.Mesh(geom, mat);

      // Inner glowing core
      const innerGeom = new THREE.SphereGeometry(0.85, 32, 32);
      const innerMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: false,
        transparent: true,
        opacity: 0.25,
      });
      const innerMesh = new THREE.Mesh(innerGeom, innerMat);
      mesh.add(innerMesh);

      return mesh;
    };

    const getThemeColor = (theme) => {
      switch (theme) {
        case 'purple':
          return 0xa855f7;
        case 'emerald':
          return 0x10b981;
        case 'cyan':
        default:
          return 0x00f5d4;
      }
    };

    let coreMesh = createCoreMesh(activeModel, getThemeColor(colorTheme));
    mainGroup.add(coreMesh);

    // Dynamic Orbital Particles (Data Points)
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      scales[i / 3] = Math.random() * 0.05 + 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f5d4, 2, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 50);
    pointLight2.position.set(-5, -5, -3);
    scene.add(pointLight2);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (sceneElementsRef.current?.isRotating) {
        mainGroup.rotation.y = elapsedTime * 0.25 + mouseX;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouseY;
      } else {
        mainGroup.rotation.y = mouseX;
        mainGroup.rotation.x = mouseY;
      }

      particles.rotation.y = -elapsedTime * 0.08;
      particles.rotation.x = Math.cos(elapsedTime * 0.05) * 0.1;

      // Pulse core
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // Store references for dynamic updates
    sceneElementsRef.current = {
      scene,
      mainGroup,
      coreMesh,
      particles,
      particleMaterial,
      pointLight1,
      pointLight2,
      renderer,
      isRotating: true,
      createCoreMesh,
      getThemeColor,
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  // Update 3D Model shape or Color dynamically
  useEffect(() => {
    if (!sceneElementsRef.current) return;
    const { mainGroup, coreMesh, createCoreMesh, getThemeColor, pointLight1 } = sceneElementsRef.current;

    mainGroup.remove(coreMesh);
    if (coreMesh.geometry) coreMesh.geometry.dispose();

    const newColor = getThemeColor(colorTheme);
    const newMesh = createCoreMesh(activeModel, newColor);
    mainGroup.add(newMesh);
    sceneElementsRef.current.coreMesh = newMesh;

    pointLight1.color.setHex(newColor);
  }, [activeModel, colorTheme]);

  // Update rotation state
  useEffect(() => {
    if (sceneElementsRef.current) {
      sceneElementsRef.current.isRotating = isRotating;
    }
  }, [isRotating]);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic 3D Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing"
        title="Interact with 3D Core: Drag mouse to tilt, change modes below"
      />

      {/* Cyber Grid Overlay background */}
      <div className="absolute inset-0 cyber-grid cyber-grid-radial pointer-events-none z-[1] opacity-70" />

      {/* Ambient Radial Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pointer-events-auto">
            {/* Styled Section Header Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                  HOME
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="text-[11px] font-mono text-slate-400">3D Interactive Portfolio </span>
              </div>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                <span className="block">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl font-mono">
                {portfolioData.personal.title}
              </p>
            </div>

            {/* Career Objective Summary */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              {portfolioData.personal.careerObjective}
            </p>

            {/* Quick Education / Credibility Badges */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/80 text-xs text-slate-300">
                <span className="text-cyan-400 font-bold font-mono">MBA: 9.00 CGPA</span>
                <span className="text-slate-500">|</span>
                <span>SRM University</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/80 text-xs text-slate-300">
                <span className="text-purple-400 font-bold font-mono">B.E.: 8.98 CGPA</span>
                <span className="text-slate-500">|</span>
                <span>Bannari Amman Inst.</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/80 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold font-mono">Roots Industries</span>
                <span className="text-slate-500">|</span>
                <span>Metrology QA Trainee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-xl shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 transition-all duration-300 group-hover:scale-105" />
                <div className="relative flex items-center gap-2">
                  <span>Explore 3D Projects</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              {/* <a
                href="#skills"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700 hover:border-cyan-400/50 hover:text-white transition-all backdrop-blur-md flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Skills & Tools</span>
              </a> */}

              {/* <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-cyan-300 border border-dashed border-slate-700 hover:border-cyan-400 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume Modal</span>
              </button> */}
            </div>

            {/* Quick Contact Links */}
            {/* <div className="flex items-center gap-5 justify-center lg:justify-start pt-2 text-xs text-slate-400 font-mono">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span className="text-cyan-400">in/</span>k-cheran
              </a>
              <span>•</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span className="text-purple-400">git/</span>cherankarthikeyan02
              </a>
              <span>•</span>
              <span className="text-slate-400">📍 Erode, TN</span>
            </div> */}
          </div>

          {/* 3D Scene Interactive Control Box (Floating on the right/bottom) */}
          <div className="lg:col-span-5 pointer-events-auto flex flex-col items-center lg:items-end justify-center" >
            {/* <div className="w-full max-w-sm p-4 rounded-2xl cyber-glass border border-slate-700/60 shadow-2xl space-y-3"> */}
              {/* <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    Interactive 3D Data Core
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                  Three.js WebGL
                </span>
              </div> */}

              {/* 3D Shape Switcher */}
              {/* <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                  Core Geometry:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'sphere', label: 'Neural Icosa' },
                    { id: 'torus', label: 'Quantum Knot' },
                    { id: 'cube', label: 'Star Matrix' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveModel(item.id);
                      }}
                      className={`py-1.5 px-2 text-xs font-mono rounded-lg transition-all ${
                        activeModel === item.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 hover:text-white border border-transparent'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Color Theme Selector & Rotation Pause */}
              {/* <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-400">Color:</span>
                  {[
                    { id: 'cyan', bg: 'bg-cyan-400' },
                    { id: 'purple', bg: 'bg-purple-500' },
                    { id: 'emerald', bg: 'bg-emerald-400' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        soundFx.playClick();
                        setColorTheme(c.id);
                      }}
                      aria-label={`Select ${c.id} theme`}
                      className={`w-5 h-5 rounded-full ${c.bg} transition-transform ${
                        colorTheme === c.id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setIsRotating(!isRotating);
                  }}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300"
                >
                  {isRotating ? '⏸ Pause Spin' : '▶ Resume Spin'}
                </button>
              </div> */}

              {/* <div className="text-[11px] text-slate-400 font-mono text-center pt-1 border-t border-slate-800/80">
                💡 Tip: Move your cursor across the screen to dynamically tilt the 3D core in space.
              </div> */}
            {/* </div> */}

            {/* Quick Stat Bar under the 3D widget */}
            {/* <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-4">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-xl font-bold font-mono text-cyan-400">3,000+</div>
                <div className="text-[11px] text-slate-400">Records Profiled</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-xl font-bold font-mono text-purple-400">12-Table</div>
                <div className="text-[11px] text-slate-400">Star Schema Modeled</div>
              </div>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
}
