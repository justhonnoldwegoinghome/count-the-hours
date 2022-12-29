/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F1F6F9",
        navy: "#14274E",
        steel: "#394867",
        grey: "#9BA4B4",
      },
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1280px",
      desktop: "1920px",
    },
  },
  plugins: [],
};
