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
        "color-1th": "#111827", 
        "color-2th": "#D7D7DB", 
        "color-3th": "#1F2937", 
        "color-normal": "#3D4856", 
        "color-hover": "#84CC16", 
        "color-active": "#A3E635", 
      }
    },
  },
  plugins: [],
}
export default config
