/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-05-08
**/

// global 全局对象
// windows 里也有全局对象, 但是不能直接访问
// 在浏览器里访问 global 是通过 window 实现的


// 1. global 的变量都是全局变量
// 2. 所有的全局变量都是 global 的属性



// 1. console.log(global)

// console
// process 当前进程
// pid 进程id
// chdir
// cwd
// nextTick
// stdout stdrr stdin
// Buffer
// clearImmediate



// 2. console.log(process)

// process
// argv 参数(写脚手架)
// execPath
// chdir  改变当前工作目录(change directory)
// cwd  当前工作目录(current working directory)

// memoryUsage 用于检查当前内存使用量
// console.log(process.memoryUsage())
// { rss: 21741568, 常驻内存
//   heapTotal: 6537216, 堆的总申请量
//   heapUsed: 3832800, 堆已经使用的量
//   external: 8272 } 外部内存使用量
// V8 引擎最大使用内存 1.7 G
