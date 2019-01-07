/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-7
 **/

// Koa
const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  await next()
  const data = await doReadFile()
  ctx.response.type = 'text/plain'
  ctx.response.body = data
})

app.listen(3000)
console.log('Server runnig at host 3000 !')