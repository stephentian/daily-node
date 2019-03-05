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

**进程**: 系统分配资源和调度任务的基本单位, 一个进程里至少由一个线程组成

**线程**：操作系统执行任务的最小单位

唯一主线程接收客户端请求, 向数据库请求数据; 但由于是 非阻塞 I/O, 
会在请求数据库时， 主线程会去接收下一个请求; 
当请求结束后, 可以去处理数据库返回的数据.
(参考去饭店点餐, 服务员是主线程, 点完菜后, 服务员去服务其他人; 要上菜时, 又来服务.)

**单线程好处**：
  1. 节约内存
  2. 节约上下文切换的时间
  3. 锁的问题, 并发资源的处理

java 中锁的实现：当多个线程访问同一个资源的时候, 会加锁; 当一个线程使用完后, 再给另一个线程用

**单线程问题**：
  1. 一个线程崩了, 整个服务器就崩了

**为什么是单线程的**

- 是由 JavaScript 这门脚本语言的用途决定的
- Web Worker 并没有改变 JavaScript 单线程的本质

浏览器里 UI 线程和 JS 线程是共用一个进程的



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

**多线程**：多线程并不是在同一个时间点执行多个任务, 而是通过非常快速的切换时间片来实现的(比如一个线程执行 0.1s, 只是 CPU 切换太快了, 我们感受不到).
