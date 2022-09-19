import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';

const ItemDetail = (props) => {

  const [itemSelected, setItemSelected] = useState(false);
  const [itemCountOff, setItemCountOff] = useState(false);
  const [quantity, setQuantity] = useState(0);

  let Cantidad = props.Cantidad;
  let detalles = [];

  useEffect(() => {
    setItemSelected(props == undefined)
  }, [props])
  
  function endPurchase(){

  }

  Object.keys(props).map((key) => {
          let info =<li key={key}><strong>{key}:</strong> {props[key]}<br/></li>;
          detalles.push(info);
      })

  return (
    <div className="card ">
      {(itemSelected) ? "" : 
          (
          <div className="card-body">
              <p className="card-text">
                {detalles.map((item) => item)}
              </p>
            {!itemCountOff ? (
              <ItemCount stock={Cantidad} quantity={quantity} setQuantity={setQuantity} itemCountOff= {itemCountOff} setItemCountOff={setItemCountOff} /> ): (
                <div id="Agregar" onClick={endPurchase} >
                  <Link to={'/cart'} ><button className="btn btn-outline-primary" >Finalizar</button></Link>
                </div>)
            }
          </div>
          )
      }
    </div>
  );
}

export default ItemDetail;
