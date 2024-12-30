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
        'ea-verde': '#00BC92',
        'ea-verde-oscuro': '#123026',
        'ea-gris': '#727374',
        'ea-verde-900': '#005E49',
        // verde: {
        //   950: '#003029',
        //   900: '#005E49',
        //   800: '#006755',
        //   700: '#00836a',
        //   600: '#00a480',
        //   500: '#00bc92',
        //   400: '#25e2b1',
        //   300: '#63f2c8',
        //   200: '#a0fadb',
        //   100: '#cdfeea',
        //   50: '#eafff7',
        // },
        // 'verde-oscuro': {
        //   950: '#003029',
        //   900: '#005547',
        //   800: '#006755',
        //   700: '#00836a',
        //   600: '#00a480',
        //   500: '#123026',
        //   400: '#25e2b1',
        //   300: '#63f2c8',
        //   200: '#a0fadb',
        //   100: '#cdfeea',
        //   50: '#eafff7',
        // },
      },
    },
  },
  plugins: [],
};
