const path = require('path')
const container = require("webpack").container
const dependencies = require("./package.json").dependencies

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
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
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    },
    plugins: [
        new container.ModuleFederationPlugin({
            name: "blog",
            remotes: {
                shared: "shared@http://localhost:3000/remoteEntry.js"
            },
            shared: dependencies
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
}