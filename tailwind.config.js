/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['ClashDisplayRegular', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        yel: "#FA9F42",
        whi: "#F4F4F9 ",
        ppl: "#42113C"
      }
    },
  },
  plugins: [],
}

