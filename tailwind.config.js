    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
      ],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'], // Asegura que la fuente Inter esté disponible
          },
        },
      },
      plugins: [],
    }
    