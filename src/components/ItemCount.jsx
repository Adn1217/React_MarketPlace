import React, {useState, useEffect} from 'react';
import sumLogo from '../assets/images/plus.png'
import substractLogo from '../assets/images/minus.png'

const ItemCount = ({Nombre, Marca, Anio, Precio, Cantidad}) => {
    // let Cantidad = props.Cantidad;
    
    const [seleccionados, setSeleccionados] = useState(0);
    const [SumarOff, setSumarOff] = useState(true);
    const [RestarOff, setRestarOff] = useState(true);
    const [clase, setClase] = useState("col-md-3")

    
    useEffect (() => {
        setSumarOff(!(Cantidad !== undefined && Cantidad>0));
        setearClase(SumarOff);
    }, [Cantidad])

    function setearClase (obj) {
        setClase("col-md-3" + Boolean(obj) * " opacidad");
    }
    
    function CambiarSeleccionados (num) {
        setSeleccionados(seleccionados + num);
    }
    // document.getElemenById("NumeroAComprar").value = seleccionados;

    function Sumar () {
        if(Cantidad > 0 && seleccionados < Cantidad){
            CambiarSeleccionados(1);
            setRestarOff(false);
            setSumarOff(seleccionados + 1 == Cantidad ? true : false);
            setClase(SumarOff);
            setClase(RestarOff);
        }else{
            setSumarOff(true);
            setClase(SumarOff);
        }
    }
     
    function Restar () {
        console.log(seleccionados)
        if(seleccionados > 0){
            CambiarSeleccionados(-1);
            setSumarOff(false);
            setClase(SumarOff);
            setRestarOff(seleccionados - 1 == 0 ? true : false);
            setClase(RestarOff);
        }else{
            setRestarOff(true);
            setClase(RestarOff);
        }
    }
  return (
    <div className="Item-Quantity">
        <div id="Sumar" className={clase} onClick={Restar} >
            <button href="#" disabled={RestarOff}><img src={substractLogo} className="Substract-logo" alt="logo"/></button>
        </div>
        <div className="col-md-6">
            <input  id="NumeroAComprar" type="text" className="form-control Item-Number" placeholder="Stock" aria-label="Stock" value = {seleccionados} disabled/>
        </div>
        <div id="Restar" className={clase} onClick={Sumar}>
            <button href="#" disabled={SumarOff}><img src={sumLogo} className="Sum-logo" alt="logo"/></button>
        </div>
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
    </div>
  );
}

export default ItemCount;