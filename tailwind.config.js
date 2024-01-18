/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {  
    extend: {
      spacing:{
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      fontFamily: {
        'Josefin':["Josefin","Sans-serif"]
      },
      colors: {
        clearBlue: "#01FFFF",
        darkBlue: "#111726"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/swimmer-hero.jpeg')",
      },
    },
  },
  plugins: [],
};
