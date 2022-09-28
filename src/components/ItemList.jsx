
import React, {useEffect, useState} from 'react';
import Item from './Item';
import {toastMsgPopUpNoTimer} from '../utils/functions.js'
import {collection, getDocs, query, where, getFirestore} from 'firebase/firestore';

const ItemListContainer = ({setSelectedItem, type}) => {

    const [stock, setStock] = useState();
    const msg ="No hay datos";

    useEffect( () => {

        async function doFetch(type){
            const db = getFirestore();
            const productsCollection = collection(db,'stock_MarketPlace');
            const queryString = type === undefined ? productsCollection : query(productsCollection, where("Tipo", "==", type));
            let mensaje;
            let toast = toastMsgPopUpNoTimer('',"Cargando productos",'info')
            try {
                const data = await getDocs(queryString);  
                let products = data.docs.map( (doc) => ({id: doc.id, ...doc.data()}));
                console.log(products);
                mensaje = (products?.length>0) ? `Se han encontrado ${products.length} productos.`:"No hay datos";
                setStock(products);
                return products;
            }catch(error){
                console.log("Ha ocurrido el siguiente error: ", error)
                return error;
            }finally{
                console.log("Se realizó la consulta de inventario.", mensaje);
                toast.close();   
            }
        }
        doFetch(type);
    }
    , [type]);


  return (
    <>
    {!(stock !== undefined && stock.length >= 0) ?  (
        <div id="Spinner" className="spinner-border text-primary" role="status">
        </div> ) : 
        (     
           stock?.length === 0 ? <p className="empty">{msg}</p> : 
           (
                stock?.map((item) => 
                        <ul className="animate__animated animate__backInUp" key={item.id} id={item.id} >
                            <Item {...item} setSelectedItem={setSelectedItem} />
                        </ul> )
            )
        )
    }
    </>
  );
}

export default ItemListContainer;
