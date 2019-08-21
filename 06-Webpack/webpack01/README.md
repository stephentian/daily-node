# 初始化项目


#### 搭建基础

新建 webpack 文件夹
```
npm init -y
```

#### 构建项目

新建 src 目录，里面新建 index.js 文件
```
// index
console.log('hello Webpack')

document.getElementById('app').innerHTML = 'stephen'
```

新建 dist 目录，一般里面放打包好的代码

#### 打包文件

1.安装 webpack

```
npm i webpack webpack-cli -D
```

2.配置 packge.json
```
...
"dev": "webpack --mode development",
"build": "webpack --mode production"
..
```

3.创建 webpack.config.js
```
module.exports = {
  entry: './src',
  output: {

  },
  module: {},
  plugins: [],
  devServer: {}
}
```
