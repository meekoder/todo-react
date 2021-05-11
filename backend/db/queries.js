const db = require('./client');

const getTodos = () => {
  return db.query("SELECT * FROM todos")
    .then((r) => r.rows[0]);
};

module.exports = {
  getTodos,
};
