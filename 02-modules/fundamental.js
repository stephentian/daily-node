/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018/1/4
 **/

// 基本模块

// 1. global

// javascript 有且仅有一个全局对象，
// 在浏览器中，叫 window
// 在 Node 环境中，叫 global


// 2. process

// 它代表当前 Node.js 进程
// process.cwd // 返回当前工作目录
// 'G:\\githubDown\\myGithub\\daily-node\\02-modules'
// process.chdir('../01-Learn') // 切换当前工作目录
// undefined

// javascript 是有事件驱动执行的单线程模型， Node 也不例外
// Node.js 不断执行响应事件的 javascript 函数，知道没有任何函数可以执行，Node.js 就退出
// 如果想在下一次响应中执行代码，可以调用 process.nextTick()

// process.nextTick(function () {
//   console.log('nextTick callback!')
// })
// console.log('nextTick will show!')

// nextTick will show!
// nextTick callback!

// 这说明 process.nextTick() 不是立即执行，而是等到下一次事件循环
// Node.js 进程本身事件由 process 处理
// 如果响应 exit 事件，可以在程序即将退出时执行某个回调函数

// 程序即将退出时的回调函数
// process.on('exit', function (code) {
//   console.log('Exit with the code: ' + code)
// })