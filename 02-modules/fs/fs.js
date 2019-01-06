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
// const fs = require('fs')
// function getFileByPath(fPath) {
//   fs.readFile(fPath, 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
//     return data
//   })
// }
// var result = getFileByPath('./text2.txt')
// console.log(result)
// undefined
// 2222
// 因为是异步读取，所以 result 会为 undefined
// 随后输出 text2 内容

// 读取二进制文件时，不传文件编码格式，回调函数的 data 参数将返回一个 Buffer 对象
// Buffer 对象是包含零个或任意个字节的数组(注意和 Array 不同)
// Buffer 对象可以和 String 转换

// Buffer --> String
// var text = data.toString('utf-8')
// console.log(text)

// String --> Buffer
// var buf = Buffer.from(text, 'utf-8')
// console.log(buf)


// 2. 同步读取文件
// var fs = require('fs')
// var data = fs.readFileSync('text1.txt', 'utf-8')
// console.log(data)
// 文件1
// 如果同步读取文件发生错误，需要用 try...catch 捕获错误
// try {
//   var data = fs.readFileSync('text1.txt', 'utf-8')
//   console.log(data)
// } catch(err) {
//   // 出错
// }


// 3. 写文件
// const fs = require('fs')
// const data = 'Hello, Node.js'
// fs.writeFile('text2.txt', data, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('OK! File has changed')
//   }
// })
// 写文件也有一个同步方法 writeFileSync()
// fs.writeFileSync('text2', data)

// 传入 data 为 String, 默认按 UTF-8 编码写入文件
// 若为 Buffer, 则写入二进制文件


// 4. 获取文件大小，创建时间等
// fs.stat
// 返回一个 Stat 对象，告诉我们文件或目录的详细信息
// const fs = require('fs')
// fs.stat('text2.txt', function (err, stat) {
//   if (err) {
//     console.log(err)
//   } else {
//     // 是否是文件
//     console.log('isFile: ', stat.isFile())
//     // 是否是目录
//     console.log('isDirectory: ', stat.isDirectory())
//     if (stat.isFile()) {
//       // 文件大小
//       console.log('size: ', stat.size)
//       // 创建时间 Date 对象
//       console.log('birth time: ', stat.birthtime)
//       // 修改时间 Date 对象
//       console.log('modified time: ', stat.mtime)
//     }
//   }
// })

// stat 同步方法 statSync
// const fs = require('fs')
// try {
//   const result = fs.statSync('text2.txt')
//   console.log('isFile: ', result.isFile())
//   console.log('isDirectory: ', result.isDirectory())
//   if (result.isFile()) {
//     console.log('size: ', result.size)
//     console.log('birth time: ', result.birthtime)
//     console.log('modified time: ', result.mtime)
//   }
// } catch (err) {
//   console.log(err)
// }