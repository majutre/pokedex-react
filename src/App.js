import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { listPokemon, getPokemonDataByUrl, searchPokemon } from "./assets/api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [notFound, setNotFound] = useState(false);

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
    if (pokemon === '') {
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
      setPokemonList([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  const redirectToPokedex = () => {
    setNotFound(false);
    fetchPokemon();
  }

  return (
    <div className="container">
      <nav>
        <Navbar onClick={redirectToPokedex}/>
        <div>
          <SearchBar onSearch={onSearchHandler} />
        </div>
        <div className="navbar-placeholder"></div>
      </nav>
      {notFound ? (
        <div>
          <div className="alert alert-secondary mt-5">
            Nenhum Pokémon encontrado :(
          </div>
          <button onClick={redirectToPokedex} className="redirect-btn btn">Voltar</button>
        </div>
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
