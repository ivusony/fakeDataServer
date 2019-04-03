const path = require('path');

module.exports = {
    entry: './front_app/index',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle_front.js'
    },
    mode: 'development'
}