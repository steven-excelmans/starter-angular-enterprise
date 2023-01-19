/** @type {import("tailwindcss").Config} */

module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                "morning-blue": "#8AB0AB",
                "charcoal": "#3E505B",
                "forest-green": "#26413C"
            }
        }
    },
    plugins: []
};
