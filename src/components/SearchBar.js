import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TbPokeball } from "react-icons/tb";

const SearchBar = (props) => {
  const [search, setSearch] = useState();
  const {onSearch} = props

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    if(event.target.value.length === 0) {
      onSearch(undefined);
    }
  }

  const onButtonClickHandler = () => {
    onSearch(search);
  }

  return (
    <div>
      <div className="searchbar-container">
        <Form.Group>
          <Form.Control type="text" placeholder="Pesquisar Pokémon" onChange={onChangeHandler}/>
        </Form.Group>
        <Button onClick={onButtonClickHandler} className="searchbar-btn shadow-none" >Buscar <TbPokeball className="red" /></Button>
      </div>
    </div>
  )
}

export default SearchBar;
