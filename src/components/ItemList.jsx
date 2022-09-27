
import React, {useEffect, useState} from 'react';
import Item from './Item';
import {toastMsgPopUp} from '../utils/functions.js'
import {collection, getDocs, query, where, getFirestore} from 'firebase/firestore';

const ItemListContainer = ({setSelectedItem, type}) => {

    const [stock, setStock] = useState();
    const msg ="No hay datos";

    useEffect( () => {

        async function doFetch(){
            const db = getFirestore();
            const productsCollection = collection(db,'stock_MarketPlace');
            const queryString = type == undefined ? productsCollection : query(productsCollection, where("Tipo", "==", type));
            let mensaje;
            try {
                const data = await getDocs(queryString);  
                // let productSelected = data.find((item) => item.id==id)
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
            }
        }
        // async function doFetch(stockDataApi){
        //     toastMsgPopUp('',"Cargando información.",'info',2000);
        //     setTimeout( async () => {
        //         let mensaje;
        //         try{
        //             let response = await fetch(stockDataApi);  
        //             let data = await response.json();
        //             let products = data.filter((item) => item.Tipo === type);
        //             type !== undefined && (data = products);
        //             products?.length > 0 && (data = products);
        //             mensaje = (data.length>0) ? `Se han encontrado ${data.length} productos.`:"No hay datos";
        //             setStock(data);
        //             return data;
        //         }catch(error){
        //             console.log("Ha ocurrido el siguiente error: ", error)
        //             return error;
        //         }
        //         finally{
        //             console.log("Se realizó consulta de inventario.", mensaje) 
        //         }
        //     },2000)
        // }
        // let stockDataApi = type == undefined ? 'stock.json' : '../stock.json';
        // doFetch(stockDataApi);
        // let stockDataApi = type == undefined ? 'stock.json' : '../stock.json';
        doFetch();
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
