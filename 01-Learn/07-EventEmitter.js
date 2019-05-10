/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-10
**/

// event

// 1. 介绍

// Node 是基于事件驱动的
// events 模块在 Node.js 中, 就是用来处理各种事件的
// 它定义了 EventEmitter 类, 所有可能触发事件的对象都是一个继承自 EventEmitter 类的子类实例对象

// addListener(event, listener)  对指定事件绑定事件处理函数
// on(event, listener)  对指定事件绑定事件处理函数
// once(event, listener)  对指定事件指定只执行一次的事件处理函数
// removeListener(event, listener)  	对指定事件解除事件处理函数
// removeAllListeners([event])  对指定事件解除所有的事件处理函数
// setMaxListeners(num) 指定事件处理函数的最大数量. num 为整数值，代表最大的可指定事件处理函数的数量
// listeners(event) 获取指定事件的所有事件处理函数
// emit(event, [arg1], [arg2], [...]) 手工触发指定事件



// 2. 用例

let EventEmitter = require('events')
let util = require('util')

// util 是一个类(工具库)

// 原型继承
// child.prototype.__proto__ = father.prototype

function Bell() {
  EventEmitter.call(this) // 继承父类的私有属性
}

util.inherits(Bell, EventEmitter)
// 只继承父类的原型上的方法和属性 公用方法

// 原理 Object.setPrototypeOf(otor.prototype, superCtor.prototype)

let bell = new Bell()

// 不同的人进教室

function stdIn(roomNum, things) {
  console.log(`学生带着${things}进${roomNum}教室`)
}
function teaIn(roomNum, things) {
  console.log(`老师带着${things}进${roomNum}教室`)
}
function masterIn(roomNum, things) {
  console.log(`只会来一次的大师带着${things}进${roomNum}教室`)
}

bell.setMaxListeners(5)
bell.addListener('响1', stdIn)
bell.on('响2', teaIn)
bell.once('响3', masterIn)

// 第一个参数是事件类型, 第二个参数和以后的参数会传递给监听函数
bell.emit('响1', '666', '背包')

bell.emit('响2', '333', '书本')

bell.emit('响3', '333', '书本')

bell.emit('响1', '444', '另一个背包')

bell.emit('响2', '333', '更多的书本')

bell.emit('响3', '333', '不少书本')



// 3. 源码解析

function EventEmitter2() {
  // 将所有的事件监听函数都放在一个对象里保存
  this.events2 = {}
}
