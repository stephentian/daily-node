/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019/1/6
 **/

// stream 流
// 一种抽象的数据结构
// 从键盘输入到应用程序，叫标准输入流 stdin
// 从应用程序把字符输出到显示器，叫 stdout
// 流的特点：有序的，而且必须依次读取；或者依次写入，不能像 Array 一样随机定位

// 在 Node.js 中， 流是一个对象，
// 我们只需要响应流的事件就可以了
// data 事件表示流的数据可以读取
// end 事件表示流已经到了末尾， 没有数据可读了
// error 事件表示出错

// 1. 从文件流读取文本
// const fs = require('fs')
// 打开一个流
// const rs = fs.createReadStream('sample.txt', 'utf-8')
// rs.on('data', function (chunk) {
//   console.log('Data')
//   console.log(chunk)
// })
// rs.on('end', function () {
//   console.log('End!')
// })
// rs.on('error', function (error) {
//   console.log('Err: ', error)
// })

// 注意：data 事件会执行很多次，每次传递的 chunk 是流的一部分数据


// 2. 以流的形式写入文件，需要不断调用 write() 方法，最后以 end() 结束
const fs = require('fs')
const ws1 = fs.createWriteStream('output2.txt', 'utf-8')
ws1.write('使用 Stream 写入文本数据...\n')
ws1.write('END.')
ws1.end()

var ws2 = fs.createWriteStream('output1.txt')
ws2.write(Buffer.from('使用 Stream 写入二进制数据...\n', 'utf-8'))
ws2.write(Buffer.from('END.', 'utf-8'))
ws2.end()