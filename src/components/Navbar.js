import React, { useContext } from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          alt="pokeapi-logo"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          className="navbar-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;