//create and export routes
const express = require('express')
const router = express.Router();
const todos = require('../data/dataToDo.js')
//function with controllers

router.get('/todos', (req, res) => {
    res.json(todos);
});

router.post('/todos', (req, res) => {
    const { text } = req.body;
    const newTodo = {
        id: todos.length + 1,
        text,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos[todoIndex].text = text;
        res.json(todos[todoIndex]);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});