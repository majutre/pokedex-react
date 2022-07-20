import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { listPokemon, getPokemonDataByUrl } from "./assets/api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemon] = useState([]);
  const itemsPerPage = 10;
  const offset = itemsPerPage * page;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await listPokemon(itemsPerPage, offset);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonDataByUrl(pokemon.url);
      });
      const results = await Promise.all(promises);

      setPokemon(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (error) {
      console.log("Error (fetchPokemon): ", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <div>
      <nav>
        <Navbar />
        <div>
          <SearchBar />
        </div>
        <div className="navbar-placeholder"></div>
      </nav>
      <div className="App">
        <Pokedex
          pokemonList={pokemonList}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default App;
