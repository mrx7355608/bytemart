/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/**/*.{tsx,jsx}", "src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
