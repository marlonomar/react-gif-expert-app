import React from 'react'
import 'animate.css'

function CreateImgGrid({id , title , url}) {
  return (
    <div className='card animate__animated animate__bounce animate__delay-2s'>
        <p>{title}</p>
        <img src={url} title={title} id={id} alt={title}/>
    </div>
  )
}

export default CreateImgGrid