import { React, useState } from 'react';

function Todo({ todo }) {
  const [currTodo, setCurrTodo] = useState(todo);

  function handleCompleted() {
    const obj = {...todo, completed: !currTodo.completed};
    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(() => setCurrTodo(obj))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <p className={currTodo.completed ? "completed" : ""} onClick={handleCompleted}>{currTodo.todo}</p>
    </div>
  );
}

export default Todo;
