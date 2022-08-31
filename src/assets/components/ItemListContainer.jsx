import React from 'react';
import pcImage from '../images/pcImage.jpg';

const ItemListContainer = () => {
  return (
    <div className="container imgContainer">
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage1"/></a>
            <div className="card-body">
                <p className="card-text"><strong>Nombre: </strong>Computador 1<br/><strong>Marca: </strong>ACER<br/> <strong>Año: </strong>2021<br/><strong>Precio: </strong> $1'350.000 COP</p>
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage2"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>Computador 2<br/><strong>Marca: </strong>ASUS<br/> <strong>Año: </strong>2020<br/><strong>Precio: </strong> $1'100.000 COP</p>
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage3"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>Computador 3<br/><strong>Marca: </strong>LENOVO<br/> <strong>Año: </strong>20<br/><strong>Precio: </strong> $950.000 COP</p>
            </div>
        </div>
    </div>
  );
}

export default ItemListContainer;
