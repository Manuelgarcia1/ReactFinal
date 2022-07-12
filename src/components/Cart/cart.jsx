import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import "./style.css"
import { Form } from '../Form/Form';
const Cart = () => {
  const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

  if (cart.length === 0) {
    return <h1>El carrito esta vacio</h1>

  }

  return (
    <div key={cart.id}>
      {
        cart.map((item) => (
          <div className='carrito__item'>
            <img src={item.img} width = "260px" height= "260px" alt="Imagen" />
            <h1>{item.name}</h1>
            <p >${item.price}</p>
            
            <button class="button" onClick={()=>{removeItem(item.id)}}> 
  <div class="trash">  
     <div class="top">  
       <div class="paper"></div>  
     </div>  
     <div class="box"></div>  
     <div class="check">  
       <svg viewBox="0 0 8 6">  
         <polyline points="1 3.4 2.71428571 5 7 1"></polyline>  
       </svg>  
     </div>  
   </div>  
   <span>Delete Item</span>  
 </button>
            <p>Cantidad: {item.qty}</p>
          </div>
        ))
      }
       <p className="total">Total de la compra: ${totalCost()}</p>

        <button onClick={clearCart}>Vaciar Carrito</button>

        <Form/>
    
    </div>
  )
}

export default Cart