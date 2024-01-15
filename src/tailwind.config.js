const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(50px, 275px))',
            },
            height: {
                'auto': 'auto',
                'index-poster': '500px',
                'poster-img': '380px',
            },
            maxWidth: {
                'index-content' : '65%',
                '3/5' : '60%',
                '1/3' : '30%',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
