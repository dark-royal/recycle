/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx",
      "./Components/**/*.{jsx,js}"
            ],
  theme: {
    extend: {
        colors: {
            customGreen: '#71BC68',
            customBlue: '#5D5FEF',
            ash: '#DAF0Df',
            customWhite: '#E3F2E1',
            customG: 'rgb(154,205,76)',
            customOrange: 'rgb(227, 111, 52)',

    },
        fontSize: {
            'custom-32': '32px',
        },
    },
  },

  plugins: [],
}

