import todo from '../../store/todo';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import s from "./style.module.scss";

const TodoHeader = observer(() => {

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={s.header}>
      <input className={s.headerInput} placeholder="Title..." value={inputValue} onChange={event => setInputValue(event.target.value)} />
      <button className={s.addBtn} onClick={() => todo.addTodo(inputValue)}>Add todo</button>
      <button className={s.addBtn + " " + s.fetchBtn} onClick={() => todo.fetchTodos()}>Fetch</button>
    </div>
  );
})

export default TodoHeader;
