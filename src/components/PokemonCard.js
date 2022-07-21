import React from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

const PokemonCard = (props) => {
  const { pokemon } = props;
  let pokemonWeightInKg = (pokemon.weight * 0.1).toFixed(1);
  let pokemonHeightInMeters = (pokemon.height * 0.1).toFixed(1);

  return (
    <div className="pokemon-card"  className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
              <div key={index} className="pokemon-type-text">
                {item.type.name}
              </div>
            );
          })}
        </div>
        <div className="pokemon-aditional-info">
          <p className="mb-0 mt-1"><GiBodyHeight className="mb-1 mx-2"/>{pokemonHeightInMeters} m</p>
          <p><FaWeightHanging className="mb-1 mx-1"/> {pokemonWeightInKg} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
