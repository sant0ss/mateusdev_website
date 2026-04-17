const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        colorv1: '#23B491',
        colorv2: '#FBD334',
        colorv3: '#35B6B6',
        colorv4: '#00BDAA',
        colorv5: '#D9D9D9',
        colorv6: '#9DA7AE',
        colorv7: '#FF003D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'exo2': ['Exo 2', 'sans-serif']
      },
    },
  },
  plugins: [],
}
