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
        '1th-color': '#121619',
        '2th-color': '#E2E2E2',
        "3th-color": "#3B82E1",
        "4th-color": "#93C5E7",
        "5th-color": "#6B7280",
        'std-text': '#F2F2F2',
      }
    },
  },
  plugins: [],
}
export default config
