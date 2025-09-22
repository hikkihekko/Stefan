/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brandBlueA: 'rgba(83,134,255,1)',
        brandBlueB: 'rgba(30,47,235,1)'
      },
      fontFamily: {
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
        baron: ['Baron Neue', 'Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.15)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}


