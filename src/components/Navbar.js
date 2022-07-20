import React from "react";
import SearchBar from "./SearchBar";


const Navbar = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div className="navbar-logo-container">
        <img alt="pokeapi-logo" src={logoImg} className="navbar-logo" />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="navbar-placeholder"></div>
    </nav>
  );
};

export default Navbar;
