import React from 'react';
import '../hojas-de-estilo.css/testimonios.css';


function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/Imagen ${props.imagen}.jpg`)}
      alt='Foto 1 para testimonio'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;