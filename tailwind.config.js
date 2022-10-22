/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
