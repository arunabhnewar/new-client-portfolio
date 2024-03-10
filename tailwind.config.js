/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
        product: ["Product Sans", "sans-serif"],
        heading: ["Heading Now Trial", "sans-serif"],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        green: "#025A4E", //main green color
        lgreen: "#05AA89", // light green
        yellow: "#BDED3B", //yellow
        bblue: "#F1F4F7", // light blue bg color
        bpink: "#EADAFF", // light pink bg color
        bred: "#FFE5E5", // light red bg color
        dark: "#28282A", // dark color for logo
      },
      maxWidth: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
