/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#343541",
        "gray-100": "#DAE0F1",
        "gray-200": "#CED7F3AB",
        "gray-300": "#DEE1E9",
        "gray-500": "#999",
        "gray-700": "#303037E8",
        "green-900": "#355226",
        "white-100": "#F1F6F954",
        "blue": "#1349CD",
        "red": "#DB0000",
        "yellow": "#FAFFA894",
        "green": "#A9FFA891"
      },
      boxShadow: {
        'lg': 'rgba(0, 0, 0, 0.2) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px',
      },
      keyframes: ({ theme }) => ({
        flip: {
          '100%': {
            transform: 'rotateY(180deg)',
            transition: 'transform 0.3s'
          },
        }
      })
    },
  },
  plugins: [],
};
