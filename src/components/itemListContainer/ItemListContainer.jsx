import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products"
import { ItemList } from "../ItemList/ItemList";

export default function ItemListContainer({title, description}) {

  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()
  
  useEffect(() =>{
    const getProducts = new Promise((resolve, reject) =>{

      if (categoryId === undefined) {
        resolve(products);
      }else{
        const itemCategory = products.filter(categories => {
          return categories.category === categoryId
        });
        resolve(itemCategory);
      }
        
    });
    getProducts.then((resolve) =>{
      setProductos(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

  

  return (<>

    
    < ItemList items={productos}/>

    
    </>
  );
};