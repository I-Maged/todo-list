import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useContext(TodoContext);
  console.log(todos);

  return (
    <div className='md:max-w-[65%] mx-auto px-2'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
