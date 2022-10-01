/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: 'all',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {}
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
