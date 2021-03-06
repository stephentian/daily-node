const M = require('./database/mongo.js')
const m = new M()
const defaultTodo = [{
        id: 1,
        subject: 'server Eating'
    },
    {
        id: 2,
        subject: 'server Loving'
    },
    {
        id: 3,
        subject: 'server Playing'
    }
]

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

let todos = []
const public = path.join(__dirname, '/')
app.use('/', express.static(public))

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

app.delete('/api/todo/:id', function(req, res) {
    let userkey = +req.params.id
    todos.splice(indexById(userkey), 1)
    res.end(JSON.stringify(todos))
    // rs()
})
app.get('/api/todos', function(req, res) {
    // const mongotodos = await m.allDoc()
    // res.end(JSON.stringify(mongotodos))
    res.end(JSON.stringify(todos))
})
app.post('/api/todo', function(req, res) {
    todos.push(req.body)
    console.log(req.body)
    res.end(JSON.stringify(todos))
    rs()
})
// app.get('/', function (req, res) {
//   res.send('Hello World! Express');
// });

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port
    console.log("listening at http://", host, port)
})