/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "576px",
      // => @media (min-width: 768px) { ... }

      lg: "640px",
      // => @media (min-width: 1024px) { ... }

      xl: "768px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1024px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
