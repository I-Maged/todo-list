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
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.title = action.payload.text;
            }
            return todo;
          }),
          edit: false,
        },
      };
    case 'COMPLETED_STATUS':
      return {
        ...state,
        todoStatus: {
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.completed = action.payload.status;
            }
            return todo;
          }),
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
