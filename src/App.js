import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Alert from './components/Alert';
import { TodoProvider } from './context/todo/TodoContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <TodoProvider>
      <AlertProvider>
        <div className='flex flex-col justify-between items-center h-screen font-mono'>
          <Header />
          <main className='container flex-col h-screen px-2 md:max-w-xl'>
            <Form />
            <Alert />
            <TodoList />
          </main>
          <Footer />
        </div>
      </AlertProvider>
    </TodoProvider>
  );
}

export default App;
