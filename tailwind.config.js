/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/swimmer-hero.jpeg')",
      }
    },
  },
  plugins: [],
};
