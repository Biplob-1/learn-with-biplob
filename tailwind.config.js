module.exports = {
  darkMode: 'class', // or 'media' if you prefer automatic based on user preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
