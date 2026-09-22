/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: '#18479F', // primary blue
          50: '#EEF3FB',
          100: '#D5E1F3',
          200: '#ACC2E7',
          300: '#7C9DD8',
          400: '#4F7BC7',
          500: '#2D5FB2',
          600: '#18479F', // main
          700: '#123A85',
          800: '#0F2D66',
          900: '#0A1F47',
        },
        accent: {
          DEFAULT: '#2D74D9', // lighter brand blue (replaces magenta)
          500: '#4F7BC7',
          600: '#2D74D9',
          700: '#18479F',
        },
        // Neutrals — slate palette
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
          soft: '#94A3B8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E8EDF3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(15, 23, 42, 0.06)',
        cardHover: '0 8px 32px rgba(15, 23, 42, 0.10)',
        popup: '0 24px 60px rgba(15, 23, 42, 0.18)',
        button: '0 10px 24px rgba(24, 71, 159, 0.24)',
      },
      maxWidth: {
        container: '1200px',
        content: '960px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(.95) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease',
        scaleIn: 'scaleIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
  // Keep existing WordPress/Elementor CSS working — don't reset those globally.
  corePlugins: {
    preflight: false,
  },
};
