import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ademon brand palette — warm metallic gold on black (matches brochure)
        gold: {
          DEFAULT: "#D7A93B",
          light: "#F7E08A",
          dark: "#9A7320",
          muted: "#7E5E1A",
        },
        ink: {
          DEFAULT: "#080806",
          soft: "#100E0A",
          card: "#181510",
          border: "#2A2418",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(215, 169, 59, 0.4)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #FBEFA8 0%, #E7C24E 28%, #D7A93B 52%, #A87B1C 78%, #6E4F12 100%)",
        "ink-radial":
          "radial-gradient(1200px 600px at 50% -10%, rgba(215,169,59,0.14), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
