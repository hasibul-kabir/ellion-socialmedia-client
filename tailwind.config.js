/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      basic: '#F1F1F1'
    }
  },
  plugins: [require("daisyui")],
}

