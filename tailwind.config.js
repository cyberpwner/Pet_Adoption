/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gunmetal: '#2b303a',
        'non-photo-blue': '#92DCE5',
        'lavender-blush': '#EEE5E9',
        'chili-red': '#D64933',
      },
    },
  },
  plugins: [],
};
