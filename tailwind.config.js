
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}","./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'buttercup': {
          '50': '#fffbf3', 
          '100': '#fef7e7', 
          '200': '#fdebc4', 
          '300': '#fbdfa0', 
          '400': '#f9c659', 
          '500': '#f6ae12', 
          '600': '#dd9d10', 
          '700': '#b9830e', 
          '800': '#94680b', 
          '900': '#795509'
      },
        'blue': {
          '50': '#f5f5ff', 
          '100': '#ebecff', 
          '200': '#cdcffe', 
          '300': '#afb2fe', 
          '400': '#7479fd', 
          '500': '#383ffc', 
          '600': '#3239e3', 
          '700': '#2a2fbd', 
          '800': '#222697', 
          '900': '#1b1f7b'
      },
      'bali-hai': {
        '50': '#f9fafb', 
        '100': '#f3f6f7', 
        '200': '#e0e8eb', 
        '300': '#cedade', 
        '400': '#a9bec6', 
        '500': '#84a2ad', 
        '600': '#77929c', 
        '700': '#637a82', 
        '800': '#4f6168', 
        '900': '#414f55'
    }
      },
    },
  },
  plugins: [
  require('tailwindcss'),
  require('autoprefixer'),
  ],
}
