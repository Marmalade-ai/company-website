const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
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
    order: {
      first: '-9999',
      last: '9999',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    order: true,
  },
  plugins: [],
};
