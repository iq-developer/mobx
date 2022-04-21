import '../App.css';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

const TodoHeader = observer(() => {

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="header">
      <input className="header-input" placeholder="Title..." value={inputValue} onChange={event => setInputValue(event.target.value)} />
      <button className="add-btn" onClick={() => todo.addTodo(inputValue)}>Add todo</button>
      {/* <button className="add-btn" onClick={() => todo.fetchTodos()}>Fetch todo</button> // just to test asyncronic query to backend */}
    </div>
  );
})

export default TodoHeader;
