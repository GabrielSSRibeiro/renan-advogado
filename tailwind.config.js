/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      "theme-heading": ["'Exo 2'", "sans-serif"],
      "theme-content": ["Alegreya Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-primary": "gray",
        "theme-secondary": "#FA5757",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "#8B0000",
        "theme-dark-blue-tp": "#800000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
