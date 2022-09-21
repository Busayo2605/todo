import React,{useContext} from "react";
import { TodoContext } from "./AppContext";
import Todo from "./Todo";
import TodoList from "./TodoList";

const Home = () => {
    const {
        state: { Todos },
      } = useContext(TodoContext);
    
  return (
    <div>
      <Todo />

      {Todos.length > 0 &&
        Todos.map((todo) => <TodoList key={todo} todo={todo} />)}
    </div>
  );
};

export default Home;
