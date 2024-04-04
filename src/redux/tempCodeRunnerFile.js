const loadTodosFromLocalStorage = () => {
 const todos = localStorage.getItem('todos');
 return todos ? JSON.parse(todos) : [];
};