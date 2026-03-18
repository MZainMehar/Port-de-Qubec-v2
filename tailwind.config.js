/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'port-blue': '#0076B6',
        'port-light-blue': '#16BCEF',
        'port-gray': '#BCC3C8',
        'port-dark': '#3F4450',
      },
      fontFamily: {
        'blender': ['BlenderPro', 'sans-serif'],
        'cambon': ['Cambon', 'serif'],
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      width: {
        'artboard': '1080px',
      },
      height: {
        'artboard': '1920px',
      },
      maxWidth: {
        'content': '960px',
      },
    },
  },
  plugins: [],
};
