import React from 'react'

const GifItem = ({ title, url, id }) => { //Desestructurando las props

  //console.log({ title, url, id }); //Desestructurando las props


  return (
    <div className="card">
        <img src={url} alt={title}/> 
        <p>{ title }</p>
    </div>
  )
}

export default GifItem








