
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
				'heading': ['Playfair Display', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cream: 'hsl(var(--cream))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				royal: {
					50: '#eaf5fe',
					100: '#d0e7fc',
					200: '#a9d7fa',
					300: '#73bff6',
					400: '#389cee',
					500: '#1a7fd8',
					600: '#0e62b8',
					700: '#0f4d95',
					800: '#13437c',
					900: '#15396a',
					950: '#0f2546',
				},
				golden: {
					50: '#fdf8e9',
					100: '#f5e7b8',
					200: '#edd791',
					300: '#e6c76a',
					400: '#e0b846',
					500: '#d2a529',
					600: '#b38a1e',
					700: '#8c6c17',
					800: '#664e12',
					900: '#3f3009',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'fluid-xs': 'clamp(0.5rem, 1vw, 1rem)',
				'fluid-sm': 'clamp(1rem, 2vw, 1.5rem)',
				'fluid-md': 'clamp(1.5rem, 3vw, 2.5rem)',
				'fluid-lg': 'clamp(2rem, 4vw, 4rem)',
				'fluid-xl': 'clamp(3rem, 6vw, 6rem)',
				'fluid-2xl': 'clamp(4rem, 8vw, 8rem)',
				'fluid-3xl': 'clamp(6rem, 10vw, 12rem)',
			},
			fontSize: {
				'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.4' }],
				'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
				'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.6' }],
				'fluid-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.5' }],
				'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.4' }],
				'fluid-2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.3' }],
				'fluid-3xl': ['clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)', { lineHeight: '1.2' }],
				'fluid-4xl': ['clamp(2.25rem, 1.9rem + 1.75vw, 3rem)', { lineHeight: '1.1' }],
				'fluid-5xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)', { lineHeight: '1' }],
				'fluid-6xl': ['clamp(3.75rem, 3rem + 3.75vw, 5rem)', { lineHeight: '1' }],
				// Massive display sizes for petersand-style hero
				'display': ['clamp(4rem, 8vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
				'display-lg': ['clamp(5rem, 10vw, 14rem)', { lineHeight: '0.85', letterSpacing: '-0.03em' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
