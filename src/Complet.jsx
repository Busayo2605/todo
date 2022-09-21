import React, { useContext } from "react";
import { TodoContext } from "./AppContext";

const Complet = () => {
  const {
    clear,
    state: { complete },
  } = useContext(TodoContext);

  return (
    <div>
      {complete.length > 0 ? (
        complete.map((item) => (
          <div key={item[0].id} className="todo-list complete">
            <p key={item.id}>{item[0].title}</p>
          </div>
        ))
      ) : (
        <p className="complete-empty">EMPTY LIST</p>
      )}
      {complete.length > 0 && (
        <button onClick={() => clear()} className="clear">
          Clear
        </button>
      )}
    </div>
  );
};

export default Complet;
