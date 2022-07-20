import React, { useEffect, useState } from 'react';
import './App.css';
import { listPokemon } from './assets/api';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemon] = useState([]);
  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const result = await listPokemon();
      setPokemon(result);
      setLoading(false);
    } catch (error) {
      console.log("Error (fetchPokemon): ", error);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Pokedex pokemonList = {pokemonList.results} loading = {loading} />
      </div>
    </div>
  );
}

export default App;
