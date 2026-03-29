/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#131313',
        'surface-container-low': '#1c1b1b',
        'surface-container-high': '#2a2a2a',
        'surface-container-lowest': '#0e0e0e',
        primary: '#ffe2ab',
        'primary-container': '#ffbf00',
        'on-primary': '#402d00',
        secondary: '#bbcbb8',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#d4c5ab',
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
