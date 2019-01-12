var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>登入页</h1>
  <form action="/signin" method="post">
    <p>Name: <input name="name" value=""></p>
    <p>Password: <input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>
  </form>`
}

var fn_sign = async (ctx, next) => {
  var name = ctx.request.body.name || ''
  var password = ctx.request.body.password || ''
  console.log(ctx.request)
  console.log(`signin with name: ${name} , password: ${password}`)
  if (password === '12345') {
    ctx.response.body = `<h1>Welcome ${name}!</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
    <p><a href='/'>Try again!</a></p>`
  }
  // ctx.response.body = `<h1>Login failed!</h1>
  //   <p><a href='/'>Try again!</a></p>`
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_sign
}