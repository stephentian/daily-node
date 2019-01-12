/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-1-12
 **/

const fs = require('fs')

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET')) {
      var path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST')) {
      var path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers(router, dir) {
  var files = fs.readdirSync(__dirname + '/' + dir)
  var js_files = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (const f of js_files) {
    console.log(`process controller: ${f}...`)
    let mapping = require(__dirname + '/controllers/' + f)
    addMapping(router, mapping)
  }
}

module.exports = function (dir) {
  let
    controllers_dir = dir || 'controllers',
    router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}