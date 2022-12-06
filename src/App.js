import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className='flex flex-col justify-between items-center h-screen font-mono'>
        <Header />
        <main className='container flex-col h-screen px-2 md:max-w-xl'>
          <Form />
          <TodoList />
        </main>
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
