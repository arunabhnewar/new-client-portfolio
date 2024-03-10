/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'antonio': ['Antonio', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
        'helvetica': ['Helvetica Neue', 'sans-serif'],
        'product': ['Product Sans', 'sans-serif'],
        'heading': ['Heading Now Trial', 'sans-serif'],
      },
      fontWeight: {
        "100": 100,
        "200": 200,
        "300": 300,
        "400": 400,
        "500": 500,
        "600": 600,
        "700": 700,
        "800": 800,
        "900": 900,
      },
    },
  },
  plugins: [],
};
