import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ItemList } from "../ItemList/ItemList";
import { getItemOfCategory, getItems } from '../../service/firestore';

export default function ItemListContainer({ title, description }) {

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams();


  useEffect(() => {

    if (categoryId) {
      getItemOfCategory(categoryId)

        .then((res) => {

          setProductos(res);

        })
        .catch((error) => {

          console.log(error);

        });
    } else {

      getItems()

        .then((res) => {

          setProductos(res);

        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);
  

  return (<>

    
    < ItemList items={productos}/>

    
    </>
  );
};