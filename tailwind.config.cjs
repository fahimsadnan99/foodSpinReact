/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        logoColor: "#FF922C",
        text : "#333333"
      },
      fontFamily : {
        Poppins : ['Poppins', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}