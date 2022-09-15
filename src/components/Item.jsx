import React from 'react';
import pcImage from '../assets/images/pcImage.jpg';
import bookImage from '../assets/images/bookImage.png';
import ItemCount from './ItemCount';

const Item = (props) => {
    const id = props.id
    const tipo = props.tipo
    const Cantidad = props.Cantidad
    const setSelectedItem = props.setSelectedItem
    let text = []

    // Object.keys(props).map((key) => {
    //     if (key !== "setSelectedItem" && key !== "Detalle"){
    //         let prop = `<strong>${key}:</strong> ${props[key]}<br/>`;
    //         text= {...text,prop}
    //     }
    // })
    console.log(text)
    console.log("Item: ", props);
    const url = `/item/${id}`;
    let image = [];

    if (tipo == "Tecnologia") {
       image = pcImage;
    }else if (tipo == "Libros") {
        image = bookImage;
    }

    function itemSelection(id){
        setSelectedItem(id);
        console.log("Se ha seleccionado el producto ", id);
    }

  return (
    <div className="card">
        <a href={url} onClick={()=>itemSelection(id)}><img src={image} className="card-img-top" alt="pcImage1"/></a >
        <div className="card-body">
            <p className="card-text">
                <strong>Tipo:</strong> {tipo}<br/> 
                <strong>Marca: </strong>{props.Marca}<br/>
                <strong>Nombre: </strong>{props.Nombre}<br/>
                <strong>Año: </strong>{props.Anio}<br/>
                <strong>Precio: </strong> ${props.Precio}</p>
            <ItemCount stock={Cantidad} />
        </div>
    </div>
  );
}

export default Item;
