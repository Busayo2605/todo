const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      return {
        ...state,
        Todos: [...state.Todos, action.payload],
      };
    case "ADD-TO-COMPLETE":
      return {
        ...state,
        complete: [
          ...state.complete,
          state.Todos.filter((a) => a === action.payload),
        ],
        Todos: state.Todos.filter((a) => a !== action.payload),
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
