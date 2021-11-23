module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./assets/css/**/*.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5B4DFF",
        bg: {
          light: {
            nav: "#FFFFFF",
            input: "#ECECEC",
            main: "#F9F9F9",
          },
          dark: {
            main: "#09090F",
            input: "#6B6B6F",
            nav: "#15151B",
          },
        },
      },
      boxShadow: {
        "penalouge-style": "5.77565px 8.66348px 23.1026px rgba(91, 77, 255, 0.4)"
      },
      dropShadow: {
        "penalogue-style": "5.77565px 8.66348px 23.1026px rgba(91, 77, 255, 0.4)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
