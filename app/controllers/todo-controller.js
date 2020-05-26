import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let todos = store.State.todos;
  let template = "";
  todos.forEach((todo) => (template += todo.Template));
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todoObj = {
      description: form.newTodo.value,
      completed: false,
    }
    TodoService.addTodoAsync(todoObj);
    form.reset();
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}