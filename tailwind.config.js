/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./app/(tabs)/index.tsx",
    "./app/(tabs)/book.tsx",
    "/app/(tabs)/list.tsx",
    "./app/hadith/[id].tsx",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

