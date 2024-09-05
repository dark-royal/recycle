/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.jsx",
      "./Components/**/*.{jsx,js}"
            ],
  theme: {
    extend: {
        colors: {
            customGreen: '#0d190d',
            customBlue: '#5D5FEF',
            ash: '#DAF0Df',
            customWhite: '#E3F2E1',
            customG: '#164718',
            customOrange: 'rgb(227, 111, 52)',

    },
        fontSize: {
            'custom-32': '32px',
        },
    },
  },

  plugins: [],
}

