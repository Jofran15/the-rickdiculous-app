import React from "react";

function Personaje(props) {
  const { imagen, nombre, especie, estado, genero, origen } = props;
  return (
    <div>
      <div className='personaje-img'>
        <img src={imagen} alt="imagen"></img>
      </div >
      <div className='personaje'>
      <p>Nombre:{nombre}</p>
      <p>Estado: {estado}</p>
      <p>Especie: {especie}</p>
      <p>Genero: {genero}</p>
      <p>Origen: {origen}</p>
      </div>
      
      
    </div>
  );
}

export default Personaje;
