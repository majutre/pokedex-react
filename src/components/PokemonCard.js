import React from "react";

const PokemonCard = (props) => {
  const { pokemon } = props;
  let pokemonWeightInKg = (pokemon.weight * 0.1).toFixed(1);
  let pokemonHeightInMeters = (pokemon.height * 0.1).toFixed(1);

  return(
    <div className="pokemon-card">
      <div className="pokemon-image-container">  
        <img 
          alt={pokemon.name} 
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="pokemon-card-title">
        <h3>{pokemon.name}</h3>
        <span># {pokemon.id}</span>
      </div>
      <div className="pokemon-card-body">
        <div className="pokemon-type">
          {pokemon.types.map((item, index) => {
            return (
              <div key={index} className="pokemon-type-text">{item.type.name}</div>
            )
          })}
        </div>
        <div className="pokemon-aditional-info">
            <p>altura: {pokemonHeightInMeters} m</p>
            <p>peso: {pokemonWeightInKg} kg</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;