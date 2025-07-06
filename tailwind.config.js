/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'quicksand-bold': ['QuickSand-Bold'],
        'quicksand-medium': ['QuickSand-Medium'],
        'quicksand-regular': ['QuickSand-Regular'],
        'quicksand-semibold': ['QuickSand-SemiBold'],
        'quicksand-light': ['QuickSand-Light'],
      },
    },
  },
  plugins: [],
}