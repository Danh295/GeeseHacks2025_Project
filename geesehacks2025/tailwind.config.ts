const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'text-black': 'var(--text-black)', // Custom black text
        'error-red': 'var(--error-red)', // Custom error red
        'primary-yellow': 'var(--primary-yellow)', // Custom primary yellow
        'secondary-yellow': 'var(--secondary-yellow)', // Custom secondary yellow
        'primary-teal': 'var(--primary-teal)', // Custom primary teal
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  darkMode: 'media',
} satisfies Config;
