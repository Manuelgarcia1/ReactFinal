import { useState } from 'react'
import "./style.css"
function ItemCount({stock, initial, onAdd}) {
    const [ count, setCount ] = useState(initial)

    function suma() {
      (count < stock)
        ? setCount(count + 1)
        : alert('Stock superado')
    }
  
    function resta() {
      (count > initial) && setCount(count - 1)
    }
  

  return (
    <>
    <div>
      <div>
        <button className='resta' onClick={resta}>-</button>
        <span className="m-1" >{count}</span>
        <button className='suma' onClick={suma}>+</button>
      </div>
      <button className='button1' onClick={()=>onAdd(count)}>Agregar al Carrito</button>
    </div>
    </>
  )
}
export default ItemCount