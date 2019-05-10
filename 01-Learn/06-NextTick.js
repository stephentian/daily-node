/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-08
**/

// nextTick

// nextTick 和 setImmediate
// nextTick 把回调函数放在当前执行栈的底部
// setImmediate 把回调函数放在当前事件队列的尾部

function read() {
  setImmediate(function () {
    console.log(1)
    process.nextTick(function () {
      console.log(2)
      process.nextTick(function () {
        console.log(3)
      })
      // setImmediate(function () {
      //   console.log(5)
      // })
      // setTimeout(() => {
      //   console.log(6)
      // })
    })
  })
  process.nextTick(function () {
    console.log(0)
  })
}

read()

// 答案: 0 1 2 3

// 推荐使用 setImmediate
// nextTick 会导致死循环，执行栈越积越多
