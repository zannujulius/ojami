/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        primary: "#13532E",
        lightprimary: "#1c1c1ccc",
        secondary: "#D8543C",
        lightgray: "#F6F5F5",
      },
      fontFamily: {
        Titan: ["Titan One"],
      },
    },
  },
  plugins: [],
};
