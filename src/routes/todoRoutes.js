
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getTodos, getTodo, createTodoItem, updateTodoItem, deleteTodoItem } = require('../controllers/todoController');


const validateTodo = [
  check('title').notEmpty().withMessage('Title is required'),
  check('description').notEmpty().withMessage('Description is required')
];

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', validateTodo, createTodoItem);
router.put('/:id', validateTodo, updateTodoItem);
router.delete('/:id', deleteTodoItem);

module.exports = router;
