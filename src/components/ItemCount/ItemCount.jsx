import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [ count, setCount ] = useState(initial)

    function suma() {
      if (count < stock) {
        setCount(count + 1)
      }else{
        alert('Stock superado')
      }
    }

    function resta() {
      if (count > initial) {
        setCount(count - 1)
      }
    }

  return (
    <>
    <div>
      <div>
      <button onClick={resta}>-</button>
        <span className="m-1" >{count}</span>
        <button onClick={suma}>+</button>
      </div>
    
        <div>
        <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        </div>

    </div>
    </>
  )
}
export default ItemCount