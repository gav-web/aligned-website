import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          purple: '#6B46C1',
          deep: '#1E1B4B',
          rose: '#F59E0B',
          white: '#FEFEFE'
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #1E1B4B 0%, #6B46C1 50%, #F59E0B 100%)',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(107, 70, 193, 0.3) 0%, rgba(30, 27, 75, 0.8) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(107, 70, 193, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config