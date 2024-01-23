/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        8: "64px",
      },
      fontFamily: {
        Josefin: ["Josefin", "Sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        clearBlue: "#01FFFF",
        darkBlue: "#111726",
        transpDarkBlue: "#11172680",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/swimmer-hero.webp')",
        "water-image": "url('/src/assets/bgImage.webp')",
      },
    },
  },
  plugins: [],
};
