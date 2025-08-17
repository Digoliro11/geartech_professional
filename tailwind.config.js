module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2D3748", // gray-700
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#4A5568", // gray-600
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#4299E1", // blue-400
          50: "#EBF8FF", // blue-50
          100: "#BEE3F8", // blue-100
          200: "#90CDF4", // blue-200
          300: "#63B3ED", // blue-300
          400: "#4299E1", // blue-400
          500: "#3182CE", // blue-500
          600: "#2B77CB", // blue-600
          700: "#2C5282", // blue-700
          800: "#2A4365", // blue-800
          900: "#1A365D", // blue-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F7FAFC", // gray-50
        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-500
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
          300: "#68D391", // green-300
          400: "#48BB78", // green-400
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          700: "#276749", // green-700
          800: "#22543D", // green-800
          900: "#1C4532", // green-900
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          200: "#FAF089", // yellow-200
          300: "#F6E05E", // yellow-300
          400: "#ECC94B", // yellow-400
          500: "#D69E2E", // yellow-500
          600: "#B7791F", // yellow-600
          700: "#975A16", // yellow-700
          800: "#744210", // yellow-800
          900: "#5F370E", // yellow-900
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-50
          100: "#FEB2B2", // red-100
          200: "#FC8181", // red-200
          300: "#F56565", // red-300
          400: "#ED8936", // red-400
          500: "#E53E3E", // red-500
          600: "#C53030", // red-600
          700: "#9B2C2C", // red-700
          800: "#822727", // red-800
          900: "#63171B", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        jetbrains: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'gear-spin': 'gearSpin 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gearSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}