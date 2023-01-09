/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#05386B',
        secondary: '#EDF5E1',
        tersier: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
