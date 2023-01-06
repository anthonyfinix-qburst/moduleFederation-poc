const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer: {
        port: 3002,
        open: true,
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    }
}