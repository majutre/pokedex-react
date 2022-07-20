import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { listPokemon, getPokemonDataByUrl, searchPokemon } from "./assets/api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
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

      setPokemonList(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("Error (fetchPokemon): ", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (pokemon == '') {
      fetchPokemon();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    console.log(result);
    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemonList([result])
    }
    setLoading(false)
  };

  return (
    <div>
      <nav>
        <Navbar />
        <div>
          <SearchBar onSearch={onSearchHandler} />
        </div>
        <div className="navbar-placeholder"></div>
      </nav>
      {notFound ? (
        <div> AAAAAA </div>
      ) : (
        <Pokedex
          pokemonList={pokemonList}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default App;
