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
        "theme-primary": "#05224B",
        "theme-secondary": "#05224B",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "#05224B",
        "theme-dark-blue-tp": "#05224B",
        "theme-whats-app": "#25D366",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
