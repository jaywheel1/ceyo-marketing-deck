import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ceyo: {
          ink: "#0A0A0B",
          paper: "#0F0F12",
          surface: "#17171B",
          surface2: "#1F1F25",
          border: "#27272F",
          borderSoft: "#1F1F25",
          muted: "#6B7280",
          text: "#E5E7EB",
          heading: "#FAFAFA",
          accent: "#4F46E5",
          accent2: "#6366F1",
          accent3: "#818CF8",
          accent4: "#A5B4FC",
          blue: "#3B82F6",
          success: "#10B981",
          warn: "#F59E0B",
          danger: "#EF4444",
        },
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
