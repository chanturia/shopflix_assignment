/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'body': ['Roboto'],
        },
        extend: {
            colors: {
                'payment-option-list-odd': '#ECF4FE',
                'payment-option-list-even': '#E8F7FF',
                'availability-now-color': '#02D088',
                'star-rating': '#F2A91B',
            },
        }
    },
    plugins: [],
}