/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "galactic-blue": "#755CDE",
        "summer-yellow": "#F6A560",
        "light-pink": "#F39E9E",
        "light-red": "#eb7565",
        "5-cyan": "#61c4b7",
        "wine-purple": "#552049",
        "theme-black": "#030303",
        "medium-brown": "#7a746e",
        "light-cream": "#fff7f0",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        sm: {
          min: "320px",
          max: "640px",
        },
        md: {
          min: "641px",
          max: "768px",
        },
      },
    },
    plugins: [],
  },
};
