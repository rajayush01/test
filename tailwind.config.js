/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  corePlugins: {
    // Disabled: the ported site already carries its own resets
    // (box-sizing, margins, heading weights, etc.) and Tailwind's
    // preflight would silently alter those defaults.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "ever-teal": "#007078",
        "prime-yellow": "#FFC627",
        "humble-beige": "#F4EFE6",
      },
      fontFamily: {
        monda: ["Monda", "sans-serif"],
      },
    },
  },
  plugins: [],
};
