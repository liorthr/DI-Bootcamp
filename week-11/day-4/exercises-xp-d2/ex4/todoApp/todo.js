// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     add(todo) {
//         this.todos.push(todo);
//     }

//     remove(id) {
//         this.todos = this.todos.filter(todo => todo.id !== id);
//     }

//     getAll() {
//         return this.todos;
//     }
// }

// export default TodoList;

class TodoList{
    constructor() {
        this.tasks = {};
    }
    addTask (name) {
        this.tasks[name] = false;
    }
    markComplete (name) {
        this.tasks[name] = true;
    }
    listAllTasks () {
        console.log(this.tasks);
    }
}

module.exports = TodoList;
