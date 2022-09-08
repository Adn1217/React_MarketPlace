import React, {useEffect, useState} from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
let stockDataApi = 'stock.json';

const ItemListContainer = ({tipo}) => {

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
            },1000)
        }
        doFetch(stockDataApi);
        console.log(stock.length>0 ? stock: "No hay datos"); 
    }
    , []);

  return (
    <div className="container imgContainer">
            {stock?.map((item) => 
                <ul key={item.Nombre}>
                    <Item tipo={tipo} {...item}/>
                </ul>
            )}
    </div>
  );
}

export default ItemListContainer;
