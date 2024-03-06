
let todos = [];

class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

function getAllTodos() {
  return todos;
}

function getTodoById(id) {
  return todos.find(todo => todo.id === id);
}

function createTodo(todo) {
  todos.push(todo);
  return todo;
}

function updateTodoById(id, updatedTodo) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = updatedTodo;
    return updatedTodo;
  }
  return null;
}

function deleteTodoById(id) {
  todos = todos.filter(todo => todo.id !== id);
}

module.exports = {
  Todo,
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById
};
