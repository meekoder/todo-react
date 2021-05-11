const db = require('./client');

const getTodos = () => {
  return db.query("SELECT * FROM todos")
    .then((r) => r.rows);
};

const addTodo = (todo) => {
  return db.query("INSERT INTO todos (todo) VALUES ($1)", [todo.todo]);
};

const completeTodo = (todo) => {
  return db.query("UPDATE todos SET completed = ($1) WHERE id = ($2)", [todo.completed, todo.id]);
};

const editTodo = (todo) => {
  return db.query("UPDATE todos SET todo = ($1) WHERE id = ($2)" , [todo.todo, todo.id]);
};

module.exports = {
  getTodos,
  addTodo,
  completeTodo,
  editTodo,
};
