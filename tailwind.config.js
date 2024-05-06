/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Yekan", "sans-serif"],
      display: ["Yekan", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
