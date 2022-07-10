# 初始化项目

## 搭建基础

新建 webpack 文件夹

```js
npm init -y
```

## 构建项目

新建 src 目录，里面新建 index.js 文件

```js
// index
console.log('hello Webpack')

document.getElementById('app').innerHTML = 'stephen'
```

新建 dist 目录，一般里面放打包好的代码

 打包文件

1.安装 webpack

```js
npm i webpack webpack-cli -D
```

2.配置 packge.json

```js
{
"dev": "webpack --mode development",
"build": "webpack --mode production"
}
```

3.创建 webpack.config.js

```js
module.exports = {
  entry: './src',
  output: {

  },
  module: {},
  plugins: [],
  devServer: {}
}
```

4.命令行执行文件

```
npm run dev
```

## 分析 bundle.js

```js
// 模块的缓存
var installedModules = {};

// 声明 require 方法，，模拟 CommonJs 的 require
function __webpack_require__(moduleId) {
  
  // 判断是否读取过文件
  if(installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }

  // 创建一个新模块， 并且放到缓存里
  var module = installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  };

  // 执行模块方法
  modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  // 标记模块为加载过
  module.l = true;

  // 返回模块导出对象
  return module.exports;
}

// 向外暴露模块对象
__webpack_require__.m = modules;

// 向外暴露模块的缓存
__webpack_require__.c = installedModules;

// 定以一个 getter 来兼容 exports
// getter: 获取器
// 在 exports 对象定以 name 属性， 它的值是不可配置的，可枚举，并指定获取器。
__webpack_require__.d = function(exports, name, getter) {
  if(!__webpack_require__.o(exports, name)) {
   Object.defineProperty(exports, name, { enumerable: true, get: getter });
  }
}

// 在导出的对象上导出 esModlue，做兼容
// 有 es6, 和 commonjs 两种 modlue
__webpack_require__.r = function(exports) {
 if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 }
 Object.defineProperty(exports, '__esModule', { value: true });
};

// 对应 output 里的 publicPath
__webpack_require__.p = "";
```

## 引入 css

1.在 src 新建 index.css

```css
body {
  width: 100%;
  height: 100%;
}
```

2.在 index.js 中

```js
require('./index.css')
```

3.因为 css 不是 js 模块, 需要转换， 要使用 css-loader

```js
// webpack.config.js

// css-loader 用来解析处理 CSS 文件中的 url 路径,要把 CSS 文件变成一个模块
// style-loader 可以把 CSS 文件变成style标签插入 head 中
// 多个 loader 是有顺序要求的，从右往左写，因为转换的时候是从右往左转换
// 此插件先用 css-loader 处理一下 css 文件
```

4.安装 loader

```js
npm install style-loader css-loader -D
```

5.打包

```js
npm run dev
```
