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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            figure: { textAlign: 'center' },
            'figure img': { margin: '0 auto', display: 'block' },
            'p[style*="text-align:center"]': { textAlign: 'center' },
            'p[style*="text-align:center"] img': { margin: '0 auto', display: 'block' },
            'img.align-center': { margin: '0 auto', display: 'block' },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};
