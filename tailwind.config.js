module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sfpro: 'SF Pro Display',
        neuebit: 'NeueBit'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
