module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        'fill': '1 1',
        'half': '0 1 50%',
        '3rd': '0 1 30%',
        '4th': '0 1 25%'
      },
      height: {
        '9/10': '90%',
      },
      width: {
        '95': '95%',
        '9/10': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
