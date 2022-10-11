
import React, {useEffect, useState} from 'react';
import Item from './Item';
import {toastMsgPopUpNoTimer} from '../utils/functions.js'
import {collection, getDocs, query, where, getFirestore} from 'firebase/firestore';

const ItemListContainer = ({type, discounts}) => {

    const [stock, setStock] = useState();
    const msg ="No hay datos";

    useEffect( () => {

        async function doFetch(type, discounts){
            const db = getFirestore();
            const productsCollection = collection(db,'stock_MarketPlace');
            const queryString = type === undefined ? 
                (!discounts ? productsCollection : query(productsCollection, where("Descuento", "==", "Sí"))) : (!discounts ? query(productsCollection, where("Tipo", "==", type)): query(productsCollection, where("Tipo", "==", type), where("Descuento", "==", "Sí")));
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
        doFetch(type, discounts);
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
                            <Item {...item} />
                        </ul> )
            )
        )
    }
    </>
  );
}

export default ItemListContainer;
