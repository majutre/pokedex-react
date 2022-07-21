import React from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemonList, loading, page, totalPages, setPage } = props;
  const pokedexLogoImg = "/pokedexlogo.png";

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <img alt="pokedex-logo" src={pokedexLogoImg} className="pokedex-logo" />
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
          <div className="d-flex row">
            {pokemonList &&
              pokemonList.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon}/>;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
