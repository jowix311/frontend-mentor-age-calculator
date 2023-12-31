/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGray: "hsl(0, 0%, 86%)",
        smokeyGray: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins: ['Poppins', 'arial', 'sans-serif']
      },
       borderRadius: {
          xl: '1.5rem',
          xxl: '4.5rem'
       }
    },
  },
  plugins: [],
}

