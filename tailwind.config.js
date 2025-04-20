/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand1: '#FFFFFF', // lightest
        brand2: '#FFFEFE', // slightly off-white
        brand3: '#E7E7E7',
        brand4: '#D9D9D9',
        brand5: '#FBBDCF', // light pink
        brand6: '#72CAC3', // soft teal
        brand7: '#72C9C2', // slightly different soft teal
        brand8: '#879193', // muted gray-blue
        brand9: '#5A6264', // dark muted gray

        // Add a fallback color name for gradient start/end if needed
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #879193 0%, #E7E7E7 20.6%, #FFFEFE 50%, #E7E7E7 81.3%, #879193 100%)',
      },
      fontFamily: {
        sans: ['gotham', 'sans-serif'],
        serif: ['HoeflerSwash', 'serif'],
      },
    },
  },
  plugins: [],
}