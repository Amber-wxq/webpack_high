## 安装webpack依赖

npm i webpack webpack-cli -D

npm i webpack-dev-server html-webpack-plugin -D

`npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D `

## 构造文件

新建webpack.config.js

### 基本文件内容

```
module.exports={
	mode:'development',
	entry:'./src/app.js'
}
```

### 加载本地模块和加载第三方模块

### 模块解析（resolve）

#### 路径别名

```
resolve:{
	alias:{
		'@':path.resolve(__dirname,'./src')
	}
}
```

#### 重名：默认先读json

可以配置

```
resolve:{
	alias:{
                    '@':path.resolve(__dirname,'./src')
	},
	//配置路径读取文件格式顺序
	extensions:['.json','.js','vue']
}
```

### 外部扩展（Externals)

为减小bundle体积，把不变的第三方库，用cdn方式引进

`npm init`

安装依赖

基本配置（webpack.config.js）：

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
modules.exports = {
    mode: 'development',
    entry: './app.js',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

```

externals:

```
modules.exports = {
    mode: 'development',
    entry: './app.js',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    externals:{
    	jquery:'jQuery'
    }
}

```

在index.html中用script引入

```
modules.exports = {
    mode: 'development',
    entry: './app.js',
    plugins: [
        new HtmlWebpackPlugin(
        	{template:"./index.html"}
        )
    ],
    externals:{
    	jquery:'jQuery'
    }
}
```

webpack自动生成script标签,不用定义index.html,设置template了

```
externalsType:'script'
externals:{
	
    	jquery:[
    		'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js'
    		'jQuery' //别名
    	]
    }
```

### 依赖图

文件的依赖关系图
多入口配置

可视化工具bundle-analyzer

`npm i webpack-bundle-analyzer -D `

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundler-analyzer");
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        app2: './src/app2.js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]

}
```

