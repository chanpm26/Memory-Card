import React from 'react'
import './card.css'

function Card({title, image, alt}) {
  return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <img className='image' src={image} alt={alt}></img>
    </div>
  )
}

export default Card