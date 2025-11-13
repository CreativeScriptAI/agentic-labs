import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'electric-blue': 'var(--electric-blue)',
  			'midnight-navy': 'var(--midnight-navy)',
  			'soft-white': 'var(--soft-white)',
  			'muted-text': 'var(--muted-text)',
  			gray1: 'var(--gray1)',
  			gray2: 'var(--gray2)',
  			gray3: 'var(--gray3)',
  			gray4: 'var(--gray4)',
  			gray5: 'var(--gray5)',
  			gray6: 'var(--gray6)',
  			gray7: 'var(--gray7)',
  			gray8: 'var(--gray8)',
  			gray9: 'var(--gray9)',
  			gray10: 'var(--gray10)',
  			gray11: 'var(--gray11)',
  			gray12: 'var(--gray12)',
  			blue1: 'var(--blue1)',
  			blue2: 'var(--blue2)',
  			blue3: 'var(--blue3)',
  			blue4: 'var(--blue4)',
  			blue5: 'var(--blue5)',
  			blue6: 'var(--blue6)',
  			blue7: 'var(--blue7)',
  			blue8: 'var(--blue8)',
  			blue9: 'var(--blue9)',
  			blue10: 'var(--blue10)',
  			blue11: 'var(--blue11)',
  			blue12: 'var(--blue12)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'SF Pro Display',
  				'SF Pro Text',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica',
  				'Arial',
  				'sans-serif'
  			],
  			'eb-garamond': [
  				'EB Garamond',
  				'serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			mondwest: [
  				'var(--font-mondwest)',
  				'sans-serif'
  			],
  			neuebit: [
  				'var(--font-neuebit)',
  				'sans-serif'
  			],
  			sfpro: [
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'SF Pro Display',
  				'SF Pro Text',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica',
  				'Arial',
  				'sans-serif'
  			],
  			'sf-pro': [
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'SF Pro Display',
  				'SF Pro Text',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
