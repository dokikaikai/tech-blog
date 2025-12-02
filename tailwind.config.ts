import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#171717",
        accent: "#000000",
        "accent-hover": "#404040",
        muted: "#737373",
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#171717",
            "--tw-prose-headings": "#000000",
            "--tw-prose-lead": "#525252",
            "--tw-prose-links": "#000000",
            "--tw-prose-bold": "#000000",
            "--tw-prose-counters": "#737373",
            "--tw-prose-bullets": "#a3a3a3",
            "--tw-prose-hr": "#e5e5e5",
            "--tw-prose-quotes": "#404040",
            "--tw-prose-quote-borders": "#000000",
            "--tw-prose-captions": "#737373",
            "--tw-prose-code": "#171717",
            "--tw-prose-pre-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#1a1a1a",
            "--tw-prose-th-borders": "#d4d4d4",
            "--tw-prose-td-borders": "#e5e5e5",
            maxWidth: "680px",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
