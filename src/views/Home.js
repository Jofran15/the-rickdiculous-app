import React from "react";

import "../styles/Home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <p>
          Hola has ingreado a esta app para que indages acerca de nuestro
          universo , ojalá encuentres lo que buscas o como sea...
        </p>
        <div className="buttons">
          <Link to='/personajes' >Personajes</Link>
          <Link to='/lugares' >Lugares</Link>
          <Link to='/episodios' >Episodios</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
