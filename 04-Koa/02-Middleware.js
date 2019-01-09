/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-8
 **/

// koa middleware

// 先看看 koa 执行逻辑
const Koa = require('koa')

const app = new Koa()

// app.use(async (ctx, next) => {
//   await next()
//   ctx.response.type = 'text/html'
//   ctx.response.body = '<h1>Hello Koa Middleware !</h1>'
// })

// 每收到一个 http 请求， koa 就会调用 app.use() 注册 async 函数，并传入 ctx 和 next 参数
// 为什么要调用 await next() 呢？
// 原因是 koa 把很多 async 函数组成处理链，每个 async 都可以做自己的事情，然后 await next() 来调用下一个 async 函数
// 把每个 async 函数称为 middleware
// 这些 middleware 组合起来，可以完成很多功能

// 例如，用一下 3 个 middleware 组成处理链，依次打印日志，记录处理时间，输出 HTML
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`) // 打印 url
  await next() // 调用下一个 middleware
})

app.use(async (ctx, next) => {
  const start = new Date().getTime() // 当前时间
  await next()
  const ms = new Date().getTime() - start // 耗费时间
  console.log(`Time: ${ms}ms`)
})

app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello Koa Middleware !</h1>'
})

app.listen(3000)
console.log('Server runnig at port 3000 !')

// 调用 app.use() 的顺序决定了 middleware 的顺序
// 如果一个 middleware 没有调用 await next(), 后续的 middleware 将不再执行

// 例如，一个检测用户权限的 middleware 可以决定是否继续请求处理，还是直接返回 403 错误
app.use(async (ctx, next) => {
  if (await checkUserPermisson(ctx)) {
    await next()
  } else {
    ctx.response.status = 403
  }
})

// 注意 ctx 对象的一些简写
// ctx.url 相当于 ctx.request.url
// ctx.type 相当于 ctx.response.type