import React from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const Pokedex = (props) => {
  const { pokemonList, loading, page, totalPages, setPage } = props;
  const pokedexLogoImg = "https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67";

  const onFirstPageClickHandler = () => {
    if (page + 1 !== 1) {
      setPage(0);
    }
  };
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
  const onLastPageClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(totalPages - 1);
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
          onLastPageClick={onLastPageClickHandler}
          onFirstPageClick={onFirstPageClickHandler}
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
