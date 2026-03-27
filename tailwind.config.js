/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Use Inter and Lora as the site's primary fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        light: {
          background: '#f8f5f2',
          text: '#333333',
          accent: '#5a4a3a',
        },
        dark: {
          background: '#282c34',
          text: '#e0e0e0',
          accent: '#d4bda8',
        },
      },
      // (fontFamily defined above)
    },
  },
  plugins: [
    typography,
  ],
};
