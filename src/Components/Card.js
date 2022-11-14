import React from 'react'
import './card.css'

function Card({title, image, alt, onClick}) {
  return (
    <div className='card' id={title} onClick={onClick}>
        <h1 className='title' id={title}>{title}</h1>
        <img className='image' id={title} src={image} alt={alt}></img>
    </div>
  )
}

export default Card