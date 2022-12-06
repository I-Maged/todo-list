import { createContext, useReducer } from 'react';
import todoReducer from './TodoReducer';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, title: 'Eat Breakfast!', completed: false },
      { id: 2, title: 'wash dishes!', completed: false },
      { id: 3, title: 'code!', completed: false },
    ],
    todoToEdit: {
      todo: {},
      edit: false,
    },
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    const newTodo = {
      id: 5,
      title: text,
      completed: false,
    };

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  const editTodo = (todo) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: todo,
    });
  };
  const updateTodo = (id, text) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        id,
        text,
      },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        todoToEdit: state.todoToEdit,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
