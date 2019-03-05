# daily-node

> Learn Node, Know Node

## 目录

- **[初识 Node](https://github.com/stephentian/daily-node/tree/master/01-Learn)**
- **[Modules 模块](https://github.com/stephentian/daily-node/tree/master/02-Modules)**
- **[Express 学习](https://github.com/stephentian/daily-node/tree/master/03-Express)**
- **[Koa](https://github.com/stephentian/daily-node/tree/master/04-Koa)**
- **[MongoDB](https://github.com/stephentian/daily-node/tree/master/05-MongoDB)**


### Node 是什么？

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境, 让 JavaScript 的执行效率有低端的 C 语言的相近的执行效率
- Node.js 使用一个事件驱动、非阻塞 I/O 的模型, 使其轻量又高效
- Node.js 的包管理器 npm, 是全球最大的开源库生态系统

### Node 特点

#### 1. 单线程

**进程**: 系统分配资源和调度任务的基本单位

一个进程里至少由一个线程组成

**线程**：操作系统执行任务的最小单位

#### 2. 浏览器模型

### Node 解决的问题

- 提供一种简单的, 用于创建高性能服务器的开发工具
- Web 服务器的瓶颈在于并发的用户量, 对比 Java 和 PHP 的实现

**常见的 Web 服务器**:

apache, resin, tomcat, iis(windows)

客户端访问服务器, Web 服务器会开辟一个线程, 线程负责处理客户端请求.
假设客户端要访问用户列表, 而用户列表存在数据库里(MySQL, redis, mongodb, memcached);
线程就需要去数据库请求数据, 然后发送给客户端, 但是网络不好的话, 就会请求很慢, 甚至请求失败.

**线程池**： 一般一个线程如果完成任务都会销毁, 线程池则不会, 会被分配去完成另一个任务
