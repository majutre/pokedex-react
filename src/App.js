import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
