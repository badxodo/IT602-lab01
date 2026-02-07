/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        georama: ['Georama', 'sans-serif'],
        gabarito: ['Gabarito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}