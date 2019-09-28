const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"]
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens
    },

    colors: {
      transparent: "transparent",
      black: "#000000",
      "black-transparent": "rgba(0,0,0,0.5)",
      white: "#fefefe",
      primary: "#3abc4a",
      "primary-dark": "#269234",
      secondary: "#ff9602",
      "grey-light": "#f4f4f4",
      grey: '#666666',
      "grey-dark": "#333333",
    },

    translate: {
      "50": "-50%",
    },

    transitionProperty: {
      all: "all",
      color: "color",
      bg: "background-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform"
    },

    transitionDuration: {
      '300': "300ms"
    },

    container: {
      center: true,
      padding: "1rem"
    },

    extend: {
      spacing: {
        '28': '7rem',
        '36': '9rem',
        '60': '15rem',
        '68': '19rem',
        '68': '19rem',
        '72': '22rem',
        '74': '24rem',
        '76': '26rem',
        '80': '30rem',
        '82': '31rem',
        '84': '32.5rem',
        '88': '34rem',
        '90': '36rem',
        '92': '39rem',
        '98': '47rem',
        '100': '59rem',
      },
      inset: {
        "50": "50%"
      },
    }
  },
  variants: ['responsive', 'hover', 'focus', 'group-hover', 'last'],
  plugins: [
    require("tailwindcss-transitions")(),
    require("tailwindcss-transforms")()
  ]
}
