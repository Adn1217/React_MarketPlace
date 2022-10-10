import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';
import {formatoMoneda} from '../utils/functions.js';


const Item = (props) => {
    const id = props.id;
    let detalles = [];
    let detallesEnOrden={};
    let moneda = formatoMoneda('COP');

    const {setSelectedItemId} = useContext(CartContext);

    detallesEnOrden.Tipo = props.Tipo;
    detallesEnOrden.Nombre = props.Nombre;
    props.Marca ? detallesEnOrden.Marca = props.Marca : detallesEnOrden.Editorial = props.Editorial; 
    detallesEnOrden.Anio = props.Anio;
    detallesEnOrden.Precio = props.Precio;
    detallesEnOrden.Cantidad = props.Cantidad;

    Object.keys(detallesEnOrden).map((key) => {
        let info =<li key={key}><strong>{key}:</strong> {props[key]}<br/></li>;
        if (key === "Precio"){
            info =<li key={key}><strong>{key}:</strong> ${moneda.format(props[key])}<br/></li>;
        }
        detalles.push(info);
    })
    
    const url = `/item/${id}`;

    function itemSelection(id){
        setSelectedItemId(id);
        // console.log("Se ha seleccionado el producto ", id);
    }

  return (
    <div className="card">
        <Link to={url} onClick={()=>itemSelection(id)}><img src={props.ImgName} className="card-img-top" alt="pcImage1"/></Link>
        <div className="card-body">
            <p className="card-text">
                {detalles.map(info => info)}
            </p>
        </div>
    </div>
  );
}

export default Item;
