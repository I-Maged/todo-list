import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa';

function TodoItem({ todo }) {
  const { deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <div className='rounded-lg shadow-xl bg-neutral text-neutral-content flex items-center justify-between px-2 py-3 mb-3'>
      <h2 className='text-xl'>{todo.title}</h2>
      <div className='flex'>
        <button className='btn btn-primary btn-sm mr-2'>{<FaCheck />}</button>
        <button
          onClick={() => editTodo(todo)}
          className='btn btn-primary btn-sm mr-2'
        >
          {<FaEdit />}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='btn btn-primary btn-sm'
        >
          {<FaTimes />}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
