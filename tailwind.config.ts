import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      '2xs': '360px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)'],
      monaSans: ['var(--font-mona-sans)'],
      playfair: ['var(--font-playfair)'],
      geist: ['var(--font-geist-mono)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '6.5': '1.625rem',
      },
      colors: {
        primary: '#fff',
        secondary: '#121212',
        background: 'var(--background)',
        input: 'hsl(240,5.9%,90%)',
        muted: 'hsl(var(--muted))',
        border: 'var(--border)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
