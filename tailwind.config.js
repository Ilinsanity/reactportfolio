/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        antdark: "url('/src/images/ant-darkened2.jpg')",
        mountainrange: "url('/src/images/mount.JPG')",
      },
    },
  },
  plugins: [],
};
