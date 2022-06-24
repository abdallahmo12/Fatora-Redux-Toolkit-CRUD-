import './App.css';
import Items from './components/Items';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src='logo.png' alt='logo' />
        <h1 >Fatora</h1>
      </div>
      <Items />
      <Personal />
    </div>
  );
}

export default App;
