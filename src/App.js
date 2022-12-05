import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className='flex flex-col justify-between items-center h-screen font-mono'>
      <Header />
      <main className='container flex-col h-screen'>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
