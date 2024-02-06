/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-primary' :"#24262B",
        'light-primary' : colors.slate,
        'dark-text-color' :'#ffcf00',
        'light-text-color':'#000484'
      }
    },
  },
  plugins: [],
}