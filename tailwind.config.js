/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins",
      },
      colors: {
        primary: '#1a535c',
        secondary:'#4ecdc4 '
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}