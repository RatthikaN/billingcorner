/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["Outfit", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#6366f1",
                    dark: "#4f46e5",
                },
                accent: "#10b981",
            },
        },
    },
    plugins: [],
}
