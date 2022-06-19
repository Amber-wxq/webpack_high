const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    plugins: [
        new HtmlWebpackPlugin(),
        new EslintWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ]
    }
};