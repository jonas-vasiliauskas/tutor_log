/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ensures Tailwind scans all your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
