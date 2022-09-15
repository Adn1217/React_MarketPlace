import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

let detail = 'stock.json';

const ItemDetailContainer = ({selectedItem}) => {

    const [detalle, setDetalle] = useState([]);
    const [buscando, setBuscando] = useState();
    let selection = selectedItem;

    useEffect( () => {
        async function doFetch(detail){
            setTimeout( async () => {
                let mensaje;
                let detailSelected;
                try{
                    let response = await fetch(detail);  
                    let data = await response.json();
                    let detalles = data.map((item) => {
                        let id = item.id;
                        let detalles = item.Detalle;
                        let obj = {id,...detalles};
                        return obj})
                    console.log(JSON.stringify(detalles))
                    // console.log(JSON.stringify(detalles[selection]))
                    // setDetalle(detalles[selection]);
                    detailSelected = detalles.find((item) => item.id===selection)
                    setDetalle(detailSelected);
                    console.log(detailSelected)
                    mensaje = (data.length>0) ? "Se ha encontrado detalle de producto.":"No hay datos";
                    return detalles[selection];
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de detalles de inventario.", mensaje) 
                    setBuscando(false);
                }
            },2000)
        }
        doFetch(detail);
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
