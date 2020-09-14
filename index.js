// TODO list application
// REST api that keeps a todo list in memory
// CRUD functions to manipulate data

const express = require('express')
const TodoList = require('./model/todo')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json())

let todoManager = new TodoList();

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/list', async (req, res) => {
  res.send(todoManager.getList())
})

app.post('/list', async (req, res) => {
  const item = req.body;
  console.log(item)
  res.send(todoManager.addItemToList(item))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})