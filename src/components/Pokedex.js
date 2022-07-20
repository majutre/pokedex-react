import React from "react";

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
          <div className="pokedex-grid"></div>
        )}
      </div>
    </div>
  )
}

export default Pokedex;