/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'main':['Barlow Semi Condensed','sans-serif'],
      },
      colors:{
        viol:'hsl(263, 55%, 52%)',
        gray:{
        light:'hsl(0, 0%, 81%)',
        lightblue:'hsl(210, 46%, 95%)',
        darkblue:'hsl(217, 19%, 35%)'
        },
        blackblue:'hsl(219, 29%, 14%)',
      },
    },
    screens:{
      'mid':'600px',
      'tablet':'1000px',
      
    }
  },
  plugins: [],
}

