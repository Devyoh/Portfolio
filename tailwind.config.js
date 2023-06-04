/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./src/**/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        'pulse': '0% opacity-1, 50% opacity-.5 '
      },
      animation: {
        'text-opacity-1200': 'opacity 1.2s duration',
        'slow-pulse-2': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
      }

    },
  },
  plugins: [],
};

