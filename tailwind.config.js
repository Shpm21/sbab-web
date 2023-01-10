/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#001848',
        'bg-secondary': '#002D6C',
        'bg-tertiary': '#00418C',
        'bg-quaternary': '#0055AC',
        'bg-quinary': '#0069CC',
        'bg-senary': '#2a13fd',
        'font-primary': '#ffffff',
        'font-secondary': '#d0d0d0',
        'font-senary': '#2a13fd',
      },
    },
  },
  plugins: [],
}
