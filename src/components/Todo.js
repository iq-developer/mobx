import '../App.css';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite';

const Todo = observer(() => {
  return (
    <div className='todos'>
      {/* <button onClick={() => todo.fetchTodos()}>Fetch todo</button> // just to test asyncronic query to backend */}
      <div className='add-todo'>

      </div>
      <div class="header">
        <input className="header-input" placeholder="Title..." />
        <button className="add-btn">Add todo</button>
      </div>
      {todo.todos.map((item) =>
        <div className="todo" key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() => todo.toggleTodo(item.id)} />
          <span className={item.completed ? "completed" : ""}>{item.title}</span>
          <button className="x" onClick={() => todo.removeTodo(item.id)}>x</button>
        </div>
      )}
    </div>
  );
})

export default Todo;
