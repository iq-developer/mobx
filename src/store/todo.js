import { action, makeAutoObservable } from 'mobx';
import todoData from './todoData';

class Todo {

  todos = todoData;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push({
      id: this.todos.length + 1,
      title: title,
      completed: false
    });
  }

  removeTodo(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  toggleTodo(id) {
    const todo = this.todos.find((item) => item.id === id);
    todo.completed = !todo.completed;
  }

  fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.todos.length + 1}`)
      .then(response => response.json())
      .then(action(json => {
        this.todos = [...this.todos, json];
      }))
  }

}

export default new Todo();
