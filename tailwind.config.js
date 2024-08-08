/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx",
      "./Components/**/*.{jsx,js}"
            ],
  theme: {
    extend: {
        colors: {
            customGreen: '#71BC68',
        },
        fontSize: {
            'custom-32': '32px',
        },
    },
  },

  plugins: [],
}

