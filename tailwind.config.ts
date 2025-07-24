
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        xs: ["clamp(0.75rem, 2vw, 0.875rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 2.5vw, 1rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 3vw, 1.125rem)", { lineHeight: "1.6" }],
        lg: ["clamp(1.125rem, 3.5vw, 1.25rem)", { lineHeight: "1.6" }],
        xl: ["clamp(1.25rem, 4vw, 1.5rem)", { lineHeight: "1.6" }],
        "2xl": ["clamp(1.5rem, 5vw, 2rem)", { lineHeight: "1.4" }],
        "3xl": ["clamp(1.875rem, 6vw, 2.5rem)", { lineHeight: "1.3" }],
        "4xl": ["clamp(2.25rem, 7vw, 3rem)", { lineHeight: "1.2" }],
        "5xl": ["clamp(2.5rem, 8vw, 4rem)", { lineHeight: "1.1" }],
        "6xl": ["clamp(3rem, 10vw, 5rem)", { lineHeight: "1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        section: "clamp(3rem, 8vw, 6rem)",
        container: "clamp(1rem, 4vw, 2rem)",
        component: "clamp(1rem, 3vw, 2rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.8s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--accent) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--accent) / 0.6)",
          },
        },
      },
      maxWidth: {
        prose: "65ch",
        container: "1400px",
      },
      aspectRatio: {
        golden: "1.618",
        portrait: "3/4",
        landscape: "16/9",
      },
      boxShadow: {
        elegant: "0 10px 30px -10px hsl(var(--primary) / 0.1)",
        card: "0 4px 6px -1px hsl(var(--primary) / 0.1), 0 2px 4px -1px hsl(var(--primary) / 0.06)",
        glow: "0 0 40px hsl(var(--accent) / 0.15)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
        "gradient-secondary": "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(245 158 11 / 0.8) 100%)",
        "gradient-subtle": "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
