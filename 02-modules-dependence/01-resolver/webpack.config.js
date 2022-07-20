module.exports = {
    mode: 'development',
    entry: './src/app.js',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        //配置路径读取文件格式顺序
        extensions: ['.json', '.js', 'vue']
    }
}
