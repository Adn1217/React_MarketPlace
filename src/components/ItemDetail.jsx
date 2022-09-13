import React, {useEffect, useState} from 'react';

const ItemDetail = ({Procesador, RAM, Disco, ROM, Video, VideoRef}) => {

  console.log("Item: ",Procesador, RAM, Disco, ROM, Video, VideoRef)

  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    setItemSelected(Procesador == undefined)
  }, [Procesador==undefined])

  return (
    <div className="card ">
      {(itemSelected) ? "" : 
          (
          <div className="card-body">
              <p className="card-text">
                  <strong>Procesador:</strong> {Procesador}<br/> 
                  <strong>RAM: </strong>{RAM}<br/>
                  <strong>Disco: </strong>{Disco}<br/>
                  <strong>ROM: </strong>{ROM}<br/>
                  <strong>Tarjeta de video: </strong> {Video}<br/>
                  <strong>Referencia: </strong> {VideoRef}</p>
          </div>
          )
      }
    </div>
  );
}

export default ItemDetail;
