module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sfpro: 'SF Pro Display',
        neuebit: 'NeueBit'
      },
      colors: {
        grayBg: 'var(--color-gray-bg)',
        grayDefault: 'var(--color-gray-default)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
