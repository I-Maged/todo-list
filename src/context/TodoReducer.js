const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todoToEdit: {
          todo: action.payload,
          edit: true,
        },
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todoToEdit: {
          todos: state.todos.forEach((todo) => {
            if (todo.id === action.payload.id) {
              todo.title = action.payload.text;
            }
          }),
          edit: false,
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
