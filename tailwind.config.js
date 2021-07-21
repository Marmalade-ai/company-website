const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      primary: {
        lighter: 'hsl(31,91%,73%)',
        DEFAULT: 'hsl(23,99%,50%)',
        darker: 'hsl(15,92%,40%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
