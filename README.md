# CHERAN G K - 3D Responsive Design Portfolio Website

A futuristic, high-performance 3D portfolio website built for **CHERAN G K** using **React.js**, **Three.js**, and **Tailwind CSS**, designed specifically around the uploaded resume credentials in **AI & Data Science** and **Business Analytics**.

---

## 🌟 Dedicated Particular Sections

The portfolio is structured into 7 distinct, dedicated sections accessible directly via the top navigation:
1. **Home (`#home`)**: Interactive 3D WebGL Three.js Data Core, particle field, interactive geometry & theme switcher, and instant credentials.
2. **About (`#about`)**: Career objective and 4 analytical pillars (Data Modeling, SQL Optimization, AI Strategy, Metrology QA).
3. **Skills (`#skills`)**: Technical skills matrix, programming, databases, BI tools, and advanced Excel formula architecture.
4. **Projects (`#projects`)**: In-depth case studies with interactive simulated playgrounds (TrendKart, HealthPlus, AeroHome, Dissertation).
5. **Education (`#education`)**: Academic distinction (SRM MBA 9.00 CGPA & Bannari Amman B.E. 8.98 CGPA) and certifications.
6. **Resume (`#resume`)**: Official ATS-compliant resume document with one-click print/download PDF and interactive summary toggle.
7. **Contact (`#contact`)**: Direct contact channels (copy-to-clipboard for email/phone) and interactive message transmission.

2. **Project Case Studies with Interactive Simulators**:
   - **TrendKart Fashion Sales Analysis**: Interactive channel slicer, duplicate invoice audit toggle, and 30.6% MoM decline diagnostics.
   - **HealthPlus Healthcare Database**: Interactive simulated MySQL query runner with window functions (`RANK()`, `LAG()`, `LEAD()`) and 5-table healthcare relational results.
   - **AeroHome Manufacturing Analytics**: Interactive 12-table Star Schema diagram (Fact table + 6 Dimension tables) and live telemetry gauges.
   - **AI & Data Science Dissertation**: Interactive 4-level Enterprise AI Maturity Framework from SRM University research.

3. **Metrology & Precision QA Exposure**:
   - Roots Industries India Pvt. Ltd. (Calibration & Metrology Trainee, 2024–2025).
   - Interactive tolerance simulator (Micrometers, Vernier Calipers, CMM $\pm 0.0005$ mm).

4. **Academic Distinction Showcase**:
   - **MBA – Artificial Intelligence & Data Science**: SRM University (CGPA: 9.00 / 10.00).
   - **Bachelor of Engineering**: Bannari Amman Institute of Technology (CGPA: 8.98 / 10.00).

5. **Official ATS Resume Modal**:
   - One-click "Print / Save as PDF" button (`window.print()`).
   - ATS-compliant format mirroring the uploaded resume.

6. **Web Audio API Sound Effects (SFX)**:
   - Subtle synthesized futuristic sound design with mute/unmute toggle (zero external audio file dependencies).

---

## 🚀 How to Run the Project

### Option A: Standard React Development Server (Vite)
Open your terminal in this directory:
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```
Then visit `http://localhost:3000` in your web browser.

To create a production build:
```bash
npm run build
```

---

### Option B: Instant Zero-Install Preview
If you want to view the website immediately without installing Node.js or running `npm install`:
- Double-click `standalone_preview.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Structure

```
Cheran Portfolio/
├── index.html                 # Main Vite HTML entrypoint
├── standalone_preview.html    # Standalone zero-dependency browser preview
├── package.json               # Node dependencies & Vite scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS theme & cyber palette
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Documentation
└── src/
    ├── main.jsx               # React 18 DOM root
    ├── App.jsx                # App layout & modal state management
    ├── index.css              # Custom styling, cyber grid & animations
    ├── data/
    │   └── portfolioData.js   # Extracted resume data & metrics
    ├── utils/
    │   └── audio.js           # Web Audio API sound synthesizer
    └── components/
        ├── Navbar.jsx         # Sticky glassmorphism header & controls
        ├── Hero3D.jsx         # Three.js 3D WebGL interactive canvas
        ├── About.jsx          # Career objective & 4 strategic pillars
        ├── Projects.jsx       # 3D project cards & interactive simulators
        ├── Experience.jsx     # Roots Industries metrology timeline
        ├── Skills.jsx         # Categorized skill matrix & Excel formulas
        ├── Education.jsx      # SRM & Bannari Amman academic honors
        ├── Contact.jsx        # Direct channels & message form
        ├── Footer.jsx         # Live IST clock & navigation
        └── ResumeModal.jsx    # Printable ATS resume PDF preview
```

---

## 📬 Contact Details
- **Email**: cherankarthikeyan02@gmail.com
- **Phone**: +91 6380731719
- **LinkedIn**: [linkedin.com/in/k-cheran](https://www.linkedin.com/in/k-cheran)
- **GitHub**: [github.com/cherankarthikeyan02-cyber](https://www.github.com/cherankarthikeyan02-cyber)
- **Location**: Erode, Tamil Nadu, India
