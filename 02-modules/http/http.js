/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019/1/6
 **/

// http

// 1. http 协议



// 2. http 服务器
const http = require('http')

const server = http.createServer(function (req, res) {
  // 回调函数接收 requst 和 response 对象
  // 获取 http 请求的 method 和 url
  console.log(req.method + ':' + req.url)
  // 将 http 响应 200 写入 reponse, 同时设置 Content-type: text/html
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  // 将 http 响应的 html 写入 response
  res.end('<h1>Hello Node, http!</h1>')
})
server.listen(8000)
console.log('Server is runnig at http://localhost:8000')