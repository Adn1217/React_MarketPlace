import React, {useEffect, useState} from 'react';

const ItemDetail = (props) => {

  console.log("Detalle: ", props)

  const [itemSelected, setItemSelected] = useState(false);
  let detalles = [];

  useEffect(() => {
    setItemSelected(props == undefined)
  }, [props])

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
          </div>
          )
      }
    </div>
  );
}

export default ItemDetail;
