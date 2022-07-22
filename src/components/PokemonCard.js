import React, { useState } from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import PokemonProfileModal from "./PokemonProfileModal";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const [show, setShow] = useState(false)
  const weightInKg = (pokemon.weight * 0.1).toFixed(1);
  const heightInMeters = (pokemon.height * 0.1).toFixed(1);
  const imageMissing = pokemon.sprites.front_default == null;
  const imagePath = imageMissing ? "./which_pkmn.jpeg" : pokemon.sprites.front_default;
  const extendImage = imageMissing ? " pokemon-card-extend-image" : "";

  // const onButtonClickHandler = () => {
  //   render(<PokemonProfileModal />) 
  // }

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pokemon-card">
        <h6 className="text-end mb-3"># {pokemon.id} </h6>
      <div
        className={
          "pokemon-image-container background-" + pokemon.types[0].type.name
        }
      >

        <img
          alt={pokemon.name}
          src={imagePath}
          className={"pokemon-image" + extendImage}
        />
      </div>
      <div className="pokemon-card-title mt-3">
        <h3>{pokemon.name}</h3>
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
            <FaWeightHanging className="mb-1 mx-1" /> 
            {weightInKg} kg
          </p>
        </div>

        <button onClick={() => setShow(true)}>CLICK ME</button>
        <PokemonProfileModal show={show} onHide={() => setShow(false)} />
      </div>
    </div>
  );
};

export default PokemonCard;
