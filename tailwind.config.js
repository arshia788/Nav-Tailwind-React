/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',

    },
    extend: {
      
    screens:{
      'xs': '100px',
    },

      inset:{
        "18":'4.5rem'
      },
      width:{
        '22':'5.5rem'
      },

    },
  },
  plugins: [],
}

