import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5B2C6B',
        'purple-light': '#F3EEF6',
        bg: '#FAF9F7',
        white: '#FFFFFF',
        muted: '#7A7A7A',
        dark: '#1A1A1A',
        lime: '#C8FF57',
        border: 'rgba(91,44,107,0.12)',
        primary: '#431453',
        'primary-container': '#5b2c6b',
        'primary-fixed': '#fad7ff',
        'on-primary-container': '#d097df',
        'surface-container-low': '#f6f3f2',
        secondary: '#4a6700',
        'secondary-container': '#bbf14b',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#4d444e',
      },
      fontFamily: {
        'h1': ['var(--font-space-grotesk)', 'sans-serif'],
        'h2': ['var(--font-space-grotesk)', 'sans-serif'],
        'h3': ['var(--font-space-grotesk)', 'sans-serif'],
        'body-lg': ['var(--font-space-grotesk)', 'sans-serif'],
        'body-md': ['var(--font-space-grotesk)', 'sans-serif'],
        'label-caps': ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      spacing: {
        md: "24px",
        gutter: "24px",
        unit: "4px",
        sm: "16px",
        xs: "8px",
        lg: "32px",
        xl: "64px",
      }
    },
  },
  plugins: [],
}

export default config
