import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem", // widened in globals.css at md and lg
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#FFF4ED",
          100: "#FFE4D2",
          200: "#FFC6A3",
          DEFAULT: "#FE5B07",
          600: "#E84F00",
          700: "#C24100",
        },
        ink: {
          DEFAULT: "#161616",
          800: "#242424",
          700: "#333333",
        },
        muted: "#5F5F5F",
        line: "#E9E9E9",
        paper: "#F7F7F7",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        eyebrow: "0.32em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        float: "float 6s ease-in-out infinite",
        draw: "draw 2.2s cubic-bezier(0.6, 0, 0.2, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
