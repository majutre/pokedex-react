import React from "react";
import Modal from "react-bootstrap/Modal";
import { GiMightyForce, GiSwordsPower } from "react-icons/gi";

function PokemonProfileModal(props) {
  if (!props.show) {
    return null;
  }
  const pokemon = props.pokemon;
  const imageMissing = pokemon.sprites.front_shiny == null;
  const imagePath = imageMissing
    ? "./which_pkmn.jpeg"
    : pokemon.sprites.front_shiny;
  const extendImage = imageMissing ? " pokemon-card-extend-image" : "";

  return (
    <Modal {...props} size="sm" backdrop={true} centered>
      <div
        className={
          "pokemon-modal-card pokemon-image-container shadow-0 background-" +
          pokemon.types[0].type.name
        }
        onClick={(e) => e.stopPropagation()}
      >
        <Modal.Header closeButton className="modal-card-header">
          <Modal.Title
            className="modal-card-title"
            id="contained-modal-title-vcenter"
          >
            <span>{pokemon.name}</span>
          </Modal.Title>
        </Modal.Header>
        <div className="modal-card-image text-align-center mb-0">
          <img
            alt={pokemon.name}
            src={imagePath}
            className="pokemon-image"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "./which_pkmn.jpeg";
            }}
          />
          {imageMissing ? (
            ""
          ) : (
            <p className="my-0">
              <em>Shiny form</em>
            </p>
          )}
        </div>
        <div className="pokemon-card-body mt-0">
          <div className="pokemon-type mb-4">
            {pokemon.types.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    "px-2 pokemon-type-text badge-background-" + item.type.name
                  }
                >
                  {item.type.name}
                </div>
              );
            })}
          </div>
          <div className="pokemon-modal-info mt-3 row">
            <div className="abilities col-6">
              <h6><GiMightyForce className="mb-2" /> Habilidades</h6>
                {pokemon.abilities.slice(0, 5).map((item, index) => {
                    return (
                      <div className="pokemon-abilities" key={index}>
                        {item.ability.name}
                      </div>
                    );
                })}
            </div>
            <div className="abilities col-6 overflow-hidden">
              <h6><GiSwordsPower className="mb-1" /> Ataques</h6>
                {pokemon.moves.slice(0, 5).map((item, index) => {
                    return (
                      <div className="pokemon-abilities" key={index}>
                        {item.move.name}
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PokemonProfileModal;
{
  /* 
<Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {pokemon.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */
}
