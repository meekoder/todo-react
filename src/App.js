import logo from './logo.svg';
import './App.css';
import Textbox from './addTodo/Textbox';
import Todos from './todos/Todos';

function App() {
  return (
    <div>
      <Textbox />
      <Todos />
    </div>
  );
}

export default App;
