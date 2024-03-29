/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  theme: {},
  daisyui: {
    themes: ["light", "dark", "retro"],
  },
};
