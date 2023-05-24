const Todo = require('../models/Todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single todo
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.title = title;
    todo.description = description;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
