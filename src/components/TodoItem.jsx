import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa';

function TodoItem({ todo }) {
  return (
    <div className='rounded-lg shadow-xl bg-neutral text-neutral-content flex justify-between p-3 mb-3'>
      <h2 className='text-xl'>{todo.title}</h2>
      <div className='flex'>
        <button className='btn btn-primary btn-sm mr-2'>{<FaCheck />}</button>
        <button className='btn btn-primary btn-sm mr-2'>{<FaEdit />}</button>
        <button className='btn btn-primary btn-sm'>{<FaTimes />}</button>
      </div>
    </div>
  );
}

export default TodoItem;