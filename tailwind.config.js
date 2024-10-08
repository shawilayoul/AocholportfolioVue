/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode:'class',
  theme: {
    screens: {
      'mobile': '100px',
      // => @media (min-width: 640px) { ... }

      'tablate': '600px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1000px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
     blue: "#4a00e0",
     oranged:"#ff5400",
     white:"#ffffff",
     black:"#000",
     gray:"#e5e5e5",
     darkBlue:"#1d3557",
     green:"#70e000"
    },
    
    extend: {},
  },
  plugins: [],
}

