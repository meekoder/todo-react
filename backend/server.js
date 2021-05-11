const express = require('express');
const parser = require('body-parser');
const db = require('./db/queries');

const app = express();

// allows express to serve static files
app.use(express.static('public'));

// parses request bodies
app.use(parser.json());

app.get('/api/todos', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.send(todos);
    })
    .catch((err) => console.log(err));
});

app.post('/api/todos', (req, res) => {
  db.addTodo(req.body)
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => console.log(err));
});

app.put('/api/todos', (req, res) => {
  db.completeTodo(req.body)
    .then(() => {
      res.send('todo deleted!');
    })
    .catch((err) => console.log(err));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
