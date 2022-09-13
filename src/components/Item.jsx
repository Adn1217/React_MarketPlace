import React, {useEffect, useState} from 'react';
import pcImage from '../assets/images/pcImage.jpg';
import ItemCount from './ItemCount';

const Item = ({tipo, Nombre, Anio, Marca, Precio, Cantidad}) => {

    console.log("Item: ",tipo, Nombre, Anio, Marca, Precio, Cantidad)

  return (
    <div className="card">
        <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage1"/></a >
        <div className="card-body">
            <p className="card-text">
                <strong>Tipo:</strong> {tipo}<br/> 
                <strong>Marca: </strong>{Marca}<br/>
                <strong>Nombre: </strong>{Nombre}<br/>
                <strong>Año: </strong>{Anio}<br/>
                <strong>Precio: </strong> ${Precio}</p>
            <ItemCount stock={Cantidad} />
        </div>
    </div>
  );
}

export default Item;
