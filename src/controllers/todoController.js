
const { validationResult } = require('express-validator');
const { Todo, getAllTodos, getTodoById, createTodo, updateTodoById, deleteTodoById } = require('../models/todoModel');

function getTodos(req, res) {
  res.json(getAllTodos());
}



function getTodo(req, res) {
  const todo = getTodoById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
}

function createTodoItem(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description } = req.body;
  const newTodo = new Todo(Date.now().toString(), title, description);
  createTodo(newTodo);
  res.status(201).json(newTodo);
}

function updateTodoItem(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { title, description } = req.body;
  const existingTodo = getTodoById(id);
  if (!existingTodo) {
    return res.status(404).json({ message: 'Todo not found' });
  }


  const updatedTodo = new Todo(id, title, description);
  updateTodoById(id, updatedTodo);
  res.json(updatedTodo);
}

function deleteTodoItem(req, res) {
  const { id } = req.params;
  const existingTodo = getTodoById(id);
  if (!existingTodo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  deleteTodoById(id);
  res.status(204).send();
}

module.exports = {
  getTodos,
  getTodo,
  createTodoItem,
  updateTodoItem,
  deleteTodoItem
};
