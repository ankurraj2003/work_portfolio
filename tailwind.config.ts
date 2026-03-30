import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        border: 'rgba(255,255,255,0.08)',
        accent: '#C8FF00',
        'accent-hover': '#DEFF4D',
        text: {
          primary: '#F0EBE1',
          secondary: 'rgba(240,235,225,0.55)',
          muted: 'rgba(240,235,225,0.3)',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(56px, 9vw, 130px)',
        'section': 'clamp(36px, 5vw, 72px)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
        widest: '0.3em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 1.6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
