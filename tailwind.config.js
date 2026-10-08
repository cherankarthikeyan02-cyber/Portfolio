/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080c16',
          card: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
          neonCyan: '#00f5d4',
          neonBlue: '#38bdf8',
          neonPurple: '#a855f7',
          neonEmerald: '#10b981',
          accent: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
