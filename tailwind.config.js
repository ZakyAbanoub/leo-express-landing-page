/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'gradient-main': 'gradient-main 15s ease infinite',
        'gradient-reverse': 'gradient-reverse 12s ease infinite',
        'gradient-pulse': 'gradient-pulse 8s ease-in-out infinite',
        'gradient-spin': 'gradient-spin 10s linear infinite',
        'section-highlight': 'section-highlight 1.5s ease-out forwards'
      },
      keyframes: {
        'gradient-main': {
          '0%, 100%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(180deg) scale(1.1)' },
        },
        'gradient-reverse': {
          '0%, 100%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(-180deg) scale(1)' },
        },
        'gradient-pulse': {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: '0.6'
          },
        },
        'gradient-spin': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'section-highlight': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)'
          },
          '50%': {
            boxShadow: '0 0 30px 0 rgba(59, 130, 246, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)'
          }
        }
      },
    },
  },
  plugins: [],
}
