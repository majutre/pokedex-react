import React from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemonList, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
      </div>
      <div>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <div className="pokedex-grid">
            { pokemonList && pokemonList.map(
              (pokemon, index) => {
                return (
                  <PokemonCard 
                    key={index} 
                    pokemon={pokemon} 
                  />
                )
              }
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Pokedex;