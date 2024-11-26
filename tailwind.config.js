/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./src/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        darkAccent: "#ef9f76",
        darkTypography: '#b5bfe2'
      }
    },
  },
  plugins: [],
}