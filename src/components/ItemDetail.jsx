import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {

  const [itemSelected, setItemSelected] = useState(false);
  const [agregarOff, setAgregarOff] = useState(false);
  const [itemCountOff, setItemCountOff] = useState(false);
  const [quantity, setQuantity] = useState(0);

  let Cantidad = props.Cantidad;
  let detalles = [];

  useEffect(() => {
    setItemSelected(props == undefined)
  }, [props])
  
  useEffect(() =>{
      setAgregarOff(!((Cantidad>0) && quantity>0))
  }, [quantity])

  function onAdd(){
      setItemCountOff(true);
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
            {!itemCountOff && <ItemCount stock={Cantidad} setQuantity={setQuantity} />}
            <div id="Agregar" onClick={onAdd} >
                <button className="btn btn-outline-primary" disabled={agregarOff}>Agregar</button>
            </div>
          </div>
          )
      }
    </div>
  );
}

export default ItemDetail;
