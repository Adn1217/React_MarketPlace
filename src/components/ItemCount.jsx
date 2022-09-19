import React, {useState, useEffect} from 'react';
import sumLogo from '../assets/images/plus.png'
import substractLogo from '../assets/images/minus.png'

const ItemCount = ({stock, quantity, setQuantity, setItemCountOff}) => {

    const [seleccionados, setSeleccionados] = useState(0);
    const [SumarOff, setSumarOff] = useState(true);
    const [RestarOff, setRestarOff] = useState(true);
    const [agregarOff, setAgregarOff] = useState(false);
    const [claseResta, setClaseResta] = useState("col-md-3")
    const [claseSuma, setClaseSuma] = useState("col-md-3")
    
    let Cantidad = stock;

    useEffect (() => {
        setearSumarOff(!(Cantidad !== undefined && Cantidad>0));
        setearRestarOff(true)
    }, [])

    useEffect(() =>{
        setAgregarOff(!((Cantidad>0) && quantity>0))
    }, [quantity])

    function setearSumarOff (flag) {
        setSumarOff(flag);
        setClaseSuma("col-md-3" + (flag ? " opacidad" : ""));
    }

    function setearRestarOff (flag) {
        setRestarOff(flag);
        setClaseResta("col-md-3" + (flag ? " opacidad" : ""));
    }
    
    function CambiarSeleccionados (num) {
        setSeleccionados(seleccionados + num);
        setQuantity(seleccionados + num);
    }

    function Sumar () {
        if(Cantidad > 0 && seleccionados < Cantidad){
            CambiarSeleccionados(1);
            setearRestarOff(false);
            setearSumarOff(seleccionados + 1 == Cantidad ? true : false);
        }else{
            setearSumarOff(true);
        }
    }
     
    function Restar () {
        if(seleccionados > 0){
            CambiarSeleccionados(-1);
            setearSumarOff(false);
            setearRestarOff(seleccionados - 1 == 0 ? true : false);
        }else{
            setearRestarOff(true);
        }
    }

  function onAdd(){
      setItemCountOff(true);
  }

  return (
    <>
        <div className="Item-Quantity">
            <div id="Restar" className={claseResta} onClick={Restar} >
                <button href="#" disabled={RestarOff}><img src={substractLogo} className="Substract-logo" alt="logo"/></button>
            </div>
            <div className="col-md-6">
                <input  id="NumeroAComprar" type="text" className="form-control Item-Number" placeholder="Stock" aria-label="Stock" value = {seleccionados} disabled/>
            </div>
            <div id="Sumar" className={claseSuma} onClick={Sumar}>
                <button href="#" disabled={SumarOff}><img src={sumLogo} className="Sum-logo" alt="logo"/></button>
            </div>
        </div>
        {<div id="Agregar" onClick={onAdd} >
            <button className="btn btn-outline-primary" disabled={agregarOff}>Agregar</button>
        </div>}
    </>
  );
}

export default ItemCount;