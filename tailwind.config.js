const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  mode: 'jit',
  purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      ...defaultTheme.colors,
      'indigo': {
        '50': '#f8f5f8',
        '100': '#f0eaf1',
        '200': '#dacbdc',
        '300': '#c3acc7',
        '400': '#976e9c',
        '500': '#6a3072',
        '600': '#5f2b67',
        '700': '#502456',
        '800': '#401d44',
        '900': '#341838'
      },
      
    },
    extend: {
      fontFamily: {
        'sans': [ 'Poppins', ...defaultTheme.fontFamily.sans ]
      },
    },
  },
    variants: {
      extend: {},
    },
    plugins: [],
  
}