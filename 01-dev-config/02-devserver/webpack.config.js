const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: "development",
    entry: './app.js',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 3000,
        headers: {
            'X-Access-Token': 'abc123'
        },
        proxy: {
            '/api': 'http://localhost:9000'
        }
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
} 