
import React, {useEffect, useState} from 'react';
import Item from './Item';

const ItemListContainer = ({setSelectedItem, type}) => {

    const [stock, setStock] = useState();
    const msg ="No hay datos";

    useEffect( () => {
        async function doFetch(stockDataApi){
            setTimeout( async () => {
                let mensaje;
                try{
                    let response = await fetch(stockDataApi);  
                    let data = await response.json();
                    let products = data.filter((item) => item.Tipo === type);
                    type !== undefined && (data = products);
                    products?.length > 0 && (data = products);
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
        let stockDataApi = type == undefined ? 'stock.json' : '../stock.json';
        doFetch(stockDataApi);
    }
    , [type]);


  return (
    <>
    {!(stock !== undefined && stock.length >= 0) ?  (
        <div id="Spinner" className="spinner-border text-primary" role="status">
        </div> ) : 
        (     
           stock?.length == 0 ? <p className="empty">{msg}</p> : 
           (
                stock?.map((item) => 
                        <ul key={item.id} id={item.id} >
                            <Item {...item} setSelectedItem={setSelectedItem} />
                        </ul> )
            )
        )
    }
    </>
  );
}

export default ItemListContainer;
