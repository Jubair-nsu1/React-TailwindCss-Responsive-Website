const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      violet: colors.violet,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blueGray,
      orange: colors.orange,
      },
    extend: {
      backgroundImage: theme => ({
       'hero': "url('/src/UI/body.png')",
       'hero2': "url('/src/UI/Shape_01.png')",
        'footer': "url('/src/UI/footer.png')",
        'footer2': "url('/src/UI/footer2.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
