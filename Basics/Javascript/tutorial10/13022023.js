const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');


const TodoApplication = title => {

    this.todos = []
    this.addTodo = function(title) {
        return this.todo.push({title})
    }

    this.displayTodos = function() {
        console.log(this.todos)
    }
}

const app = new TodoApplication()

app.addTodo('Learn javascript')
app.addTodo('Learn react.js')
app.displayTodos()