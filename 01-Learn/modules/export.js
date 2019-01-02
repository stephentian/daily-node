// module.exports 和 exports

// 在 node 中，有两种方法可以在一个模块输出变量

// 方法一
// function hello() {
//   console.log('Hello, world!');
// }

// function greet(name) {
//   console.log('Hello, ' + name + '!');
// }

// module.exports = {
//   hello: hello,
//   greet: greet
// };


// 方法二
// function hello() {
//   console.log('Hello, world!');
// }

// function greet(name) {
//   console.log('Hello, ' + name + '!');
// }

// exports.hello = hello;
// exports.greet = greet;

// 但是你不能直接对 exports 赋值
// 下面代码在另一个文件引入并使用方法会报错，因为模块并没有任何输出
// exports = {
//   hello: hello,
//   greet: greet
// }