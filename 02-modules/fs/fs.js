/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018/1/5
 **/

// fs (file system)

// 文件系统模块，负责读写文件
// 和所有其它 javascript 模块不同的是，同时提供了异步和同步方法

// jQuery 提供的 getJSON() 操作
// $.getJSON('http://example.com/ajax/', function (data) {
//   console.log('IO结果返回后执行')
// })
// console.log('不等待 IO 结果直接执行')

// 同步 IO 操作
// var data = getJSONSync('http://example.com/ajax')
// 同步需要等待返回，好处是代码简单


// 1. 异步读写文件

// var fs = require('fs')
// 普通读取文件方法
// fs.readFile('text3.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// 封装一个方法，传给方法一个读取文件的路径，能读取文件，并返回内容
const fs = require('fs')

// 封装方法
function getFileByPath(fPath) {
  fs.readFile(fPath, 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    return data
  })
}

var result = getFileByPath('./text2.txt')
console.log(result)
// undefined
// 因为是异步读取，所以 result 会为 undefined