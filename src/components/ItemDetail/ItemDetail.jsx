import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

export const ItemDetail = ({item}) => {
  const [cant, setCant] = useState(0);

  const onAdd = (cantidad) =>{

    setCant(cantidad);
    
  }
  return (
    <>
    <div className="product-details">
        <img src={item.img} width="300px" height="300px" alt="Imagen" />
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.description}</p>
        { (cant === 0)
          ?<ItemCount onAdd={onAdd} stock={12} initial={1} />
          :<Link to="/cart">Ir al Carrito</Link>
        }
        
    </div>
    </>
  )
}