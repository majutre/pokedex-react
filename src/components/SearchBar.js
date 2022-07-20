import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PokemonCard from "./PokemonCard";
import { searchPokemon } from "../assets/api";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result)
  }

  return (
    <div>
      <div className="searchbar-container">
        <Form.Group>
          <Form.Control type="text" placeholder="Pesquisar Pokémon" onChange={onChangeHandler}/>
        </Form.Group>
        <Button onClick={onButtonClickHandler}>asdsadas</Button>
      </div>
      {pokemon ? (
        <div>
          <PokemonCard pokemon={pokemon}/>
        </div>
      ) : null
      }
    </div>
  )
}

export default SearchBar;