/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Scan all files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',    // text-primary / bg-primary
        secondary: '#F59E0B',
        accent: '#1E3A8A',
        background: '#FFFBF5', // bg-background
        text: '#1F2937',       // text-text
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [], // add tailwindcss-animate here if needed
};
