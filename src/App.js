import Header from './components/Header';

function App() {
  return (
    <div className='flex flex-col justify-between items-center h-screen font-mono'>
      <Header />
      <h1 className='text-4xl'>
        Garlic bread with cheese: What the science tells us
      </h1>
      <article className='container'>
        <p className='text-primary'>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
}

export default App;
