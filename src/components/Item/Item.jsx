import React from 'react'
import { Link } from 'react-router-dom';
//import img from '../../images/img01.jpg'
import "./style.css"

const Item = ({img, id, name, price}) => {
  const urlDetalle = `/item/${id}`
  return (
    <>
    <div className='producto'>
       <img src={img} width="320px" height="320px" alt="Imagen" />
       <div className='producto__footer'>
          <h1>{name}</h1>
          <p>${price}</p>
          <Link to={urlDetalle} >
            <button>Ver detalle</button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Item