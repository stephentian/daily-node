console.log('hello Webpack')
document.getElementById('app').innerHTML = 'stephen'

// 因为 css 不是 js 模块, 需要转换， 要使用 css-loader
require('./index.css')
