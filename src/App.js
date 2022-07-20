import React, { useEffect, useState } from 'react';
import './App.css';
import { listPokemon, getPokemonDataByUrl } from './assets/api';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemon] = useState([]);
  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await listPokemon();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonDataByUrl(pokemon.url);
      });
      const results = await Promise.all(promises);

      setPokemon(results);
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
        <Pokedex pokemonList = {pokemonList} loading = {loading} />
      </div>
    </div>
  );
}

export default App;
