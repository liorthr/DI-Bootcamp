// import TodoList from './todo.mjs';
// const todoList = new TodoList()

// todoList.add('Buy chocolate')
// todoList.add('Check home work')
// todoList.add('Meet a colaborator')

// todoList.remove[{0}]
// todoList.remove[{2}]

// todoList.getAll()

// console.log(todoList.getAll())

const TodoList = require('./todo');

const todoList = new TodoList();
todoList.addTask('Buy milk');
todoList.addTask('Do homework');
todoList.addTask('Go for a walk');

todoList.markComplete('Buy milk');
todoList.markComplete('Go for a walk');

todoList.listAllTasks();



