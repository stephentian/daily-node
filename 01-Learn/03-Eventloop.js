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
