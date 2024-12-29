import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparentBlack: "#171919",
        border: '#2f3336',
        customGray: "#71767a",
        customBlue: "#198cd8",
      },
    },
  },
  plugins: [],
} satisfies Config;
