/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-4-27
**/

// 一

// 标准输出
console.log(1);
console.info(1);

// 错误输出
console.warn(2);
console.error(2);

// 正常输出 node 1.console.js
// 1
// 1
// 2
// 2

// 把标准输出流输出到文件 1
// node 1.console.js > a.log
// 2
// 2
// a.log 里有正确输出, 控制台打印错误输出(默认输出标准输出流)

// 把 2 打印到文件中
// node 1.console.js 2 > a.log
// 1
// 1

// 把错误输出 2 重定向到标准输出 1 中
// node 1.console.js 1> a.log 2>&1



// 二

// 用来统计两段代码之间的执行时间
// console.time()

console.time('cost')
let i = 0
while (i++ < 1000000) {

}
console.timeEnd('cost'); // 输出相同变量, 输出时间差
