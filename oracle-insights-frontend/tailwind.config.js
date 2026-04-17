/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oracle: {
          primary: '#F80000',
          secondary: '#312D2A',
          dark: '#1A1A1A',
          surface: '#252525',
          border: '#3D3D3D',
          text: '#F2F2F2',
          muted: '#9E9E9E',
          accent: '#00C2FF',
          success: '#00D68F',
          warning: '#FFB800',
          error: '#FF3D3D',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 194, 255, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 194, 255, 0.5)',
        'glow-red': '0 0 20px rgba(248, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
