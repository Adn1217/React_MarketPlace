import React, {useEffect, useState} from 'react';
import pcImage from '../assets/images/pcImage.jpg';
import bookImage from '../assets/images/bookImage.png';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

const Item = (props) => {
    const id = props.id;
    const Tipo = props.Tipo;
    const Cantidad = props.Cantidad;
    const setSelectedItem = props.setSelectedItem;
    let detalles = [];

    const [agregarOff, setAgregarOff] = useState(false);

    useEffect(() =>{
        setAgregarOff(!(Cantidad>0))
    }, [])

    Object.keys(props).map((key) => {
        if (key !== "setSelectedItem" && key !== "Detalle" && key !=="id"){
            let info =<li key={key}><strong>{key}:</strong> {props[key]}<br/></li>;
            if (key === "Precio"){
                info =<li key={key}><strong>{key}:</strong> ${props[key]}<br/></li>;
            }
            detalles.push(info);
        }
    })

    console.log(detalles);
    console.log("Item: ", props);
    const url = `/item/${id}`;
    let image = [];

    if (Tipo == "Tecnologia") {
       image = pcImage;
    }else if (Tipo == "Libros") {
        image = bookImage;
    }

    function itemSelection(id){
        setSelectedItem(id);
        console.log("Se ha seleccionado el producto ", id);
    }

    function Agregar(Cantidad){
        agregarOff = Cantidad > 0 ? true : false;
    }

  return (
    <div className="card">
        <Link to={url} onClick={()=>itemSelection(id)}><img src={image} className="card-img-top" alt="pcImage1"/></Link>
        <div className="card-body">
            <p className="card-text">
                {detalles.map(info => info)}
            </p>
            <ItemCount stock={Cantidad} />
            <div id="Agregar" onClick={Agregar} >
                <button className="btn btn-outline-primary" disabled={agregarOff}>Agregar</button>
            </div>
        </div>
    </div>
  );
}

export default Item;
