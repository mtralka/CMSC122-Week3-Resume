module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.{html, js}']
  },
  darkMode: false,
  theme: {

    extend: {

      // colors: {
      //   blue: {
      //     '500': '#0336FF'
      //   },
      //   yellow: {
      //     '500': '#FFDE03'
      //   },
      //   red: {
      //     '500': 'FF0266'
      //   },
      fontFamily: {
        sans: ['Rubik'],
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
}
