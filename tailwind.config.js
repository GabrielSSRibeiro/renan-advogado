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
        "theme-primary": "#483D8B",
        "theme-secondary": "#483D8B",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "#9194A1",
        "theme-dark-blue-tp": "#483D8B",
        "theme-whats-app": "#25D366",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
