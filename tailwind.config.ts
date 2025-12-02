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
        background: "#0a0a0a",
        foreground: "#e5e5e5",
        accent: "#ff6b35",
        "accent-hover": "#ff8555",
        muted: "#737373",
        border: "#262626",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#e5e5e5",
            "--tw-prose-headings": "#ffffff",
            "--tw-prose-lead": "#a3a3a3",
            "--tw-prose-links": "#ff6b35",
            "--tw-prose-bold": "#ffffff",
            "--tw-prose-counters": "#a3a3a3",
            "--tw-prose-bullets": "#525252",
            "--tw-prose-hr": "#262626",
            "--tw-prose-quotes": "#e5e5e5",
            "--tw-prose-quote-borders": "#ff6b35",
            "--tw-prose-captions": "#a3a3a3",
            "--tw-prose-code": "#ff6b35",
            "--tw-prose-pre-code": "#e5e5e5",
            "--tw-prose-pre-bg": "#171717",
            "--tw-prose-th-borders": "#404040",
            "--tw-prose-td-borders": "#262626",
            maxWidth: "800px",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
