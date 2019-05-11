/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-11
**/

// events

// EventEmitter 源码解析

function EventEmitter() {
  // 将所有事件监听函数放在一个对象里保存
  this.events = {}
  // 监听函数数量默认最多 10 个
  this._maxListeners = 10
}

// 设置监听函数最大数量
EventEmitter.prototype.setMaxListeners = function (n) {
  this._maxListeners = n
}

// 绑定事件处理函数, 参数1为事件类型, 参数2为事件监听函数
EventEmitter.prototype.on = EventEmitter.prototype.addListener = {
  function(type, listener) {
    if (this.events[type]) {
      this.events[type].push(listener)
    } else {
      // 以前没添加此事件的监听函数, 则赋值一个数组
      this.events[type] = [listener]
    }
  }
}

EventEmitter.prototype.once = function (type, listener) {
  let wrapper = (...rest) => {
    listener.apply(this)
    this.removeListener(type, wrapper)
  }
  this.on(type, wrapper)
}

EventEmitter.prototype.removeListener = function (type, listener) {
  if (this.events[type]) {
    this.events[type] = this.events[type].filter(l => l != listener)
  }
}

EventEmitter.prototype.emit = function (type, ...args) {
  this.events[type] && this.events[type].forEach(listener => listener.apply(this, args))
}

modole.exports = EventEmitter
