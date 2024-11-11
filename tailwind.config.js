/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ubah ini menjadi 'class'
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
