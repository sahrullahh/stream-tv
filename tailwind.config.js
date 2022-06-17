/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
};
