const db = require('./client');

const getTodos = () => {
  return db.query("SELECT * FROM todos")
    .then((r) => r.rows[0]);
};

const addTodo = (todo) => {
  return db.query("INSERT INTO todos (todo) VALUES ($1)", [todo.todo]);
};

module.exports = {
  getTodos,
  addTodo,
};
