import { React, useState } from 'react';
import Add from './Add';

function Textbox() {
  const [todo, setTodo] = useState(""); 

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  function handleAdd() {
    console.log(todo)
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo)
    })
      .then((r) => r.json())
      .then((s) => console.log(s));
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)}></input>
      <Add onClick={handleAdd()}/>
    </div>
  );
}

export default Textbox;
