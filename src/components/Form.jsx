import { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/TodoContext';

function Form() {
  const { addTodo, todoToEdit, updateTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  useEffect(() => {
    if (todoToEdit.edit === true) {
      setText(todoToEdit.todo.title);
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit.edit === true) {
      updateTodo(todoToEdit.todo.id, text);
    } else {
      addTodo(text);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center my-10'>
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
