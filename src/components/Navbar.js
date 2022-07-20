import React from "react";

const Navbar = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
