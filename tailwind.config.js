/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // portfolio colors
    colors: {
      white: "#F2F2F2",
      "light-grey": "#ABABAB",
      black: "#201A23",
      "dark-grey": "#4F4F4F",
      "light-green": "#379085",
      "dark-green": "#255B4A",
      "light-neutral": "#F5EBE0",
    },
    extend: {
      fontFamily: {
        fugaz: ['"Fugaz One"', "sans-serif"],
      },
      maxWidth: {
        app: "1280px",
      },
    },
  },
  plugins: [],
};
