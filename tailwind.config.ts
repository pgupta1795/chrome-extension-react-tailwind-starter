import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.html', './src/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: { center: true, padding: '2rem' },
    extend: {},
  },
  plugins: [],
  darkMode: ['class'],
};

export default config;
