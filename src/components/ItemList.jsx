
import React, {useEffect, useState} from 'react';
import Item from './Item';
let stockDataApi = 'stock.json';

const ItemListContainer = ({setSelectedItem}) => {

    const [stock, setStock] = useState([]);

    useEffect( () => {
        async function doFetch(stockDataApi){
            setTimeout( async () => {
                let mensaje;
                try{
                    let response = await fetch(stockDataApi);  
                    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
                    let data = await response.json();
                    console.log("Productos: ",JSON.stringify(data))
                    mensaje = (data.length>0) ? `Se han encontrado ${data.length} productos.`:"No hay datos";
                    setStock(data);
                    return data;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de inventario.", mensaje) 
                }
            },2000)
        }
        doFetch(stockDataApi);
    }
    , []);

    function itemSelection(id){
        setSelectedItem(id);
        console.log("Se ha seleccionado el producto ", id);
    }

  return (
    <>
    {!(stock.length > 0) ?  (
        <div id="Spinner" className="spinner-border text-primary" role="status">
        </div> ) : 
        (
            stock?.map((item) => 
                <ul key={item.id} id={item.id} onClick={()=>itemSelection(item.id)}>
                    <Item tipo={item.Tipo} {...item} />
                </ul> )
        )
    }
    </>
  );
}

export default ItemListContainer;
