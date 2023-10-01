/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@quibbble/boardgame/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "quibbble": "#ff5851"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    "font-['coquette']",
    "text-yellow-500",
    "max-w-xl",
    {
      pattern: /bg-(red|green|blue|yellow|orange|pink|purple|teal|indigo)-(300|500|600)/,
    },
    {
      pattern: /text-(red|green|blue|yellow|orange|pink|purple|teal|indigo)-(300|500|600)/,
    },
    {
      pattern: /border-(red|green|blue|yellow|orange|pink|purple|teal|indigo)-(300|500|600)/,
    },
    {
      pattern: /fill-(red|green|blue|yellow|orange|pink|purple|teal|indigo)-(300|500|600)/,
    },
  ]
}
