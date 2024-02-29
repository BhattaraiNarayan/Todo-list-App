const todoLists = document.querySelector(".todoLists");        // Get the todo list from the HTML
const listValue = document.querySelector(".todoValue");         // Get the value of the todo list from the HTML
let todoListValue = []; // Initialize todoListValue as an empty array

const getTodoListLocalStorage = () => {                                 // Get the todo list from local storage
  return JSON.parse(localStorage.getItem("todoList")) || [];
};

const addTodoListLocalStorage = (todo) => {
  return localStorage.setItem("todoList", JSON.stringify(todo)); // Save the todo list to local storage
};

const showTodoList = () => {
  todoListValue = getTodoListLocalStorage();             // Get the todo list from local storage
  todoListValue.forEach((todo) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = todo;
    todoLists.append(liElement);
  });
};

const removeTodoList = (e) => {
let currentTodo=e.target;
let updatedTodoList=todoListValue.filter(
(curTodoValue)=>curTodoValue!==currentTodo.textContent);
addTodoListLocalStorage(updatedTodoList);
currentTodo.remove();
};

const addTodoList = (e) => {
  e.preventDefault();

  todoListValue = getTodoListLocalStorage();             // Get the todo list from local storage
  let newTodo = listValue.value.trim();                    // Get the value of the input field

listValue.value = "";                           // Clear the input field

  if (newTodo.length !== 0 && !todoListValue.includes(newTodo)) { // Check if the input field is empty or the todo list already exists
    todoListValue.push(newTodo);
    addTodoListLocalStorage(todoListValue); // Save the todo list to local storage
    const liElement = document.createElement("li");
    liElement.innerHTML = newTodo;
    todoLists.append(liElement);
  }
};

showTodoList();                     // Show the todo list

document.querySelector(".btn").addEventListener("click", (e) => {       // Add event listener to the button
  addTodoList(e);   
});


todoLists.addEventListener("click", (e) => removeTodoList(e)); // Add event listener to the todo list{


