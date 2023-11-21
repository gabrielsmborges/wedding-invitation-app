import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: "#787878",
        lupurple1: "#e6d7ff",
        lupurple2: "#d8bfff",
        ludarkpurple: "#651199",
      }
    },
  }
}
export default config
