/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-12
 **/

// 先导入 fs 模块， 然后用 readdirSync 列出文件
// 这里可以用 sync 是因为启动时只运行一次，不存在性能问题
const Koa = require('koa')
// const fs = require('fs')
const bodyParser = require('koa-bodyparser');

const controller = require('./controller')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(bodyParser())

app.use(controller())

app.listen(3000)

console.log('app started at port 3000...')


// var files = fs.readdirSync(__dirname + '/controllers')

// 过滤 .js 文件
// var js__files = files.filter((f) => {
//   return f.endsWith('.js')
// })

// 处理每个 js 文件
// for (var f of js__files) {
//   console.log(`process controller: ${f}...`)
//   // 导入 js 文件
//   let mapping = require(__dirname + '/controllers/' + f)
//   for (var url in mapping) {
//     if (url.startsWith('GET')) {
//       var path = url.substring(4)
//       router.get(path, mapping[url])
//       console.log(`register URL mapping: GET ${path}`)
//     } else if (url.startsWith('POST')) {
//       var path = url.substring(5)
//       router.post(path, mapping[url])
//       console.log(`register URL mapping: POST ${path}`)
//     } else {
//       console.log('')
//     }
//   }
// }

// 上面代码拆分
// function addMapping(router, mapping) {
//   for (var url in mapping) {
//     if (url.startsWith('GET')) {
//       var path = url.substring(4)
//       router.get(path, mapping[url])
//       console.log(`register URL mapping: GET ${path}`)
//     } else if (url.startsWith('POST')) {
//       var path = url.substring(5)
//       router.post(path, mapping[url])
//       console.log(`register URL mapping: POST ${path}`)
//     } else {
//       console.log(`invalid URL: ${url}`)
//     }
//   }
// }

// function addControllers(router) {
//   var files = fs.readdirSync(__dirname + '/controllers')
//   var js_files = files.filter((f) => {
//     return f.endsWith('.js')
//   })

//   for (const f of js_files) {
//     console.log(`process controller: ${f}...`)
//     let mapping = require(__dirname + '/controllers/' + f)
//     addMapping(router, mapping)
//   }
// }

// addControllers(router)