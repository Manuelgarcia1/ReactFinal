import React from 'react'
import Item from '../Item/Item'
import "./style.css"

export const ItemList = ({items}) => {
  return (
    <>
    <div className="productos"  >
        {
            items.map((item) =>( 
            <Item key={item.id} {...item}/>
            ) )
            
        };
        
    </div>
    </>
  );
};