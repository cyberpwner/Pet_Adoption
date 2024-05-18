/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gunmetal: '#2b303a',
        'non-photo-blue': '#3AB4C4',
        'lavender-blush': '#EEE5E9',
        'chili-red': '#D64933',
        'vista-blue': '#7899D4',
        'lapis-lazuli': '#466995',
        'true-blue': '#4464AD',
      },
      width: {
        'custom-400': '400px',
        'custom-500': '500px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-800': '800px',
      },
      minWidth: {
        'custom-400': '400px',
        'custom-500': '500px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-800': '800px',
      },
    },
  },
  plugins: [],
};
