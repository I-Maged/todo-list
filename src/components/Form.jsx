import { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todo/TodoContext';
import AlertContext from '../context/alert/AlertContext';

function Form() {
  const { addTodo, todoToEdit, updateTodo } = useContext(TodoContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  useEffect(() => {
    if (todoToEdit.edit) {
      setText(todoToEdit.todo.title);
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setAlert('Todo cannot be empty');
    } else if (todoToEdit.edit) {
      updateTodo(todoToEdit.todo.id, text);
    } else {
      addTodo(text);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center mt-8 mb-3'>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-[100%]	input input-bordered input-primary mr-3'
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default Form;
