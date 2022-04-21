import { action, makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'Learn and implement mobX', completed: false },
    { id: 2, title: 'Add and practise Canvas', completed: false },
    { id: 3, title: 'Learn libraries Conva.js ect Learn libraries Conva.js ect', completed: false }
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
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
        console.log('json: ', json)
        this.todos = [...this.todos, json];
      }))
  }

}

export default new Todo();
