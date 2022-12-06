import { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center my-10'>
      <input
        type='text'
        placeholder='Add Todo'
        onChange={handleTextChange}
        className='min-w-[50%]	input input-bordered input-primary mr-3'
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default Form;
