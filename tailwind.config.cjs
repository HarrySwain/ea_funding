/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary': {
				100: '#f2f8e2',
				200: '#d8e9a7',
				300: '#bddb6d',
				400: '#a3cc33',
				500: '#749224',
				600: '#749224',
				DEFAULT: '#bddb6d',
			}
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
