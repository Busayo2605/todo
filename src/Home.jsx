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

      {Todos.length > 0?
        Todos.map((todo) => <TodoList key={todo.id} todo={todo} />)
      :
      <p className="complete-empty">ADD TO LIST</p>
      }
    </div>
  );
};

export default Home;
