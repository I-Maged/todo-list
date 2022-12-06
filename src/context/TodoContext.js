import { createContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Eat Breakfast!', completed: false },
    { id: 2, title: 'wash dishes!', completed: false },
    { id: 3, title: 'code!', completed: false },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
