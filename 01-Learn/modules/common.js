// 模块实现，闭包
(function () {
  // 读取 hello.js 代码
  var s = 'Hello';
  var name = 'World';
  console.log(s + ',' + name + '!')
  // hello 代码结束
})




// 模块输出 module.exports 实现
// 准备 module 对象
var module = {
  id: 'hello',
  exports: {}
};

var load = function (module) {
  // 读取 hello.js 文件代码
  function greet(name) {
    console.log("Hello" + name + "!");
  }

  module.exports = greet;
  // hello.js 代码结束
  return module.exports
};
var exported = load(module);
// 保存 module
save(module, exported)