import React, { useContext } from "react";
import { TodoContext } from "./AppContext";

const Complet = () => {
  const {clear,
    state: { complete },
  } = useContext(TodoContext);

  return (
    <div>
      {complete.length > 0 ? (
        complete.map((item) => (
          <div key={item} className="todo-list complete">
            <p>{item}</p>
          </div>
        ))
      ) : (
        <p className="complete-empty">EMPTY LIST</p>
      )}
{
  complete.length > 0 &&
      <button onClick={()=> clear()} className="clear">Clear</button>
}
    </div>
  );
};

export default Complet;
