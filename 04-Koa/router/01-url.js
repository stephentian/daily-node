/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-8
 **/

// koa-router

// 正常情况下，我们应该对不同 URL 调用不同处理函数，才能返回不同的结果
const Koa = require('koa')
const app = new Koa()

// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/') {
//     ctx.response.body = 'this is index page!'
//   } else {
//     await next()
//   }
// })

// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/test') {
//     ctx.response.body = 'Test page!'
//   } else {
//     await next()
//   }
// })

// app.use(async (ctx, next) => {
//   if (ctx.request.url === '/error') {
//     ctx.response.body = 'ERROR page!'
//   } else {
//     await next()
//   }
// })

// app.listen(3001)

// 这么写是可以运行的，但是好像有点蠢，有几十上百个路由怎么办？
// 应该有个能集中处理 URL 的 middleware, 它能根据不同的 URL 调用不同的处理函数，这样，我们才能专心为每个 URL 编写处理函数

// 为了处理 URL，我们需要引入 koa-router 这个 middleware, 让它负责处理 URL 映射