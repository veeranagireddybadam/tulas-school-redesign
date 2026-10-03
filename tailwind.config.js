/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#B90124',
          'crimson-dark': '#8E001B',
          'crimson-light': '#D91E42',
          maroon: '#4A040F',
          gold: '#C09D59',
          'gold-light': '#E2C889',
          'gold-muted': '#DBC79F',
          teal: '#007A83',
          'teal-light': '#60BAB1',
          'teal-soft': '#90CCD0',
          'teal-pale': '#BEE2E4',
          cream: '#FBF9F5',
          'cream-alt': '#F4EFE6',
          slate: '#1E293B',
          dark: '#0D0E12',
          'dark-card': '#15171E',
          'dark-border': '#262935'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(185, 1, 36, 0.15) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(ellipse at 50% 50%, rgba(192, 157, 89, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
