
import React, {useEffect, useState} from 'react';
import Item from './Item';
let stockDataApi = 'stock.json';

const ItemListContainer = () => {

    const [stock, setStock] = useState([]);

    useEffect( () => {
        async function doFetch(stockDataApi){
            setTimeout( async () => {
                try{
                    let response = await fetch(stockDataApi);  
                    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
                    let data = await response.json();
                    console.log(JSON.stringify(data))
                    setStock(data);
                    return data;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de inventario.") 
                }
            },2000)
        }
        doFetch(stockDataApi);
        console.log(stock.length>0 ? stock: "No hay datos"); 
    }
    , []);

  return (
    <>
    {!(stock.length > 0) ?  (
        <div id="Spinner" class="spinner-border text-primary" role="status">
        </div> ) : 
        (
            stock?.map((item) => 
                <ul key={item.Nombre}>
                    <Item tipo={item.Tipo} {...item}/>
                </ul> )
        )
    }
    </>
  );
}

export default ItemListContainer;
