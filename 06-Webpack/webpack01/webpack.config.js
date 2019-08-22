const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // 只能写绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 用来解析处理 CSS 文件中的 url 路径,要把 CSS 文件变成一个模块
        // style-loader 可以把 CSS 文件变成style标签插入 head 中
        // 多个 loader 是有顺序要求的，从右往左写，因为转换的时候是从右往左转换
        // 此插件先用 css-loader 处理一下 css 文件
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [],
  devServer: {}
}
