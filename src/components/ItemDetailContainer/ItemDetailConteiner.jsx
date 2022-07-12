import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getAnItem} from '../../service/firestore';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({title}) {

  const [producto, setProducto] = useState({})
  const { id } = useParams();
  useEffect(() => {
    
    getAnItem(id)
    .then((resolve) => {
      setProducto(resolve);
    })
  }, [id]);


  
  return (<>
    
    <ItemDetail item={producto} />
    </>
  );
};