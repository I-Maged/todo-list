import { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function Form() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    // console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center my-10'>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleTextChange}
        className='w-[100%]	input input-bordered input-primary mr-3'
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default Form;
