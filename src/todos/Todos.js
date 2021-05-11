import { React, useContext } from 'react';
import Context from '../Context';
import Todo from './Todo';

function Todos() {
  const { todos } = useContext(Context);

  return (
    <div>
      {todos.map((todo) => <Todo key={todo.id} todo={todo.todo} />)}
    </div>
  );
}

export default Todos;
