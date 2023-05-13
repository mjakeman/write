/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_in: {
          '100%': { transform: 'translateY(0px)', opacity: 1.0 },
          '0%': { transform: 'translateY(50px)', opacity: 0.4 },
        }
      },
      animation: {
        'slide-in': 'slide_in 0.3s ease-out',
      }
    },
  },
  plugins: [],
}

