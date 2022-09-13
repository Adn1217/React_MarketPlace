import React, {useEffect, useState} from 'react';
import pcImage from '../assets/images/pcImage.jpg';

const ItemDetail = ({Procesador, RAM, Disco, ROM, Video, VideoRef}) => {

  console.log("Item: ",Procesador, RAM, Disco, ROM, Video, VideoRef)

  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    setItemSelected(Procesador == undefined)
  }, [Procesador])

  return (
    // <div className="card">
    //     <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage1"/></a>
    <>
    {(itemSelected) ?  (
        <div id="Spinner" className="spinner-border text-primary" role="status">
        </div> ) : 
        (
        <div className="card-body">
            <p className="card-text">
                <strong>Procesador:</strong> {Procesador}<br/> 
                <strong>RAM: </strong>{RAM}<br/>
                <strong>Disco: </strong>{Disco}<br/>
                <strong>ROM: </strong>{ROM}<br/>
                <strong>Tarjeta de video: </strong> {Video}
                <strong>Referencia: </strong> {VideoRef}</p>
        </div>
        )
    }
    {/* </div> */}
    </>
  );
}

export default ItemDetail;
