import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

let detail = 'stock.json';

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([]);

    useEffect( () => {
        async function doFetch(detail){
            setTimeout( async () => {
                try{
                    let response = await fetch(detail);  
                    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
                    let data = await response.json();
                    let detalles = data.map((item) => item.Detalle)
                    console.log(JSON.stringify(detalles))
                    setDetalle(detalles[0]);
                    return detalles[0];
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de detalles de inventario.") 
                }
            },2000)
        }
        doFetch(detail);
        console.log(detalle.length>0 ? detalle: "No hay datos"); 
    }
    , []);

  return (
    <div className="container imgContainer">
        <ItemDetail {...detalle} />
    </div>
  );
}

export default ItemDetailContainer;
