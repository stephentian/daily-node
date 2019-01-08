/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-7
 **/

// Koa
const Koa = require('koa')
const app = new Koa()


app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hell Koa2 !</h1>'
})

app.listen(3000)
console.log('Server runnig at port 3000 !')

// 对于每个 http 请求， koa 将调用我们传入的异步函数 next 处理
// 参数 ctx 是由 koa 传入的封装了 request 和 response 的变量
// next 是 koa 传入的将要处理的下一个异步函数
// 由 async 标记的函数称为 异步函数； 在异步函数中，可以用 await 调用另一个异步函数