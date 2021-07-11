const todo = mainScreen.querySelector(".todo");
const todoList = todo.querySelector(".todo-list");
const todoForm = todo.querySelector(".todo-form");
const todoInput = todoForm.querySelector(".todo-input");
const TODOS_KEY = "todos";

let todoArray = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const list = event.target.parentElement;
  list.remove();
  todoArray = todoArray.filter((Todo) => Todo.id !== parseInt(list.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  todoList.appendChild(list);
  list.appendChild(span);
  list.appendChild(deleteBtn);
  list.id = newTodo.id;
  span.innerText = newTodo.text;
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArray.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todoArray = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
