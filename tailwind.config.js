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
        Primary: "#eff1f5",
        Secondary: "#ccd0da",
        Accent: "#40a02b",
        Typogragry: "#4c4f69",
        darkPrimary: "#303446",
        darkSecondary: "#232634",
        darkAccent: "#ef9f76",
        darkTypography: '#b5bfe2'
      },
      boxShadow:{
        'button': ' 0px 4px 0px 0px rgba(0,0,0,1)',
        'button-sm': ' 0px 2px 0px 0px rgba(0,0,0,1)'

      },
      fontFamily:{
        'kanit':['kanit','mono'],
        'onest':['Onest'],
        'Roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}