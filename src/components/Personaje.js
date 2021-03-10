import React from "react";
import '../styles/Personaje.css'

function Personaje(props) {
  const { imagen, nombre, especie, estado, genero, origen } = props;
  return (
    <div className='personaje-card'>
      <div className='personaje-img'>
        <img src={imagen} alt="imagen"></img>
      </div >
      <div className='personaje'>
      <div>
              <p>Nombre:{nombre}</p>
      <p>Estado: {estado}</p>
      <p>Especie: {especie}</p>
      <p>Genero: {genero}</p>
      <p>Origen: {origen}</p>
        </div>
    
      </div>
      
      
    </div>
  );
}

export default Personaje;
