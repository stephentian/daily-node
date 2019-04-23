/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-3-4
**/

function next() {
  console.log(1)
  setTimeout(function () {
    console.log(2)
  })
  // nexttick 是把回调函数放在执行栈的尾部
  process.nextTick(function () {
    console.log(3)
    process.nextTick(function () {
      console.log(4)
      process.nextTick(function () {
        console.log(5)
      })
    })
  })
}

next()

// 思考： 输出的顺序？
// 答： 1, 3, 4, 5, 2
// 正确答案： 1, 3, 4, 5, 2


// Node 中的 Event Loop

// 1. V8 引擎解析 javascript 脚本
// 2. 解析后的代码, 调用 Node API
// 3. lib 库负责 Node API 的执行, 它将不同的任务分配给不同的线程, 形成一个 Event Loop(事件循环), 以异步的方式将任务的执行结果返回给 V8 引擎
// 4. V8 引擎再将结果返回给用户
