import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

export const TodoContext = createContext();

const initialState = {
  Todos: [],
  complete:[]
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addtoList = (item) => {
    dispatch({
      type: "ADD-ITEM",
      payload: item,
    });
  };

  const addtocomplete = (item) => {
    dispatch({
      type: "ADD-TO-COMPLETE",
      payload: item,
    });
  };
  const clear = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <TodoContext.Provider value={{ state, addtoList,addtocomplete,clear }}>
      {children}
    </TodoContext.Provider>
  );
};

export default AppContext;
