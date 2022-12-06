import TodoItem from './TodoItem';

function TodoList() {
  const todos = [
    { id: 1, title: 'Eat Breakfast!', completed: false },
    { id: 2, title: 'wash dishes!', completed: false },
    { id: 3, title: 'code!', completed: false },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
