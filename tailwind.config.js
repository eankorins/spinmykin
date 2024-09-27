// tailwind.config.js
module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dk': {

                    100: '#c41e3a',
                },
                'dh': {

                    100: '#a330c9',
                },
                'druid': {
                    100: '#ff7c0a',
                },
                'evoker': {

                    100: '#33937f',
                },
                'hunter': {

                    100: '#a330c9',
                },
                'mage': {

                    100: '#3fc7eb',
                },
                'monk': {
                    100: '#00ff98',
                },
                'paladin': {

                    100: '#f48cba',
                },
                'priest': {

                    100: '#fff',
                },
                'rogue': {

                    100: '#fff468',
                },
                'shaman': {

                    100: '#0070dd',
                },
                'warlock': {

                    100: '#8788ee',
                },
                'warrior': {

                    100: '#c69b6d',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}


