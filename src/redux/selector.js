// selectors.js
import { createSelector } from "reselect";

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;
const getSearchTerm = (state) => state.searchTerm.toLowerCase();

export const getFilteredTodos = createSelector(
  [getTodos, getFilter, getSearchTerm],
  (todos, filter, searchTerm) => {
    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  }
);
