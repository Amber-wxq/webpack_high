const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: "development",
    entry: './app.js',
    output: {
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        host: '0.0.0.0',
        port: 3000,
        http2: true,
        historyApiFallback: true,
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