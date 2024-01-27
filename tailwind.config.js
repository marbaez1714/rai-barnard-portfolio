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
      boxShadow: {
        "link-button":
          "0px 23.733px 47.467px 0px rgba(23, 44, 36, 0.26), 0px 7.647px 7.647px 0px #86ffd4 inset, 0px -7.647px 7.647px 0px #5aac8f inset",
        "link-button-hover":
          "0px 23.733px 47.467px 0px rgba(23, 44, 36, 0.24), 0px 7.384px 7.384px 0px #85fed2 inset, 0px -7.384px 7.384px 0px #5caf91 inset",
        "project-row":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(109, 108, 108, 0.60);",
        "project-row-title":
          "0px 13.009px 13.009px 0px #409e7c inset, 0px -13.009px 13.009px 0px #215240 inset",
        "project-row-title-hover":
          "4.472px -11.649px 12.478px 0px #2e725d inset, -4.472px 11.649px 12.478px 0px #193e32 inset",
      },
      backgroundImage: {
        "link-button": "linear-gradient(180deg, #81f7cc 0%, #5fb697 100%)",
        "link-button-hover":
          "linear-gradient(180deg, #60b898 0%, #80f5cb 100%)",
        "project-row": "url('/project-title-background.svg')",
        "project-row-hover": "url('/project-title-background-hover.svg')",
      },
      listStyleImage: {
        circle: "url('/list-circle.svg')",
      },
    },
  },
  plugins: [],
};
