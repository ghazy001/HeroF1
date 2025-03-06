/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E10500',
        secondary: '#FFFFFF',
        tertiary: '#15151E',
        neutral: '#F5F5F5',
        title: '#363636'

      },
      fontFamily: {
        racing: ['Racing Sans One'],
        faster: ['"Faster One"', 'cursive'],
        titillium: ['"Titillium Web"', 'sans-serif'],
        race:["Tourney", "sans-serif"]
      },
      boxShadow: {
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    }
  },
  plugins: [],
}