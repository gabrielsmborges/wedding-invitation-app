import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
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
} satisfies Config