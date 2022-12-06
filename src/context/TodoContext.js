import { v4 as uuidv4 } from 'uuid';
import { createContext, useReducer } from 'react';
import todoReducer from './TodoReducer';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, title: 'Eat Breakfast!', completed: false },
      { id: 11, title: 'wash dishes!', completed: true },
      { id: 12, title: 'code!', completed: false },
    ],
    todoToEdit: {
      todo: {},
      edit: false,
    },
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
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

  const completeTodo = (id) => {
    dispatch({
      type: 'COMPLETED_STATUS',
      payload: id,
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
        completeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
