/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

// The faces the site ships: PT Sans and PT Serif (self-hosted in public/fonts) and
// Canterbury (self-hosted in public/fonts) for the wordmark only.
const sans = ['"PT Sans"', '"Segoe UI"', "system-ui", "sans-serif"];
const serif = ['"PT Serif"', "Georgia", "serif"];
const display = ["Canterbury", '"Old English Text MT"', "serif"];

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fffef2",
        ink: "#151d23",
        "ink-soft": "#32424e",
        sky: "#7ec9ff",
        "sky-light": "#dff2ff",
        blue: { DEFAULT: "#009dff", cross: "#2f77ad" },
      },
    },
    fontFamily: {
      sans,
      serif,
      display,
    },
  },
  plugins: [typography],
};
