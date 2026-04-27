import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      colors: {
        brand: {
          red:     '#C0191A',
          'red-dark': '#9A1212',
          gold:    '#E8A020',
          'gold-light': '#FFD080',
          dark:    '#1A1A1A',
          gray:    '#F5F4F0',
          'mid-gray': '#666666',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2D1010 60%, #C0191A 100%)',
        'red-gold': 'linear-gradient(90deg, #C0191A, #E8A020)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
