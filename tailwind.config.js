/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "ecw-yellow": {
          "50": "#ffffa6",
          "100": "#ffff9c",
          "200": "#fffb92",
          "300": "#fff188",
          "400": "#ffe77e",
          "500": "#f8dd74",
          "600": "#eed36a",
          "700": "#e4c960",
          "800": "#dabf56",
          "900": "#d0b54c"
        },
        "ecw-blue": {
          "50": "#32d9ff",
          "100": "#28cfff",
          "200": "#1ec5ff",
          "300": "#14bbf5",
          "400": "#0ab1eb",
          "500": "#00a7e1",
          "600": "#009dd7",
          "700": "#0093cd",
          "800": "#0089c3",
          "900": "#007fb9"
        }
      }
    },
  },
  plugins: [],
}
