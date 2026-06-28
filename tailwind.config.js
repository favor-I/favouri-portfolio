/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:         '#101415',
        'bg-low':   '#0b0f10',
        surface:    '#1d2022',
        'surface-hi':'#272a2c',
        'surface-br':'#323537',
        'on-bg':    '#e0e3e5',
        'on-muted': '#c6c6cd',
        outline:    '#45464d',
        slate:      '#64748B',
        emerald:    '#10B981',
        navy:       '#0F172A',
      },
      fontFamily: {
        head: ['"Geist Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        'pulse2': 'pulse2 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
