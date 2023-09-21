/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        'custom-h1': '28px',
        'custom-pra': '13px'
      },
      lineHeight: {
        'custom-h1': '32.81px',
        'custom-pra': '24px'
      },
    },
  },
  plugins: [],
}