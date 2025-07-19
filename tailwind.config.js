/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ea-amarillo': '#F1FF94',
        'ea-amarillo-200': '#F7FFBF',
        'ea-amarillo-500': '#F1FF94',
        'ea-amarillo-900': '#B5BF6F',
        'ea-verde': '#00BC92',
        'ea-gris': '#727374',
        'ea-gris-200': '#ECEDEE',
        'ea-gris-400': '#AAACAE',
        'ea-verde-900': '#005E49',
        'ea-verde-500': '#00BC92',
        'ea-verde-400': '#33C9A8',
        'ea-verde-300': '#66D7BE',
        'ea-verde-200': '#99E4D3',
        'verde-oscuro': {
          500: '#123026',
          400: '#415951',
          300: '#71837D',
          200: '#A0ACA8',
        },
      },
      fontSize: {
        xxs: '10px',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
