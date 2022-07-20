import React from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemonList, loading, page, totalPages, setPage } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page-1)
    }
  }
  const onRightClickHandler = () => {
    if (page+1 !== totalPages) {
      setPage(page+1)
    }
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      <div className="pokedex-body">
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