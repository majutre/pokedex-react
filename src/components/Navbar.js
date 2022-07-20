import React from "react";

const Navbar = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div className="navbar-logo-container">
      <img alt="pokeapi-logo" src={logoImg} className="navbar-logo" />
    </div>
  );
};

export default Navbar;
