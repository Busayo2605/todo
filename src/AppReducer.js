import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      return {
        ...state,
        Todos: [...state.Todos, { title: action.payload, id: uuidv4() }],
      };
    case "ADD-TO-COMPLETE":
      return {
        ...state,
        Todos: state.Todos.filter((a) => a.id !== action.payload.id),
        complete: [
          ...state.complete,
          {...state.Todos.filter((a) => a === action.payload)},
        ],
      };

    case "CLEAR":
      return {
        complete: [],
      };

    default:
      return state;
  }
};

export default AppReducer;
