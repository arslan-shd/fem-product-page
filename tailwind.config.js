/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(26, 100%, 55%)",
          200: "hsl(25, 100%, 94%)",
        },
        neutral: {
          heading: "hsl(220, 13%, 13%)",
          description: "hsl(219, 9%, 45%)",
          muted: "hsl(220, 14%, 75%)",
        },
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sansserif"],
      },
    },
  },
  plugins: [],
};
