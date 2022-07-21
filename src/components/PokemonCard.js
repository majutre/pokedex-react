import React from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const weightInKg = (pokemon.weight * 0.1).toFixed(1);
  const heightInMeters = (pokemon.height * 0.1).toFixed(1);
  const imageMissing = pokemon.sprites.front_default == null;
  const imagePath = imageMissing ? "./which_pkmn.jpeg" : pokemon.sprites.front_default;
  const extendImage = imageMissing ? " pokemon-card-extend-image" : "";

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pokemon-card">
      <div
        className={
          "pokemon-image-container background-" + pokemon.types[0].type.name
        }
      >
        {console.log(pokemon.sprites.front_default)}
        <img
          alt={pokemon.name}
          src={imagePath}
          className={"pokemon-image" + extendImage}
        />
      </div>
      <div className="pokemon-card-title mt-3">
        <h3>{pokemon.name}</h3>
        <h6># {pokemon.id}</h6>
      </div>
      <div className="pokemon-card-body">
        <div className="pokemon-type">
          {pokemon.types.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  "px-2 pokemon-type-text background-" + item.type.name
                }
              >
                {item.type.name}
              </div>
            );
          })}
        </div>
        <div className="pokemon-aditional-info mt-3">
          <p className="mb-0 mt-1">
            <GiBodyHeight className="mb-1 mx-2" />
            {heightInMeters} m
          </p>
          <p>
            <FaWeightHanging className="mb-1 mx-1" /> {weightInKg} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
