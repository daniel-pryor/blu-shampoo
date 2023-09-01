import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Taviraj: ['Taviraj'],
      },
      colors: {
        'primary-white': {
          DEFAULT: '#fffff5',
          100: '#F5F8FF',
        },
      },
    },
    plugins: [],
  },
}
export default config
