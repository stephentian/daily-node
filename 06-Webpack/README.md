# webpack 学习

## 目录

- **[什么是 webpakc](#什么是-webpack)**
- **[webpack 用处](#webpack-用处)**
- **[核心概念](#核心概念)**


## 什么是 webpack

web 网络, pack 包装，包裹。
通俗点说：打包各种资源模块的工具。
正规的说法：现代 JavaScript 应用程序的*静态模块打包器(module bundler)*。


## webpack 用处

webpack 找到 JavaScript 模块以及一些浏览器不能直接运行的拓展语言(ts, less, sass等)，打包成可用的格式在浏览器运行。

具体功能比如：
- 代码转换：ts -> js，sass -> css 等；
- 文件优化：压缩代码，压缩图片等
- 代码分割：首屏不需要的代码异步加载；
- 自动刷新：监听本地源码变化，自动构建、刷新浏览器；
- 自动校验：校验代码是否符合规范，单元测试是否通过等；
- 自动发布：更新代码后，自动构建线上发布代码并传输给发布系统。

本质：使前端工程化、自动化，解放生产力。


## 核心概念

- Entry: 入口
- Module: 模块
- Chunk: 代码块
- Loader: 模块转换器
- Plugin: 扩展插件
- Output: 输出结果

### 入口(entry)

指示 webpack 使用哪个模块。默认为 `./src`
```
// webpack.config.js

modlue.exports = {
  entry: '...xxx.js'
}
```

### 出口(output)

只是 webpack 在哪里输出打包的 `bundles`，以及如何命名这些文件，默认值为`./dist`。
```
// webpack.config.js

const path = require('path')
module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist')
    filename: 'fist.bundle.js'
  }
}
```

### 模块(module)

每一个文件可以称为模块，
每一个 `import`, `require`, `@import`, `img url`等引入的文件。

### 代码块(chunk)

一个 Chunk 由多个模块组合而成，用于代码合并与分割。

### 模块转换器(loader)

loader 用于对模块的源码进行转换。
loader 将文件从不同的语言，或者内联图像转换为 data URL。

比如 webpack 对每个 `.css` 使用 `css-loader`, 以及对所有 `ts` 文件使用 `ts-loader`
```
// webpack.config.js

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader'},
      { test: /\.ts$/, use: 'ts-loader'}
    ]
  }
}
```

### 插件(plugins)

插件是 webpack 的支柱功能。
插件的目的在于解决 loader 无法实现的功能。
在 Webpack 构建流程中的特定时机注入插件来改变构建结果或做你想要的事情。
