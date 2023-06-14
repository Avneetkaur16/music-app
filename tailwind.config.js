/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: '#1db954',
        gray100: '#b3b3b3',
        gray200: '#535353',
        gray300: '#212121',
        gray400: '#121212',
        white: '#ffffff',
        black: '#000000'
      },

      fontFamily: { 
        Roboto: ["Roboto", "sans-serif"]
      },

      boxShadow: {
        'lg': '2px 2px 20px 8px rgba(100, 100, 100, 0.1)',
      },

      animation: {
        enlarge: 'enlarge 1.4s ease-in-out',
        shrink: 'shrink 1.4s ease-in-out',
      },

      keyframes: {
        enlarge: { 
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.09)' },
          '75%': { transform: 'scale(1)' }
        },

        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },

      },

      
    },

  },
  plugins: [],
}

