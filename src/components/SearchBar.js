import React from "react";
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <div>
      <div className="searchbar-container">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Pesquisar Pokémon" />
        </Form.Group>
      </div>
    </div>
  )
}

export default SearchBar;