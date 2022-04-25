import todo from "../../store/todo";
import { observer } from 'mobx-react-lite';
import s from "./style.module.scss";

const Todo = observer(() => {
  return (
    <>
      {todo.todos.map((item) =>
        <div className={s.todo} key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() => todo.toggleTodo(item.id)} />
          <span className={item.completed ? s.completed : ""}>{item.title}</span>
          <button className={s.x} onClick={() => todo.removeTodo(item.id)}>x</button>
        </div>
      )}
    </>
  );
})

export default Todo;
