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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				festival: {
					yellow: '#DDFD51',
					dark: '#292E1B',
					black: '#000000',
				},
			},
			fontFamily: {
				'pixellari': ['Pixellari', 'system-ui', 'sans-serif'],
				'jersey': ['Jersey 10', 'system-ui', 'sans-serif'],
				'boldonse': ['Boldonse', 'system-ui', 'sans-serif'],
				'pixelify': ['Pixelify Sans', 'system-ui', 'sans-serif'],
				'mono': ['Roboto Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(0)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'text-glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
				},
				'page-transition-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'page-transition-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20px)' },
				},
				'random-move': {
					'0%': { transform: 'translate(0, 0) rotate(90deg)' },
					'10%': { transform: 'translate(100px, 50px) rotate(90deg)' },
					'20%': { transform: 'translate(50px, 150px) rotate(90deg)' },
					'30%': { transform: 'translate(200px, 100px) rotate(90deg)' },
					'40%': { transform: 'translate(150px, 50px) rotate(90deg)' },
					'50%': { transform: 'translate(75px, 200px) rotate(90deg)' },
					'60%': { transform: 'translate(175px, 175px) rotate(90deg)' },
					'70%': { transform: 'translate(25px, 100px) rotate(90deg)' },
					'80%': { transform: 'translate(125px, 25px) rotate(90deg)' },
					'90%': { transform: 'translate(50px, 75px) rotate(90deg)' },
					'100%': { transform: 'translate(0, 0) rotate(90deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'text-glitch': 'text-glitch 0.5s ease-in-out',
				'page-in': 'page-transition-in 0.5s ease-out forwards',
				'page-out': 'page-transition-out 0.3s ease-in forwards',
				'random-move': 'random-move 20s ease-in-out infinite alternate',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
