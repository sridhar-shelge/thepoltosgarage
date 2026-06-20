import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#07090d",
        graphite: "#10141b",
        metal: "#aab4c0",
        orange: "#ff6a00",
        cyan: "#28d8ff",
        bluebolt: "#3f8cff",
        danger: "#ff364e"
      },
      boxShadow: {
        glow: "0 0 42px rgba(255, 106, 0, 0.22)",
        cyan: "0 0 34px rgba(40, 216, 255, 0.2)"
      },
      backgroundImage: {
        "road-grid": "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
        "speed-arc": "conic-gradient(from 220deg, rgba(255,106,0,.12), rgba(40,216,255,.28), rgba(255,54,78,.12), transparent 62%)"
      }
    }
  },
  plugins: []
};

export default config;
