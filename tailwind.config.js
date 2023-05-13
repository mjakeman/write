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
        },
        fade_in: {
          '100%': { opacity: 0.5 },
          '60%': { opacity: 0 },
          '0%': { opacity: 0 },
        }
      },
      animation: {
        'slide-in': 'slide_in 0.3s ease-out',
        'fade-in': 'fade_in 2s ease-out',
      }
    },
  },
  plugins: [],
}

