const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: './app.js',
    devtool: "cheap-module-source-map",
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    }
}