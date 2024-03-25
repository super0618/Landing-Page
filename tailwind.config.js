/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			container: {
				center: true,
				screens: { xl: "1260px" },
				padding: "24px",
			},
		},
	},
	plugins: [],
};
