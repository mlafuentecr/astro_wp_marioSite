/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'adder-pop-down': 'adder-pop-down 0.08s ease-in forwards',
				'adder-pop-up': 'adder-pop-up 0.08s ease-in forwards',
				'fade-in': 'fade-in 0.3s forwards',
				'fade-in-slow': 'fade-in 1s ease-in',
				'fade-out': 'fade-out 0.3s forwards',
				'pulse-fade-out': 'pulse-fade-out 5s ease-in-out forwards',
				'slide-in-from-right': 'slide-in-from-right 0.3s forwards ease-in-out',
			},
		},
	},
	plugins: [],
};
