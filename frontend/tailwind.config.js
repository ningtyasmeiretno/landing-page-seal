// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'background': '#FFFEFA',
                'text': '#262F3E',
                'text-home': '#8B8484',
                'accent': '#FFB901',
                'program': '#FAFAFA',
                'input': '#FAFAFA',
                'g-top': '#FFFEF8',
                'g-top-rgba': 'rgba(255, 254, 250, 0) 121.25%',
                'footer': '#FAFAFA'
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'raleway': ['Raleway', 'sans-serif'],
                'monsterat': ['Montserrat', 'sans-serif']
            },
            fontSize: {
                'xl-4': '44px',
                'xl-2': '28px'
            },
            lineHeight: {
                '1': '30px',
                '2': '48,4px',
            },
            minHeight: {
                '1': '25%',
                '2': '50%',
                width: {
                    '90': '351.51px',
                },
                zIndex: {
                    'our-mission': '-10'
                }

            },
        },
        variants: {
            extend: {
                cursor: ['hover', 'focus'],
            },
        },
        plugins: [],
    }
}