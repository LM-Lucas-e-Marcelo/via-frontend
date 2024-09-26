/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a4c7f",
        secondary: "#2a4c7f",
        wherePrimary: "#009248",
        whereSecondary: "#026a35",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
