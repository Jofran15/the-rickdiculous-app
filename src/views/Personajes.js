import React, { Component } from "react";
import Personaje from "../components/Personaje";
import axios from "axios";
import "../styles/Personajes.css"

class Personajes extends Component {
  state = {
    personajes: [],
  };
  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      this.setState({ personajes: response.data.results });
      console.log(this.state);
    });
  }

  render() {
    const personajes = this.state.personajes.map((personaje) => {
      return (
        <Personaje
          imagen={personaje.image}
          nombre={personaje.name}
          estado={personaje.status}
          especie={personaje.species}
          genero={personaje.gender}
          origen={personaje.origin.name}
        />
      );
    });
    return <div className="main">{personajes}</div>;
  }
}

export default Personajes;
