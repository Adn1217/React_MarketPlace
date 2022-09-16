import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

let detail = '../stock.json';

const ItemDetailContainer = ({selectedItem}) => {

    const [detalle, setDetalle] = useState([]);
    const [buscando, setBuscando] = useState();
    const {id} = useParams();

    let selection = selectedItem;

    useEffect( () => {
        async function doFetch(id){
            setTimeout( async () => {
                let mensaje;
                let detailSelected;
                try{
                    let response = await fetch(detail);  
                    let data = await response.json();
                    console.log(data);
                    // let productSelected = data[id]
                    let productSelected = data.find((item) => item.id==id)
                    console.log(productSelected);
                    detailSelected = productSelected.Detalle
                    setDetalle(detailSelected);
                    console.log(detailSelected)
                    console.log(detailSelected.length)
                    mensaje = (detailSelected.length>0) ? "Se ha encontrado detalle de producto.":"No hay datos";
                    return detailSelected;
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
    },[selectedItem]);

    return (
        <div className="container detailContainer">
            {(buscando) ? (
            <div id="Spinner" className="spinner-border text-primary" role="status">
            </div> ):
            <ItemDetail {...detalle} />}
        </div>
    );
}

export default ItemDetailContainer;
