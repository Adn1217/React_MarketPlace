
import React, {useEffect, useContext} from 'react';
import {CartContext} from './CartContext';
import deleteLogo from '../assets/images/delete.png';
import deleteLogoAll from '../assets/images/deleteAll.png';
import {Link} from 'react-router-dom';
import {ConfMsgPopUp, MsgPopUp, toastMsgPopUp, formatoMoneda} from '../utils/functions.js';

const Cart = () => {
  const {cartItems, removeItem, clear} = useContext(CartContext);
  let defItems = [...cartItems];
  let moneda = formatoMoneda('COP');

  let listaCompra = [];
  let total = 0;
  let totalMoneda = moneda.format(total);

  useEffect(() => {
    defItems = [...cartItems];
  }, [cartItems])

  function defRemoveItem (id) {
    toastMsgPopUp('',"Se ha eliminado el producto.",'info',1000);
    removeItem(id);
  }

  async function defRemoveList () {
    let confirmationProm = await ConfMsgPopUp('¿Desea vaciar toda la lista de compra?','');
    if (confirmationProm.isConfirmed){
      clear();
      MsgPopUp('Se ha vaciado el carrito','','info');
      console.log("Se ha vaciado el carrito");
    }
  }

  if (defItems.length == 0) {
    listaCompra = <>No hay productos en su carrito <Link to={'/'} className="nav-link" >Volver al inicio...</Link></>;
  }else{
    listaCompra = [];
    defItems.map((item) => {
      let info = <div id={"itemInCart"+item.id} className="itemInCart col-lg" key={item.Nombre+"item"}>
            <div className="col-10">
              <p>
              <li key={item.Nombre}><strong>Nombre:</strong> {item.Nombre}<br/></li>
              <li key={item.Nombre+item.Precio}><strong>Precio:</strong> ${moneda.format(item.Precio)}<br/></li>
              <li key={item.Nombre+item.seleccionados}><strong>Cantidad:</strong> {item.seleccionados}<br/></li>
              <li key={item.Nombre+"Total"}><strong>Total:</strong> ${moneda.format(item.seleccionados*item.Precio)}<br/></li>
              </p>
            </div> 
            <div className="eliminar col-2" id={"eliminarItem"+item.id} onClick={() =>defRemoveItem(item.id)} >
                <button ><img src={deleteLogo} className="Delete-logo" alt="deleteItemLogo"/></button>
            </div>
        </div>
      listaCompra.push(info)
      total = total + item.seleccionados*item.Precio;
      totalMoneda = moneda.format(total);
    })
  }

  
  return (
    <div >  
        <h1>Su compra ha finalizado</h1>
        <h2>A continuación se encuentra la lista de su compra: </h2>
        <ol className = "card">
            <hr/>
            {listaCompra}
            <hr/>         
        </ol>
        <div id="Total">
          <h3>Total a pagar: ${totalMoneda}</h3>
          {(defItems.length > 0) && (
          <div className="eliminarTodo" id={"eliminarTodo"} onClick={() =>defRemoveList()} >
              <button ><img src={deleteLogoAll} className="Delete-logo" alt="deleteAllLogo"/></button>
          </div>)}
        </div>
    </div>
  );
}

export default Cart;