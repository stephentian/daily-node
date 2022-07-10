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
// const fs = require('fs')
// const ws1 = fs.createWriteStream('output2.txt', 'utf-8')
// ws1.write('使用 Stream 写入文本数据...\n')
// ws1.write('END.')
// ws1.end()

// var ws2 = fs.createWriteStream('output1.txt')
// ws2.write(Buffer.from('使用 Stream 写入二进制数据...\n', 'utf-8'))
// ws2.write(Buffer.from('END.', 'utf-8'))
// ws2.end()


// 3. pipe

// 读取数据的流继承自 stream.Readable, 所有可以写入的流继承自 stream.Writable
// 一个 Readable 流和一个 Writable 流串起来，所有数据从 Readable 流进入 Writable 流，这种操作叫 pipe
// 在 Node.js 中， Readable 流有个 pipe() 方法，就是用来进行这种操作的
// 用 pipe() 吧一个文件流和另一个文件流串起来，这样源文件所有数据就自动写入到目标文件里，这实际上是一个复制文件的程序
// const fs = require('fs')
// const rs = fs.createReadStream('sample.txt')
// const ws = fs.createWriteStream('copied.txt')
// rs.pipe(ws)
// 生成了一个 copied.txt 文件
// 默认情况下， Readable 流的数据读取完毕， end 事件触发，将自动关闭 Writable 流
// 如果不希望自动关闭 Writable 流，需要传入参数
// readable.pipe(writable, {
//   end: false
// })