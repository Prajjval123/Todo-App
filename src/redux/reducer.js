// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  // LOAD_TODOS_FROM_LOCAL_STORAGE,
 } from './actionTypes';
 
 const initialState = { todos: [], filter: 'ALL', searchTerm: '' };
 
 // Helper function to save todos to local storage
 const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
 };
 
 // Helper function to load todos from local storage
 const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
 };
 
 const todoReducer = (state = initialState, action) => {
  let newState;
 
  switch (action.type) {
     case ADD_TODO:
       newState = {
         ...state,
         todos: [...state.todos, { text: action.payload.text, completed: false }],
       };
       break;
 
     case TOGGLE_TODO:
       newState = {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
         ),
       };
       break;
 
     case REMOVE_TODO:
       newState = {
         ...state,
         todos: state.todos.filter((todo) => todo.id !== action.payload.id),
       };
       break;
 
     case MARK_COMPLETED:
       newState = {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.payload.id ? { ...todo, completed: true } : todo
         ),
       };
       break;
 
     case MARK_INCOMPLETE:
       newState = {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.payload.id ? { ...todo, completed: false } : todo
         ),
       };
       break;
 
     case FILTER_TODOS:
       newState = {
         ...state,
         filter: action.payload.filter,
       };
       break;
 
     case UPDATE_SEARCH_TERM:
       newState = {
         ...state,
         searchTerm: action.payload.searchTerm,
       };
       break;
 
     case MARK_ALL_COMPLETED:
       newState = {
         ...state,
         todos: state.todos.map((todo) => ({ ...todo, completed: true })),
       };
       break;
 
    //  case LOAD_TODOS_FROM_LOCAL_STORAGE:
    //    newState = {
    //      ...state,
    //      todos: action.payload,
    //    };
    //    break;
 
     default:
       return state;
  }
 
  // Save the updated state to local storage
  saveTodosToLocalStorage(newState.todos);
 
  return newState;
 };
 
 export default todoReducer;
 