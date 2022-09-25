import React, {useEffect, useState, useContext} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {CartContext} from './CartContext';
import {toastMsgPopUp} from '../utils/functions.js'

let detail = '../stock.json';

const ItemDetailContainer = () => {

    const [selectedItem, setSelectedItem] = useState([]);
    const [buscando, setBuscando] = useState();
    const {id} = useParams();
    const {selectedItemId} = useContext(CartContext);

    let selection = selectedItemId;
    
    useEffect( () => {
        async function doFetch(id){
            toastMsgPopUp('',"Cargando información.",'info',1000);
            setTimeout( async () => {
                let mensaje;
                try{
                    let response = await fetch(detail);  
                    let data = await response.json();
                    let productSelected = data.find((item) => item.id==id)
                    setSelectedItem(productSelected);
                    mensaje = (productSelected.Cantidad>0) ? "Se ha encontrado detalle de producto.":"No hay datos";
                    return productSelected;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de detalles de inventario.", mensaje) 
                    setBuscando(false);
                }
            },1000)
        }
        doFetch(id);
        setBuscando(selection +1 ? true: false);
    },[selectedItemId]);

    return (
        <div className="container detailContainer animate__animated animate__headShakertBeat ">
            {(buscando) ? (
            <div id="Spinner" className="spinner-border text-primary" role="status">
            </div> ):
            <div className="animate__animated animate__headShake">
                <ItemDetail {...selectedItem} />
            </div>}
        </div>
    );
}

export default ItemDetailContainer;
