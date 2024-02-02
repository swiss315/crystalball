/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-grey': '#D9D9D9',
        'custom-light-grey': '#F3F3F9',
      },
      minWidth: {
        '50%': '50%',
      },
      maxWidth: {
        '75%': '75%',
        '65%': '65%',
        '50%': '50%',
        '35%': '35%',
        '17%': '17%'
      },
    },
  },
  plugins: [],
}

