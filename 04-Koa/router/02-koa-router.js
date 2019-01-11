/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019/1/10
 **/

// koa-router
const Koa = require("koa")

// 注意 require koa-router 返回的函数
const router = require("koa-router")()

const app = new Koa()

// log request URL
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.methods} ${ctx.request.url}...`)
  await next()
})