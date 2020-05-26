import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/brandonchaney/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    let res = await todoApi.get();
    store.commit(
      "todos",
      res.data.data.map((todo) => new Todo(todo))
    );

  }

  addTodoAsync(todoObj) {
    let todo = new Todo(todoObj);
    todoApi
      .post("", todo)
      .then((res) => {
        this.getTodos();
      })
      .catch((e) => console.error(e));
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    console.log(todo)
    if (todo) {
      if (todo.completed == true) {
        todo.completed = false
      }
      else if (todo.completed == false) {
        todo.completed = true
      }
      todoApi.put(todoId, todo)
        .then(res => {
          console.log(res)
          this.getTodos()
        })
    }
    todoApi.put(todoId, todo);
  }

  removeTodoAsync(todoId) {
    todoApi
      .delete(todoId)
      .then((res) => {
        this.getTodos();
      })
      .catch((err) => console.error(err));
  }
}

const todoService = new TodoService();
export default todoService;
