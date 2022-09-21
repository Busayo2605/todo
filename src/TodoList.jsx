import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TodoContext } from "./AppContext";

const TodoList = ({ todo }) => {
  const { addtocomplete } = useContext(TodoContext);

  const handleComplete = (item) => {
    addtocomplete(item);
  };
  return (
    <div className="todo-list">
      <p >{todo.title}</p>

      <AiOutlineClose
        onClick={() => handleComplete(todo)}
        style={{ color: "red", fontWeight: "bolder", fontSize: "larger" }}
      />
    </div>
  );
};

export default TodoList;
