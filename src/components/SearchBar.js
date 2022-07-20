import React from "react";
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  const onChangeHandler = (event) => {
    console.log('poke: ', event.target.value);
  }
  return (
    <div>
      <div className="searchbar-container">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Pesquisar Pokémon" onChange={onChangeHandler}/>
        </Form.Group>
      </div>
    </div>
  )
}

export default SearchBar;