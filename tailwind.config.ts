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
        "color-1th": "#1A1A1A", 
        "color-2th": "#D7D7DB", 
        "color-3th": "#538c54",
        "color-4th": "#4b4b4b",  
        "color-normal": "#2a462a", 
        "color-hover": "#8be98c", 
        "color-active": "#aef0af", 
      }
    },
  },
  plugins: [],
}
export default config
