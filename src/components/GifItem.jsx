import React from 'react'
import PropTypes from 'prop-types'; //Esto es para el Test

const GifItem = ({ title, url, id }) => { //Desestructurando las props

  //console.log({ title, url, id }); //Desestructurando las props


  return (
    <div className="card">
        <img src={ url } alt={ title }/> 
        <p>{ title }</p>
    </div>
  )
}


//Esto es para el Test
GifItem.propTypes = { 
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  
}


export default GifItem






/*Tarea
 1. Instalar PropsTypes
 2. Añadir PropTypes 
    a. title obligatorio
    b. url obligatorio
 3. Evaluar el snapshot
*/

