function Form() {
  return (
    <form className='flex justify-center my-10'>
      <input
        type='text'
        placeholder='Add Todo'
        className='input input-bordered input-primary mr-3'
      />
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
}

export default Form;
