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
        "gray-100": "#DAE0F1",
        "gray-200": "#CED7F3AB",
        "gray-300": "#DEE1E9",
        "gray-500": "#999",
        "gray-700": "#303037",
      },
    },
  },
  plugins: [],
};
