const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['lato', 'sans-serif'],
      montserrat: ['montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        yellow: colors.yellow,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
