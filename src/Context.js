import { React, createContext, useState, useEffect } from 'react';

const Context = createContext();

export const Provider = function({children}) {
  const [todos, setTodos] = useState([]);

  useEffect(function() {
    function getTodos() {
      fetch('/api/todos')
        .then((r) => r.json())
        .then((todos) => setTodos(todos))
        .catch((err) => console.log(err));
    }
    getTodos();
  }, []);

  return (
    <Context.Provider value={{
      todos,
      setTodos
    }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
