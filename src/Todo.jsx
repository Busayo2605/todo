import React, { useRef, useEffect, useState, useContext } from "react";
import { TodoContext } from "./AppContext";

const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [error, seterror] = useState("");
  const {
    addtoList,
  } = useContext(TodoContext);

  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      addtoList(inputValue);
    } else {
      seterror("Use the input field");
      setTimeout(() => {
        seterror("");
      }, 2000);
    }
    setinputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={InputRef}
        placeholder="Add To List"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        type="text"
      />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Todo;
