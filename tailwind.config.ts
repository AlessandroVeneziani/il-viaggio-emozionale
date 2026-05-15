import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0F",
        gold: "#C6A75E",
        "gold-deep": "#9E7728",
        ivory: "#F4F1EA",
        sand: "#D7C2A2",
        smoke: "#1C1C1C",
        pine: "#16232A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        ritual: "0 24px 80px rgba(0, 0, 0, 0.28)",
        glow: "0 20px 60px rgba(198, 167, 94, 0.18)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(198, 167, 94, 0.14) 0, transparent 28%), radial-gradient(circle at 80% 0%, rgba(244, 241, 234, 0.1) 0, transparent 24%), radial-gradient(circle at 50% 80%, rgba(198, 167, 94, 0.12) 0, transparent 26%)",
      },
      maxWidth: {
        "site": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
