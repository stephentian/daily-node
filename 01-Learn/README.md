# Node 学习


## 简介

了解 Node.js, 帮助掌握 Node.js 的运用


## 目录

- **[Hello Node](#1-hello-node)**
- **[实现 Web Server](#-实现-web-server)**


---

## 1. Hello Node

使用 Node 编写代码, 输出 'Hello Node.js'

代码:
```
console.log("Hello Node.js")
```

---

## 2. 实现 Web Server



---

## 调试

```
node --inspect hello.js
```

在 chrome 浏览器输入 `chrome://inspect`

官网地址: [调试指南](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)



---

## exports 和 module.exports




## require 特性

1. module 被加载的时候会执行一遍, 并且缓存(第二次 require 不执行)
2. 一旦出现某个模块被循环加载(a 引用 b, b 引用 a), 就只输出已经执行的部分, 未执行的部分不输出
