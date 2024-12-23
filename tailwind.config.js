/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        q: "600px",
        menu : "1500px"

      },
      width : {
        f : "900px"
      },
      backgroundColor : {
        menu : "#001220",
        fundoF: "#1A202C",
        cardB: "#1F2733",
        fundoLogin : "RGB(182, 152, 96)"
      }
    },
  },
  plugins: [],
}

