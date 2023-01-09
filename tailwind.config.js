/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
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
        dark: '#000000'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
