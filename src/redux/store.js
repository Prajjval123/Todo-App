// store.js
import { createStore } from "redux";
import todoReducer from "./reducer";

// Function to load the entire state from local storage
const loadStateFromLocalStorage = () => {
  const state = localStorage.getItem("state");
  return state ? JSON.parse(state) : undefined;
};

// Load the entire state from local storage and use it as the initial state
const persistedState = loadStateFromLocalStorage();

// Create the Redux store with the persisted state
const store = createStore(todoReducer, persistedState);

// Subscribe to store changes and save the entire state to local storage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});

export default store;
