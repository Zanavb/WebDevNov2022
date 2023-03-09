const DeleteItem = document.querySelector('.delete-item')
const addTodo1 = document.querySelector('.btn.btn-danger')

const [addTodo, deleteAllTodos] = document.querySelectorAll('button')

const FirstForm = document.querySelector('.card-body > #todo-form')

const TodoItem = document.querySelector('.list-group-item')
const clonedOfTodoItem1 = TodoItem.cloneNode(true)
const clonedOfTodoItem2 = TodoItem.cloneNode()
console.log(clonedOfTodoItem1.hadChildNodes(), clonedOfTodoItem2.hasChildNodes())
clonedOfTodoItem1.firstChild.textContent="Javascript"

console.log(clonedOfTodoItem1.childNodes[0].textContent)
ListOfTodos.appendChild(clonedOfTodoItem1)