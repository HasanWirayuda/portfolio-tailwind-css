/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#fdc21f",
        secondary: "#64748b",
        dark: "#0f172a",
        darkYellow: "#f3efe0",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
