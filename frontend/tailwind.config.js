/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '35pr': '35%',
        '90pr': '90%',
        '70pr': '70%',
        '48pr': '48%',
        '30pr': '30%',
        '20pr': '20%',
        '60vw': '60vw',
      },
      borderRadius: {
        '2rem': '2rem',
      },
      height: {
        '35pr': '35%',
        '60vh': '60vh',
        '80vh': '80vh',
        '80pr': '80%',
        '90vh': '90vh',
      },
      backgroundImage: {
        'gold' : "linear-gradient(180deg, #FAE892 0%, #B3903E 100%)",
        'gold-land' : "linear-gradient(90deg, #FAE892 0%, #B3903E 100%)",
      }
    }
  },
  plugins: [],
}
