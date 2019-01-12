/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019/1/10
 **/

// koa-router
const Koa = require("koa")

// 注意 require koa-router 返回的函数
const router = require("koa-router")()
// 注意导入 koa-ruter 的语句最后是函数调用
// 相当于:
// const fn_router = require('koa-router')
// const router = fn_router()

const app = new Koa()


// log request URL
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.methods} ${ctx.request.url}...`)
  await next()
})

router.get('/hello/:name', async (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}</h1>`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>这里是首页！</h1>`
})

app.use(router.routes())

app.listen(3000)

console.log('app started at port 3000...')