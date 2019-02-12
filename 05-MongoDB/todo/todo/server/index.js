const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

let todos = []
const public = path.join(__dirname, '/')
app.use('/', express.static(public))

const defaultTodo = [{
    id: 1,
    subject: 'Eating'
  },
  {
    id: 2,
    subject: 'Loving'
  },
  {
    id: 3,
    subject: 'Playing'
  }
]

function rs() {
  todos = defaultTodo
}

function indexById(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id === todos[i].id) return i
  }
  return -1
}

rs()

app.delete('/api/todo/:id', function (req, res) {
  let userkey = +req.params.id
  todos.splice(indexById(userkey), 1)
  res.end(JSON.stringify(todos))
  rs()
})
app.get('/api/todos', function (req, res) {
  res.end(JSON.stringify(todos))
})
app.post('/api/todo', function (req, res) {
  todos.push(req.body)
  res.end(JSON.stringify(todos))
  rs()
})
app.get('/', function (req, res) {
  res.send('Hello World! Express');
});

const server = app.listen(8081, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("listening at http://", host, port)
})