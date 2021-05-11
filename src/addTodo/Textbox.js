import { React, useState } from 'react';

function Textbox() {
  const [todo, setTodo] = useState(""); 

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  function handleAdd(e) {
    e.preventDefault();
    console.log(todo)
    const obj = { todo };
    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then((r) => r.json())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)}></input>
      <button type="submit" onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default Textbox;
