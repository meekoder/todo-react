import { React, useState, useContext } from 'react';
import Context from '../Context';

function Textbox() {
  const [todo, setTodo] = useState(""); 
  const { todos, setTodos } = useContext(Context);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleAdd() {
    const obj = { todo };
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then((r) => {
        r.json();
        setTodos([...todos, obj]);
        setTodo('');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={todo}></input>
      <button type="submit" onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default Textbox;
