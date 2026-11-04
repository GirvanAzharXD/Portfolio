/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        surface: '#131313',
        line: '#262626',
        paper: '#EDEDE8',
        muted: '#A1A19A',
        accent: '#FF4D24',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['"Instrument Serif"', 'Georgia', 'serif'],
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
