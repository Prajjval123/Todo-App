// TodoList.js
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getFilteredTodos } from "../redux/selector"; // Import the memoized selector

const TodoList = () => {
  const filteredTodos = useSelector(getFilteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
